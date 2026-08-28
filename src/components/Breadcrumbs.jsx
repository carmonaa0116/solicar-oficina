import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Migas de pan. `items` = [{ label, to? }]; el último elemento se marca como
 * página actual y no es enlace.
 */
export default function Breadcrumbs({ items = [], tone = 'light', className = '' }) {
  if (!items.length) return null;
  const base = tone === 'dark' ? 'text-white/60' : 'text-graphite-400';
  const actual = tone === 'dark' ? 'text-white' : 'text-graphite';

  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs ${base}`}>
        {items.map((item, i) => {
          const ultimo = i === items.length - 1;
          return (
            <Fragment key={`${item.label}-${i}`}>
              <li>
                {ultimo || !item.to ? (
                  <span aria-current={ultimo ? 'page' : undefined} className={ultimo ? actual : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="hover:text-primary hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                )}
              </li>
              {!ultimo && (
                <li aria-hidden="true" className="select-none">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
