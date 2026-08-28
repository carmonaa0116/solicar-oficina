import Icon from './Icon';
import { useCart } from '../context/CartContext';

/** Icono de cesta del header, con badge numérico de `totalItems`. */
export default function CartIcon() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={(evento) => openCart(evento.currentTarget)}
      className="relative p-2 text-graphite-500 transition-colors hover:text-primary"
      aria-label={
        totalItems > 0
          ? `Abrir cesta de presupuesto, ${totalItems} producto${totalItems === 1 ? '' : 's'}`
          : 'Abrir cesta de presupuesto'
      }
    >
      <Icon name="carrito" size={20} />
      {totalItems > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-white"
        >
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
}
