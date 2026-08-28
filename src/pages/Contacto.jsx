import Section, { SectionHeading } from '../components/Section';
import PageHero from '../components/PageHero';
import QuoteRequestForm from '../components/QuoteRequestForm';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { placeholderImage } from '../utils/placeholder';
import { empresa } from '../data/sitio';

const CANALES = [
  { icono: 'telefono', titulo: 'Teléfono', valor: empresa.telefono, href: empresa.telefonoHref, nota: 'Atención comercial directa, sin centralita.' },
  { icono: 'sobre', titulo: 'Email', valor: empresa.email, href: empresa.emailHref, nota: 'Respuesta en menos de 24 h laborables.' },
  { icono: 'pin', titulo: 'Dirección', valor: empresa.direccion, nota: 'Exposición y almacén. Visitas concertadas.' },
  { icono: 'reloj', titulo: 'Horario', valor: empresa.horario, nota: 'Agosto: horario intensivo de mañana.' },
];

export default function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        titulo="Hablemos de su proyecto"
        descripcion="Cuéntenos qué necesita equipar y le enviamos una propuesta cerrada con plazos confirmados. Para proyectos de más de 10 puestos elaboramos el plano de distribución sin coste."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
      />

      {/* Canales de contacto */}
      <Section tone="white" padding="md">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CANALES.map((canal) => (
            <li key={canal.titulo}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
                <Icon name={canal.icono} size={22} />
              </span>
              <h2 className="mt-5 text-[11px] font-bold uppercase tracking-widest text-graphite-400">
                {canal.titulo}
              </h2>
              {canal.href ? (
                <a href={canal.href} className="mt-2 block text-base font-medium text-graphite hover:text-primary">
                  {canal.valor}
                </a>
              ) : (
                <p className="mt-2 text-base font-medium leading-snug text-graphite">{canal.valor}</p>
              )}
              <p className="mt-2 text-xs leading-relaxed text-graphite-400">{canal.nota}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Formulario */}
      <Section tone="dark" padding="lg" id="formulario">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Solicitud de presupuesto"
              title="Presupuesto sin compromiso en 24 horas"
              description="Rellene el formulario con los datos de su empresa y una breve descripción del proyecto. Cuantos más detalles nos dé (número de puestos, superficie, plazo), más ajustada será la propuesta."
              tone="dark"
            />
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              {[
                'Sin mínimo de pedido: desde un único puesto.',
                'Plano de distribución sin coste a partir de 10 puestos.',
                'Documentación de conformidad incluida en la oferta.',
                'Montaje e instalación incluidos en Castilla-La Mancha.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-primary-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <QuoteRequestForm tone="dark" conMensaje idPrefijo="contacto" />
        </div>
      </Section>

      {/* Quiénes somos */}
      <Section tone="sand" padding="lg" id="quienes-somos" className="scroll-mt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Quiénes somos"
              title="Solicar Didácticos S.L., desde Daimiel desde 1993"
              description="Empezamos equipando aulas de Castilla-La Mancha y llevamos más de treinta años haciéndolo. La línea de oficina nace del mismo equipo y de la misma nave: cercanía comercial, plazos que se cumplen y documentación completa."
            />
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-graphite-600">
              <p>
                Nuestra ventaja no es el catálogo más grande, sino la distancia: el almacén está a menos de una hora
                en coche de buena parte de nuestros clientes. Eso significa que una pieza que no encaja se cambia esa
                misma tarde y que un pedido urgente sale al día siguiente.
              </p>
              <p>
                Trabajamos con empresas, pymes, autónomos, ayuntamientos y centros educativos, con experiencia
                acreditada en contratación pública y en la documentación técnica que exigen los pliegos.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-graphite-200 pt-8">
              {[
                { valor: '1993', etiqueta: 'año de fundación' },
                { valor: '+30', etiqueta: 'años de trayectoria' },
                { valor: '204', etiqueta: 'referencias de oficina' },
              ].map((dato) => (
                <div key={dato.etiqueta}>
                  <dt className="sr-only">{dato.etiqueta}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold text-primary sm:text-3xl">{dato.valor}</span>
                    <span className="mt-1 block text-xs leading-snug text-graphite-400">{dato.etiqueta}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button to="/proyectos" variant="outline" onBg="light">
                Ver proyectos instalados
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            {/* TODO: sustituir por fotografía real de la sede / equipo de Solicar en Daimiel */}
            <img
              src={placeholderImage({
                text: 'Sede y almacén de Solicar en Daimiel',
                width: 1000,
                height: 750,
                kind: 'institucional',
              })}
              alt="Fachada de la sede y almacén de Solicar Didácticos en Daimiel"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Mapa (placeholder) */}
      <Section tone="white" padding="md">
        <SectionHeading
          eyebrow="Cómo llegar"
          title="Exposición y almacén en Daimiel"
          description="Visitas concertadas de lunes a viernes. Escríbanos o llame antes de venir para que podamos atenderle con tiempo."
        />
        <div className="mt-8 flex min-h-[280px] items-center justify-center border border-dashed border-graphite-200 bg-sand p-8 text-center">
          {/* TODO: incrustar aquí el mapa real (Google Maps / OpenStreetMap) con la ubicación de Daimiel */}
          <div>
            <Icon name="pin" size={28} className="mx-auto text-graphite-300" />
            <p className="mt-3 text-sm font-medium text-graphite-500">{empresa.direccion}</p>
            <p className="mt-1 text-xs text-graphite-400">
              Espacio reservado para el mapa incrustado — pendiente de integración.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
