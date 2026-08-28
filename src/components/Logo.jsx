import { Link } from 'react-router-dom';

/**
 * Logotipo tipográfico provisional de Solicar Oficina.
 * TODO: sustituir por el logotipo oficial de Solicar Didácticos S.L. (SVG).
 */
export default function Logo({ tone = 'light', className = '' }) {
  const principal = tone === 'dark' ? 'text-white' : 'text-primary';
  const secundario = tone === 'dark' ? 'text-white/60' : 'text-graphite-400';
  const separador = tone === 'dark' ? 'bg-white/30' : 'bg-graphite-200';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Solicar Oficina — ir a la página de inicio"
    >
      <span className={`text-2xl font-bold leading-none tracking-tight ${principal}`}>solicar</span>
      <span className={`h-6 w-px ${separador}`} aria-hidden="true" />
      <span className={`text-[11px] font-semibold uppercase leading-none tracking-widest ${secundario}`}>
        Oficina
      </span>
    </Link>
  );
}
