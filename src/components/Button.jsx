import { Link } from 'react-router-dom';

/**
 * Botón del sistema de diseño de Solicar Oficina.
 *
 * Dos variantes fijas en todo el sitio (patrón heredado de la referencia de
 * diseño): sólido para el CTA primario y outline para el secundario.
 *
 * @param {'solid'|'outline'} variant  Estilo del botón.
 * @param {'light'|'dark'} onBg        Fondo sobre el que se dibuja: en fondo
 *                                     oscuro el outline es blanco; en fondo
 *                                     claro, azul corporativo.
 * @param {'sm'|'md'|'lg'} size
 * @param {string} [to]                Ruta interna → renderiza <Link>.
 * @param {string} [href]              URL externa → renderiza <a>.
 */
export default function Button({
  variant = 'solid',
  onBg = 'light',
  size = 'md',
  to,
  href,
  external = false,
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm border font-medium tracking-wider uppercase transition-colors duration-250 disabled:cursor-not-allowed disabled:opacity-50';

  const sizes = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variants = {
    'solid-light': 'border-primary bg-primary text-white hover:bg-primary-700 hover:border-primary-700',
    'solid-dark': 'border-primary bg-primary text-white hover:bg-primary-500 hover:border-primary-500',
    'outline-light': 'border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
    'outline-dark': 'border-white/70 bg-transparent text-white hover:bg-white hover:text-graphite',
  };

  const classes = `${base} ${sizes[size]} ${variants[`${variant}-${onBg}`]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
