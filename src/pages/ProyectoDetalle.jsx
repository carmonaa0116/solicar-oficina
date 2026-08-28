import { useParams } from 'react-router-dom';
import Section, { SectionHeading } from '../components/Section';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import ProjectCard from '../components/ProjectCard';
import NoEncontrado from './NoEncontrado';
import proyectos, { getProyectoPorSlug } from '../data/proyectos';
import { getProductoPorSlug } from '../data/productos';
import { placeholderImage } from '../utils/placeholder';

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const proyecto = getProyectoPorSlug(slug);

  if (!proyecto) return <NoEncontrado mensaje="No hemos encontrado ese proyecto." />;

  const productosUsados = proyecto.productos.map(getProductoPorSlug).filter(Boolean);
  const otros = proyectos.filter((p) => p.slug !== proyecto.slug).slice(0, 3);

  const datos = [
    { icono: 'pin', etiqueta: 'Ubicación', valor: proyecto.ubicacion },
    { icono: 'cuadricula', etiqueta: 'Superficie', valor: proyecto.superficie },
    { icono: 'regla', etiqueta: 'Puestos instalados', valor: `${proyecto.puestos}` },
    { icono: 'reloj', etiqueta: 'Plazo de ejecución', valor: proyecto.plazo },
  ];

  return (
    <>
      {/* Cabecera oscura */}
      <Section tone="dark" padding="md">
        <Breadcrumbs
          items={[
            { label: 'Inicio', to: '/' },
            { label: 'Proyectos', to: '/proyectos' },
            { label: proyecto.cliente },
          ]}
          tone="dark"
          className="mb-8"
        />
        <div className="max-w-3xl">
          <p className="eyebrow text-primary-200">
            {proyecto.sector} · {proyecto.anio}
          </p>
          <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">{proyecto.cliente}</h1>
          <p className="mt-4 text-lg text-white/80">{proyecto.nombre}</p>
          <p className="mt-6 text-base leading-relaxed text-white/70">{proyecto.resumen}</p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 lg:grid-cols-4">
          {datos.map((dato) => (
            <div key={dato.etiqueta} className="flex items-start gap-3">
              <Icon name={dato.icono} size={20} className="mt-0.5 shrink-0 text-primary-200" />
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-white/50">{dato.etiqueta}</dt>
                <dd className="mt-1 text-lg font-semibold text-white">{dato.valor}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Section>

      {/* Imagen principal a sangre */}
      <div className="relative h-64 w-full overflow-hidden sm:h-96 lg:h-[520px]">
        <img
          src={proyecto.galeria[0].src}
          alt={proyecto.galeria[0].alt}
          className="h-full w-full object-cover"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: `${proyecto.cliente} — vista general`, width: 1400, height: 900, kind: 'proyecto' });
          }}
        />
      </div>

      {/* Relato del proyecto */}
      <Section tone="white" padding="lg">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="El proyecto" title="Contexto, necesidad y solución" />

            <div className="mt-8 space-y-8">
              {[
                { titulo: 'Punto de partida', texto: proyecto.contexto },
                { titulo: 'La necesidad', texto: proyecto.necesidad },
                { titulo: 'La solución', texto: proyecto.solucion },
                { titulo: 'El resultado', texto: proyecto.resultado },
              ].map((bloque) => (
                <div key={bloque.titulo}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{bloque.titulo}</h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite-600">{bloque.texto}</p>
                </div>
              ))}
            </div>

            {proyecto.cita && (
              <figure className="mt-12 border-l-2 border-primary bg-sand p-8">
                <blockquote className="text-lg font-medium leading-relaxed text-graphite">
                  «{proyecto.cita.texto}»
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-wider text-graphite-400">
                  {proyecto.cita.autor}
                </figcaption>
              </figure>
            )}
          </div>

          {/* Galería lateral */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">Galería</h2>
            <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-1">
              {proyecto.galeria.slice(1).map((imagen) => (
                <li key={imagen.src} className="aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(evento) => {
                      evento.currentTarget.onerror = null;
                      evento.currentTarget.src = placeholderImage({ text: proyecto.cliente, width: 900, height: 700, kind: 'ambiente' });
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Productos usados */}
      <Section tone="sand" padding="lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Equipamiento"
            title="Productos instalados en este proyecto"
            description="Todas las referencias siguen disponibles en catálogo. Pulse en cualquiera para ver su ficha técnica completa."
          />
          <Button to="/productos" variant="outline" onBg="light" size="sm" className="shrink-0">
            Ver catálogo completo
          </Button>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {productosUsados.map((producto) => (
            <li key={producto.slug}>
              <ProductCard producto={producto} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Otros proyectos */}
      <Section tone="white" padding="lg">
        <SectionHeading eyebrow="Seguir explorando" title="Otros proyectos instalados" />
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((otro) => (
            <li key={otro.slug}>
              <ProjectCard proyecto={otro} compacta />
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA de cierre */}
      <Section tone="dark" padding="lg">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Siguiente paso"
            title="¿Necesita un proyecto similar?"
            description="Visitamos el espacio, medimos y le entregamos una propuesta de distribución con presupuesto cerrado y plazos comprometidos."
            tone="dark"
          />
          <div className="shrink-0">
            <Button to="/contacto" variant="solid" onBg="dark" size="lg">
              Solicita un proyecto similar
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
