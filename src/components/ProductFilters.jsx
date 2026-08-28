import { useState } from 'react';
import Icon from './Icon';
import { acabados, categorias, sectores } from '../data/productos';

/**
 * Barra lateral de filtros del catálogo. Componente controlado: el estado real
 * vive en la página /productos, que es quien filtra el grid.
 *
 * @param {{tipos:string[], sectores:string[], acabados:string[]}} filtros
 * @param {(grupo:string, valor:string)=>void} onToggle
 * @param {()=>void} onLimpiar
 */
export default function ProductFilters({ filtros, onToggle, onLimpiar, total }) {
  const [abiertoMovil, setAbiertoMovil] = useState(false);
  const activos = filtros.tipos.length + filtros.sectores.length + filtros.acabados.length;

  const grupos = [
    { id: 'tipos', titulo: 'Tipo', opciones: categorias.map((c) => ({ value: c.id, label: c.nombre })) },
    { id: 'sectores', titulo: 'Sector', opciones: sectores.map((s) => ({ value: s.id, label: s.nombre })) },
  ];

  return (
    <div className="lg:sticky lg:top-32">
      {/* Disparador en móvil */}
      <button
        type="button"
        onClick={() => setAbiertoMovil((v) => !v)}
        aria-expanded={abiertoMovil}
        aria-controls="panel-filtros"
        className="flex w-full items-center justify-between border border-graphite-200 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-graphite lg:hidden"
      >
        <span className="inline-flex items-center gap-2">
          <Icon name="filtro" size={18} />
          Filtrar
          {activos > 0 && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] text-white">{activos}</span>
          )}
        </span>
        <Icon name={abiertoMovil ? 'chevronArriba' : 'chevronAbajo'} size={18} />
      </button>

      <div id="panel-filtros" className={`${abiertoMovil ? 'block' : 'hidden'} lg:block`}>
        <div className="mt-4 flex items-baseline justify-between lg:mt-0">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-graphite">Filtros</h2>
          {activos > 0 && (
            <button
              type="button"
              onClick={onLimpiar}
              className="text-xs text-primary underline underline-offset-4 hover:no-underline"
            >
              Limpiar ({activos})
            </button>
          )}
        </div>

        {grupos.map((grupo) => (
          <fieldset key={grupo.id} className="mt-7 border-t border-graphite-100 pt-5">
            <legend className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">
              {grupo.titulo}
            </legend>
            <ul className="mt-3 space-y-2.5">
              {grupo.opciones.map((opcion) => {
                const marcado = filtros[grupo.id].includes(opcion.value);
                return (
                  <li key={opcion.value}>
                    <label className="group flex cursor-pointer items-center gap-3 text-sm text-graphite-600">
                      <input
                        type="checkbox"
                        checked={marcado}
                        onChange={() => onToggle(grupo.id, opcion.value)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 ${
                          marcado ? 'border-primary bg-primary text-white' : 'border-graphite-300 bg-white'
                        }`}
                      >
                        {marcado && <Icon name="check" size={12} strokeWidth={3} />}
                      </span>
                      <span className={marcado ? 'font-medium text-graphite' : 'group-hover:text-graphite'}>
                        {opcion.label}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}

        {/* Acabado / color */}
        <fieldset className="mt-7 border-t border-graphite-100 pt-5">
          <legend className="text-[11px] font-bold uppercase tracking-widest text-graphite-400">
            Acabado / color
          </legend>
          <ul className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
            {acabados.map((acabado) => {
              const marcado = filtros.acabados.includes(acabado.id);
              return (
                <li key={acabado.id}>
                  <label className="flex cursor-pointer flex-col items-center gap-1.5 text-center">
                    <input
                      type="checkbox"
                      checked={marcado}
                      onChange={() => onToggle('acabados', acabado.id)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={`h-8 w-8 rounded-full border transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 ${
                        marcado
                          ? 'border-primary ring-2 ring-primary ring-offset-2'
                          : 'border-graphite-200 hover:border-graphite-400'
                      }`}
                      style={{ backgroundColor: acabado.hex }}
                    />
                    <span
                      className={`text-[10px] leading-tight ${marcado ? 'font-semibold text-primary' : 'text-graphite-400'}`}
                    >
                      {acabado.nombre}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>

        <p className="mt-7 border-t border-graphite-100 pt-5 text-xs text-graphite-400">
          {total} {total === 1 ? 'producto coincide' : 'productos coinciden'} con los filtros aplicados.
        </p>
      </div>
    </div>
  );
}
