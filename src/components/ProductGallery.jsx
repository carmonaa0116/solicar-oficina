import { useState } from 'react';
import Icon from './Icon';
import { placeholderImage } from '../utils/placeholder';

/**
 * Carrusel simple de imágenes de producto: imagen grande + flechas + miniaturas.
 * Sin dependencias externas y navegable con teclado.
 */
export default function ProductGallery({ imagenes = [], nombre = '' }) {
  const [indice, setIndice] = useState(0);
  const [nombreAnterior, setNombreAnterior] = useState(nombre);
  const total = imagenes.length;

  // Reinicio de estado durante el render al cambiar de producto (patrón
  // recomendado por React frente a un useEffect que provoca doble render).
  if (nombre !== nombreAnterior) {
    setNombreAnterior(nombre);
    setIndice(0);
  }

  if (!total) return null;

  const ir = (delta) => setIndice((i) => (i + delta + total) % total);

  function teclas(evento) {
    if (evento.key === 'ArrowRight') {
      evento.preventDefault();
      ir(1);
    }
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      ir(-1);
    }
  }

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carrusel"
        aria-label={`Imágenes de ${nombre}`}
        tabIndex={0}
        onKeyDown={teclas}
        className="relative aspect-square overflow-hidden bg-sand"
      >
        <img
          src={imagenes[indice].src}
          alt={imagenes[indice].alt}
          className="h-full w-full object-cover"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: nombre, width: 900, height: 900, kind: 'producto' });
          }}
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => ir(-1)}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-graphite shadow-sm transition-colors hover:bg-white"
            >
              <Icon name="flechaIzquierda" size={20} />
            </button>
            <button
              type="button"
              onClick={() => ir(1)}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-graphite shadow-sm transition-colors hover:bg-white"
            >
              <Icon name="flechaDerecha" size={20} />
            </button>

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
              {imagenes.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndice(i)}
                  aria-label={`Ir a la imagen ${i + 1} de ${total}`}
                  aria-current={i === indice ? 'true' : undefined}
                  className={`h-2 rounded-full transition-all ${
                    i === indice ? 'w-6 bg-primary' : 'w-2 bg-white/80 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {imagenes.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ver ${img.alt}`}
                className={`block aspect-square w-full overflow-hidden border-2 transition-colors ${
                  i === indice ? 'border-primary' : 'border-transparent hover:border-graphite-200'
                }`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(evento) => {
                    evento.currentTarget.onerror = null;
                    evento.currentTarget.src = placeholderImage({ text: nombre, width: 900, height: 900, kind: 'producto' });
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
