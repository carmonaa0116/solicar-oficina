import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { acabadosPorId } from '../data/productos';

/*
 * Cesta de presupuesto de Solicar Oficina.
 *
 * No es un carrito de compra: es una lista de líneas de producto (con su
 * variante/acabado) que el usuario va guardando mientras navega el catálogo,
 * para solicitar presupuesto de todo a la vez en /presupuesto en lugar de
 * producto a producto.
 *
 * Persiste en localStorage bajo CLAVE_STORAGE. La lectura/escritura está
 * protegida con try/catch: si localStorage no está disponible o el JSON está
 * corrupto, la cesta arranca vacía en lugar de romper la app.
 */

const CartContext = createContext(null);
const CLAVE_STORAGE = 'solicar-oficina-cesta';

function leerCestaInicial() {
  try {
    const guardado = window.localStorage.getItem(CLAVE_STORAGE);
    if (!guardado) return [];
    const datos = JSON.parse(guardado);
    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

let contadorRespaldo = 0;
function generarIdLinea() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  contadorRespaldo += 1;
  return `linea-${Date.now()}-${contadorRespaldo}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(leerCestaInicial);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(CLAVE_STORAGE, JSON.stringify(items));
    } catch {
      // localStorage no disponible (modo privado, cuota superada...): se ignora,
      // la cesta sigue funcionando solo en memoria durante la sesión.
    }
  }, [items]);

  function addItem(producto, opciones = {}) {
    const { varianteId = null, acabadoId = null, cantidad = 1 } = opciones;
    const variante = producto.variantes?.find((v) => v.id === varianteId) ?? null;
    const acabado = acabadoId ? acabadosPorId[acabadoId] : null;
    const referencia = variante?.referencia ?? producto.referencia;
    const cantidadSegura = Math.max(1, Math.round(cantidad) || 1);

    setItems((actuales) => {
      const indiceExistente = actuales.findIndex(
        (linea) =>
          linea.productoId === producto.slug &&
          (linea.variante?.id ?? null) === (variante?.id ?? null) &&
          (linea.acabado?.id ?? null) === (acabado?.id ?? null),
      );

      if (indiceExistente !== -1) {
        return actuales.map((linea, i) =>
          i === indiceExistente ? { ...linea, cantidad: linea.cantidad + cantidadSegura } : linea,
        );
      }

      const nuevaLinea = {
        id: generarIdLinea(),
        productoId: producto.slug,
        nombre: producto.nombre,
        referencia,
        variante: variante ? { id: variante.id, nombre: variante.nombre } : null,
        acabado: acabado ? { id: acabado.id, nombre: acabado.nombre, hex: acabado.hex } : null,
        cantidad: cantidadSegura,
        imagen: producto.imagen,
      };
      return [...actuales, nuevaLinea];
    });
  }

  function removeItem(lineaId) {
    setItems((actuales) => actuales.filter((linea) => linea.id !== lineaId));
  }

  function updateQuantity(lineaId, cantidad) {
    const cantidadSegura = Math.max(1, Math.round(cantidad) || 1);
    setItems((actuales) =>
      actuales.map((linea) => (linea.id === lineaId ? { ...linea, cantidad: cantidadSegura } : linea)),
    );
  }

  function clearCart() {
    setItems([]);
  }

  /** Abre el drawer; `trigger` es el elemento que devuelve el foco al cerrar. */
  function openCart(trigger) {
    if (trigger) triggerRef.current = trigger;
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
    triggerRef.current?.focus?.();
    triggerRef.current = null;
  }

  const totalItems = useMemo(() => items.reduce((suma, linea) => suma + linea.cantidad, 0), [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    isOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const contexto = useContext(CartContext);
  if (!contexto) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return contexto;
}

export default CartContext;
