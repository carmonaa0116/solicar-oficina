import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Devuelve el scroll al inicio al cambiar de ruta, salvo cuando la URL lleva
 * un ancla (#) — necesario para las pestañas de la ficha de producto.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const destino = document.getElementById(hash.slice(1));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
