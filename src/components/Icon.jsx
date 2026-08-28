/**
 * Iconografía en línea (SVG, trazo 1.5). Se evita una librería externa para
 * mantener el bundle pequeño y poder ajustar el trazo al lenguaje visual.
 * Todos los iconos heredan `currentColor`.
 */
const PATHS = {
  buscar: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  cerrar: <><path d="M6 6l12 12M18 6L6 18" /></>,
  flechaDerecha: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  flechaIzquierda: <><path d="M20 12H5" /><path d="m11 18-6-6 6-6" /></>,
  chevronAbajo: <><path d="m6 9 6 6 6-6" /></>,
  chevronArriba: <><path d="m6 15 6-6 6 6" /></>,
  descargar: <><path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" /></>,
  camion: <><path d="M2 7h11v9H2z" /><path d="M13 10h4.5l3.5 3.5V16H13z" /><circle cx="7" cy="18.5" r="1.8" /><circle cx="17" cy="18.5" r="1.8" /></>,
  escudo: <><path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6z" /><path d="m9 12 2 2 4-4" /></>,
  auricular: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h2.5v5H5a1 1 0 0 1-1-1z" /><path d="M20 13h-2.5v5H19a1 1 0 0 0 1-1z" /><path d="M17.5 18v.5a2.5 2.5 0 0 1-2.5 2.5h-2" /></>,
  check: <><path d="m5 12.5 4.5 4.5L19 7.5" /></>,
  telefono: <><path d="M6 3h3l1.5 4.5-2 1.5a11.5 11.5 0 0 0 5.5 5.5l1.5-2L20 14v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.9 6.2 2 2 0 0 1 6.9 4z" /></>,
  sobre: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  reloj: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  documento: <><path d="M6 3h7l5 5v13H6z" /><path d="M13 3v5h5" /><path d="M9 13h6M9 17h6" /></>,
  facebook: <><path d="M14.5 8.5H17V5.5h-2.5A3.5 3.5 0 0 0 11 9v2H9v3h2v6h3v-6h2.3l.7-3H14V9.2c0-.4.2-.7.5-.7z" /></>,
  x: <><path d="M4 4h4l4.5 6L17.5 4H20l-6.5 8.4L20.5 20h-4l-4.8-6.4L6.2 20H4l6.9-8.7z" /></>,
  whatsapp: <><path d="M4 20l1.3-4A7.5 7.5 0 1 1 8 18.7z" /><path d="M9 10c.3 1.2 1.8 3 3.2 3.4l.9-1.1 1.9.8c-.2 1-1.2 1.4-2.1 1.2-2.2-.5-4.2-2.4-4.8-4.6-.2-.9.2-1.8 1.1-2l.8 1.9z" /></>,
  cuadricula: <><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></>,
  filtro: <><path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" /></>,
  regla: <><path d="M3 8h18v8H3z" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" /></>,
  carrito: <><path d="M3.5 4h2.3l1 3M6.8 7h13l-1.8 7.5a1.5 1.5 0 0 1-1.46 1.15H9.1a1.5 1.5 0 0 1-1.46-1.15L5.8 7z" /><circle cx="10" cy="20" r="1.3" /><circle cx="16.5" cy="20" r="1.3" /></>,
  papelera: <><path d="M4.5 7h15" /><path d="M9.5 7V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2" /><path d="M6.5 7l.9 12.1A1.6 1.6 0 0 0 9 20.5h6a1.6 1.6 0 0 0 1.6-1.4L17.5 7" /><path d="M10 11v6M14 11v6" /></>,
  mas: <><path d="M12 5v14M5 12h14" /></>,
  menos: <><path d="M5 12h14" /></>,
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.5, ...props }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {path}
    </svg>
  );
}
