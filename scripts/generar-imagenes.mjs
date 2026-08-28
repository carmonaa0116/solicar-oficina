#!/usr/bin/env node
/*
 * -----------------------------------------------------------------------------
 * GENERADOR DE IMÁGENES DE DESARROLLO (Unsplash)
 * -----------------------------------------------------------------------------
 * Sustituye, únicamente como contenido de desarrollo, las rutas placeholder
 * de los campos `imagen` / `galeria` de src/data/productos.js, proyectos.js
 * y blog.js por fotografías reales de https://unsplash.com relacionadas con
 * el contenido de cada ficha.
 *
 * Uso:
 *   npm run images:fetch
 *
 * Requiere una Access Key de la API de Unsplash en VITE_UNSPLASH_ACCESS_KEY
 * (archivo .env en la raíz del proyecto, ver .env.example).
 *
 * Estrategia de peticiones (plan Demo de Unsplash: 50 peticiones/hora):
 * en vez de una búsqueda por imagen, se agrupan los productos por categoría,
 * los proyectos por sector y los artículos de blog por categoría editorial,
 * y se hace 1-2 búsquedas por GRUPO (no por ficha). Cada búsqueda devuelve
 * varios resultados (`per_page`), de los que se reparte una foto distinta a
 * cada ficha del grupo, evitando repetir la misma fotografía. Con ~4-7
 * grupos por archivo el total ronda 30 peticiones, muy por debajo del
 * límite, y entre cada petición se espera `RATE_DELAY_MS` para no ráfagar.
 *
 * Los resultados se escriben como texto literal (URLs fijas) directamente en
 * los archivos de src/data/, dentro de bloques delimitados por los
 * comentarios `// unsplash:auto:start` / `// unsplash:auto:end`, lo que hace
 * el script idempotente: relanzarlo (`npm run images:fetch`) sustituye esos
 * bloques en lugar de duplicarlos.
 * -----------------------------------------------------------------------------
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// --- Carga de .env --------------------------------------------------------
// process.loadEnvFile está disponible desde Node 20.6; si el runtime no lo
// soporta, se recurre a un parseo manual mínimo del archivo .env.
try {
  process.loadEnvFile(path.join(RAIZ, '.env'));
} catch (error) {
  if (error?.code === 'ENOENT') {
    console.error('✖ No se encontró el archivo .env en la raíz del proyecto. Copia .env.example a .env y añade tu Access Key.');
    process.exit(1);
  }
  if (typeof process.loadEnvFile !== 'function') {
    try {
      const contenido = await readFile(path.join(RAIZ, '.env'), 'utf8');
      for (const linea of contenido.split(/\r?\n/)) {
        const match = /^\s*([\w.-]+)\s*=\s*(.*)\s*$/.exec(linea);
        if (!match) continue;
        const [, clave, valorBruto] = match;
        const valor = valorBruto.replace(/^["']|["']$/g, '');
        if (!(clave in process.env)) process.env[clave] = valor;
      }
    } catch {
      console.error('✖ No se pudo leer el archivo .env.');
      process.exit(1);
    }
  }
}

const ACCESS_KEY = process.env.VITE_UNSPLASH_ACCESS_KEY;
if (!ACCESS_KEY) {
  console.error('✖ Falta VITE_UNSPLASH_ACCESS_KEY en .env. Consulta .env.example.');
  process.exit(1);
}

// --- Utilidades de red -----------------------------------------------------

const RATE_DELAY_MS = 1500; // pausa entre peticiones para no ráfagar contra la API
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let peticionesRealizadas = 0;
let limiteAlcanzado = false;

/** Busca fotos en Unsplash y devuelve el array `results` (o [] si falla). */
async function buscarFotos(query, perPage = 10) {
  if (limiteAlcanzado) return [];
  if (peticionesRealizadas > 0) await sleep(RATE_DELAY_MS);
  peticionesRealizadas += 1;

  const url = new URL('https://api.unsplash.com/search/photos');
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('orientation', 'squarish');

  let res;
  try {
    res = await fetch(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } });
  } catch (error) {
    console.warn(`  ⚠ Error de red buscando "${query}": ${error.message}`);
    return [];
  }

  const restante = res.headers.get('x-ratelimit-remaining');
  if (restante !== null && Number(restante) <= 3) {
    console.warn(`  ⚠ Quedan ${restante} peticiones Unsplash en esta hora; no se harán más búsquedas en esta ejecución.`);
    limiteAlcanzado = true;
  }

  if (!res.ok) {
    const cuerpo = await res.text().catch(() => '');
    console.warn(`  ⚠ Unsplash respondió ${res.status} para "${query}": ${cuerpo.slice(0, 200)}`);
    if (res.status === 401) {
      console.error('✖ Access Key inválida. Revisa VITE_UNSPLASH_ACCESS_KEY en .env.');
      process.exit(1);
    }
    return [];
  }

  const datos = await res.json();
  console.log(`  · "${query}" → ${datos.results?.length ?? 0} resultados`);
  return datos.results ?? [];
}

// --- Reparto de fotos sin repetir -------------------------------------------

/** ids de foto ya asignados a alguna ficha, para no repetir la misma imagen. */
const fotosUsadas = new Set();

/** Devuelve una función que reparte fotos de `pool` evitando repetir id. */
function crearAsignador(pool) {
  let cursor = 0;
  return function siguienteFoto() {
    if (!pool.length) return null;
    for (let intento = 0; intento < pool.length; intento += 1) {
      const foto = pool[(cursor + intento) % pool.length];
      if (!fotosUsadas.has(foto.id)) {
        cursor = (cursor + intento + 1) % pool.length;
        fotosUsadas.add(foto.id);
        return foto;
      }
    }
    // Pool agotado (menos fotos que fichas en el grupo): se reutiliza en orden.
    const foto = pool[cursor % pool.length];
    cursor += 1;
    return foto;
  };
}

// --- Edición de los archivos fuente -----------------------------------------

const MARCADOR_INICIO = '// unsplash:auto:start';
const MARCADOR_FIN = '// unsplash:auto:end';

/**
 * Inserta o sustituye, justo después de la línea `slug: '<slug>',` del
 * archivo, un bloque delimitado por los marcadores unsplash:auto con las
 * líneas de `lineasBloque`. Si el bloque ya existe (relanzamientos del
 * script) se reemplaza in situ; si no, se inserta.
 */
function upsertBloque(texto, slug, indent, lineasBloque) {
  const anclaje = `slug: '${slug}',`;
  const idxAnclaje = texto.indexOf(anclaje);
  if (idxAnclaje === -1) {
    console.warn(`  ⚠ No se encontró "${anclaje}" en el archivo; se omite.`);
    return texto;
  }
  const finLineaAnclaje = texto.indexOf('\n', idxAnclaje);
  const inicioInsercion = finLineaAnclaje === -1 ? texto.length : finLineaAnclaje + 1;

  // ¿Ya hay un bloque unsplash:auto justo a continuación? Si es así, se sustituye.
  let finBorrado = inicioInsercion;
  const posibleInicioMarcador = texto.indexOf('\n', inicioInsercion) >= 0 ? texto.slice(inicioInsercion, texto.indexOf('\n', inicioInsercion)) : '';
  if (posibleInicioMarcador.trim() === MARCADOR_INICIO) {
    const idxMarcadorFin = texto.indexOf(MARCADOR_FIN, inicioInsercion);
    if (idxMarcadorFin !== -1) {
      const finLineaMarcadorFin = texto.indexOf('\n', idxMarcadorFin);
      finBorrado = finLineaMarcadorFin === -1 ? texto.length : finLineaMarcadorFin + 1;
    }
  }

  const bloque = [MARCADOR_INICIO, ...lineasBloque, MARCADOR_FIN].map((linea) => `${indent}${linea}`).join('\n') + '\n';

  return texto.slice(0, inicioInsercion) + bloque + texto.slice(finBorrado);
}

/** Escapa comillas simples y backslashes para incrustar texto en un literal '...'. */
function comillado(texto) {
  return texto.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// --- Términos de búsqueda ---------------------------------------------------

const QUERY_POR_CATEGORIA_PRODUCTO = {
  silleria: { principal: 'ergonomic office chair', variantes: ['office chair detail', 'office chair workspace'] },
  mesas: { principal: 'office desk workspace', variantes: ['modern office desk', 'office desk setup detail'] },
  archivo: { principal: 'filing cabinet office', variantes: ['office storage shelves', 'office cabinet drawers'] },
  recepcion: { principal: 'office reception waiting area', variantes: ['office reception desk', 'office waiting room seating'] },
};
const QUERY_PRODUCTO_POR_DEFECTO = { principal: 'office furniture', variantes: ['office furniture detail'] };

const QUERY_POR_SECTOR_PROYECTO = {
  corporativo: { principal: 'modern corporate office interior', variante: 'open office workspace' },
  administracion: { principal: 'government office interior', variante: 'public administration office' },
  pyme: { principal: 'small business office interior', variante: 'startup office workspace' },
  educativo: { principal: 'school office interior', variante: 'university office workspace' },
};
const QUERY_PROYECTO_POR_DEFECTO = { principal: 'modern office interior', variante: 'office workspace interior' };

const QUERY_POR_CATEGORIA_BLOG = {
  'Normativa y certificaciones': 'office regulations paperwork',
  Ergonomía: 'ergonomic office workspace',
  'Tendencias y diseño': 'modern office interior design',
  'Administración pública': 'government office building',
  'Pymes y autónomos': 'small office workspace',
  'Casos de éxito': 'open plan office workspace',
  'Novedades de producto': 'office desk product',
};
const QUERY_BLOG_POR_DEFECTO = 'office workspace';

function agrupar(lista, clave) {
  const grupos = new Map();
  for (const item of lista) {
    const k = clave(item);
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(item);
  }
  return grupos;
}

// --- Productos ---------------------------------------------------------------

async function procesarProductos() {
  console.log('\n▸ Productos (src/data/productos.js)');
  const rutaArchivo = path.join(RAIZ, 'src/data/productos.js');
  let texto = await readFile(rutaArchivo, 'utf8');

  const { default: productos } = await import(pathToFileUrl(rutaArchivo));
  const grupos = agrupar(productos, (p) => p.categoria);

  for (const [categoriaId, items] of grupos) {
    if (limiteAlcanzado) {
      console.log(`  · Categoría "${categoriaId}": omitida (límite de peticiones alcanzado).`);
      continue;
    }
    const query = QUERY_POR_CATEGORIA_PRODUCTO[categoriaId] ?? QUERY_PRODUCTO_POR_DEFECTO;
    console.log(`  Categoría "${categoriaId}" (${items.length} productos):`);

    const fotosPrincipales = await buscarFotos(query.principal, 10);
    const fotosVariantes = [];
    for (const variante of query.variantes) {
      fotosVariantes.push(...(await buscarFotos(variante, 10)));
    }

    // El asignador principal prioriza fotosPrincipales, pero si la búsqueda
    // principal no dio resultados (o da menos que fichas en el grupo) recurre
    // también a las variantes en vez de dejar la ficha sin imagen.
    const asignadorPrincipal = crearAsignador([...fotosPrincipales, ...fotosVariantes]);
    const asignadorGaleria = crearAsignador([...fotosVariantes, ...fotosPrincipales]);

    for (const producto of items) {
      const fotoPrincipal = asignadorPrincipal();
      if (!fotoPrincipal) {
        console.warn(`  ⚠ Sin resultados para "${producto.nombre}"; se conserva el placeholder.`);
        continue;
      }

      const fotosGaleria = [asignadorGaleria(), asignadorGaleria(), asignadorGaleria()].filter(Boolean);
      const alts = [
        `${producto.nombre} en vista frontal sobre fondo neutro`,
        `${producto.nombre} en perspectiva de tres cuartos`,
        `Detalle de los materiales y acabados de ${producto.nombre}`,
      ];

      const lineasGaleria = fotosGaleria.map(
        (foto, i) => `{ src: '${comillado(foto.urls.small)}', alt: '${comillado(alts[i] ?? `${producto.nombre}, imagen adicional`)}' },`,
      );

      const bloque = [
        `imagen: '${comillado(fotoPrincipal.urls.regular)}',`,
        'galeria: [',
        ...lineasGaleria.map((l) => `  ${l}`),
        '],',
      ];

      texto = upsertBloque(texto, producto.slug, '    ', bloque);
    }
  }

  await writeFile(rutaArchivo, texto, 'utf8');
  console.log('  ✓ src/data/productos.js actualizado.');
}

// --- Proyectos -----------------------------------------------------------------

async function procesarProyectos() {
  console.log('\n▸ Proyectos (src/data/proyectos.js)');
  const rutaArchivo = path.join(RAIZ, 'src/data/proyectos.js');
  let texto = await readFile(rutaArchivo, 'utf8');

  const { default: proyectos } = await import(pathToFileUrl(rutaArchivo));
  const grupos = agrupar(proyectos, (p) => p.sectorId);

  for (const [sectorId, items] of grupos) {
    if (limiteAlcanzado) {
      console.log(`  · Sector "${sectorId}": omitido (límite de peticiones alcanzado).`);
      continue;
    }
    const query = QUERY_POR_SECTOR_PROYECTO[sectorId] ?? QUERY_PROYECTO_POR_DEFECTO;
    console.log(`  Sector "${sectorId}" (${items.length} proyectos):`);

    const fotosPrincipales = await buscarFotos(query.principal, 10);
    const fotosVariante = await buscarFotos(query.variante, 10);

    const asignadorPrincipal = crearAsignador([...fotosPrincipales, ...fotosVariante]);
    const asignadorGaleria = crearAsignador([...fotosVariante, ...fotosPrincipales]);

    for (const proyecto of items) {
      const fotoPrincipal = asignadorPrincipal();
      if (!fotoPrincipal) {
        console.warn(`  ⚠ Sin resultados para "${proyecto.cliente}"; se conserva el placeholder.`);
        continue;
      }

      const fotosGaleria = [asignadorGaleria(), asignadorGaleria(), asignadorGaleria(), asignadorGaleria()].filter(Boolean);
      const alts = [
        `Vista general de la instalación en ${proyecto.cliente}`,
        `Zona de trabajo instalada en ${proyecto.cliente}`,
        `Detalle de acabados del mobiliario en ${proyecto.cliente}`,
        `Zona de espera de ${proyecto.cliente}`,
      ];

      const lineasGaleria = fotosGaleria.map(
        (foto, i) => `{ src: '${comillado(foto.urls.small)}', alt: '${comillado(alts[i] ?? `${proyecto.cliente}, imagen adicional`)}' },`,
      );

      const bloque = [
        `imagen: '${comillado(fotoPrincipal.urls.regular)}',`,
        'galeria: [',
        ...lineasGaleria.map((l) => `  ${l}`),
        '],',
      ];

      texto = upsertBloque(texto, proyecto.slug, '    ', bloque);
    }
  }

  await writeFile(rutaArchivo, texto, 'utf8');
  console.log('  ✓ src/data/proyectos.js actualizado.');
}

// --- Blog --------------------------------------------------------------------

async function procesarBlog() {
  console.log('\n▸ Blog (src/data/blog.js)');
  const rutaArchivo = path.join(RAIZ, 'src/data/blog.js');
  let texto = await readFile(rutaArchivo, 'utf8');

  const { default: posts } = await import(pathToFileUrl(rutaArchivo));
  const grupos = agrupar(posts, (p) => p.categoria);

  for (const [categoria, items] of grupos) {
    if (limiteAlcanzado) {
      console.log(`  · Categoría "${categoria}": omitida (límite de peticiones alcanzado).`);
      continue;
    }
    const query = QUERY_POR_CATEGORIA_BLOG[categoria] ?? QUERY_BLOG_POR_DEFECTO;
    console.log(`  Categoría "${categoria}" (${items.length} artículos):`);

    const fotos = await buscarFotos(query, 10);
    const asignador = crearAsignador(fotos);

    for (const post of items) {
      const foto = asignador();
      if (!foto) {
        console.warn(`  ⚠ Sin resultados para "${post.titulo}"; se conserva el placeholder.`);
        continue;
      }

      const bloque = [`imagen: '${comillado(foto.urls.regular)}',`];
      texto = upsertBloque(texto, post.slug, '    ', bloque);
    }
  }

  await writeFile(rutaArchivo, texto, 'utf8');
  console.log('  ✓ src/data/blog.js actualizado.');
}

function pathToFileUrl(rutaAbsoluta) {
  // Se añade un query param con timestamp para evitar la caché de módulos de
  // Node si el script se ejecuta más de una vez en el mismo proceso (no es
  // el caso aquí, pero mantiene la función segura ante reentradas futuras).
  return `${new URL(`file://${rutaAbsoluta.replace(/\\/g, '/')}`).href}?t=${Date.now()}`;
}

// --- Main ----------------------------------------------------------------------

async function main() {
  console.log('Generando imágenes de desarrollo desde Unsplash…');
  console.log(`(plan Demo: 50 peticiones/hora · pausa de ${RATE_DELAY_MS} ms entre peticiones)`);

  await procesarProductos();
  await procesarProyectos();
  await procesarBlog();

  console.log(`\n✓ Hecho. ${peticionesRealizadas} peticiones a la API de Unsplash.`);
  if (limiteAlcanzado) {
    console.log('  Algunas fichas se omitieron por el límite de peticiones; vuelve a lanzar "npm run images:fetch" pasado un rato para completarlas.');
  }
  console.log('  Recuerda: son imágenes de desarrollo bajo licencia Unsplash, no fotografía de catálogo real.');
}

main().catch((error) => {
  console.error('✖ Error inesperado:', error);
  process.exit(1);
});
