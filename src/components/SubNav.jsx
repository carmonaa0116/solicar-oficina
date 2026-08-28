import { Link, useLocation } from 'react-router-dom';
import { subNav } from '../data/sitio';

/**
 * Sub-barra de navegación de la sección Oficina.
 * Equivale al segundo nivel PRODUCTS/PROJECTS/BRANDS/BLOG de la referencia de
 * diseño: hace que "Solicar Oficina" se lea como una sub-marca dentro del sitio.
 * En móvil se convierte en una tira con scroll horizontal.
 */
export default function SubNav() {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const tipoActual = params.get('tipo');

  function esActivo(destino) {
    const [ruta, query] = destino.split('?');
    if (pathname !== ruta && !pathname.startsWith(`${ruta}/`)) return false;
    if (!query) return !tipoActual || pathname !== '/productos';
    return new URLSearchParams(query).get('tipo') === tipoActual;
  }

  return (
    <div className="border-b border-graphite-100 bg-white">
      <div className="container-solicar flex flex-col gap-2 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <Link
          to="/productos"
          className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-graphite hover:text-primary"
        >
          Solicar Oficina
        </Link>

        <nav aria-label="Navegación de la sección Oficina" className="-mx-5 lg:mx-0">
          <ul className="no-scrollbar flex items-center gap-6 overflow-x-auto px-5 lg:px-0">
            {subNav.map((item) => {
              const activo = esActivo(item.to);
              return (
                <li key={item.to} className="shrink-0">
                  <Link
                    to={item.to}
                    aria-current={activo ? 'page' : undefined}
                    className={`block whitespace-nowrap border-b-2 py-1 text-xs tracking-wider transition-colors ${
                      activo
                        ? 'border-primary font-semibold text-primary'
                        : 'border-transparent text-graphite-500 hover:border-graphite-200 hover:text-graphite'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
