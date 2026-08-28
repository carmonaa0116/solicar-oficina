/*
 * Generador de imágenes placeholder.
 *
 * TODO: sustituir por fotografía real. Todas las imágenes del sitio pasan por
 * esta función, así que cuando exista el banco de imágenes definitivo basta con
 * cambiar el campo `imagen` de los archivos de src/data/ por una ruta o URL
 * real; los componentes ya aceptan cualquier cadena como `src`.
 *
 * Se genera un SVG en línea (data-URI) en lugar de usar un servicio externo
 * tipo https://placehold.co/ para que el sitio se vea completo también sin
 * conexión. Si se prefiere el servicio externo, basta con devolver desde aquí:
 *   `https://placehold.co/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(text)}`
 */

const PALETTE = {
  producto: { bg: '#F4F4F2', fg: '#6E777E', accent: '#C6CACE' },
  ambiente: { bg: '#C6CACE', fg: '#2B2F33', accent: '#9EA5AB' },
  proyecto: { bg: '#ACC8DE', fg: '#122F44', accent: '#7FA9CB' },
  blog: { bg: '#D6E4EF', fg: '#173F5B', accent: '#ACC8DE' },
  oscuro: { bg: '#2B2F33', fg: '#C6CACE', accent: '#4A5157' },
  institucional: { bg: '#E4E6E8', fg: '#4A5157', accent: '#C6CACE' },
};

/** Parte un texto en líneas de como mucho `max` caracteres. */
function wrap(text, max) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    if (!current.length) current = word;
    else if (current.length + word.length + 1 <= max) current += ` ${word}`;
    else {
      lines.push(current);
      current = word;
    }
  }
  if (current.length) lines.push(current);
  return lines.slice(0, 4);
}

/**
 * @param {object} options
 * @param {string} options.text   Texto descriptivo visible en el bloque.
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {keyof typeof PALETTE} [options.kind]
 */
export function placeholderImage({ text = 'Solicar Oficina', width = 800, height = 600, kind = 'producto' } = {}) {
  const { bg, fg, accent } = PALETTE[kind] ?? PALETTE.producto;
  const lines = wrap(text, 22);
  const fontSize = Math.max(14, Math.round(Math.min(width, height) / 16));
  const lineHeight = Math.round(fontSize * 1.35);
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2 + fontSize / 3;

  const tspans = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" font-family="Inter, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="500" fill="${fg}" text-anchor="middle" letter-spacing="0.5">${escapeXml(
          line,
        )}</text>`,
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
<rect width="${width}" height="${height}" fill="${bg}"/>
<g stroke="${accent}" stroke-width="1" fill="none" opacity="0.85">
<rect x="${width * 0.08}" y="${height * 0.1}" width="${width * 0.84}" height="${height * 0.8}"/>
<line x1="${width * 0.08}" y1="${height * 0.1}" x2="${width * 0.92}" y2="${height * 0.9}"/>
<line x1="${width * 0.92}" y1="${height * 0.1}" x2="${width * 0.08}" y2="${height * 0.9}"/>
</g>
<rect x="0" y="${height / 2 - lineHeight * lines.length * 0.72}" width="${width}" height="${lineHeight * lines.length * 1.45}" fill="${bg}" opacity="0.94"/>
${tspans}
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace(/\n/g, ''))}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default placeholderImage;
