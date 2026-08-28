import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { empresa } from '../data/sitio';

const CLAVE_STORAGE = 'solicar-oficina-cookies';

const VACIO = { analiticas: false, personalizacion: false };

const CATEGORIAS = [
  {
    clave: 'tecnicas',
    titulo: 'Cookies técnicas (necesarias)',
    descripcion:
      'Imprescindibles para que el sitio web funcione correctamente: navegación, recordar el contenido del carrito de solicitud de presupuesto o gestionar el consentimiento de cookies. No pueden desactivarse.',
    obligatoria: true,
  },
  {
    clave: 'analiticas',
    titulo: 'Cookies analíticas',
    descripcion:
      'Nos permiten conocer el número de visitas y las páginas más consultadas para mejorar el catálogo y la navegación. Los datos se tratan de forma agregada y anónima.',
    obligatoria: false,
  },
  {
    clave: 'personalizacion',
    titulo: 'Cookies de personalización y terceros',
    descripcion:
      'Utilizadas por servicios externos (por ejemplo, vídeos incrustados o redes sociales) para recordar sus preferencias y ofrecer contenido adaptado.',
    obligatoria: false,
  },
];

function leerPreferenciasIniciales() {
  try {
    const guardado = window.localStorage.getItem(CLAVE_STORAGE);
    return guardado ? { ...VACIO, ...JSON.parse(guardado) } : VACIO;
  } catch {
    // localStorage no disponible (modo privado, cuota superada...): se ignora.
    return VACIO;
  }
}

/**
 * Panel de gestión de cookies. No existe todavía un banner de consentimiento
 * en el sitio; esta página permite al usuario fijar sus preferencias "a
 * mano" y las persiste en localStorage, siguiendo el mismo patrón que
 * CartContext.
 * TODO: si se incorpora un banner/CMP de cookies, sincronizar sus categorías
 *       y textos con esta misma clave de almacenamiento (CLAVE_STORAGE).
 */
export default function Cookies() {
  const [preferencias, setPreferencias] = useState(leerPreferenciasIniciales);
  const [guardado, setGuardado] = useState(false);

  const actualizar = (clave, valor) => {
    setPreferencias((prev) => ({ ...prev, [clave]: valor }));
    setGuardado(false);
  };

  const guardar = (valores) => {
    setPreferencias(valores);
    try {
      window.localStorage.setItem(CLAVE_STORAGE, JSON.stringify(valores));
    } catch {
      // localStorage no disponible: la preferencia solo dura la sesión actual.
    }
    setGuardado(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Información legal"
        titulo="Gestionar cookies"
        descripcion="Consulte qué cookies utiliza este sitio web y elija cuáles quiere permitir. Puede cambiar su elección en cualquier momento desde esta misma página."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Gestionar cookies' }]}
      />

      <Section tone="white" padding="lg">
        <div className="mx-auto max-w-3xl">
          <article className="text-sm leading-relaxed text-graphite-600">
            <h2 className="text-xl font-semibold text-graphite">¿Qué son las cookies?</h2>
            <p className="mt-4">
              Las cookies son pequeños archivos de texto que este sitio web almacena en su navegador para
              recordar información sobre su visita, como sus preferencias o el contenido de un formulario en
              curso. Ninguna de las cookies utilizadas en este sitio contiene información que le identifique
              personalmente por sí sola.
            </p>
          </article>

          <div className="mt-10 divide-y divide-graphite-100 border-y border-graphite-100">
            {CATEGORIAS.map((categoria) => {
              const activa = categoria.obligatoria ? true : preferencias[categoria.clave];
              return (
                <div key={categoria.clave} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-graphite">{categoria.titulo}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-graphite-500">{categoria.descripcion}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 sm:pt-1">
                    {categoria.obligatoria ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-graphite-400">
                        <Icon name="check" size={14} className="text-primary" />
                        Siempre activas
                      </span>
                    ) : (
                      <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-graphite-500">
                        <input
                          type="checkbox"
                          checked={activa}
                          onChange={(e) => actualizar(categoria.clave, e.target.checked)}
                          className="h-4 w-4 accent-[color:var(--solicar-primary)]"
                        />
                        {activa ? 'Activada' : 'Desactivada'}
                      </label>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => guardar({ analiticas: true, personalizacion: true })}
              className="inline-flex items-center justify-center bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={() => guardar(preferencias)}
              className="inline-flex items-center justify-center border border-graphite-200 px-5 py-2.5 text-sm font-semibold text-graphite transition-colors hover:border-primary hover:text-primary"
            >
              Guardar mi selección
            </button>
            <button
              type="button"
              onClick={() => guardar(VACIO)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-graphite-400 transition-colors hover:text-primary"
            >
              Rechazar todas las opcionales
            </button>
            {guardado && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary" role="status">
                <Icon name="check" size={14} />
                Preferencias guardadas en este navegador.
              </span>
            )}
          </div>

          <article className="mt-14 space-y-6 text-sm leading-relaxed text-graphite-600">
            <div>
              <h2 className="text-xl font-semibold text-graphite">Gestionar cookies desde el navegador</h2>
              <p className="mt-4">
                Además de las opciones anteriores, puede permitir, bloquear o eliminar las cookies instaladas en
                su equipo mediante la configuración de su navegador:
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-el-rastreo-firefox-escritorio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>

            <p className="border-t border-graphite-100 pt-6 text-xs text-graphite-400">
              Para más información sobre el tratamiento de sus datos, consulte nuestra{' '}
              <Link to="/politica-privacidad" className="text-primary underline underline-offset-2">
                política de privacidad
              </Link>{' '}
              y nuestro{' '}
              <Link to="/aviso-legal" className="text-primary underline underline-offset-2">
                aviso legal
              </Link>
              . Si tiene cualquier duda puede escribirnos a{' '}
              <a href={empresa.emailHref} className="text-primary underline underline-offset-2">
                {empresa.email}
              </a>
              .
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
