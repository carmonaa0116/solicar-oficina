import Breadcrumbs from './Breadcrumbs';
import Section from './Section';

/**
 * Cabecera de página de sección (bloque oscuro del patrón zebra) con migas de
 * pan, antetítulo, titular y texto introductorio.
 */
export default function PageHero({ eyebrow, titulo, descripcion, breadcrumbs = [], children, tone = 'dark' }) {
  return (
    <Section tone={tone} padding="md">
      {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} tone="dark" className="mb-8" />}
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow text-primary-200">{eyebrow}</p>}
        <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">{titulo}</h1>
        {descripcion && <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{descripcion}</p>}
      </div>
      {children}
    </Section>
  );
}
