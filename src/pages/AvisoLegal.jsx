import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { empresa } from '../data/sitio';

/**
 * Aviso legal (LSSICE). Texto genérico a falta de los datos registrales
 * reales de Solicar Didácticos S.L.
 * TODO: sustituir NIF/CIF y datos de inscripción registral por los reales.
 */
export default function AvisoLegal() {
  return (
    <>
      <PageHero
        eyebrow="Información legal"
        titulo="Aviso legal"
        descripcion="Condiciones generales de acceso y uso del sitio web de Solicar Oficina."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Aviso legal' }]}
      />

      <Section tone="white" padding="lg">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-graphite-600">
          <p className="text-xs text-graphite-400">Última actualización: 28 de agosto de 2026.</p>

          <article>
            <h2 className="text-xl font-semibold text-graphite">1. Datos identificativos</h2>
            <p className="mt-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSICE), se informa de los siguientes datos: el titular de
              este sitio web es <strong className="text-graphite">{empresa.nombre}</strong>, con domicilio en{' '}
              {empresa.direccion}, teléfono de contacto {empresa.telefono} y dirección de correo electrónico{' '}
              <a href={empresa.emailHref} className="text-primary underline underline-offset-2">
                {empresa.email}
              </a>
              . {/* TODO: añadir NIF/CIF y datos de inscripción en el Registro Mercantil. */}
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">2. Objeto y ámbito de aplicación</h2>
            <p className="mt-4">
              El presente aviso legal regula el uso del sitio web {empresa.marcaLinea} (en adelante, "el sitio
              web"), a través del cual {empresa.nombre} pone a disposición del público información sobre sus
              productos y servicios de mobiliario de oficina, así como un canal de contacto y solicitud de
              presupuesto. El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena de
              las condiciones incluidas en este aviso legal.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">3. Condiciones de acceso y uso</h2>
            <p className="mt-4">
              El acceso al sitio web es gratuito, salvo en lo relativo al coste de conexión a través de la red de
              telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario. El usuario se
              compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación
              aplicable, la buena fe y el orden público, absteniéndose de utilizarlo de forma que pueda impedir,
              dañar o deteriorar el normal funcionamiento del mismo, los bienes o derechos de {empresa.nombre}, de
              sus proveedores, de otros usuarios o, en general, de cualquier tercero.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">4. Propiedad intelectual e industrial</h2>
            <p className="mt-4">
              Todos los contenidos del sitio web (textos, imágenes, fotografías, catálogos, fichas técnicas,
              logotipos, marcas y demás elementos gráficos), así como el código fuente, diseño y estructuras de
              navegación, son titularidad de {empresa.nombre} o de terceros que han autorizado su uso, y están
              protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción,
              distribución, transformación o comunicación pública, total o parcial, sin autorización previa y por
              escrito del titular.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">5. Exclusión de responsabilidad</h2>
            <p className="mt-4">
              {empresa.nombre} no garantiza la disponibilidad y continuidad permanente del sitio web, ni se hace
              responsable de los daños y perjuicios que pudieran derivarse de la falta de disponibilidad o de
              errores de acceso, así como de los que pudieran derivarse de interferencias, interrupciones, virus
              informáticos o desconexiones en el funcionamiento operativo de este sistema electrónico, motivados
              por causas ajenas a {empresa.nombre}. Los precios, características y disponibilidad de los productos
              publicados tienen carácter meramente informativo y no constituyen una oferta vinculante; el
              presupuesto definitivo se confirma en cada caso de forma individualizada.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">6. Enlaces a terceros</h2>
            <p className="mt-4">
              El sitio web puede incluir enlaces a páginas de terceros (marcas, redes sociales, proveedores) sobre
              cuyo contenido {empresa.nombre} no ejerce ningún tipo de control y respecto de los cuales no asume
              responsabilidad alguna, sin perjuicio de que se retirará de forma inmediata cualquier enlace cuyo
              contenido pudiera resultar contrario a la legislación vigente en cuanto se tenga conocimiento
              efectivo de ello.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-graphite">7. Legislación aplicable y jurisdicción</h2>
            <p className="mt-4">
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada
              del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales del domicilio del
              usuario, salvo que la normativa aplicable disponga otra cosa.
            </p>
          </article>

          <p className="border-t border-graphite-100 pt-8 text-xs text-graphite-400">
            Para cualquier duda sobre este aviso legal puede escribirnos a{' '}
            <a href={empresa.emailHref} className="text-primary underline underline-offset-2">
              {empresa.email}
            </a>
            . Consulte también nuestra{' '}
            <Link to="/politica-privacidad" className="text-primary underline underline-offset-2">
              política de privacidad
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
