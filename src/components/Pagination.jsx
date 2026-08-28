import Icon from './Icon';

/** Paginación numerada clásica (no scroll infinito). */
export default function Pagination({ paginaActual, totalPaginas, onCambiar }) {
  if (totalPaginas <= 1) return null;

  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  const claseBase =
    'flex h-10 min-w-[2.5rem] items-center justify-center border px-2 text-sm transition-colors';

  return (
    <nav aria-label="Paginación del catálogo" className="mt-14 flex justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <button
            type="button"
            onClick={() => onCambiar(paginaActual - 1)}
            disabled={paginaActual === 1}
            aria-label="Página anterior"
            className={`${claseBase} border-graphite-200 text-graphite-500 hover:border-graphite-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-graphite-200`}
          >
            <Icon name="flechaIzquierda" size={16} />
          </button>
        </li>

        {paginas.map((pagina) => (
          <li key={pagina}>
            <button
              type="button"
              onClick={() => onCambiar(pagina)}
              aria-current={pagina === paginaActual ? 'page' : undefined}
              aria-label={`Ir a la página ${pagina}`}
              className={`${claseBase} ${
                pagina === paginaActual
                  ? 'border-primary bg-primary font-semibold text-white'
                  : 'border-graphite-200 text-graphite-500 hover:border-graphite-500'
              }`}
            >
              {pagina}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => onCambiar(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            aria-label="Página siguiente"
            className={`${claseBase} border-graphite-200 text-graphite-500 hover:border-graphite-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-graphite-200`}
          >
            <Icon name="flechaDerecha" size={16} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
