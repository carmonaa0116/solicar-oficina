import { Link } from 'react-router-dom';
import CertificationBadge from './CertificationBadge';
import Button from './Button';
import { acabadosPorId, categoriasPorId } from '../data/productos';
import { placeholderImage } from '../utils/placeholder';
import { useCart } from '../context/CartContext';

/**
 * Tarjeta de producto del grid de catálogo.
 * Toda la tarjeta es clicable; el badge de certificación se superpone en la
 * esquina superior derecha de la imagen.
 */
export default function ProductCard({ producto }) {
  const categoria = categoriasPorId[producto.categoria];
  const { addItem, openCart } = useCart();

  function anadirAPresupuesto(evento) {
    // La tarjeta entera es un enlace (stretched-link vía ::after en el <h3>);
    // se evita que el clic del botón dispare también la navegación.
    evento.preventDefault();
    evento.stopPropagation();
    addItem(producto, {
      varianteId: producto.variantes?.[0]?.id ?? null,
      acabadoId: producto.acabados?.[0] ?? null,
      cantidad: 1,
    });
    openCart(evento.currentTarget);
  }

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden bg-sand">
        <img
          src={producto.imagen}
          alt={`${producto.nombre} — ${categoria?.nombre ?? 'mobiliario de oficina'} de Solicar`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: producto.nombre, width: 900, height: 900, kind: 'producto' });
          }}
        />
        <div className="absolute right-3 top-3">
          <CertificationBadge tipo={producto.badge} size="sm" />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-base font-bold leading-snug text-graphite">
          <Link to={`/productos/${producto.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {producto.linea}
          </Link>
        </h3>
        <p className="mt-0.5 text-sm text-graphite-400">{producto.modelo}</p>
        <p className="mt-2 text-xs uppercase tracking-wider text-graphite-300">Ref. {producto.referencia}</p>

        {/* Muestra de acabados disponibles */}
        <ul className="mt-3 flex items-center gap-1.5" aria-label="Acabados disponibles">
          {producto.acabados.slice(0, 5).map((id) => {
            const acabado = acabadosPorId[id];
            if (!acabado) return null;
            return (
              <li
                key={id}
                title={acabado.nombre}
                className="h-3.5 w-3.5 rounded-full border border-graphite-200"
                style={{ backgroundColor: acabado.hex }}
              >
                <span className="sr-only">{acabado.nombre}</span>
              </li>
            );
          })}
        </ul>

        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Ver ficha
        </span>

        <Button
          variant="outline"
          onBg="light"
          size="sm"
          className="relative z-10 mt-3 w-full"
          onClick={anadirAPresupuesto}
        >
          Añadir a presupuesto
        </Button>
      </div>
    </article>
  );
}
