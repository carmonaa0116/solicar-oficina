import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import Icon from '../components/Icon';
import productos, { acabadosPorId, categoriasPorId, sectoresPorId } from '../data/productos';

const POR_PAGINA = 8;

/*
 * Catálogo de mobiliario de oficina.
 * Los filtros son reales: se aplican en cliente sobre los datos mock y se
 * reflejan en la URL (?tipo=&sector=&acabado=&q=), de forma que las entradas
 * de la sub-nav y del footer llegan con el filtro ya aplicado.
 */
export default function Productos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagina, setPagina] = useState(1);

  const filtros = useMemo(
    () => ({
      tipos: searchParams.get('tipo')?.split(',').filter(Boolean) ?? [],
      sectores: searchParams.get('sector')?.split(',').filter(Boolean) ?? [],
      acabados: searchParams.get('acabado')?.split(',').filter(Boolean) ?? [],
    }),
    [searchParams],
  );
  const consulta = searchParams.get('q') ?? '';

  const resultados = useMemo(() => {
    const termino = consulta.trim().toLowerCase();
    return productos.filter((producto) => {
      if (filtros.tipos.length && !filtros.tipos.includes(producto.categoria)) return false;
      if (filtros.sectores.length && !producto.sectores.some((s) => filtros.sectores.includes(s))) return false;
      if (filtros.acabados.length && !producto.acabados.some((a) => filtros.acabados.includes(a))) return false;
      if (termino) {
        const texto = `${producto.nombre} ${producto.linea} ${producto.modelo} ${producto.referencia} ${producto.resumen}`.toLowerCase();
        if (!texto.includes(termino)) return false;
      }
      return true;
    });
  }, [filtros, consulta]);

  const totalPaginas = Math.max(1, Math.ceil(resultados.length / POR_PAGINA));

  // Al cambiar los filtros se vuelve a la primera página. Se ajusta durante el
  // render (patrón recomendado por React) en lugar de con un efecto.
  const claveFiltros = searchParams.toString();
  const [claveAnterior, setClaveAnterior] = useState(claveFiltros);
  if (claveFiltros !== claveAnterior) {
    setClaveAnterior(claveFiltros);
    setPagina(1);
  }

  const paginaSegura = Math.min(pagina, totalPaginas);
  const visibles = resultados.slice((paginaSegura - 1) * POR_PAGINA, paginaSegura * POR_PAGINA);

  function alternar(grupo, valor) {
    const clave = { tipos: 'tipo', sectores: 'sector', acabados: 'acabado' }[grupo];
    const actuales = filtros[grupo];
    const nuevos = actuales.includes(valor) ? actuales.filter((v) => v !== valor) : [...actuales, valor];
    const params = new URLSearchParams(searchParams);
    if (nuevos.length) params.set(clave, nuevos.join(','));
    else params.delete(clave);
    setSearchParams(params, { replace: true });
  }

  function limpiar() {
    const params = new URLSearchParams(searchParams);
    ['tipo', 'sector', 'acabado'].forEach((k) => params.delete(k));
    setSearchParams(params, { replace: true });
  }

  function quitarConsulta() {
    const params = new URLSearchParams(searchParams);
    params.delete('q');
    setSearchParams(params, { replace: true });
  }

  const etiquetasActivas = [
    ...filtros.tipos.map((id) => ({ grupo: 'tipos', id, label: categoriasPorId[id]?.nombre ?? id })),
    ...filtros.sectores.map((id) => ({ grupo: 'sectores', id, label: sectoresPorId[id]?.nombre ?? id })),
    ...filtros.acabados.map((id) => ({ grupo: 'acabados', id, label: acabadosPorId[id]?.nombre ?? id })),
  ];

  const categoriaUnica = filtros.tipos.length === 1 ? categoriasPorId[filtros.tipos[0]] : null;

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        titulo={categoriaUnica ? categoriaUnica.nombre : 'Mobiliario de oficina'}
        descripcion={
          categoriaUnica
            ? categoriaUnica.descripcion
            : 'Sillería ergonómica, mesas y escritorios de la línea WORK, sistema de archivo Modul y mobiliario de recepción y espera. Todo el catálogo con conformidad documentada y presupuesto en 24 horas laborables.'
        }
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Productos', to: '/productos' },
          ...(categoriaUnica ? [{ label: categoriaUnica.nombre }] : []),
        ]}
      />

      <Section tone="white" padding="md">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <aside aria-label="Filtros del catálogo">
            <ProductFilters filtros={filtros} onToggle={alternar} onLimpiar={limpiar} total={resultados.length} />
          </aside>

          <div>
            {/* Cabecera de resultados */}
            <div className="flex flex-col gap-4 border-b border-graphite-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-graphite-500" role="status" aria-live="polite">
                <strong className="font-semibold text-graphite">{resultados.length}</strong>{' '}
                {resultados.length === 1 ? 'producto' : 'productos'}
                {resultados.length !== productos.length && (
                  <span className="text-graphite-300"> de {productos.length} en catálogo</span>
                )}
              </p>
              <a
                href="#presupuesto-catalogo"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:underline underline-offset-4"
              >
                ¿Ya tiene un presupuesto guardado? Consulte su estado
                <Icon name="flechaDerecha" size={16} />
              </a>
            </div>

            {/* Chips de filtros activos */}
            {(etiquetasActivas.length > 0 || consulta) && (
              <ul className="mt-5 flex flex-wrap items-center gap-2">
                {consulta && (
                  <li>
                    <button
                      type="button"
                      onClick={quitarConsulta}
                      className="inline-flex items-center gap-2 rounded-full border border-graphite-200 px-3 py-1.5 text-xs text-graphite-600 transition-colors hover:border-graphite-500"
                    >
                      Búsqueda: “{consulta}”
                      <Icon name="cerrar" size={12} />
                      <span className="sr-only">Quitar búsqueda</span>
                    </button>
                  </li>
                )}
                {etiquetasActivas.map((etiqueta) => (
                  <li key={`${etiqueta.grupo}-${etiqueta.id}`}>
                    <button
                      type="button"
                      onClick={() => alternar(etiqueta.grupo, etiqueta.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary-50 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      {etiqueta.label}
                      <Icon name="cerrar" size={12} />
                      <span className="sr-only">Quitar filtro {etiqueta.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Grid de productos */}
            {visibles.length > 0 ? (
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
                {visibles.map((producto) => (
                  <li key={producto.slug}>
                    <ProductCard producto={producto} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-12 border border-dashed border-graphite-200 px-6 py-16 text-center">
                <h2 className="text-lg font-semibold text-graphite">
                  Ningún producto coincide con esa combinación de filtros
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-graphite-500">
                  Pruebe a quitar alguno de los filtros aplicados. Si busca una referencia concreta que no aparece
                  en el catálogo web, consúltenos: trabajamos con más de 200 referencias de oficina.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button onClick={limpiar} variant="solid" onBg="light" size="sm">
                    Limpiar filtros
                  </Button>
                  <Button to="/contacto" variant="outline" onBg="light" size="sm">
                    Consultar disponibilidad
                  </Button>
                </div>
              </div>
            )}

            <Pagination paginaActual={paginaSegura} totalPaginas={totalPaginas} onCambiar={setPagina} />
          </div>
        </div>
      </Section>

      {/* Bloque oscuro de cierre — mantiene el patrón zebra en la página de listado */}
      <Section tone="dark" padding="md" id="presupuesto-catalogo">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary-200">Presupuestos</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              ¿No encuentra la referencia o ya tiene un presupuesto abierto?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              El catálogo web recoge una selección de las 204 referencias de oficina disponibles. Escríbanos con la
              referencia o el número de presupuesto y le respondemos el mismo día laborable.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/contacto" variant="solid" onBg="dark">
              Solicitar presupuesto
            </Button>
            <Button href="#" variant="outline" onBg="dark">
              Consultar estado
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
