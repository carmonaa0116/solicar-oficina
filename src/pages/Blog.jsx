import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Section, { SectionHeading } from '../components/Section';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import posts from '../data/blog';
import { placeholderImage } from '../utils/placeholder';

export default function Blog() {
  const [categoria, setCategoria] = useState('todas');

  const categorias = useMemo(() => ['todas', ...new Set(posts.map((p) => p.categoria))], []);
  const visibles = categoria === 'todas' ? posts : posts.filter((p) => p.categoria === categoria);

  const destacado = posts[0];
  const resto = visibles.filter((p) => p.slug !== destacado.slug || categoria !== 'todas');

  return (
    <>
      <PageHero
        eyebrow="Blog"
        titulo="Ergonomía, normativa y diseño de espacios de trabajo"
        descripcion="Artículos prácticos sobre cómo elegir, equipar y mantener el mobiliario de una oficina: lo que aprendemos en cada instalación, puesto por escrito."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Blog' }]}
      />

      {/* Artículo destacado */}
      {categoria === 'todas' && (
        <Section tone="white" padding="md">
          <article className="group grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <img
                src={destacado.imagen}
                alt={`Imagen destacada del artículo: ${destacado.titulo}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(evento) => {
                  evento.currentTarget.onerror = null;
                  evento.currentTarget.src = placeholderImage({ text: destacado.titulo, width: 1200, height: 750, kind: 'blog' });
                }}
              />
              <span className="absolute left-0 top-4 bg-primary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                Último artículo
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow text-primary">{destacado.categoria}</p>
              <h2 className="mt-4 text-2xl leading-tight sm:text-3xl lg:text-4xl">
                <Link to={`/blog/${destacado.slug}`}>{destacado.titulo}</Link>
              </h2>
              <p className="mt-3 text-xs text-graphite-300">
                <time dateTime={destacado.fecha}>{destacado.fechaTexto}</time> · {destacado.autor} ·{' '}
                {destacado.tiempoLectura} de lectura
              </p>
              <p className="mt-5 text-base leading-relaxed text-graphite-500">{destacado.extracto}</p>
              <div className="mt-8">
                <Button to={`/blog/${destacado.slug}`} variant="solid" onBg="light">
                  Leer el artículo
                </Button>
              </div>
            </div>
          </article>
        </Section>
      )}

      {/* Listado */}
      <Section tone="sand" padding="lg">
        <div className="flex flex-col gap-5 border-b border-graphite-200/70 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-2" aria-label="Filtrar artículos por categoría">
            {categorias.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setCategoria(c)}
                  aria-pressed={categoria === c}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    categoria === c
                      ? 'border-primary bg-primary text-white'
                      : 'border-graphite-200 bg-white text-graphite-500 hover:border-graphite-500'
                  }`}
                >
                  {c === 'todas' ? 'Todas' : c}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-sm text-graphite-500" role="status" aria-live="polite">
            <strong className="font-semibold text-graphite">{visibles.length}</strong>{' '}
            {visibles.length === 1 ? 'artículo' : 'artículos'}
          </p>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {resto.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Cierre */}
      <Section tone="dark" padding="lg">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="¿Alguna duda concreta?"
            title="Consúltenos antes de comprar, no después"
            description="Si está preparando un pliego, comparando referencias o dimensionando un espacio, escríbanos. Resolver la duda por teléfono nos sale más barato a todos que un cambio de pedido."
            tone="dark"
          />
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to="/contacto" variant="solid" onBg="dark">
              Hablar con un comercial
            </Button>
            <Button to="/productos" variant="outline" onBg="dark">
              <Icon name="cuadricula" size={16} />
              Ver catálogo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
