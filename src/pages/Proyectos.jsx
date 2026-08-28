import { useMemo, useState } from 'react';
import Section, { SectionHeading } from '../components/Section';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import proyectos from '../data/proyectos';

export default function Proyectos() {
  const [sector, setSector] = useState('todos');

  const sectoresDisponibles = useMemo(() => {
    const unicos = [...new Set(proyectos.map((p) => p.sector))];
    return ['todos', ...unicos];
  }, []);

  const visibles = sector === 'todos' ? proyectos : proyectos.filter((p) => p.sector === sector);

  const totalPuestos = proyectos.reduce((suma, p) => suma + p.puestos, 0);

  return (
    <>
      <PageHero
        eyebrow="Casos de éxito"
        titulo="Proyectos instalados"
        descripcion="Oficinas corporativas, ayuntamientos, centros educativos y pymes ya equipados por Solicar. Cada proyecto se planifica sobre plano y se ejecuta por fases para no interrumpir la actividad."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Proyectos' }]}
      >
        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:grid-cols-4">
          {[
            { valor: proyectos.length, etiqueta: 'proyectos publicados' },
            { valor: totalPuestos, etiqueta: 'puestos de trabajo instalados' },
            { valor: '4', etiqueta: 'sectores atendidos' },
            { valor: '100 %', etiqueta: 'entregas en plazo comprometido' },
          ].map((dato) => (
            <div key={dato.etiqueta}>
              <dt className="sr-only">{dato.etiqueta}</dt>
              <dd>
                <span className="block text-3xl font-semibold text-white">{dato.valor}</span>
                <span className="mt-1 block text-xs leading-snug text-white/60">{dato.etiqueta}</span>
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section tone="white" padding="md">
        {/* Filtro por sector */}
        <div className="flex flex-col gap-4 border-b border-graphite-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-2" aria-label="Filtrar proyectos por sector">
            {sectoresDisponibles.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => setSector(s)}
                  aria-pressed={sector === s}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                    sector === s
                      ? 'border-primary bg-primary text-white'
                      : 'border-graphite-200 text-graphite-500 hover:border-graphite-500'
                  }`}
                >
                  {s === 'todos' ? 'Todos los sectores' : s}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-sm text-graphite-500" role="status" aria-live="polite">
            <strong className="font-semibold text-graphite">{visibles.length}</strong>{' '}
            {visibles.length === 1 ? 'proyecto' : 'proyectos'}
          </p>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {visibles.map((proyecto) => (
            <li key={proyecto.slug}>
              <ProjectCard proyecto={proyecto} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Bloque oscuro de cierre */}
      <Section tone="dark" padding="lg">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="¿Su espacio es el siguiente?"
            title="Cuéntenos su proyecto y le proponemos una distribución"
            description="Para proyectos de más de 10 puestos elaboramos el plano de distribución sin coste, con propuesta de mobiliario, plazos y presupuesto cerrado."
            tone="dark"
          />
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to="/contacto" variant="solid" onBg="dark">
              Solicitar un proyecto similar
            </Button>
            <Button to="/productos" variant="outline" onBg="dark">
              Ver catálogo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
