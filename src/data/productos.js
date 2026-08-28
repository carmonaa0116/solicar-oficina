/*
 * -----------------------------------------------------------------------------
 * CATÁLOGO DE MOBILIARIO DE OFICINA — DATOS DE EJEMPLO
 * -----------------------------------------------------------------------------
 * Contenido mock realista para maquetar el microsite sin backend.
 * El catálogo real de Solicar cuenta con ~204 referencias de oficina; aquí se
 * incluye una muestra representativa de las 4 familias.
 *
 * TODO: sustituir por el volcado real del ERP / catálogo de Solicar.
 * TODO: sustituir las imágenes generadas por fotografía de producto real.
 *
 * ⚠️ Los campos `imagen` y `galeria` de los productos de abajo (bloques
 * `// unsplash:auto:start` … `// unsplash:auto:end`) son fotografías de
 * banco de Unsplash, no del catálogo real de Solicar. Se generan con
 * `npm run images:fetch` (scripts/generar-imagenes.mjs) únicamente como
 * contenido de desarrollo y deben sustituirse por fotografía de producto
 * propia antes de pasar a producción.
 * -----------------------------------------------------------------------------
 */

/** Familias de producto (usadas por la sub-nav, los filtros y los breadcrumbs). */
export const categorias = [
  {
    id: 'silleria',
    nombre: 'Sillería',
    slug: 'silleria',
    descripcion:
      'Sillas operativas, ergonómicas, de dirección, confidente y apilables conformes a UNE-EN 1335.',
  },
  {
    id: 'mesas',
    nombre: 'Mesas y escritorios',
    slug: 'mesas-y-escritorios',
    descripcion:
      'Línea WORK: mesas operativas, bench, escritorios regulables en altura y mesas de reunión.',
  },
  {
    id: 'archivo',
    nombre: 'Armarios y archivo',
    slug: 'armarios-y-archivo',
    descripcion:
      'Sistema modular Modul: armarios altos y bajos, archivadores metálicos y estanterías abiertas.',
  },
  {
    id: 'recepcion',
    nombre: 'Recepción y espera',
    slug: 'recepcion-y-espera',
    descripcion:
      'Mostradores de recepción, bancadas y sofás de sala de espera para oficinas y edificios públicos.',
  },
];

/** Sectores de destino, para el filtro cruzado con el catálogo escolar. */
export const sectores = [
  { id: 'pyme', nombre: 'Pyme / Autónomo' },
  { id: 'corporativo', nombre: 'Corporativo' },
  { id: 'administracion', nombre: 'Administración pública' },
  { id: 'educativo', nombre: 'Centro educativo' },
];

/** Acabados disponibles. El `hex` alimenta los círculos del selector de color. */
export const acabados = [
  { id: 'blanco', nombre: 'Blanco', hex: '#F7F7F5' },
  { id: 'grafito', nombre: 'Gris grafito', hex: '#3A3F44' },
  { id: 'negro', nombre: 'Negro', hex: '#161719' },
  { id: 'roble', nombre: 'Roble natural', hex: '#C9A87C' },
  { id: 'nogal', nombre: 'Nogal', hex: '#6B4A32' },
  { id: 'azul', nombre: 'Azul corporativo', hex: '#1B4F72' },
  { id: 'arena', nombre: 'Arena', hex: '#D8D2C6' },
  { id: 'oliva', nombre: 'Verde oliva', hex: '#5C6B4E' },
];

export const acabadosPorId = Object.fromEntries(acabados.map((a) => [a.id, a]));
export const categoriasPorId = Object.fromEntries(categorias.map((c) => [c.id, c]));
export const sectoresPorId = Object.fromEntries(sectores.map((s) => [s.id, s]));

/* Carpeta de public/images/productos/ en la que vive cada categoría. */
const CARPETA_POR_CATEGORIA = {
  silleria: 'sillas',
  mesas: 'mesas',
  archivo: 'armarios',
  recepcion: 'recepcion',
};

/** Ruta esperada de un archivo de imagen de producto (portada o galería). */
function rutaImagenProducto(categoriaId, slug, sufijo = '') {
  const carpeta = CARPETA_POR_CATEGORIA[categoriaId] ?? 'sillas';
  return `/images/productos/${carpeta}/${slug}${sufijo}.jpg`;
}

const galeria = (categoriaId, slug, nombre) => [
  { src: rutaImagenProducto(categoriaId, slug, '-1'), alt: `${nombre} en vista frontal sobre fondo neutro` },
  { src: rutaImagenProducto(categoriaId, slug, '-2'), alt: `${nombre} en perspectiva de tres cuartos` },
  { src: rutaImagenProducto(categoriaId, slug, '-3'), alt: `Detalle de los materiales y acabados de ${nombre}` },
  { src: rutaImagenProducto(categoriaId, slug, '-4'), alt: `${nombre} instalado en un espacio de oficina real` },
];

const descargasBase = (nombre) => [
  { nombre: `Ficha técnica ${nombre}`, tipo: 'PDF', peso: '480 KB', url: '#' },
  { nombre: 'Certificado de conformidad UNE-EN', tipo: 'PDF', peso: '210 KB', url: '#' },
  { nombre: 'Declaración REACH de materiales', tipo: 'PDF', peso: '155 KB', url: '#' },
  { nombre: 'Bloque CAD 2D / 3D', tipo: 'DWG · 3DS', peso: '2,1 MB', url: '#' },
  { nombre: 'Garantía comercial (5 años)', tipo: 'PDF', peso: '98 KB', url: '#' },
];

export const productos = [
  /* ---------------------------------------------------------------- SILLERÍA */
  {
    slug: 'ergo-pro-300',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1764743111075-fb988af9ed75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1785706313842-541f09684d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Pro 300 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1580744489713-8ec46803396e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Pro 300 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1580744495289-ad224d2c437e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Ergo Pro 300' },
    ],
    // unsplash:auto:end
    linea: 'Ergo Pro',
    modelo: '300',
    nombre: 'Ergo Pro 300',
    referencia: 'SO-SI-300',
    categoria: 'silleria',
    sectores: ['corporativo', 'administracion', 'pyme'],
    acabados: ['negro', 'grafito', 'azul', 'oliva'],
    badge: 'UNE-EN',
    destacado: true,
    resumen:
      'Silla operativa de altas prestaciones con respaldo de malla tensada, soporte lumbar regulable y mecanismo sincro de 5 posiciones.',
    descripcion:
      'La Ergo Pro 300 es la referencia de sillería ergonómica de Solicar Oficina para puestos de trabajo de jornada completa. Su respaldo de malla elastomérica de alta densidad mantiene la transpirabilidad durante toda la jornada, mientras que el soporte lumbar de profundidad regulable y el mecanismo sincronizado con bloqueo en cinco posiciones permiten adaptar la silla a usuarios de entre 1,55 y 1,95 m. Los brazos 4D y el asiento de profundidad deslizante completan un puesto conforme al Real Decreto 488/1997 sobre pantallas de visualización.',
    normativa: ['UNE-EN 1335-1/2/3 (tipo A)', 'UNE-EN 1728', 'REACH — Reglamento (CE) 1907/2006'],
    especificaciones: [
      { label: 'Altura total', valor: '1.080 – 1.220 mm' },
      { label: 'Altura de asiento', valor: '420 – 530 mm (regulación por gas clase 4)' },
      { label: 'Ancho × fondo de asiento', valor: '480 × 400 – 450 mm' },
      { label: 'Respaldo', valor: 'Malla elastomérica sobre marco de poliamida reforzada' },
      { label: 'Mecanismo', valor: 'Sincro con bloqueo en 5 posiciones y tensión regulable por peso' },
      { label: 'Brazos', valor: '4D (altura, ancho, profundidad y giro)' },
      { label: 'Base', valor: 'Aluminio pulido Ø 700 mm, 5 radios' },
      { label: 'Ruedas', valor: 'Ø 65 mm, freno por carga, aptas para suelo duro' },
      { label: 'Peso máximo de usuario', valor: '130 kg' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'cabecero', nombre: 'Con cabecero', descripcion: 'Respaldo alto con reposacabezas regulable en altura e inclinación.', referencia: 'SO-SI-300-C' },
      { id: 'sincabecero', nombre: 'Sin cabecero', descripcion: 'Respaldo medio, la configuración más habitual en puestos operativos.', referencia: 'SO-SI-300-S' },
      { id: 'confidente', nombre: 'Versión confidente', descripcion: 'Estructura de patín en tubo de acero, apilable de 4 en 4.', referencia: 'SO-SI-300-P' },
    ],
    proyectos: ['ayuntamiento-manzanares', 'grupo-alcazar-corporativo'],
  },
  {
    slug: 'ergo-lite-200',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1767800766429-7179fd80948f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1601845392340-c5cd9a3f9e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Lite 200 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1749559250968-1225c506a111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Nnx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Lite 200 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1692549490042-7e73aeb114ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Ergo Lite 200' },
    ],
    // unsplash:auto:end
    linea: 'Ergo Lite',
    modelo: '200',
    nombre: 'Ergo Lite 200',
    referencia: 'SO-SI-200',
    categoria: 'silleria',
    sectores: ['pyme', 'educativo', 'administracion'],
    acabados: ['negro', 'grafito', 'azul'],
    badge: 'Stock en Daimiel',
    resumen:
      'Silla operativa de entrada con contacto permanente, pensada para equipar despachos completos con un presupuesto ajustado.',
    descripcion:
      'La Ergo Lite 200 cubre el puesto operativo estándar sin renunciar a la conformidad normativa. Incorpora mecanismo de contacto permanente con regulación de inclinación del respaldo, elevación a gas y brazos fijos opcionales. Es la referencia con mayor rotación del almacén de Daimiel, lo que permite servir pedidos de hasta 40 unidades en 72 horas dentro de Castilla-La Mancha.',
    normativa: ['UNE-EN 1335-1/2/3 (tipo B)', 'REACH — Reglamento (CE) 1907/2006'],
    especificaciones: [
      { label: 'Altura total', valor: '950 – 1.050 mm' },
      { label: 'Altura de asiento', valor: '430 – 540 mm' },
      { label: 'Ancho × fondo de asiento', valor: '470 × 430 mm' },
      { label: 'Respaldo', valor: 'Tapizado en tejido ignífugo 100 % poliéster, 100.000 ciclos Martindale' },
      { label: 'Mecanismo', valor: 'Contacto permanente con regulación de inclinación' },
      { label: 'Base', valor: 'Nylon reforzado con fibra de vidrio Ø 640 mm' },
      { label: 'Garantía', valor: '3 años' },
    ],
    variantes: [
      { id: 'brazos', nombre: 'Con brazos fijos', descripcion: 'Brazos en polipropileno integrados al respaldo.', referencia: 'SO-SI-200-B' },
      { id: 'sinbrazos', nombre: 'Sin brazos', descripcion: 'Configuración compacta para puestos con mesa en bench.', referencia: 'SO-SI-200-N' },
    ],
    proyectos: ['coworking-ciudad-real'],
  },
  {
    slug: 'ergo-executive-500',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1767800766055-1cdbd2e351b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1581063622853-a95f1e25a9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OHx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Executive 500 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1620552606950-da614d09056f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OXx8b2ZmaWNlJTIwY2hhaXIlMjBkZXRhaWx8ZW58MHwyfHx8MTc4NzU2Nzk0MXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Ergo Executive 500 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1770349694376-113cb10bdb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MTB8fG9mZmljZSUyMGNoYWlyJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDF8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Ergo Executive 500' },
    ],
    // unsplash:auto:end
    linea: 'Ergo Executive',
    modelo: '500',
    nombre: 'Ergo Executive 500',
    referencia: 'SO-SI-500',
    categoria: 'silleria',
    sectores: ['corporativo', 'administracion'],
    acabados: ['negro', 'nogal', 'grafito'],
    badge: 'REACH',
    resumen:
      'Sillón de dirección con respaldo alto acolchado, tapicería en piel flor y detalles en aluminio pulido.',
    descripcion:
      'Concebido para despachos de dirección y salas de consejo, el Ergo Executive 500 combina un respaldo alto de espuma inyectada de alta densidad con tapicería en piel flor de 1,2 mm o en polipiel técnica. El mecanismo sincro con bloqueo multiposición y los brazos envolventes en aluminio pulido con apoyo acolchado ofrecen un confort de jornada completa en un lenguaje formal.',
    normativa: ['UNE-EN 1335-1/2/3 (tipo A)', 'UNE-EN 16139 nivel L2', 'REACH'],
    especificaciones: [
      { label: 'Altura total', valor: '1.180 – 1.280 mm' },
      { label: 'Altura de asiento', valor: '450 – 550 mm' },
      { label: 'Tapicería', valor: 'Piel flor 1,2 mm / polipiel técnica ignífuga' },
      { label: 'Relleno', valor: 'Espuma inyectada de poliuretano 45 kg/m³' },
      { label: 'Brazos', valor: 'Aluminio pulido con apoyo acolchado' },
      { label: 'Base', valor: 'Aluminio pulido Ø 720 mm' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'piel', nombre: 'Tapizado en piel flor', descripcion: 'Acabado de dirección, disponible en negro y nogal.', referencia: 'SO-SI-500-P' },
      { id: 'polipiel', nombre: 'Tapizado en polipiel', descripcion: 'Alternativa de mantenimiento reducido para uso intensivo.', referencia: 'SO-SI-500-V' },
    ],
    proyectos: ['grupo-alcazar-corporativo'],
  },
  {
    slug: 'nexo-confidente',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1609798310302-2cd56312db02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1698079276803-0a6f0c27d242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwY2hhaXIlMjB3b3Jrc3BhY2V8ZW58MHwyfHx8MTc4NzU2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Nexo Confidente 120 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1698006150156-3779d5c2306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2hhaXIlMjB3b3Jrc3BhY2V8ZW58MHwyfHx8MTc4NzU2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Nexo Confidente 120 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1565791380709-49e529c8b073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwY2hhaXIlMjB3b3Jrc3BhY2V8ZW58MHwyfHx8MTc4NzU2Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Nexo Confidente 120' },
    ],
    // unsplash:auto:end
    linea: 'Nexo',
    modelo: 'Confidente 120',
    nombre: 'Nexo Confidente 120',
    referencia: 'SO-SI-120',
    categoria: 'silleria',
    sectores: ['pyme', 'corporativo', 'administracion', 'educativo'],
    acabados: ['negro', 'azul', 'arena', 'oliva'],
    badge: 'UNE-EN',
    resumen:
      'Silla confidente de cuatro patas en tubo de acero, apilable, para despachos, aulas de formación y salas de reunión.',
    descripcion:
      'La Nexo Confidente 120 resuelve el segundo asiento del despacho y las salas de reunión de rotación alta. Su estructura en tubo de acero de 25 mm con soldadura continua permite el apilado de hasta seis unidades, y la carcasa tapizada en tejido ignífugo está disponible en cuatro colores de la gama corporativa. Admite enganche de fila para configuraciones de sala de formación.',
    normativa: ['UNE-EN 16139 nivel L2', 'UNE-EN 1022 (estabilidad)', 'REACH'],
    especificaciones: [
      { label: 'Altura total', valor: '820 mm' },
      { label: 'Altura de asiento', valor: '460 mm' },
      { label: 'Ancho × fondo', valor: '540 × 550 mm' },
      { label: 'Estructura', valor: 'Tubo de acero Ø 25 mm, epoxi negro o cromado' },
      { label: 'Apilado', valor: 'Hasta 6 unidades' },
      { label: 'Accesorios', valor: 'Enganche de fila, pala de escritura abatible' },
      { label: 'Garantía', valor: '3 años' },
    ],
    variantes: [
      { id: 'tapizada', nombre: 'Carcasa tapizada', descripcion: 'Asiento y respaldo tapizados en tejido ignífugo.', referencia: 'SO-SI-120-T' },
      { id: 'polipropileno', nombre: 'Carcasa en polipropileno', descripcion: 'Acabado lavable para zonas de alta rotación.', referencia: 'SO-SI-120-P' },
    ],
    proyectos: ['ies-daimiel-administracion', 'ayuntamiento-manzanares'],
  },
  {
    slug: 'kanta-stack-080',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1698078038619-7f94733f9413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Nnx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1698077689052-73daf0d5b10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Kanta Stack 080 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1604307743907-df8d5fe9f1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OHx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Kanta Stack 080 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1618254170747-35f7ba2f9a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OXx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHwyfHx8MTc4NzU2NzkzOHww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Kanta Stack 080' },
    ],
    // unsplash:auto:end
    linea: 'Kanta',
    modelo: 'Stack 080',
    nombre: 'Kanta Stack 080',
    referencia: 'SO-SI-080',
    categoria: 'silleria',
    sectores: ['educativo', 'administracion', 'pyme'],
    acabados: ['blanco', 'grafito', 'azul', 'oliva'],
    badge: 'Stock en Daimiel',
    resumen:
      'Silla apilable de polipropileno reciclado para salas polivalentes, aulas de formación y espacios de espera.',
    descripcion:
      'Kanta Stack 080 es la solución de asiento ligero para salones de actos, aulas de formación y espacios polivalentes de administraciones locales. La carcasa está inyectada en polipropileno con un 30 % de material reciclado post-industrial y resiste el uso en exterior cubierto. Apila hasta 12 unidades y admite carro de transporte.',
    normativa: ['UNE-EN 16139 nivel L1', 'UNE-EN 1022', 'REACH'],
    especificaciones: [
      { label: 'Altura total', valor: '790 mm' },
      { label: 'Altura de asiento', valor: '450 mm' },
      { label: 'Peso', valor: '4,6 kg' },
      { label: 'Carcasa', valor: 'Polipropileno con 30 % de reciclado, protección UV' },
      { label: 'Apilado', valor: 'Hasta 12 unidades (carro opcional para 24)' },
      { label: 'Garantía', valor: '3 años' },
    ],
    variantes: [
      { id: 'estandar', nombre: 'Patas de acero epoxi', descripcion: 'Acabado estándar en negro o blanco.', referencia: 'SO-SI-080-E' },
      { id: 'madera', nombre: 'Patas de haya', descripcion: 'Versión con estructura de madera para espacios de espera.', referencia: 'SO-SI-080-H' },
    ],
    proyectos: ['ies-daimiel-administracion'],
  },

  /* ------------------------------------------------- MESAS Y ESCRITORIOS · WORK */
  {
    slug: 'work-120',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1702471897388-5d9c50ea434e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1706689656095-168768dc20a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK 120 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK 120 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de WORK 120' },
    ],
    // unsplash:auto:end
    linea: 'WORK',
    modelo: '120',
    nombre: 'WORK 120',
    referencia: 'SO-WK-120',
    categoria: 'mesas',
    sectores: ['pyme', 'administracion', 'educativo'],
    acabados: ['blanco', 'roble', 'grafito', 'nogal'],
    badge: 'UNE-EN',
    destacado: true,
    resumen:
      'Mesa operativa de 120 × 80 cm con tablero melamina de 25 mm y estructura de acero en U. El puesto estándar de la línea WORK.',
    descripcion:
      'WORK 120 es la mesa operativa de referencia para despachos individuales y oficinas de pyme. El tablero de aglomerado de partículas de 25 mm con recubrimiento melamínico y canto ABS de 2 mm ofrece resistencia a la abrasión clase 3, y la estructura metálica en U con niveladores permite salvar desniveles de hasta 20 mm. Admite pasacables, bandeja portateclados y bloque de cajones bajo tablero.',
    normativa: ['UNE-EN 527-1/2/3', 'UNE-EN 14322 (tableros melamínicos)', 'Madera con trazabilidad EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '1.200 × 800 × 740 mm' },
      { label: 'Tablero', valor: 'Aglomerado 25 mm, melamina clase E1, canto ABS 2 mm' },
      { label: 'Estructura', valor: 'Acero 40 × 40 mm, pintura epoxi al horno' },
      { label: 'Regulación', valor: 'Niveladores de ± 20 mm' },
      { label: 'Carga admisible', valor: '80 kg uniformemente repartidos' },
      { label: 'Gestión de cableado', valor: 'Pasacables Ø 60 mm y canaleta bajo tablero (opcional)' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: '120', nombre: 'WORK 120', descripcion: 'Tablero de 1.200 × 800 mm.', referencia: 'SO-WK-120' },
      { id: '140', nombre: 'WORK 140', descripcion: 'Tablero de 1.400 × 800 mm.', referencia: 'SO-WK-140' },
      { id: '160', nombre: 'WORK 160', descripcion: 'Tablero de 1.600 × 800 mm.', referencia: 'SO-WK-160' },
      { id: 'ala', nombre: 'WORK 120 con ala', descripcion: 'Composición en L con ala de 800 × 600 mm.', referencia: 'SO-WK-120-L' },
    ],
    proyectos: ['coworking-ciudad-real', 'ayuntamiento-manzanares'],
  },
  {
    slug: 'work-160',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1636485042948-615bfefb16b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1705909773284-bcbbad9a4023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK 160 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1597567918979-a06f2e60bd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK 160 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1745635621480-6a258cc1b1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de WORK 160' },
    ],
    // unsplash:auto:end
    linea: 'WORK',
    modelo: '160',
    nombre: 'WORK 160',
    referencia: 'SO-WK-160',
    categoria: 'mesas',
    sectores: ['corporativo', 'administracion'],
    acabados: ['blanco', 'roble', 'grafito'],
    badge: 'UNE-EN',
    resumen:
      'Mesa operativa amplia de 160 × 80 cm para puestos de doble pantalla, con canaleta pasacables integrada de serie.',
    descripcion:
      'La WORK 160 amplía el puesto estándar de la línea WORK para escenarios de doble pantalla, mesas de atención al público y despachos técnicos. Incorpora de serie la canaleta de gestión de cableado bajo tablero y una tapa pasacables metálica, y comparte estructura y acabados con el resto de la familia para permitir composiciones mixtas.',
    normativa: ['UNE-EN 527-1/2/3', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '1.600 × 800 × 740 mm' },
      { label: 'Tablero', valor: 'Aglomerado 25 mm, melamina clase E1, canto ABS 2 mm' },
      { label: 'Estructura', valor: 'Acero 40 × 40 mm con travesaño de refuerzo' },
      { label: 'Cableado', valor: 'Canaleta abatible de 1.400 mm y tapa pasacables de serie' },
      { label: 'Carga admisible', valor: '100 kg uniformemente repartidos' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'recta', nombre: 'Configuración recta', descripcion: 'Puesto individual de 1.600 × 800 mm.', referencia: 'SO-WK-160' },
      { id: 'l', nombre: 'Configuración en L', descripcion: 'Con ala de 1.000 × 600 mm a izquierda o derecha.', referencia: 'SO-WK-160-L' },
    ],
    proyectos: ['grupo-alcazar-corporativo'],
  },
  {
    slug: 'work-bench-duo',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1636485042715-f0e844b82338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1770993151375-0dee97eda931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OXx8bW9kZXJuJTIwb2ZmaWNlJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTQ3fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK Bench Duo en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MTB8fG1vZGVybiUyMG9mZmljZSUyMGRlc2t8ZW58MHwyfHx8MTc4NzU2Nzk0N3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK Bench Duo en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1684061692678-68b081bbe4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de WORK Bench Duo' },
    ],
    // unsplash:auto:end
    linea: 'WORK',
    modelo: 'Bench Duo',
    nombre: 'WORK Bench Duo',
    referencia: 'SO-WK-BD',
    categoria: 'mesas',
    sectores: ['corporativo', 'pyme'],
    acabados: ['blanco', 'grafito', 'roble'],
    badge: 'UNE-EN',
    resumen:
      'Bench de doble puesto enfrentado con viga central de cableado y panel separador acústico opcional.',
    descripcion:
      'WORK Bench Duo organiza el espacio abierto en módulos de dos puestos enfrentados que crecen en batería de 4, 6 u 8 posiciones compartiendo pata intermedia. La viga estructural aloja la canalización eléctrica y de datos de extremo a extremo, y el panel separador tapizado en fieltro de PET reciclado reduce la reverberación entre puestos.',
    normativa: ['UNE-EN 527-1/2/3', 'UNE-EN 14322', 'REACH'],
    especificaciones: [
      { label: 'Dimensiones (módulo de 2)', valor: '1.600 × 1.640 × 740 mm' },
      { label: 'Ampliación', valor: 'Módulos adicionales de 2 puestos con pata compartida' },
      { label: 'Viga de cableado', valor: 'Acero plegado con tapa registrable en toda la longitud' },
      { label: 'Panel separador', valor: 'Fieltro de PET reciclado 12 mm, altura 400 mm (opcional)' },
      { label: 'Electrificación', valor: 'Torretas de 2 schuko + 2 RJ45 (opcional)' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'duo', nombre: 'Módulo de 2 puestos', descripcion: 'Configuración base enfrentada.', referencia: 'SO-WK-BD-2' },
      { id: 'quad', nombre: 'Módulo de 4 puestos', descripcion: 'Dos módulos en batería con pata compartida.', referencia: 'SO-WK-BD-4' },
      { id: 'six', nombre: 'Módulo de 6 puestos', descripcion: 'Tres módulos en batería, longitud 4.800 mm.', referencia: 'SO-WK-BD-6' },
    ],
    proyectos: ['coworking-ciudad-real', 'grupo-alcazar-corporativo'],
  },
  {
    slug: 'work-elevate',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1636485042866-2ad68762c1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8b2ZmaWNlJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1782134518937-bae919213a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK Elevate en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1612653030120-4acd623d351a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'WORK Elevate en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1639406568540-5381611f6cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de WORK Elevate' },
    ],
    // unsplash:auto:end
    linea: 'WORK',
    modelo: 'Elevate',
    nombre: 'WORK Elevate',
    referencia: 'SO-WK-EL',
    categoria: 'mesas',
    sectores: ['corporativo', 'administracion', 'pyme'],
    acabados: ['blanco', 'grafito', 'roble', 'negro'],
    badge: 'UNE-EN',
    destacado: true,
    resumen:
      'Escritorio regulable en altura con doble motor eléctrico, memoria de 4 posiciones y recorrido de 650 a 1.290 mm.',
    descripcion:
      'WORK Elevate responde a la demanda creciente de puestos sit-stand en planes de prevención de riesgos laborales. El sistema de doble motor con columna de tres tramos alcanza 1.290 mm de altura a una velocidad de 32 mm/s y con un nivel sonoro por debajo de 50 dB. El mando digital guarda cuatro posiciones de memoria e incorpora detección de colisión.',
    normativa: ['UNE-EN 527-1/2/3', 'UNE-EN 60335-1 (seguridad eléctrica)', 'REACH'],
    especificaciones: [
      { label: 'Dimensiones', valor: '1.400 / 1.600 × 800 mm' },
      { label: 'Recorrido de altura', valor: '650 – 1.290 mm' },
      { label: 'Motorización', valor: 'Doble motor, columna de 3 tramos, 32 mm/s' },
      { label: 'Capacidad de elevación', valor: '120 kg' },
      { label: 'Mando', valor: 'Display digital con 4 memorias y detección de colisión' },
      { label: 'Consumo en reposo', valor: '< 0,1 W' },
      { label: 'Garantía', valor: '5 años (motor y electrónica)' },
    ],
    variantes: [
      { id: '140', nombre: 'Elevate 140', descripcion: 'Tablero de 1.400 × 800 mm.', referencia: 'SO-WK-EL-140' },
      { id: '160', nombre: 'Elevate 160', descripcion: 'Tablero de 1.600 × 800 mm.', referencia: 'SO-WK-EL-160' },
    ],
    proyectos: ['grupo-alcazar-corporativo', 'clinica-dental-tomelloso'],
  },
  {
    slug: 'consejo-240',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1639257014815-0fef6195ce44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8b2ZmaWNlJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1712231169791-3f4de102505c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Nnx8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Consejo 240 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1570841398972-8aaa69ec72f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Consejo 240 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1571126770037-2945244eea9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OHx8b2ZmaWNlJTIwZGVzayUyMHNldHVwJTIwZGV0YWlsfGVufDB8Mnx8fDE3ODc1Njc5NDl8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Consejo 240' },
    ],
    // unsplash:auto:end
    linea: 'Consejo',
    modelo: '240',
    nombre: 'Consejo 240',
    referencia: 'SO-MR-240',
    categoria: 'mesas',
    sectores: ['corporativo', 'administracion'],
    acabados: ['nogal', 'roble', 'blanco'],
    badge: 'UNE-EN',
    resumen:
      'Mesa de reuniones de 240 × 110 cm para 8-10 personas, con caja de conexiones central y patas panel.',
    descripcion:
      'La Consejo 240 está pensada para salas de juntas de empresa y salas de comisión de administraciones locales. El tablero de 30 mm con canto macizo se apoya sobre dos patas panel que ocultan la subida de cableado hasta la caja de conexiones central abatible, con dos schuko, dos RJ45 y dos USB-C.',
    normativa: ['UNE-EN 527-1/2', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '2.400 × 1.100 × 740 mm' },
      { label: 'Capacidad', valor: '8 – 10 personas' },
      { label: 'Tablero', valor: 'Aglomerado 30 mm con canto macizo a juego' },
      { label: 'Conectividad', valor: 'Caja central abatible: 2 schuko + 2 RJ45 + 2 USB-C' },
      { label: 'Patas', valor: 'Panel de 30 mm con paso de cableado interior' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: '240', nombre: 'Consejo 240', descripcion: '2.400 × 1.100 mm, 8-10 personas.', referencia: 'SO-MR-240' },
      { id: '320', nombre: 'Consejo 320', descripcion: '3.200 × 1.200 mm, 12-14 personas.', referencia: 'SO-MR-320' },
      { id: '160', nombre: 'Consejo 160', descripcion: '1.600 × 900 mm, 6 personas.', referencia: 'SO-MR-160' },
    ],
    proyectos: ['ayuntamiento-manzanares', 'grupo-alcazar-corporativo'],
  },

  /* -------------------------------------------- ARMARIOS Y ARCHIVO · MODUL */
  {
    slug: 'modul-alto-5',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1625251790636-b8cb6fae0dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8ZmlsaW5nJTIwY2FiaW5ldCUyMG9mZmljZXxlbnwwfDJ8fHwxNzg3NTY3OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1749705319317-f9a2bf24fe3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwc3RvcmFnZSUyMHNoZWx2ZXN8ZW58MHwyfHx8MTc4NzU2Nzk1M3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Alto 5 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1667892702933-ec900d024fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Alto 5 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1667892703014-531bd6caf373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Modul Alto 5' },
    ],
    // unsplash:auto:end
    linea: 'Modul',
    modelo: 'Alto 5',
    nombre: 'Modul Alto 5',
    referencia: 'SO-AR-A5',
    categoria: 'archivo',
    sectores: ['administracion', 'corporativo', 'educativo'],
    acabados: ['blanco', 'roble', 'grafito', 'nogal'],
    badge: 'UNE-EN',
    resumen:
      'Armario alto de 5 alturas con puertas batientes y cerradura de llave maestreable. Base del sistema modular Modul.',
    descripcion:
      'El Modul Alto 5 es la unidad de almacenamiento de referencia para archivos de gestión y despachos de administración. Cinco alturas útiles con cuatro estantes regulables cada 32 mm, puertas batientes con bisagra de 110° y cerradura de llave maestreable por lote. Todo el sistema Modul comparte acabados y modulación, lo que permite componer paredes de archivo continuas alternando alturas.',
    normativa: ['UNE-EN 14073-2/3 (mobiliario de almacenamiento)', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '800 × 450 × 1.980 mm' },
      { label: 'Alturas útiles', valor: '5 (4 estantes regulables cada 32 mm)' },
      { label: 'Carga por estante', valor: '40 kg' },
      { label: 'Puertas', valor: 'Batientes con bisagra de 110° y amortiguación' },
      { label: 'Cerradura', valor: 'De llave, maestreable por lote' },
      { label: 'Estabilidad', valor: 'Conforme UNE-EN 14073-2, con anclaje mural incluido' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'puertas', nombre: 'Con puertas batientes', descripcion: 'Cierre completo con cerradura.', referencia: 'SO-AR-A5-P' },
      { id: 'persiana', nombre: 'Con puertas de persiana', descripcion: 'Persiana de PVC de apertura vertical, sin barrido.', referencia: 'SO-AR-A5-R' },
      { id: 'abierto', nombre: 'Sin puertas', descripcion: 'Estantería abierta para archivo de consulta frecuente.', referencia: 'SO-AR-A5-O' },
    ],
    proyectos: ['ies-daimiel-administracion', 'ayuntamiento-manzanares'],
  },
  {
    slug: 'modul-bajo-2',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1711995559235-3aee8727654e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1572216250247-41cd338c3877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Bajo 2 en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1667892702969-a9f23a35cb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Bajo 2 en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1570978358397-611115672984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Nnx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Modul Bajo 2' },
    ],
    // unsplash:auto:end
    linea: 'Modul',
    modelo: 'Bajo 2',
    nombre: 'Modul Bajo 2',
    referencia: 'SO-AR-B2',
    categoria: 'archivo',
    sectores: ['pyme', 'administracion', 'corporativo'],
    acabados: ['blanco', 'roble', 'grafito'],
    badge: 'Stock en Daimiel',
    resumen:
      'Armario bajo de 2 alturas a la altura del tablero de mesa, utilizable también como superficie de apoyo.',
    descripcion:
      'El Modul Bajo 2 alcanza exactamente los 740 mm del tablero de la línea WORK, de forma que puede colocarse en continuidad con la mesa como superficie de apoyo. Dos alturas útiles con un estante regulable, puertas batientes con cerradura y opción de tapa superior en el mismo acabado que la mesa.',
    normativa: ['UNE-EN 14073-2/3', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '800 × 450 × 740 mm' },
      { label: 'Alturas útiles', valor: '2 (1 estante regulable)' },
      { label: 'Carga por estante', valor: '40 kg' },
      { label: 'Tapa superior', valor: 'Opcional, canto ABS 2 mm a juego con la línea WORK' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'puertas', nombre: 'Con puertas', descripcion: 'Batientes con cerradura de llave.', referencia: 'SO-AR-B2-P' },
      { id: 'abierto', nombre: 'Sin puertas', descripcion: 'Hueco abierto para archivo de uso diario.', referencia: 'SO-AR-B2-O' },
    ],
    proyectos: ['coworking-ciudad-real', 'clinica-dental-tomelloso'],
  },
  {
    slug: 'modul-archivador-3c',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1580098385206-c1e957a6a9fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1637277810826-d79eac657158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OXx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Archivador 3C en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MTB8fG9mZmljZSUyMGNhYmluZXQlMjBkcmF3ZXJzfGVufDB8Mnx8fDE3ODc1Njc5NTV8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Archivador 3C en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8ZmlsaW5nJTIwY2FiaW5ldCUyMG9mZmljZXxlbnwwfDJ8fHwxNzg3NTY3OTUxfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Modul Archivador 3C' },
    ],
    // unsplash:auto:end
    linea: 'Modul',
    modelo: 'Archivador 3C',
    nombre: 'Modul Archivador 3C',
    referencia: 'SO-AR-3C',
    categoria: 'archivo',
    sectores: ['administracion', 'corporativo'],
    acabados: ['blanco', 'grafito', 'negro'],
    badge: 'UNE-EN',
    resumen:
      'Archivador metálico de 3 cajones para carpeta colgante con bloqueo antivuelco y cierre centralizado.',
    descripcion:
      'Archivador de tres cajones en chapa de acero de 0,8 mm con guías telescópicas de extracción total y capacidad de 40 kg por cajón. Incorpora bloqueo antivuelco que impide abrir más de un cajón simultáneamente —requisito de estabilidad de la UNE-EN 14073-2— y cierre centralizado por llave. Bastidor para carpeta colgante formato folio y A4 incluido.',
    normativa: ['UNE-EN 14073-2/3', 'UNE-EN 14074 (durabilidad de partes móviles)', 'REACH'],
    especificaciones: [
      { label: 'Dimensiones', valor: '470 × 620 × 1.020 mm' },
      { label: 'Cajones', valor: '3, extracción total sobre guías telescópicas' },
      { label: 'Carga por cajón', valor: '40 kg' },
      { label: 'Seguridad', valor: 'Bloqueo antivuelco + cierre centralizado por llave' },
      { label: 'Acabado', valor: 'Chapa de acero 0,8 mm con pintura epoxi-poliéster' },
      { label: 'Formato de carpeta', valor: 'Folio y A4 con bastidor incluido' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: '2c', nombre: 'Archivador 2C', descripcion: 'Dos cajones, altura 720 mm.', referencia: 'SO-AR-2C' },
      { id: '3c', nombre: 'Archivador 3C', descripcion: 'Tres cajones, altura 1.020 mm.', referencia: 'SO-AR-3C' },
      { id: '4c', nombre: 'Archivador 4C', descripcion: 'Cuatro cajones, altura 1.320 mm.', referencia: 'SO-AR-4C' },
    ],
    proyectos: ['ayuntamiento-manzanares', 'ies-daimiel-administracion'],
  },
  {
    slug: 'modul-estante-open',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1684061692678-68b081bbe4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OHx8b2ZmaWNlJTIwY2FiaW5ldCUyMGRyYXdlcnN8ZW58MHwyfHx8MTc4NzU2Nzk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1706689656095-168768dc20a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8ZmlsaW5nJTIwY2FiaW5ldCUyMG9mZmljZXxlbnwwfDJ8fHwxNzg3NTY3OTUxfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Estante Open en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1764743111075-fb988af9ed75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8ZmlsaW5nJTIwY2FiaW5ldCUyMG9mZmljZXxlbnwwfDJ8fHwxNzg3NTY3OTUxfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Modul Estante Open en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1625251790636-b8cb6fae0dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8ZmlsaW5nJTIwY2FiaW5ldCUyMG9mZmljZXxlbnwwfDJ8fHwxNzg3NTY3OTUxfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Modul Estante Open' },
    ],
    // unsplash:auto:end
    linea: 'Modul',
    modelo: 'Estante Open',
    nombre: 'Modul Estante Open',
    referencia: 'SO-AR-EO',
    categoria: 'archivo',
    sectores: ['pyme', 'educativo', 'corporativo'],
    acabados: ['roble', 'blanco', 'grafito', 'oliva'],
    badge: 'Stock en Daimiel',
    resumen:
      'Estantería abierta de 4 alturas, apta como separador de espacio en oficinas diáfanas.',
    descripcion:
      'Estantería sin trasera que funciona igual de bien contra pared que como divisor visual entre zonas de trabajo. Cuatro alturas útiles con estantes de 25 mm y refuerzo central en los módulos de 1.000 mm. Puede combinarse con cajas de fieltro y con puertas Modul para cerrar alturas concretas.',
    normativa: ['UNE-EN 14073-2/3', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '800 × 380 × 1.620 mm' },
      { label: 'Alturas útiles', valor: '4' },
      { label: 'Carga por estante', valor: '35 kg' },
      { label: 'Uso como separador', valor: 'Acabado por ambas caras, sin trasera' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: '800', nombre: 'Módulo de 800 mm', descripcion: 'Ancho estándar.', referencia: 'SO-AR-EO-800' },
      { id: '1000', nombre: 'Módulo de 1.000 mm', descripcion: 'Con refuerzo central de estante.', referencia: 'SO-AR-EO-1000' },
    ],
    proyectos: ['coworking-ciudad-real'],
  },

  /* ------------------------------------------ RECEPCIÓN Y ESPERA · ATRIO / SALA */
  {
    slug: 'atrio-recepcion-l',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1777125080264-152acad7697f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTU5fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Atrio Recepción L en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1601335679963-10013d4578c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Atrio Recepción L en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1771232512975-127d63f26fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Atrio Recepción L' },
    ],
    // unsplash:auto:end
    linea: 'Atrio',
    modelo: 'Recepción L',
    nombre: 'Atrio Recepción L',
    referencia: 'SO-RC-L',
    categoria: 'recepcion',
    sectores: ['corporativo', 'administracion'],
    acabados: ['blanco', 'nogal', 'grafito', 'azul'],
    badge: 'UNE-EN',
    destacado: true,
    resumen:
      'Mostrador de recepción en L con frente de lamas verticales, encimera pasante y módulo accesible a 800 mm.',
    descripcion:
      'Atrio Recepción L es el mostrador de acogida de la línea de oficina: 2.400 mm de frente principal más un retorno de 1.200 mm, con frente compuesto de lamas verticales retroiluminables y encimera pasante de 30 mm. Incluye de serie un tramo rebajado a 800 mm de altura con hueco de aproximación de 700 mm, para cumplir las condiciones de accesibilidad exigidas en edificios de uso público (Documento Básico SUA y Orden VIV/561/2010).',
    normativa: ['UNE-EN 527-1', 'UNE-EN 14322', 'Orden VIV/561/2010 (accesibilidad)', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: 'Frente 2.400 mm + retorno 1.200 mm × 800 mm de fondo' },
      { label: 'Altura', valor: '1.100 mm de mostrador · tramo accesible a 800 mm' },
      { label: 'Tramo accesible', valor: '900 mm de ancho, hueco de aproximación de 700 mm' },
      { label: 'Encimera', valor: 'Tablero de 30 mm con canto macizo' },
      { label: 'Frente', valor: 'Lamas verticales de 60 mm, retroiluminación LED opcional' },
      { label: 'Cableado', valor: 'Canal técnico interior con registro y pasamuros' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'l', nombre: 'Configuración en L', descripcion: 'Frente 2.400 + retorno 1.200 mm.', referencia: 'SO-RC-L' },
      { id: 'u', nombre: 'Configuración en U', descripcion: 'Frente 2.400 + dos retornos de 1.200 mm.', referencia: 'SO-RC-U' },
      { id: 'recta', nombre: 'Configuración recta', descripcion: 'Frente único de 2.400 mm.', referencia: 'SO-RC-R' },
    ],
    proyectos: ['ayuntamiento-manzanares', 'clinica-dental-tomelloso'],
  },
  {
    slug: 'atrio-recepcion-compact',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1771232512975-127d63f26fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1777125080264-152acad7697f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Atrio Recepción Compact en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1771232512975-127d63f26fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Atrio Recepción Compact en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTU5fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Atrio Recepción Compact' },
    ],
    // unsplash:auto:end
    linea: 'Atrio',
    modelo: 'Recepción Compact',
    nombre: 'Atrio Recepción Compact',
    referencia: 'SO-RC-C',
    categoria: 'recepcion',
    sectores: ['pyme', 'educativo', 'administracion'],
    acabados: ['blanco', 'roble', 'azul'],
    badge: 'Stock en Daimiel',
    resumen:
      'Mostrador compacto de 1.600 mm para recepciones de pyme, clínicas y conserjerías, montado en menos de una hora.',
    descripcion:
      'Versión reducida del mostrador Atrio para espacios de acogida pequeños. Con 1.600 mm de frente cubre el puesto de una sola persona e incluye estante interior para impresora, paso de cableado y frontal en el acabado corporativo. Se sirve premontado en dos piezas, con un tiempo de instalación inferior a una hora.',
    normativa: ['UNE-EN 527-1', 'UNE-EN 14322', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '1.600 × 750 × 1.100 mm' },
      { label: 'Interior', valor: 'Encimera de trabajo a 740 mm + estante para impresora' },
      { label: 'Montaje', valor: 'Premontado en 2 piezas, instalación < 1 h' },
      { label: 'Cableado', valor: 'Pasamuros trasero y canal vertical' },
      { label: 'Garantía', valor: '5 años' },
    ],
    variantes: [
      { id: 'compact', nombre: 'Compact 160', descripcion: 'Frente de 1.600 mm.', referencia: 'SO-RC-C-160' },
      { id: 'compact200', nombre: 'Compact 200', descripcion: 'Frente de 2.000 mm.', referencia: 'SO-RC-C-200' },
    ],
    proyectos: ['clinica-dental-tomelloso', 'ies-daimiel-administracion'],
  },
  {
    slug: 'sala-sofa-3p',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1777125080264-152acad7697f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Sala Sofá 3P en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1601335679963-10013d4578c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Sala Sofá 3P en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1771232512975-127d63f26fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Sala Sofá 3P' },
    ],
    // unsplash:auto:end
    linea: 'Sala',
    modelo: 'Sofá 3P',
    nombre: 'Sala Sofá 3P',
    referencia: 'SO-SE-S3',
    categoria: 'recepcion',
    sectores: ['corporativo', 'pyme', 'administracion'],
    acabados: ['arena', 'grafito', 'azul', 'oliva'],
    badge: 'REACH',
    resumen:
      'Sofá de espera de tres plazas con tapicería ignífuga desenfundable y estructura de madera certificada.',
    descripcion:
      'Sofá de tres plazas para salas de espera y zonas informales de reunión. La espuma de poliuretano de alta resiliencia (35 kg/m³) mantiene la forma tras uso intensivo y la tapicería, disponible en tejido ignífugo o polipiel técnica, es desenfundable para su limpieza. La estructura interior es de madera con trazabilidad EUTR.',
    normativa: ['UNE-EN 1728', 'UNE-EN 1021-1/2 (comportamiento al fuego)', 'REACH', 'EUTR'],
    especificaciones: [
      { label: 'Dimensiones', valor: '1.950 × 780 × 780 mm' },
      { label: 'Altura de asiento', valor: '430 mm' },
      { label: 'Relleno', valor: 'Espuma HR 35 kg/m³' },
      { label: 'Tapicería', valor: 'Tejido ignífugo EN 1021-1/2 o polipiel técnica, desenfundable' },
      { label: 'Estructura', valor: 'Madera con trazabilidad EUTR y patas de acero' },
      { label: 'Garantía', valor: '3 años' },
    ],
    variantes: [
      { id: '2p', nombre: 'Sofá 2 plazas', descripcion: '1.380 mm de ancho.', referencia: 'SO-SE-S2' },
      { id: '3p', nombre: 'Sofá 3 plazas', descripcion: '1.950 mm de ancho.', referencia: 'SO-SE-S3' },
      { id: 'butaca', nombre: 'Butaca individual', descripcion: '820 mm de ancho.', referencia: 'SO-SE-S1' },
    ],
    proyectos: ['clinica-dental-tomelloso', 'grupo-alcazar-corporativo'],
  },
  {
    slug: 'sala-bancada-4p',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1777125080264-152acad7697f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwd2FpdGluZyUyMHJvb20lMjBzZWF0aW5nfGVufDB8Mnx8fDE3ODc1Njc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1777125080264-152acad7697f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Sala Bancada 4P en vista frontal sobre fondo neutro' },
      { src: 'https://images.unsplash.com/photo-1771232512975-127d63f26fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwd2FpdGluZyUyMGFyZWF8ZW58MHwyfHx8MTc4NzU2Nzk1N3ww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Sala Bancada 4P en perspectiva de tres cuartos' },
      { src: 'https://images.unsplash.com/photo-1569677917811-08ceb8e42aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVjZXB0aW9uJTIwZGVza3xlbnwwfDJ8fHwxNzg3NTY3OTU5fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de los materiales y acabados de Sala Bancada 4P' },
    ],
    // unsplash:auto:end
    linea: 'Sala',
    modelo: 'Bancada 4P',
    nombre: 'Sala Bancada 4P',
    referencia: 'SO-SE-B4',
    categoria: 'recepcion',
    sectores: ['administracion', 'educativo'],
    acabados: ['grafito', 'negro', 'azul'],
    badge: 'UNE-EN',
    resumen:
      'Bancada de espera de 4 plazas sobre viga de acero, para vestíbulos de alta afluencia y oficinas de atención al público.',
    descripcion:
      'Bancada de cuatro plazas concebida para vestíbulos de administraciones y centros de atención al público, donde la limpieza y la resistencia priman sobre el confort prolongado. Viga de acero de 60 × 40 mm sobre dos pies con niveladores y asientos en polipropileno o tapizados, desmontables individualmente para su sustitución. Admite mesa auxiliar intercalada.',
    normativa: ['UNE-EN 16139 nivel L2', 'UNE-EN 1022', 'REACH'],
    especificaciones: [
      { label: 'Dimensiones', valor: '2.320 × 680 × 800 mm' },
      { label: 'Plazas', valor: '4 (disponible en 2, 3, 4 y 5 plazas)' },
      { label: 'Viga', valor: 'Acero 60 × 40 mm con pintura epoxi' },
      { label: 'Asientos', valor: 'Polipropileno o tapizado, desmontables individualmente' },
      { label: 'Accesorios', valor: 'Mesa auxiliar intercalada, reposabrazos intermedios' },
      { label: 'Garantía', valor: '5 años (estructura)' },
    ],
    variantes: [
      { id: '3p', nombre: 'Bancada 3 plazas', descripcion: '1.760 mm de ancho.', referencia: 'SO-SE-B3' },
      { id: '4p', nombre: 'Bancada 4 plazas', descripcion: '2.320 mm de ancho.', referencia: 'SO-SE-B4' },
      { id: '5p', nombre: 'Bancada 5 plazas', descripcion: '2.880 mm de ancho.', referencia: 'SO-SE-B5' },
    ],
    proyectos: ['ayuntamiento-manzanares', 'ies-daimiel-administracion'],
  },
];

/* Enriquecimiento: imagen principal, galería y descargas se derivan del nombre
   para no repetir el mismo bloque en cada ficha. */
export const productosCompletos = productos.map((p) => ({
  imagen: rutaImagenProducto(p.categoria, p.slug),
  galeria: galeria(p.categoria, p.slug, p.nombre),
  ...p,
  descargas: descargasBase(p.nombre),
}));

export function getProductoPorSlug(slug) {
  return productosCompletos.find((p) => p.slug === slug);
}

export function getProductosPorCategoria(categoriaId) {
  return productosCompletos.filter((p) => p.categoria === categoriaId);
}

export function getProductosDestacados(limite = 3) {
  return productosCompletos.filter((p) => p.destacado).slice(0, limite);
}

export default productosCompletos;
