/*
 * Datos globales del sitio: navegación, contacto y textos institucionales.
 * TODO: sustituir teléfono, dirección y emails por los datos reales de Solicar.
 */

export const empresa = {
  nombre: 'Solicar Didácticos S.L.',
  marcaLinea: 'Solicar Oficina',
  anios: '+30 años',
  direccion: 'C/ Calixto Hornedo, 14 · 13250 Daimiel (Ciudad Real)',
  telefono: '926 85 50 09',
  telefonoHref: 'tel:+926 85 50 09',
  email: 'info@solicar.es',
  emailHref: 'mailto:info@solicar.es',
  horario: 'Lunes a viernes, de 8:30 a 14:00 y de 16:00 a 18:30',
};

/** Barra utilitaria superior del header. */
export const enlacesUtilidad = [
  { label: 'Quiénes somos', to: '/contacto#quienes-somos' },
  { label: 'Mobiliario escolar', href: 'https://www.solicar.es/' },
  { label: 'Contacto', to: '/contacto' },
  { label: 'Mi cuenta', href: '#' },
];

/** Navegación principal. */
export const navPrincipal = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Marcas', to: '/marcas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

/** Sub-navegación de la sección Oficina. */
export const subNav = [
  { label: 'Sillería', to: '/productos?tipo=silleria' },
  { label: 'Mesas y escritorios', to: '/productos?tipo=mesas' },
  { label: 'Armarios y archivo', to: '/productos?tipo=archivo' },
  { label: 'Recepción y espera', to: '/productos?tipo=recepcion' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Marcas', to: '/marcas' },
  { label: 'Blog', to: '/blog' },
];

/** Columnas del footer. */
export const columnasFooter = [
  {
    titulo: 'Oficina',
    enlaces: [
      { label: 'Sillería', to: '/productos?tipo=silleria' },
      { label: 'Mesas y escritorios', to: '/productos?tipo=mesas' },
      { label: 'Armarios y archivo', to: '/productos?tipo=archivo' },
      { label: 'Recepción y espera', to: '/productos?tipo=recepcion' },
      { label: 'Catálogo completo', to: '/productos' },
    ],
  },
  {
    titulo: 'Sectores',
    enlaces: [
      { label: 'Pymes y autónomos', to: '/productos?sector=pyme' },
      { label: 'Administración pública', to: '/productos?sector=administracion' },
      { label: 'Centros educativos', to: '/productos?sector=educativo' },
      { label: 'Oficina corporativa', to: '/productos?sector=corporativo' },
    ],
  },
  {
    titulo: 'Solicar',
    enlaces: [
      { label: 'Quiénes somos', to: '/contacto#quienes-somos' },
      { label: 'Mobiliario Escolar', href: '#' },
      { label: 'Mobiliario de Oficina', to: '/productos' },
      { label: 'Proyectos instalados', to: '/proyectos' },
      { label: 'Contacto', to: '/contacto' },
    ],
  },
  {
    titulo: 'Ayuda',
    enlaces: [
      { label: 'Condiciones comerciales', href: '#' },
      { label: 'Plazos de entrega', href: '#' },
      { label: 'Política de cookies', to: '/cookies' },
      { label: 'Aviso legal / Privacidad', to: '/aviso-legal' },
    ],
  },
];

export const redesSociales = [
  { nombre: 'Facebook', icono: 'facebook', href: '#' },
  { nombre: 'X (Twitter)', icono: 'x', href: '#' },
  { nombre: 'WhatsApp', icono: 'whatsapp', href: '#' },
];

/* TODO: sustituir por los logotipos institucionales reales en SVG.
   No se incluyen archivos de logo para no reproducir marcas oficiales. */
export const logosInstitucionales = [
  'https://ec.europa.eu/regional_policy/images/information-sources/logo-download-center/eu_funded_en.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Logotipo_del_Ministerio_de_Industria_y_Turismo.svg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Logotipo_del_Plan_de_Recuperaci%C3%B3n%2C_Transformaci%C3%B3n_y_Resiliencia.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
];

/** Tipos de proyecto del formulario de presupuesto. */
export const tiposProyecto = [
  { value: 'silleria', label: 'Sillería' },
  { value: 'mesas', label: 'Mesas y escritorios' },
  { value: 'archivo', label: 'Armarios y archivo' },
  { value: 'recepcion', label: 'Recepción y espera' },
  { value: 'integral', label: 'Proyecto integral (oficina completa)' },
  { value: 'otro', label: 'Otro / no lo tengo claro todavía' },
];
