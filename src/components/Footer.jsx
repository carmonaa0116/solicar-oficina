import { Link } from 'react-router-dom';
import Icon from './Icon';
import Logo from './Logo';
import { columnasFooter, empresa, logosInstitucionales, redesSociales } from '../data/sitio';

/**
 * Footer global: 4 columnas de enlaces + fila social + bloque de contacto +
 * franja de logotipos institucionales + línea legal.
 */
export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-100 bg-sand text-graphite">
      {/* 4 columnas de enlaces */}
      <div className="container-solicar grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4 lg:py-16">
        {columnasFooter.map((columna) => (
          <nav key={columna.titulo} aria-labelledby={`footer-${columna.titulo}`}>
            <h2
              id={`footer-${columna.titulo}`}
              className="text-[11px] font-bold uppercase tracking-widest text-graphite"
            >
              {columna.titulo}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-graphite-500">
              {columna.enlaces.map((enlace) => (
                <li key={enlace.label}>
                  {enlace.to ? (
                    <Link to={enlace.to} className="transition-colors hover:text-primary hover:underline underline-offset-4">
                      {enlace.label}
                    </Link>
                  ) : (
                    <a href={enlace.href} className="transition-colors hover:text-primary hover:underline underline-offset-4">
                      {enlace.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Fila social */}
      <div className="border-t border-graphite-200/70">
        <div className="container-solicar flex flex-col items-center gap-5 py-8">
          <Logo />
          <ul className="flex items-center gap-3">
            {redesSociales.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.href}
                  aria-label={`Solicar en ${red.nombre}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon name={red.icono} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contacto */}
      <div className="border-t border-graphite-200/70">
        <div className="container-solicar flex flex-col items-center gap-3 py-8 text-center text-sm text-graphite-500 md:flex-row md:justify-center md:gap-8">
          <a href={empresa.telefonoHref} className="inline-flex items-center gap-2 hover:text-primary">
            <Icon name="telefono" size={16} />
            {empresa.telefono}
          </a>
          <a href={empresa.emailHref} className="inline-flex items-center gap-2 hover:text-primary">
            <Icon name="sobre" size={16} />
            {empresa.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" size={16} />
            {empresa.direccion}
          </span>
        </div>
      </div>

      {/* Franja institucional */}
      <div className="border-t border-graphite-200/70 bg-white">
        <div className="container-solicar py-8">
          <p className="text-center text-[11px] uppercase tracking-widest text-graphite-400">
            Proyecto apoyado por
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {logosInstitucionales.map((logo) => (
              <img key={logo} src={logo} alt="" className="mx-auto max-h-10 object-contain" />
            ))}
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-graphite-200/70">
        <div className="container-solicar flex flex-col items-center justify-between gap-3 py-6 text-xs text-graphite-400 md:flex-row">
          <p>
            © {anio} {empresa.nombre}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li>
              <Link to="/aviso-legal" className="hover:text-primary hover:underline underline-offset-4">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link to="/politica-privacidad" className="hover:text-primary hover:underline underline-offset-4">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary hover:underline underline-offset-4">
                Gestionar cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
