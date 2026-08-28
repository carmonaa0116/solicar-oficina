import Icon from './Icon';
import { useCart } from '../context/CartContext';
import { placeholderImage } from '../utils/placeholder';

/** Fila individual del CartDrawer: thumbnail, datos, cantidad y quitar. */
export default function CartLineItem({ linea }) {
  const { updateQuantity, removeItem } = useCart();
  const detalle = [linea.variante?.nombre, linea.acabado?.nombre].filter(Boolean).join(' · ');

  return (
    <li className="flex gap-4 py-5">
      <div className="h-20 w-20 shrink-0 overflow-hidden bg-sand">
        <img
          src={linea.imagen}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: linea.nombre, width: 200, height: 200, kind: 'producto' });
          }}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold leading-snug text-graphite">{linea.nombre}</p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-graphite-300">Ref. {linea.referencia}</p>
            {detalle && <p className="mt-1 text-xs text-graphite-400">{detalle}</p>}
          </div>
          <button
            type="button"
            onClick={() => removeItem(linea.id)}
            className="shrink-0 p-1 text-graphite-300 transition-colors hover:text-primary"
            aria-label={`Quitar ${linea.nombre} de la cesta`}
          >
            <Icon name="papelera" size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center border border-graphite-200">
            <button
              type="button"
              onClick={() => updateQuantity(linea.id, linea.cantidad - 1)}
              disabled={linea.cantidad <= 1}
              className="px-2.5 py-1.5 text-graphite-500 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              aria-label={`Reducir cantidad de ${linea.nombre}`}
            >
              <Icon name="menos" size={14} />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-medium text-graphite" aria-live="polite">
              {linea.cantidad}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(linea.id, linea.cantidad + 1)}
              className="px-2.5 py-1.5 text-graphite-500 transition-colors hover:text-primary"
              aria-label={`Aumentar cantidad de ${linea.nombre}`}
            >
              <Icon name="mas" size={14} />
            </button>
          </div>
          <span className="text-xs text-graphite-300">Precio a consultar</span>
        </div>
      </div>
    </li>
  );
}
