import { Link } from 'react-router-dom';
import Icon from './Icon';
import { placeholderImage } from '../utils/placeholder';

/** Tarjeta de entrada de blog para el listado y el bloque de relacionados. */
export default function BlogCard({ post }) {
  return (
    <article className="group relative flex h-full flex-col bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <img
          src={post.imagen}
          alt={`Imagen destacada del artículo: ${post.titulo}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: post.titulo, width: 1200, height: 750, kind: 'blog' });
          }}
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{post.categoria}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-graphite">
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.titulo}
          </Link>
        </h3>
        <p className="mt-2 text-xs text-graphite-300">
          <time dateTime={post.fecha}>{post.fechaTexto}</time> · {post.tiempoLectura} de lectura
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-500">{post.extracto}</p>

        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          Leer más
          <Icon name="flechaDerecha" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
