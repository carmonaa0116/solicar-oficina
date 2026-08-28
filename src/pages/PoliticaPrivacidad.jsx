import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { empresa } from '../data/sitio';

const DERECHOS = [
  { titulo: 'Acceso', texto: 'Conocer qué datos personales estamos tratando.' },
  { titulo: 'Rectificación', texto: 'Corregir datos inexactos o incompletos.' },
  { titulo: 'Supresión', texto: 'Solicitar la eliminación de sus datos cuando ya no sean necesarios.' },
  { titulo: 'Oposición', texto: 'Oponerse al tratamiento de sus datos en determinadas circunstancias.' },
  { titulo: 'Limitación', texto: 'Solicitar que se restrinja temporalmente el tratamiento de sus datos.' },
  { titulo: 'Portabilidad', texto: 'Recibir sus datos en un formato estructurado y de uso común.' },
];

/**
 * Política de privacidad (RGPD / LOPDGDD). Texto genérico a falta de los
 * datos registrales reales de Solicar Didácticos S.L.
 * TODO: sustituir NIF/CIF y, si aplica, datos del Delegado de Protección de Datos.
 */
export default function PoliticaPrivacidad() {
  return (
    <>
      <PageHero
        eyebrow="Información legal"
        titulo="Política de privacidad"
        descripcion="Cómo tratamos los datos personales de las personas que visitan este sitio web o nos solicitan un presupuesto."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Política de privacidad' }]}
      />

      <Section tone="white" padding="lg">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-graphite-600">
          <p className="text-xs text-graphite-400">Última actualización: 28 de agosto de 2026.</p>

          <article>
            <h2 className="text-xl font-semibold text-graphite">1. Responsable del tratamiento</h2>
            <p className="mt-4">
              El responsable del tratamiento de los datos personales recabados a través de este sitio web es{' '}
              <strong className="text-graphite">{empresa.nombre}</strong>, con domicilio en {empresa.direccion} y
              dirección de contacto{' '}
              <a href={empresa.emailHref} className="text-primary underline underline-offset-2">
                {empresa.email}
              </a>
              . {/* TODO: añadir NIF/CIF y, si aplica, contacto del Delegado de Protección de Datos. */}
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">2. Finalidad del tratamiento</h2>
            <p className="mt-4">Tratamos los datos que usted nos facilita para las siguientes finalidades:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Atender y responder a solicitudes de presupuesto e información sobre productos.</li>
              <li>Gestionar la relación comercial y, en su caso, la ejecución de un pedido o proyecto.</li>
              <li>Enviar comunicaciones relacionadas con su consulta, siempre que exista base legal para ello.</li>
              <li>Mejorar el sitio web y analizar su uso, cuando el usuario haya aceptado las cookies analíticas.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">3. Legitimación</h2>
            <p className="mt-4">
              La base legal para el tratamiento de sus datos es el consentimiento que usted otorga al marcar la
              casilla correspondiente en nuestros formularios, así como, en su caso, la ejecución de una relación
              precontractual o contractual iniciada a solicitud del interesado.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">4. Destinatarios</h2>
            <p className="mt-4">
              No se ceden datos a terceros salvo obligación legal. Podremos recurrir a proveedores de servicios
              (por ejemplo, alojamiento web o herramientas de envío de correo) que actúan como encargados del
              tratamiento bajo contrato, con las garantías exigidas por el RGPD.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">5. Plazo de conservación</h2>
            <p className="mt-4">
              Los datos se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y,
              cuando ya no sea necesario, se suprimirán con medidas de seguridad adecuadas o se bloquearán durante
              el plazo exigido por la legislación aplicable.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">6. Derechos de las personas interesadas</h2>
            <p className="mt-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si en {empresa.nombre} estamos tratando
              datos personales que le conciernan. En concreto, puede ejercer los siguientes derechos:
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {DERECHOS.map((derecho) => (
                <div key={derecho.titulo} className="border-l-2 border-primary-100 pl-4">
                  <dt className="text-sm font-semibold text-graphite">{derecho.titulo}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-graphite-500">{derecho.texto}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6">
              Puede ejercer estos derechos escribiendo a{' '}
              <a href={empresa.emailHref} className="text-primary underline underline-offset-2">
                {empresa.email}
              </a>{' '}
              o por correo postal a {empresa.direccion}, adjuntando copia de un documento que acredite su
              identidad. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de
              Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-2"
              >
                www.aepd.es
              </a>
              ) si considera que el tratamiento no se ajusta a la normativa vigente.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">7. Procedencia de los datos</h2>
            <p className="mt-4">
              Los datos que tratamos proceden directamente del interesado, a través de los formularios de contacto
              y solicitud de presupuesto disponibles en este sitio web.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">8. Medidas de seguridad</h2>
            <p className="mt-4">
              {empresa.nombre} adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad
              de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida
              cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están
              expuestos.
            </p>
          </article>

          <p className="border-t border-graphite-100 pt-8 text-xs text-graphite-400">
            Consulte también nuestro{' '}
            <Link to="/aviso-legal" className="text-primary underline underline-offset-2">
              aviso legal
            </Link>{' '}
            y nuestra{' '}
            <Link to="/cookies" className="text-primary underline underline-offset-2">
              política de cookies
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
