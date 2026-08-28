import { acabadosPorId } from '../data/productos';

/**
 * Selector de acabado / tapizado: círculos de color clicables con estado
 * seleccionado y etiqueta del acabado activo.
 */
export default function ColorSwatchSelector({
  disponibles = [],
  seleccionado,
  onSeleccionar,
  titulo = 'Selecciona el acabado',
}) {
  if (!disponibles.length) return null;
  const activo = acabadosPorId[seleccionado];

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">{titulo}</h3>
        {activo && <p className="text-sm text-graphite-500">{activo.nombre}</p>}
      </div>

      <ul className="mt-4 flex flex-wrap items-center gap-3" role="radiogroup" aria-label={titulo}>
        {disponibles.map((id) => {
          const acabado = acabadosPorId[id];
          if (!acabado) return null;
          const esActivo = id === seleccionado;
          return (
            <li key={id}>
              <button
                type="button"
                role="radio"
                aria-checked={esActivo}
                aria-label={acabado.nombre}
                title={acabado.nombre}
                onClick={() => onSeleccionar(id)}
                className={`block h-10 w-10 rounded-full border transition-all ${
                  esActivo
                    ? 'border-primary ring-2 ring-primary ring-offset-2'
                    : 'border-graphite-200 hover:border-graphite-500'
                }`}
                style={{ backgroundColor: acabado.hex }}
              />
            </li>
          );
        })}
        <li>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-graphite-300 text-lg leading-none text-graphite-400 transition-colors hover:border-primary hover:text-primary"
            aria-label="Consultar más acabados disponibles bajo pedido"
            title="Más acabados bajo pedido"
          >
            +
          </button>
        </li>
      </ul>
      <p className="mt-3 text-xs text-graphite-400">
        Carta completa de tapicerías y melaminas disponible bajo pedido. Consulte plazos para acabados especiales.
      </p>
    </div>
  );
}
