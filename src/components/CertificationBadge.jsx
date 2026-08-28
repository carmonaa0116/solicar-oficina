/**
 * Badge circular de certificación superpuesto en la esquina de las imágenes de
 * producto (equivalente funcional del badge "EPD" de la referencia de diseño).
 *
 * Valores previstos: 'UNE-EN' · 'REACH' · 'Stock en Daimiel'.
 * TODO: sustituir el texto por la iconografía propia cuando esté diseñada.
 */
const ESTILOS = {
  'UNE-EN': 'bg-primary text-white border-primary',
  REACH: 'bg-white text-primary border-primary',
  'Stock en Daimiel': 'bg-graphite text-white border-graphite',
};

const ETIQUETAS_LARGAS = {
  'UNE-EN': 'Producto conforme a norma UNE-EN',
  REACH: 'Materiales con declaración de conformidad REACH',
  'Stock en Daimiel': 'Referencia con stock permanente en el almacén de Daimiel',
};

export default function CertificationBadge({ tipo, size = 'md', className = '' }) {
  if (!tipo) return null;

  const dimensiones = size === 'sm' ? 'h-11 w-11 text-[8px]' : 'h-14 w-14 text-[9px]';
  const estilo = ESTILOS[tipo] ?? 'bg-white text-graphite border-graphite-200';
  const corta = tipo === 'Stock en Daimiel' ? 'Stock Daimiel' : tipo;

  return (
    <span
      title={ETIQUETAS_LARGAS[tipo] ?? tipo}
      className={`flex ${dimensiones} shrink-0 items-center justify-center rounded-full border px-1 text-center font-bold uppercase leading-tight tracking-wide ${estilo} ${className}`}
    >
      <span className="sr-only">{ETIQUETAS_LARGAS[tipo] ?? tipo}</span>
      <span aria-hidden="true">{corta}</span>
    </span>
  );
}
