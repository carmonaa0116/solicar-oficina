import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import CartLineItem from './CartLineItem';
import { useCart } from '../context/CartContext';

const SELECTOR_FOCUSABLES = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Panel lateral deslizante con el contenido de la cesta de presupuesto.
 * Atrapa el foco mientras está abierto, se cierra con Escape o clic en el
 * overlay, y devuelve el foco al elemento que lo abrió (gestionado por
 * `closeCart` en CartContext).
 */
export default function CartDrawer() {
  const { items, isOpen, closeCart, clearCart } = useCart();
  const panelRef = useRef(null);
  const [confirmarVaciar, setConfirmarVaciar] = useState(false);

  // Resetea la confirmación de "vaciar cesta" cada vez que el drawer cambia de
  // estado (patrón recomendado por React frente a un useEffect de sincronización).
  const [isOpenAnterior, setIsOpenAnterior] = useState(isOpen);
  if (isOpen !== isOpenAnterior) {
    setIsOpenAnterior(isOpen);
    setConfirmarVaciar(false);
  }

  // Bloquea el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previo;
    };
  }, [isOpen]);

  // Foco inicial + trampa de foco (Tab/Shift+Tab) + cierre con Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const panel = panelRef.current;
    if (!panel) return undefined;

    const focoInicial = panel.querySelector(SELECTOR_FOCUSABLES);
    focoInicial?.focus();

    function alPresionarTecla(evento) {
      if (evento.key === 'Escape') {
        evento.stopPropagation();
        closeCart();
        return;
      }
      if (evento.key !== 'Tab') return;

      const focusables = Array.from(panel.querySelectorAll(SELECTOR_FOCUSABLES));
      if (!focusables.length) return;
      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];

      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    }

    document.addEventListener('keydown', alPresionarTecla);
    return () => document.removeEventListener('keydown', alPresionarTecla);
  }, [isOpen, closeCart]);

  function alClicVaciar() {
    if (confirmarVaciar) {
      clearCart();
      setConfirmarVaciar(false);
    } else {
      setConfirmarVaciar(true);
    }
  }

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-graphite-900/50 transition-opacity duration-250 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cesta de presupuesto"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-250 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-graphite-100 px-5 py-4 sm:px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-graphite">Tu solicitud de presupuesto</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-graphite-400 transition-colors hover:text-primary"
            aria-label="Cerrar cesta"
          >
            <Icon name="cerrar" size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-graphite-300">
              <Icon name="carrito" size={26} />
            </span>
            <p className="text-base font-semibold text-graphite">Todavía no ha añadido productos</p>
            <p className="max-w-xs text-sm leading-relaxed text-graphite-400">
              Explore el catálogo y añada las referencias que necesite para solicitar presupuesto de todas a la vez.
            </p>
            <Button to="/productos" variant="solid" onBg="light" size="sm" onClick={closeCart}>
              Ver catálogo
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-graphite-100 overflow-y-auto px-5 sm:px-6">
              {items.map((linea) => (
                <CartLineItem key={linea.id} linea={linea} />
              ))}
            </ul>

            <div className="shrink-0 border-t border-graphite-100 px-5 py-5 sm:px-6">
              <Button to="/presupuesto" variant="solid" onBg="light" size="md" className="w-full" onClick={closeCart}>
                Solicitar presupuesto de esta cesta
              </Button>
              <button
                type="button"
                onClick={alClicVaciar}
                className={`mt-3 w-full text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                  confirmarVaciar ? 'text-primary' : 'text-graphite-400 hover:text-primary'
                }`}
              >
                {confirmarVaciar ? '¿Seguro? Pulse de nuevo para vaciar la cesta' : 'Vaciar cesta'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
