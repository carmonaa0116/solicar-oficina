/**
 * Selector horizontal de modelo / variante ("Elige tu modelo").
 * Miniaturas con etiqueta debajo y estado seleccionado visible.
 */
export default function VariantSelector({ variantes = [], seleccionada, onSeleccionar, titulo = 'Elige tu modelo' }) {
  if (!variantes.length) return null;

  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">{titulo}</h3>
      <ul className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-1" role="radiogroup" aria-label={titulo}>
        {variantes.map((variante) => {
          const activa = variante.id === seleccionada;
          return (
            <li key={variante.id} className="w-40 shrink-0">
              <button
                type="button"
                role="radio"
                aria-checked={activa}
                onClick={() => onSeleccionar(variante.id)}
                className={`flex h-full w-full flex-col border p-3 text-left transition-colors ${
                  activa ? 'border-primary bg-primary-50' : 'border-graphite-200 hover:border-graphite-400'
                }`}
              >
                <span className="text-sm font-semibold text-graphite">{variante.nombre}</span>
                <span className="mt-1 text-xs leading-snug text-graphite-400">{variante.descripcion}</span>
                <span className="mt-2 text-[10px] uppercase tracking-wider text-graphite-300">
                  {variante.referencia}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
