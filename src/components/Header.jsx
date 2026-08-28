import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import Button from './Button';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';
import { enlacesUtilidad, navPrincipal } from '../data/sitio';

/**
 * Cabecera global de dos niveles:
 *   1. Barra utilitaria (gris muy claro, texto pequeño, enlaces institucionales).
 *   2. Barra principal (blanca): logo + navegación + buscador + CTA.
 * En móvil la navegación se pliega en un panel desplegable.
 */
export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);
  const [consulta, setConsulta] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Cierra el menú móvil al cambiar de ruta.
  useEffect(() => {
    setAbierto(false);
    setBusquedaAbierta(false);
  }, [location.pathname, location.search]);

  function buscar(evento) {
    evento.preventDefault();
    const termino = consulta.trim();
    navigate(termino ? `/productos?q=${encodeURIComponent(termino)}` : '/productos');
    setConsulta('');
    setBusquedaAbierta(false);
  }

  const enlaceClase = ({ isActive }) =>
    `relative py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
      isActive ? 'text-primary' : 'text-graphite-500 hover:text-primary'
    } after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:bg-primary after:transition-transform ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-graphite-100 bg-white">
        {/* Nivel 1 — barra utilitaria */}
        <div className="hidden bg-sand text-graphite-500 lg:block">
          <div className="container-solicar flex h-9 items-center justify-between text-[11px]">
            <p className="tracking-wider">
              Solicar Didácticos S.L. · Fabricación y distribución de mobiliario desde 1998
            </p>
            <nav aria-label="Enlaces institucionales">
              <ul className="flex items-center gap-6">
                {enlacesUtilidad.map((enlace) => (
                  <li key={enlace.label}>
                    {enlace.to ? (
                      <NavLink to={enlace.to} className="hover:text-primary hover:underline underline-offset-2">
                        {enlace.label}
                      </NavLink>
                    ) : (
                      <a href={enlace.href} className="hover:text-primary hover:underline underline-offset-2">
                        {enlace.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Nivel 2 — barra principal */}
        <div className="container-solicar flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navPrincipal.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={enlaceClase}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Buscador */}
            <form onSubmit={buscar} role="search" className="hidden items-center md:flex">
              <label htmlFor="buscador-escritorio" className="sr-only">
                Buscar productos
              </label>
              <div className="flex items-center border border-graphite-200 focus-within:border-primary">
                <input
                  id="buscador-escritorio"
                  type="search"
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  placeholder="Buscar en el catálogo"
                  className="w-40 bg-transparent px-3 py-2 text-sm text-graphite placeholder:text-graphite-300 focus:outline-none xl:w-52"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-graphite-400 transition-colors hover:text-primary"
                  aria-label="Buscar"
                >
                  <Icon name="buscar" size={18} />
                </button>
              </div>
            </form>

            {/* Buscador compacto en móvil */}
            <button
              type="button"
              onClick={() => setBusquedaAbierta((v) => !v)}
              className="p-2 text-graphite-500 transition-colors hover:text-primary md:hidden"
              aria-expanded={busquedaAbierta}
              aria-controls="buscador-movil"
              aria-label="Abrir buscador"
            >
              <Icon name="buscar" size={20} />
            </button>

            <CartIcon />

            <Button to="/contacto" size="sm" className="hidden sm:inline-flex">
              Solicitar presupuesto
            </Button>

            <button
              type="button"
              onClick={() => setAbierto((v) => !v)}
              className="p-2 text-graphite-600 transition-colors hover:text-primary lg:hidden"
              aria-expanded={abierto}
              aria-controls="menu-movil"
              aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            >
              <Icon name={abierto ? 'cerrar' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Buscador desplegable en móvil */}
        {busquedaAbierta && (
          <form
            id="buscador-movil"
            onSubmit={buscar}
            role="search"
            className="border-t border-graphite-100 bg-sand px-5 py-3 md:hidden"
          >
            <label htmlFor="buscador-movil-input" className="sr-only">
              Buscar productos
            </label>
            <div className="flex items-center border border-graphite-200 bg-white">
              <input
                id="buscador-movil-input"
                type="search"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
                placeholder="Buscar en el catálogo"
                className="w-full bg-transparent px-3 py-2.5 text-sm focus:outline-none"
              />
              <button type="submit" className="px-3 py-2 text-graphite-400" aria-label="Buscar">
                <Icon name="buscar" size={18} />
              </button>
            </div>
          </form>
        )}

        {/* Menú móvil */}
        {abierto && (
          <div id="menu-movil" className="border-t border-graphite-100 bg-white lg:hidden">
            <nav aria-label="Navegación principal (móvil)" className="container-solicar py-4">
              <ul className="flex flex-col divide-y divide-graphite-100">
                {navPrincipal.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block py-3.5 text-sm font-semibold uppercase tracking-wider ${
                          isActive ? 'text-primary' : 'text-graphite-600'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3 border-t border-graphite-100 pt-5">
                <Button to="/contacto" size="sm" className="w-full sm:hidden">
                  Solicitar presupuesto
                </Button>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-graphite-400">
                  {enlacesUtilidad.map((enlace) => (
                    <li key={enlace.label}>
                      {enlace.to ? (
                        <NavLink to={enlace.to}>{enlace.label}</NavLink>
                      ) : (
                        <a href={enlace.href}>{enlace.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
