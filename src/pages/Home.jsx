import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section, { SectionHeading } from '../components/Section';
import Icon from '../components/Icon';
import QuoteRequestForm from '../components/QuoteRequestForm';
import CertificationBadge from '../components/CertificationBadge';
import { placeholderImage } from '../utils/placeholder';
import { getProductoPorSlug } from '../data/productos';
import proyectos from '../data/proyectos';

/*
 * Landing de Solicar Oficina.
 * Patrón zebra: hero → grafito → gris claro → grafito → blanco → azul oscuro
 * → gris claro → grafito. Cada bloque tiene una única llamada a la acción.
 */

const VALORES = [
  {
    icono: 'camion',
    titulo: 'Entrega rápida en Castilla-La Mancha',
    texto:
      'Coordinación logística directa con fabricante para ajustar cada envío a su plazo de obra. Pedidos de hasta 40 puestos entregados en 72 horas dentro de Castilla-La Mancha y provincias limítrofes.',
  },
  {
    icono: 'escudo',
    titulo: 'Cumplimiento normativo garantizado',
    texto:
      'Conformidad documentada con UNE-EN 1335 (sillería), UNE-EN 527 (mesas) y UNE-EN 14073/14074 (almacenamiento), declaración REACH de materiales y madera con trazabilidad EUTR.',
  },
  {
    icono: 'auricular',
    titulo: 'Atención comercial directa B2B',
    texto:
      'Un interlocutor único desde el plano de distribución hasta la recepción del suministro. Presupuesto personalizado en 24 horas laborables, sin intermediarios ni centralita.',
  },
];

export default function Home() {
  const sillaDestacada = getProductoPorSlug('ergo-pro-300');
  const proyectosDestacados = proyectos.filter((p) => p.destacado).slice(0, 2);

  return (
    <>
      {/* ------------------------------------------------------------------ HERO */}
      <section className="relative isolate overflow-hidden bg-graphite">
        {/* TODO: sustituir por fotografía real de oficina moderna amueblada por Solicar */}
        <img
          src="/image.png"
          alt="Espacio de oficina moderno equipado con mobiliario de Solicar Oficina"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/75 sm:to-graphite/45 lg:to-graphite/20"
        />

        <div className="on-dark container-solicar relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-primary-200">Nueva línea · Mobiliario de oficina</p>
            <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Mobiliario de oficina para empresas, pymes y administraciones
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Más de 30 años equipando espacios desde Daimiel. Ahora también su oficina: sillería ergonómica,
              mesas, archivo y recepción con stock propio y entrega ágil en Castilla-La Mancha.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button to="/contacto" variant="solid" onBg="dark" size="lg">
                Solicita tu presupuesto
              </Button>
              <Button to="/productos" variant="outline" onBg="dark" size="lg">
                Ver catálogo
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
              {[
                { valor: '+30', etiqueta: 'años de trayectoria' },
                { valor: '204', etiqueta: 'referencias de oficina' },
                { valor: '72 h', etiqueta: 'plazo con stock en Daimiel' },
              ].map((dato) => (
                <div key={dato.etiqueta}>
                  <dt className="sr-only">{dato.etiqueta}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold text-white sm:text-3xl">{dato.valor}</span>
                    <span className="mt-1 block text-xs leading-snug text-white/60">{dato.etiqueta}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- PRODUCTO DESTACADO (grafito) */}
      <Section tone="dark" padding="none" bleed>
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            {/* TODO: sustituir por fotografía real de la sillería ergonómica */}
            <img
              src="/erg-pro-pisarniski-stol-galerija-3.webp"
              alt="Silla ergonómica Ergo Pro 300 en un puesto de trabajo"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <div className="flex items-center gap-4">
                <CertificationBadge tipo="UNE-EN" />
                <p className="eyebrow text-primary-200">Producto destacado</p>
              </div>
              <h2 className="mt-6 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
                Sillería ergonómica certificada UNE-EN 1335
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                La familia Ergo cubre desde el puesto administrativo de uso regular hasta el operativo de jornada
                completa: malla tensada, soporte lumbar de profundidad regulable, mecanismo sincro con bloqueo en
                cinco posiciones y brazos 4D. Con informe de ensayo de laboratorio acreditado en cada referencia.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/70">
                {[
                  'Cuatro familias: Ergo Pro, Ergo Lite, Ergo Executive y confidente Nexo.',
                  'Regulaciones tipo A conforme a UNE-EN 1335-1 en las referencias operativas.',
                  'Hasta cinco años de garantía y recambio de piezas garantizado.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-primary-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button to="/productos?tipo=silleria" variant="solid" onBg="dark">
                  Explorar sillería
                </Button>
                {sillaDestacada && (
                  <Button to={`/productos/${sillaDestacada.slug}`} variant="outline" onBg="dark">
                    Ver la Ergo Pro 300
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------- SOLUCIONES PARA PYMES (claro) */}
      <Section tone="sand" padding="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Pymes y autónomos"
              title="Oficinas pequeñas, sin mínimos de pedido ni esperas de tres meses"
              description="No hace falta amueblar una planta entera para trabajar con nosotros. Servimos paquetes desde un único puesto, con plazos de dos a tres semanas en referencias de stock y sin exigir un volumen mínimo de compra."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Paquetes de 1 a 10 puestos ya configurados',
                'Plazo habitual de 2-3 semanas con stock',
                'Montaje incluido en Castilla-La Mancha',
                'Presupuesto cerrado, sin costes sorpresa',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-graphite-600">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/productos?sector=pyme" variant="outline" onBg="light">
                Ver soluciones para oficinas pequeñas
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            {/* TODO: sustituir por fotografía real de una oficina pequeña equipada */}
            <img
              src="/Web_150DPI-DSCF1370-scaled.webp"
              alt="Oficina pequeña de una pyme equipada con mesas de la línea WORK y sillería Ergo Lite"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- PROYECTOS INSTALADOS (grafito) */}
      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Proyectos instalados"
            title="Oficinas, recepciones y ayuntamientos ya equipados"
            description="Cada instalación se planifica sobre plano y se ejecuta por fases para no interrumpir la actividad del cliente. Estos son dos de los últimos proyectos entregados."
            tone="dark"
          />
          <div className="shrink-0">
            <Button to="/proyectos" variant="outline" onBg="dark">
              Ver todos los proyectos
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {proyectosDestacados.map((proyecto) => (
            <article key={proyecto.slug} className="group relative">
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite-700">
                <img
                  src={proyecto.imagen}
                  alt={`Instalación realizada en ${proyecto.cliente}, ${proyecto.ubicacion}`}
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
              <p className="mt-5 text-xs uppercase tracking-wider text-white/50">
                {proyecto.ubicacion} · {proyecto.anio} · {proyecto.puestos} puestos
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                <Link to={`/proyectos/${proyecto.slug}`} className="after:absolute after:inset-0">
                  {proyecto.cliente}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{proyecto.resumen}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-200">
                Ver proyecto
                <Icon name="flechaDerecha" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Fotografía panorámica a sangre, sin texto */}
      <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-96">
        {/* TODO: sustituir por fotografía panorámica real de un espacio instalado */}
        <img
          src="logo_make_11_06_2023_360.jpg"
          alt="Vista panorámica de una planta de oficinas equipada por Solicar Oficina"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* ------------------------------------------ ¿POR QUÉ SOLICAR OFICINA? (blanco) */}
      <Section tone="white" padding="lg">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="¿Por qué elegir Solicar Oficina?"
          description="Tres razones que repiten los clientes que ya han equipado su espacio con nosotros."
          align="center"
        />
        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {VALORES.map((valor) => (
            <li key={valor.titulo} className="flex flex-col">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary">
                <Icon name={valor.icono} size={26} />
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-snug text-graphite">{valor.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite-500">{valor.texto}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------- MINI-FORMULARIO DE PRESUPUESTO */}
      <Section tone="primary" padding="lg" id="presupuesto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sin compromiso"
              title="Solicite presupuesto para su proyecto"
              description="Cuéntenos qué necesita equipar y le enviamos una propuesta cerrada en un máximo de 24 horas laborables, con plazos de entrega confirmados y toda la documentación de conformidad incluida."
              tone="dark"
            />
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              {[
                'Respuesta comercial en menos de 24 h laborables.',
                'Plano de distribución sin coste para proyectos de más de 10 puestos.',
                'Documentación de conformidad UNE-EN y REACH incluida en la oferta.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-primary-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <QuoteRequestForm tone="dark" idPrefijo="home" />
          </div>
        </div>
      </Section>

      {/* --------------------------------------- CUMPLIMIENTO Y CALIDAD (gris claro) */}
      <Section tone="sand" padding="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* TODO: sustituir por fotografía real de almacén / control de calidad */}
              <img
                src="Camion-en-autopista-montando-los-Michelin-X-Multi-Hd-Z.jpg"
                alt="Control de recepción de mercancía en el almacén de Solicar en Daimiel"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Cumplimiento y calidad"
              title="Trazabilidad y legalidad en cada referencia importada"
              description="Cuando parte del catálogo se fabrica fuera de la Unión Europea, el importador responde. Documentamos ese respaldo y lo entregamos con la oferta, no después de adjudicar."
            />
            <dl className="mt-8 space-y-5">
              {[
                { termino: 'REACH', definicion: 'Declaración de conformidad de materiales: tapicerías, espumas, recubrimientos y adhesivos sin sustancias restringidas del anexo XVII.' },
                { termino: 'EUTR', definicion: 'Sistema de diligencia debida sobre el origen legal de la madera y de los tableros derivados, con trazabilidad por lote.' },
                { termino: 'NIMF-15', definicion: 'Embalaje de madera tratado y sellado conforme a la norma internacional de medidas fitosanitarias.' },
                { termino: 'Ensayos UNE-EN', definicion: 'Informes de laboratorio acreditado (AIDIMME / IBV) para resistencia, estabilidad y durabilidad.' },
              ].map((item) => (
                <div key={item.termino} className="border-l-2 border-primary pl-5">
                  <dt className="text-sm font-bold uppercase tracking-wider text-graphite">{item.termino}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-graphite-500">{item.definicion}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              {/* TODO: enlazar con el PDF real del dossier de cumplimiento normativo */}
              <Button href="#" variant="outline" onBg="light">
                <Icon name="descargar" size={16} />
                Descargar dossier de cumplimiento normativo
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------- CIERRE INSTITUCIONAL (grafito) */}
      <Section tone="dark" padding="lg">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Conozca Solicar"
              title="Treinta años equipando aulas. Ahora también oficinas."
              description="Solicar Didácticos S.L. fabrica y distribuye mobiliario desde Daimiel (Ciudad Real) desde 1993. La línea de oficina nace del mismo equipo, la misma nave y la misma forma de trabajar: cercanía comercial, plazos que se cumplen y documentación completa."
              tone="dark"
            />
            <div className="mt-10">
              <Button to="/contacto#quienes-somos" variant="solid" onBg="dark">
                Conoce Solicar
              </Button>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-sm leading-relaxed text-white/70">
              La expansión de Solicar a la línea de mobiliario de oficina se enmarca en un proyecto de
              modernización empresarial con respaldo de financiación europea.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Financiado por la Unión Europea — NextGenerationEU',
                'Plan de Recuperación, Transformación y Resiliencia',
                'Gobierno de España — Ministerio de Industria y Turismo',
              ].map((item) => (
                <li
                  key={item}
                  className="flex min-h-[56px] items-center border border-dashed border-white/25 px-4 py-3 text-xs text-white/60"
                >
                  {/* TODO: sustituir por el logotipo institucional oficial en SVG */}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
