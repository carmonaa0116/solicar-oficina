/**
 * Bloque full-width del patrón "zebra".
 *
 * Toda la home y las páginas de listado se construyen apilando <Section> con
 * `tone` alterno claro / oscuro. Centralizar aquí los fondos garantiza que el
 * ritmo visual sea consistente y que un cambio de tokens se propague solo.
 *
 * @param {'white'|'sand'|'dark'|'primary'} tone
 * @param {boolean} bleed  Si true, el contenido no se envuelve en el contenedor
 *                         de ancho máximo (para imágenes a sangre).
 */
const TONES = {
  white: 'bg-white text-graphite',
  sand: 'bg-sand text-graphite',
  dark: 'bg-graphite text-white on-dark',
  primary: 'bg-primary-800 text-white on-dark',
};

const PADDING = {
  none: '',
  sm: 'py-10 sm:py-14',
  md: 'py-14 sm:py-20',
  lg: 'py-20 sm:py-28',
};

export default function Section({
  tone = 'white',
  padding = 'md',
  bleed = false,
  id,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
  children,
  ...props
}) {
  return (
    <Tag id={id} className={`w-full ${TONES[tone]} ${PADDING[padding]} ${className}`} {...props}>
      {bleed ? children : <div className={`container-solicar ${containerClassName}`}>{children}</div>}
    </Tag>
  );
}

/** Antetítulo + titular + texto de apoyo, con el mismo ritmo en todo el sitio. */
export function SectionHeading({ eyebrow, title, description, tone = 'light', align = 'left', className = '' }) {
  const muted = tone === 'dark' ? 'text-white/70' : 'text-graphite-400';
  const accent = tone === 'dark' ? 'text-primary-200' : 'text-primary';
  const alignment = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl';

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && <p className={`eyebrow ${accent}`}>{eyebrow}</p>}
      {title && <h2 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>}
      {description && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${muted}`}>{description}</p>}
    </div>
  );
}
