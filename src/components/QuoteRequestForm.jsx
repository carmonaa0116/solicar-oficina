import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Icon from './Icon';
import { tiposProyecto } from '../data/sitio';

/**
 * Mini-formulario de solicitud de presupuesto.
 * Se reutiliza en la home, en la ficha de producto y en /contacto.
 *
 * No hay backend: la validación es 100 % de cliente y el envío muestra un
 * mensaje de confirmación.
 * TODO: conectar `onSubmit` con el sistema de presupuestos de Solicar
 *       (o con un endpoint de formulario / CRM).
 */
const VACIO = { empresa: '', email: '', telefono: '', tipo: '', mensaje: '', consentimiento: false };

export default function QuoteRequestForm({
  tone = 'dark',
  conMensaje = false,
  productoPrefijado,
  idPrefijo = 'presupuesto',
  resumenCesta,
  onEnviado,
}) {
  const [valores, setValores] = useState({ ...VACIO, tipo: productoPrefijado?.categoria ?? '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const oscuro = tone === 'dark';
  const etiqueta = oscuro ? 'text-white/70' : 'text-graphite-500';
  const campo = oscuro
    ? 'border-white/25 bg-white/5 text-white placeholder:text-white/40 focus:border-white'
    : 'border-graphite-200 bg-white text-graphite placeholder:text-graphite-300 focus:border-primary';
  const textoError = oscuro ? 'text-amber-200' : 'text-red-700';
  const bordeError = oscuro ? 'border-amber-300' : 'border-red-600';

  function actualizar(nombre, valor) {
    setValores((v) => ({ ...v, [nombre]: valor }));
    setErrores((e) => ({ ...e, [nombre]: undefined }));
  }

  function validar() {
    const nuevos = {};
    if (!valores.empresa.trim()) nuevos.empresa = 'Indique el nombre de su empresa u organismo.';
    if (!valores.email.trim()) nuevos.email = 'El email es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valores.email.trim()))
      nuevos.email = 'Introduzca un email con formato válido (nombre@dominio.com).';
    if (!valores.telefono.trim()) nuevos.telefono = 'El teléfono es obligatorio.';
    else if (!/^[+\d][\d\s().-]{7,}$/.test(valores.telefono.trim()))
      nuevos.telefono = 'Introduzca un teléfono válido (mínimo 9 dígitos).';
    if (!valores.tipo) nuevos.tipo = 'Seleccione el tipo de proyecto.';
    if (!valores.consentimiento) nuevos.consentimiento = 'Debe aceptar la política de privacidad para continuar.';
    return nuevos;
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length) {
      const primer = document.getElementById(`${idPrefijo}-${Object.keys(nuevos)[0]}`);
      primer?.focus();
      return;
    }
    // TODO: enviar al backend / CRM de Solicar.
    setEnviado(true);
    onEnviado?.();
  }

  if (enviado) {
    return (
      <div
        role="status"
        className={`flex flex-col items-start gap-3 border p-6 ${
          oscuro ? 'border-white/25 bg-white/5 text-white' : 'border-primary-200 bg-primary-50 text-graphite'
        }`}
      >
        <span className={`flex h-10 w-10 items-center justify-center rounded-full ${oscuro ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
          <Icon name="check" size={20} strokeWidth={2.5} />
        </span>
        <h3 className="text-xl font-semibold">Solicitud registrada</h3>
        <p className={`text-sm leading-relaxed ${oscuro ? 'text-white/70' : 'text-graphite-500'}`}>
          Gracias, {valores.empresa}. Un comercial de Solicar Oficina se pondrá en contacto en un plazo máximo de
          24&nbsp;horas laborables en el {valores.telefono} o en {valores.email}.
        </p>
        <Button
          variant="outline"
          onBg={oscuro ? 'dark' : 'light'}
          size="sm"
          onClick={() => {
            setValores({ ...VACIO, tipo: productoPrefijado?.categoria ?? '' });
            setEnviado(false);
          }}
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  const campos = [
    { name: 'empresa', label: 'Empresa u organismo', type: 'text', placeholder: 'Nombre de la empresa', autoComplete: 'organization' },
    { name: 'email', label: 'Email de contacto', type: 'email', placeholder: 'nombre@empresa.com', autoComplete: 'email' },
    { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '926 000 000', autoComplete: 'tel' },
  ];

  return (
    <form onSubmit={enviar} noValidate className="w-full">
      {productoPrefijado && (
        <p className={`mb-5 text-sm ${oscuro ? 'text-white/70' : 'text-graphite-500'}`}>
          Solicitud referida a <strong className={oscuro ? 'text-white' : 'text-graphite'}>{productoPrefijado.nombre}</strong>{' '}
          (ref. {productoPrefijado.referencia}).
        </p>
      )}

      {resumenCesta && resumenCesta.length > 0 && (
        <div className={`mb-6 border p-4 ${oscuro ? 'border-white/20 bg-white/5' : 'border-graphite-200 bg-sand'}`}>
          <p className={`text-[11px] font-bold uppercase tracking-widest ${etiqueta}`}>
            Productos incluidos en esta solicitud
          </p>
          <ul className="mt-3 space-y-3">
            {resumenCesta.map((linea) => {
              const detalle = [linea.variante?.nombre, linea.acabado?.nombre].filter(Boolean).join(' · ');
              return (
                <li key={linea.id} className="flex items-start justify-between gap-3 text-sm">
                  <span className={oscuro ? 'text-white' : 'text-graphite'}>
                    {linea.nombre}
                    <span className={`block text-xs ${oscuro ? 'text-white/60' : 'text-graphite-400'}`}>
                      Ref. {linea.referencia}
                      {detalle ? ` · ${detalle}` : ''}
                    </span>
                  </span>
                  <span className={`shrink-0 text-xs uppercase tracking-wider ${oscuro ? 'text-white/60' : 'text-graphite-400'}`}>
                    × {linea.cantidad}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {campos.map((c) => (
          <div key={c.name} className={c.name === 'empresa' ? 'sm:col-span-2' : ''}>
            <label htmlFor={`${idPrefijo}-${c.name}`} className={`block text-[11px] font-semibold uppercase tracking-widest ${etiqueta}`}>
              {c.label} <span aria-hidden="true">*</span>
            </label>
            <input
              id={`${idPrefijo}-${c.name}`}
              name={c.name}
              type={c.type}
              autoComplete={c.autoComplete}
              required
              value={valores[c.name]}
              onChange={(e) => actualizar(c.name, e.target.value)}
              placeholder={c.placeholder}
              aria-invalid={errores[c.name] ? 'true' : undefined}
              aria-describedby={errores[c.name] ? `${idPrefijo}-${c.name}-error` : undefined}
              className={`mt-2 w-full border px-3 py-2.5 text-sm transition-colors focus:outline-none ${campo} ${
                errores[c.name] ? bordeError : ''
              }`}
            />
            {errores[c.name] && (
              <p id={`${idPrefijo}-${c.name}-error`} className={`mt-1.5 text-xs ${textoError}`}>
                {errores[c.name]}
              </p>
            )}
          </div>
        ))}

        <div className={conMensaje ? '' : 'sm:col-span-2'}>
          <label htmlFor={`${idPrefijo}-tipo`} className={`block text-[11px] font-semibold uppercase tracking-widest ${etiqueta}`}>
            Tipo de proyecto <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${idPrefijo}-tipo`}
            name="tipo"
            required
            value={valores.tipo}
            onChange={(e) => actualizar('tipo', e.target.value)}
            aria-invalid={errores.tipo ? 'true' : undefined}
            aria-describedby={errores.tipo ? `${idPrefijo}-tipo-error` : undefined}
            className={`mt-2 w-full border px-3 py-2.5 text-sm transition-colors focus:outline-none ${campo} ${
              errores.tipo ? bordeError : ''
            }`}
          >
            <option value="">Seleccione una opción…</option>
            {tiposProyecto.map((t) => (
              <option key={t.value} value={t.value} className="text-graphite">
                {t.label}
              </option>
            ))}
          </select>
          {errores.tipo && (
            <p id={`${idPrefijo}-tipo-error`} className={`mt-1.5 text-xs ${textoError}`}>
              {errores.tipo}
            </p>
          )}
        </div>

        {conMensaje && (
          <div className="sm:col-span-2">
            <label htmlFor={`${idPrefijo}-mensaje`} className={`block text-[11px] font-semibold uppercase tracking-widest ${etiqueta}`}>
              Cuéntenos su proyecto
            </label>
            <textarea
              id={`${idPrefijo}-mensaje`}
              name="mensaje"
              rows={5}
              value={valores.mensaje}
              onChange={(e) => actualizar('mensaje', e.target.value)}
              placeholder="Número de puestos, plazo estimado, superficie del espacio…"
              className={`mt-2 w-full border px-3 py-2.5 text-sm transition-colors focus:outline-none ${campo}`}
            />
          </div>
        )}
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id={`${idPrefijo}-consentimiento`}
            type="checkbox"
            checked={valores.consentimiento}
            onChange={(e) => actualizar('consentimiento', e.target.checked)}
            aria-invalid={errores.consentimiento ? 'true' : undefined}
            aria-describedby={errores.consentimiento ? `${idPrefijo}-consentimiento-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--solicar-primary)]"
          />
          <span className={`text-xs leading-relaxed ${oscuro ? 'text-white/70' : 'text-graphite-500'}`}>
            He leído y acepto la{' '}
            <Link to="/politica-privacidad" className={`underline underline-offset-2 ${oscuro ? 'text-white' : 'text-primary'}`}>
              política de privacidad
            </Link>{' '}
            y el tratamiento de mis datos para recibir una propuesta comercial.
          </span>
        </label>
        {errores.consentimiento && (
          <p id={`${idPrefijo}-consentimiento-error`} className={`mt-1.5 text-xs ${textoError}`}>
            {errores.consentimiento}
          </p>
        )}
      </div>

      <div className="mt-7">
        <Button variant="solid" onBg={oscuro ? 'dark' : 'light'} type="submit" size="md" className="w-full sm:w-auto">
          Solicitar presupuesto
        </Button>
      </div>
    </form>
  );
}
