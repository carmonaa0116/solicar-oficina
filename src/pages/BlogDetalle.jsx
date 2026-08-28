import { useParams } from 'react-router-dom';
import Section, { SectionHeading } from '../components/Section';
import Breadcrumbs from '../components/Breadcrumbs';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import NoEncontrado from './NoEncontrado';
import { getPostPorSlug, getPostsRelacionados } from '../data/blog';
import { redesSociales } from '../data/sitio';
import { placeholderImage } from '../utils/placeholder';

export default function BlogDetalle() {
  const { slug } = useParams();
  const post = getPostPorSlug(slug);

  if (!post) return <NoEncontrado mensaje="No hemos encontrado ese artículo." />;

  const relacionados = getPostsRelacionados(post.relacionados);

  return (
    <>
      {/* Cabecera */}
      <Section tone="dark" padding="md">
        <Breadcrumbs
          items={[{ label: 'Inicio', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.titulo }]}
          tone="dark"
          className="mb-8"
        />
        <div className="max-w-3xl">
          <p className="eyebrow text-primary-200">{post.categoria}</p>
          <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">{post.titulo}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{post.extracto}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span>
              Por <strong className="font-medium text-white">{post.autor}</strong> · {post.cargo}
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />
            <time dateTime={post.fecha}>{post.fechaTexto}</time>
            <span aria-hidden="true" className="hidden h-4 w-px bg-white/25 sm:block" />
            <span>{post.tiempoLectura} de lectura</span>
          </div>
        </div>
      </Section>

      {/* Imagen destacada a sangre */}
      <div className="relative h-56 w-full overflow-hidden sm:h-80 lg:h-[460px]">
        <img
          src={post.imagen}
          alt={`Imagen destacada del artículo: ${post.titulo}`}
          className="h-full w-full object-cover"
          onError={(evento) => {
            evento.currentTarget.onerror = null;
            evento.currentTarget.src = placeholderImage({ text: post.titulo, width: 1200, height: 750, kind: 'blog' });
          }}
        />
      </div>

      {/* Cuerpo */}
      <Section tone="white" padding="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
          <article className="max-w-2xl">
            {post.cuerpo.map((bloque, i) => {
              if (bloque.tipo === 'subtitulo') {
                return (
                  <h2 key={i} className="mt-12 text-2xl leading-snug text-graphite first:mt-0">
                    {bloque.texto}
                  </h2>
                );
              }
              if (bloque.tipo === 'lista') {
                return (
                  <ul key={i} className="mt-6 space-y-3">
                    {bloque.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-graphite-600">
                        <Icon name="check" size={18} className="mt-1 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (bloque.tipo === 'cita') {
                return (
                  <blockquote
                    key={i}
                    className="mt-10 border-l-2 border-primary bg-sand px-8 py-6 text-lg font-medium leading-relaxed text-graphite"
                  >
                    «{bloque.texto}»
                  </blockquote>
                );
              }
              return (
                <p key={i} className="mt-6 text-base leading-relaxed text-graphite-600 first:mt-0">
                  {bloque.texto}
                </p>
              );
            })}

            <div className="mt-12 border-t border-graphite-100 pt-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">Compartir</p>
              <ul className="mt-4 flex items-center gap-3">
                {redesSociales.map((red) => (
                  <li key={red.nombre}>
                    <a
                      href={red.href}
                      aria-label={`Compartir en ${red.nombre}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <Icon name={red.icono} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Columna lateral */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-graphite-100 p-6">
              <h2 className="text-lg font-semibold text-graphite">¿Está equipando una oficina?</h2>
              <p className="mt-3 text-sm leading-relaxed text-graphite-500">
                Le ayudamos a dimensionar el proyecto, elegir referencias y cerrar plazos. Presupuesto en 24 horas
                laborables.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button to="/contacto" variant="solid" onBg="light" size="sm">
                  Solicitar presupuesto
                </Button>
                <Button to="/productos" variant="outline" onBg="light" size="sm">
                  Ver catálogo
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Artículos relacionados */}
      {relacionados.length > 0 && (
        <Section tone="sand" padding="lg">
          <SectionHeading eyebrow="Seguir leyendo" title="Artículos relacionados" />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((relacionado) => (
              <li key={relacionado.slug}>
                <BlogCard post={relacionado} />
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button to="/blog" variant="outline" onBg="light">
              Ver todos los artículos
            </Button>
          </div>
        </Section>
      )}
    </>
  );
}
