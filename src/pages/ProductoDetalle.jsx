import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Section, { SectionHeading } from '../components/Section';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ProductGallery from '../components/ProductGallery';
import VariantSelector from '../components/VariantSelector';
import ColorSwatchSelector from '../components/ColorSwatchSelector';
import CertificationBadge from '../components/CertificationBadge';
import ProjectCard from '../components/ProjectCard';
import QuoteRequestForm from '../components/QuoteRequestForm';
import NoEncontrado from './NoEncontrado';
import { categoriasPorId, getProductoPorSlug, sectoresPorId } from '../data/productos';
import { getProyectosPorSlugs } from '../data/proyectos';
import { placeholderImage } from '../utils/placeholder';
import { useCart } from '../context/CartContext';

const PESTANAS_ANCLA = [
  { id: 'modelos', label: 'Modelos' },
  { id: 'detalles', label: 'Detalles' },
  { id: 'galeria', label: 'Galería' },
  { id: 'colores', label: 'Colores/Acabados' },
  { id: 'proyectos', label: 'Proyectos' },
];

export default function ProductoDetalle() {
  const { slug } = useParams();
  const producto = getProductoPorSlug(slug);
  const { addItem, openCart } = useCart();

  const [variante, setVariante] = useState(producto?.variantes?.[0]?.id ?? null);
  const [acabado, setAcabado] = useState(producto?.acabados?.[0] ?? null);
  const [cantidad, setCantidad] = useState(1);
  const [pestana, setPestana] = useState('especificaciones');
  const [slugAnterior, setSlugAnterior] = useState(slug);

  // Al navegar a otra ficha se reinician los selectores durante el render
  // (patrón recomendado por React frente a un useEffect de sincronización).
  if (slug !== slugAnterior) {
    setSlugAnterior(slug);
    setVariante(producto?.variantes?.[0]?.id ?? null);
    setAcabado(producto?.acabados?.[0] ?? null);
    setCantidad(1);
    setPestana('especificaciones');
  }

  if (!producto) return <NoEncontrado mensaje="No hemos encontrado ese producto en el catálogo." />;

  const categoria = categoriasPorId[producto.categoria];
  const varianteActiva = producto.variantes.find((v) => v.id === variante) ?? producto.variantes[0];
  const proyectosRelacionados = getProyectosPorSlugs(producto.proyectos).slice(0, 2);

  function anadirAPresupuesto(evento) {
    addItem(producto, { varianteId: varianteActiva?.id ?? null, acabadoId: acabado, cantidad });
    openCart(evento.currentTarget);
  }

  return (
    <>
      {/* Breadcrumb + pestañas ancla */}
      <div className="border-b border-graphite-100 bg-white">
        <div className="container-solicar flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Breadcrumbs
            items={[
              { label: 'Productos', to: '/productos' },
              { label: categoria?.nombre ?? 'Catálogo', to: `/productos?tipo=${producto.categoria}` },
              { label: producto.nombre },
            ]}
          />
          <nav aria-label="Secciones de la ficha de producto" className="-mx-5 lg:mx-0">
            <ul className="no-scrollbar flex gap-6 overflow-x-auto px-5 lg:px-0">
              {PESTANAS_ANCLA.map((p) => (
                <li key={p.id} className="shrink-0">
                  <a
                    href={`#${p.id}`}
                    className="block whitespace-nowrap border-b-2 border-transparent py-1 text-[11px] font-semibold uppercase tracking-wider text-graphite-500 transition-colors hover:border-primary hover:text-primary"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Cabecera de producto */}
      <Section tone="white" padding="md">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery imagenes={producto.galeria} nombre={producto.nombre} />

          <div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-primary">{categoria?.nombre}</p>
                <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">
                  <span className="font-bold">{producto.linea}</span>{' '}
                  <span className="font-normal text-graphite-400">{producto.modelo}</span>
                </h1>
                <p className="mt-2 text-xs uppercase tracking-wider text-graphite-300">
                  Referencia {varianteActiva?.referencia ?? producto.referencia}
                </p>
              </div>
              <CertificationBadge tipo={producto.badge} />
            </div>

            <p className="mt-6 text-base leading-relaxed text-graphite-500">{producto.resumen}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {producto.normativa.map((norma) => (
                <li
                  key={norma}
                  className="border border-graphite-200 px-3 py-1.5 text-[11px] uppercase tracking-wider text-graphite-500"
                >
                  {norma}
                </li>
              ))}
            </ul>

            {/* Selector de modelo */}
            <div id="modelos" className="mt-10 scroll-mt-32 border-t border-graphite-100 pt-8">
              <VariantSelector
                variantes={producto.variantes}
                seleccionada={variante}
                onSeleccionar={setVariante}
              />
            </div>

            {/* Selector de acabado */}
            <div id="colores" className="mt-10 scroll-mt-32 border-t border-graphite-100 pt-8">
              <ColorSwatchSelector
                disponibles={producto.acabados}
                seleccionado={acabado}
                onSeleccionar={setAcabado}
              />
            </div>

            {/* Cantidad + CTAs */}
            <div className="mt-10 border-t border-graphite-100 pt-8">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">Cantidad</span>
                <div className="flex items-center border border-graphite-200">
                  <button
                    type="button"
                    onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                    disabled={cantidad <= 1}
                    className="px-3 py-2 text-graphite-500 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Reducir cantidad"
                  >
                    <Icon name="menos" size={14} />
                  </button>
                  <span className="min-w-[2.5rem] text-center text-sm font-medium text-graphite" aria-live="polite">
                    {cantidad}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCantidad((c) => c + 1)}
                    className="px-3 py-2 text-graphite-500 transition-colors hover:text-primary"
                    aria-label="Aumentar cantidad"
                  >
                    <Icon name="mas" size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="#presupuesto-producto" variant="solid" onBg="light" size="lg">
                  Solicitar presupuesto
                </Button>
                <Button variant="outline" onBg="light" size="lg" onClick={anadirAPresupuesto}>
                  Añadir a presupuesto
                </Button>
                {/* TODO: enlazar con el PDF real de la ficha técnica */}
                <Button href="#" variant="outline" onBg="light" size="lg">
                  <Icon name="descargar" size={16} />
                  Descargar ficha técnica
                </Button>
              </div>
            </div>

            <p className="mt-5 text-xs text-graphite-400">
              Sectores recomendados:{' '}
              {producto.sectores.map((s) => sectoresPorId[s]?.nombre).filter(Boolean).join(' · ')}
            </p>
          </div>
        </div>
      </Section>

      {/* Detalles: Especificaciones / Descargas */}
      <Section tone="sand" padding="md" id="detalles" className="scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Detalles" title="Especificaciones y documentación" />
            <p className="mt-5 text-sm leading-relaxed text-graphite-500">{producto.descripcion}</p>
          </div>

          <div>
            <div role="tablist" aria-label="Detalles del producto" className="flex border-b border-graphite-200">
              {[
                { id: 'especificaciones', label: 'Especificaciones' },
                { id: 'descargas', label: 'Descargas' },
              ].map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={pestana === t.id}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setPestana(t.id)}
                  className={`-mb-px border-b-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pestana === t.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-graphite-400 hover:text-graphite'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {pestana === 'especificaciones' ? (
              <div role="tabpanel" id="panel-especificaciones" aria-labelledby="tab-especificaciones" className="mt-6">
                <dl className="divide-y divide-graphite-200/70 border-y border-graphite-200/70">
                  {producto.especificaciones.map((especificacion) => (
                    <div key={especificacion.label} className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[200px_1fr] sm:gap-6">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-graphite-400">
                        {especificacion.label}
                      </dt>
                      <dd className="text-sm text-graphite">{especificacion.valor}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <div role="tabpanel" id="panel-descargas" aria-labelledby="tab-descargas" className="mt-6">
                <ul className="divide-y divide-graphite-200/70 border-y border-graphite-200/70">
                  {producto.descargas.map((descarga) => (
                    <li key={descarga.nombre}>
                      {/* TODO: sustituir el href por el archivo real (PDF / CAD / certificado) */}
                      <a
                        href={descarga.url}
                        className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                      >
                        <span className="flex items-center gap-3">
                          <Icon name="documento" size={20} className="shrink-0 text-graphite-300 group-hover:text-primary" />
                          <span className="text-sm text-graphite group-hover:text-primary">{descarga.nombre}</span>
                        </span>
                        <span className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-wider text-graphite-400">
                          {descarga.tipo} · {descarga.peso}
                          <Icon name="descargar" size={16} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-graphite-400">
                  Los certificados de ensayo se emiten a nombre del cliente cuando la licitación así lo requiere.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Galería de ambiente */}
      <Section tone="white" padding="md" id="galeria" className="scroll-mt-28">
        <SectionHeading
          eyebrow="Galería"
          title={`${producto.nombre} en uso`}
          description="Imágenes del producto instalado en espacios reales y detalle de materiales y acabados."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {producto.galeria.map((imagen) => (
            <li key={imagen.src} className="aspect-square overflow-hidden bg-sand">
              <img
                src={imagen.src}
                alt={imagen.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(evento) => {
                  evento.currentTarget.onerror = null;
                  evento.currentTarget.src = placeholderImage({ text: producto.nombre, width: 900, height: 900, kind: 'ambiente' });
                }}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* Proyectos relacionados */}
      {proyectosRelacionados.length > 0 && (
        <Section tone="sand" padding="md" id="proyectos" className="scroll-mt-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Proyectos"
              title="Instalaciones donde se ha usado"
              description="Casos reales en los que esta referencia forma parte del equipamiento entregado."
            />
            <Button to="/proyectos" variant="outline" onBg="light" size="sm" className="shrink-0">
              Ver todos
            </Button>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {proyectosRelacionados.map((proyecto) => (
              <li key={proyecto.slug}>
                <ProjectCard proyecto={proyecto} compacta />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Formulario de presupuesto */}
      <Section tone="dark" padding="lg" id="presupuesto-producto" className="scroll-mt-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Presupuesto"
              title={`Solicite precio para ${producto.nombre}`}
              description="Indíquenos las unidades y el acabado que necesita y le enviamos una propuesta cerrada, con plazo de entrega confirmado, en un máximo de 24 horas laborables."
              tone="dark"
            />
            <p className="mt-8 text-sm text-white/60">
              ¿Prefiere hablarlo?{' '}
              <Link to="/contacto" className="text-white underline underline-offset-4">
                Vea nuestros datos de contacto directo
              </Link>
              .
            </p>
          </div>
          <QuoteRequestForm tone="dark" productoPrefijado={producto} idPrefijo={`producto-${producto.slug}`} />
        </div>
      </Section>
    </>
  );
}
