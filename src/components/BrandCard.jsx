import { useState } from 'react';
import Icon from './Icon';

/**
 * Tarjeta de marca. Se intenta mostrar el logotipo real de `marca.logo`; si el
 * archivo todavía no existe en public/images/marcas/ (onError) o la marca no
 * declara `logo`, se recurre al logotipo tipográfico a partir de `iniciales`.
 *
 * ⚠️ El contenido que alimenta este componente (src/data/marcas.js) es
 * placeholder: ver la cabecera de ese archivo.
 */
export default function BrandCard({ marca }) {
  const [logoRoto, setLogoRoto] = useState(false);

  return (
    <article className="flex h-full flex-col border border-graphite-100 bg-white p-6 transition-colors hover:border-graphite-300">
      <div className="flex h-24 items-center justify-center border-b border-graphite-100 pb-6">
        {marca.logo && !logoRoto ? (
          <img
            src={marca.logo}
            alt={`Logotipo de ${marca.nombre}`}
            className="max-h-12 w-auto"
            onError={() => setLogoRoto(true)}
          />
        ) : (
          <span
            aria-hidden="true"
            className="text-2xl font-bold uppercase tracking-tight text-graphite-300"
          >
            {marca.iniciales}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-graphite">{marca.nombre}</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-graphite-300">
        {marca.categoria} · {marca.pais}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-500">{marca.descripcion}</p>

      <a
        href={marca.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 self-start border border-primary px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
      >
        Visitar sitio
        <Icon name="flechaDerecha" size={14} />
        <span className="sr-only">(se abre en una pestaña nueva)</span>
      </a>
    </article>
  );
}
