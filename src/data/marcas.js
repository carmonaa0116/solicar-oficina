/*
 * =============================================================================
 * ⚠️  CONTENIDO PLACEHOLDER — PENDIENTE DE SUSTITUIR
 * =============================================================================
 * Todavía NO está decidido qué marcas representará o distribuirá Solicar
 * Didácticos S.L. en su línea de mobiliario de oficina.
 *
 * El listado que sigue usa, únicamente como ejemplo visual y estructural, las
 * marcas del grupo Flokk (la referencia de diseño del proyecto). NO implica
 * ninguna relación comercial, acuerdo de distribución ni representación entre
 * Solicar y estas marcas o sus titulares.
 *
 * PARA SUSTITUIRLO: basta con editar el array `marcas` de este archivo. El
 * componente <BrandCard /> y la página /marcas no necesitan ningún cambio.
 * Campos esperados por tarjeta:
 *   id, nombre, iniciales, pais, categoria, descripcion, url, logo
 * El campo `logo` apunta al archivo esperado en public/images/marcas/<id>.svg.
 * Mientras ese archivo no exista, <BrandCard /> capta el error de carga
 * (onError) y recurre al logotipo tipográfico a partir de `iniciales`.
 * =============================================================================
 */

/** Bandera que activa el aviso visible de "contenido de ejemplo" en /marcas.
 *  Poner a `false` cuando el listado sea el definitivo de Solicar. */
export const esContenidoPlaceholder = true;

export const introMarcas = {
  titulo: 'Marcas y fabricantes del sector',
  texto:
    'Solicar Oficina combina fabricación propia y acuerdos con fabricantes especializados para cubrir todo el equipamiento de un espacio de trabajo: sillería ergonómica, sistemas de mesa, almacenamiento y mobiliario de espera. En esta página reunimos las marcas con las que trabajamos y las referencias del sector que marcan el estándar técnico al que ajustamos nuestro catálogo.',
};

/** Ruta esperada del archivo de logotipo de una marca. */
const rutaLogoMarca = (id) => `/images/marcas/${id}.svg`;

const marcasBase = [
  {
    id: 'hag',
    nombre: 'HÅG',
    iniciales: 'HÅG',
    pais: 'Noruega',
    categoria: 'Sillería ergonómica',
    descripcion: 'Sillas de trabajo de movimiento activo, con foco en ergonomía dinámica y materiales reciclados.',
    url: 'https://www.flokk.com/hag',
  },
  {
    id: 'rh',
    nombre: 'RH',
    iniciales: 'RH',
    pais: 'Suecia',
    categoria: 'Sillería de alto rendimiento',
    descripcion: 'Asientos de precisión para puestos de uso intensivo y entornos de control 24/7.',
    url: 'https://www.flokk.com/rh',
  },
  {
    id: 'giroflex',
    nombre: 'Giroflex',
    iniciales: 'GX',
    pais: 'Suiza',
    categoria: 'Sillería de oficina',
    descripcion: 'Ingeniería suiza aplicada a mecanismos sincronizados y durabilidad de larga vida útil.',
    url: 'https://www.flokk.com/giroflex',
  },
  {
    id: 'profim',
    nombre: 'Profim',
    iniciales: 'PF',
    pais: 'Polonia',
    categoria: 'Asientos y espacios colaborativos',
    descripcion: 'Amplio catálogo de asientos operativos, confidente y soluciones para zonas informales.',
    url: 'https://www.flokk.com/brands/profim',
  },
  {
    id: 'offecct',
    nombre: 'Offecct',
    iniciales: 'OF',
    pais: 'Suecia',
    categoria: 'Mobiliario de diseño y acústica',
    descripcion: 'Piezas de autor y soluciones acústicas para espacios sociales y de reunión.',
    url: 'https://www.flokk.com/brands/offecct',
  },
  {
    id: 'connection',
    nombre: 'Connection',
    iniciales: 'CN',
    pais: 'Reino Unido',
    categoria: 'Espacios de trabajo colaborativo',
    descripcion: 'Cabinas, pods y mobiliario para reuniones informales y trabajo en grupo.',
    url: 'https://www.flokk.com/brands/connection',
  },
  {
    id: '9to5',
    nombre: '9to5 Seating',
    iniciales: '9T5',
    pais: 'Estados Unidos',
    categoria: 'Sillería de contract',
    descripcion: 'Programa amplio de sillería de oficina orientado al canal contract y a plazos cortos.',
    url: 'https://www.9to5seating.com/',
  },
  {
    id: 'via',
    nombre: 'VIA Seating',
    iniciales: 'VIA',
    pais: 'Estados Unidos',
    categoria: 'Sillería ergonómica a medida',
    descripcion: 'Sillas configurables con foco en malla técnica y personalización de acabados.',
    url: 'https://www.viaseating.com/',
  },
  {
    id: 'stylex',
    nombre: 'Stylex',
    iniciales: 'SX',
    pais: 'Estados Unidos',
    categoria: 'Asientos y mesas',
    descripcion: 'Diseño sobrio de asientos, mesas y sistemas para espacios corporativos y educativos.',
    url: 'https://www.stylexdesign.com/',
  },
  {
    id: 'spec',
    nombre: 'Spec',
    iniciales: 'SP',
    pais: 'Canadá',
    categoria: 'Mobiliario contract',
    descripcion: 'Mobiliario de espera, salud y espacios públicos con acabados de alta resistencia.',
    url: 'https://www.specfurniture.com/',
  },
];

export const marcas = marcasBase.map((m) => ({
  ...m,
  logo: rutaLogoMarca(m.id),
}));

export default marcas;
