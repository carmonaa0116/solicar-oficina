import Section, { SectionHeading } from '../components/Section';
import PageHero from '../components/PageHero';
import BrandCard from '../components/BrandCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { esContenidoPlaceholder, introMarcas, marcas } from '../data/marcas';

/*
 * ⚠️ CONTENIDO PLACEHOLDER
 * El listado de marcas procede de src/data/marcas.js y es contenido de ejemplo:
 * todavía no está decidido qué marcas representará o distribuirá Solicar. Para
 * sustituirlo basta con editar ese archivo de datos; esta página no necesita
 * ningún cambio de layout. Ver la cabecera de src/data/marcas.js.
 */
export default function Marcas() {
  return (
    <>
      <PageHero
        eyebrow="Marcas relacionadas"
        titulo={introMarcas.titulo}
        descripcion={introMarcas.texto}
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Marcas' }]}
      />

      <Section tone="white" padding="lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Fabricantes"
            title="Marcas del sector"
            description="Referencias internacionales en sillería y mobiliario de espacios de trabajo."
          />
          <p className="shrink-0 text-sm text-graphite-400">
            <strong className="font-semibold text-graphite">{marcas.length}</strong> marcas
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {marcas.map((marca) => (
            <li key={marca.id}>
              <BrandCard marca={marca} />
            </li>
          ))}
        </ul>

        {/* Aviso discreto de contenido pendiente de sustituir */}
        {esContenidoPlaceholder && (
          <aside className="mt-12 flex items-start gap-3 border-t border-graphite-100 pt-6 text-xs leading-relaxed text-graphite-400">
            <Icon name="documento" size={16} className="mt-0.5 shrink-0" />
            <p>
              <strong className="font-semibold text-graphite-500">Nota de maquetación.</strong> Este listado es
              contenido de ejemplo, pendiente de sustituir por las marcas que Solicar represente o distribuya
              finalmente. No implica ninguna relación comercial con las marcas mostradas. El contenido se edita en
              un único archivo de datos, sin tocar el diseño de la página.
            </p>
          </aside>
        )}
      </Section>

      <Section tone="dark" padding="lg">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="¿Fabricante o distribuidor?"
            title="¿Le interesa distribuir su producto en Castilla-La Mancha?"
            description="Solicar cuenta con almacén propio en Daimiel, red comercial B2B y experiencia en licitación pública. Si representa a una marca de mobiliario de oficina, hablemos."
            tone="dark"
          />
          <div className="shrink-0">
            <Button to="/contacto" variant="solid" onBg="dark">
              Contactar con el equipo comercial
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
