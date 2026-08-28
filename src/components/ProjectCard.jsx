import { Link } from 'react-router-dom';
import Icon from './Icon';
import { placeholderImage } from '../utils/placeholder';

/** Tarjeta de caso de éxito para el listado /proyectos y bloques relacionados. */
export default function ProjectCard({ proyecto, compacta = false }) {
  return (
    <article className="group relative flex h-full flex-col bg-white">
      <div className={`relative overflow-hidden bg-sand ${compacta ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={proyecto.imagen}
          alt={`Instalación de mobiliario de oficina en ${proyecto.cliente}, ${proyecto.ubicacion}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: `${proyecto.cliente} — ${proyecto.ubicacion}`, width: 1200, height: 800, kind: 'proyecto' });
          }}
        />
        <span className="absolute left-0 top-4 bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
          {proyecto.sector}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs uppercase tracking-wider text-graphite-400">
          {proyecto.ubicacion} · {proyecto.anio}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-graphite">
          <Link to={`/proyectos/${proyecto.slug}`} className="after:absolute after:inset-0">
            {proyecto.cliente}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-graphite-500">{proyecto.nombre}</p>
        {!compacta && <p className="mt-3 text-sm leading-relaxed text-graphite-400">{proyecto.resumen}</p>}

        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          Ver proyecto
          <Icon name="flechaDerecha" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
