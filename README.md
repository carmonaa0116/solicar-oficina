# Solicar Oficina — microsite (frontend)

Microsite de la nueva línea de **mobiliario de oficina B2B** de Solicar Didácticos S.L.
Frontend completo, navegable y sin backend: todo el contenido dinámico se sirve desde
datos mock incluidos en `src/data/`.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build
npm run lint     # oxlint
```

Requiere Node 18 o superior.

## Stack

- **React 19** + **Vite** (bundler)
- **React Router 6** — rutas reales, una página por sección
- **Tailwind CSS 3** — tokens de marca centralizados en `tailwind.config.js`
- Sin dependencias de UI externas: iconos, carrusel, filtros y formularios son propios

## Rutas

| Ruta | Página |
|---|---|
| `/` | Home / landing de Solicar Oficina |
| `/productos` | Catálogo con filtros y paginación |
| `/productos/:slug` | Ficha de producto |
| `/proyectos` | Casos de éxito |
| `/proyectos/:slug` | Detalle de proyecto |
| `/marcas` | Marcas relacionadas (**contenido placeholder**) |
| `/blog` | Listado de artículos |
| `/blog/:slug` | Detalle de artículo |
| `/contacto` | Contacto, presupuesto y «Quiénes somos» |
| `*` | 404 |

## Estructura

```
src/
  components/   Header, SubNav, Footer, Button, Section, ProductCard,
                ProductFilters, ProductGallery, VariantSelector,
                ColorSwatchSelector, ProjectCard, BrandCard, BlogCard,
                CertificationBadge, QuoteRequestForm, Breadcrumbs,
                Pagination, PageHero, Layout, Logo, Icon, ScrollToTop
  pages/        Home, Productos, ProductoDetalle, Proyectos,
                ProyectoDetalle, Marcas, Blog, BlogDetalle, Contacto,
                NoEncontrado
  data/         productos.js · proyectos.js · marcas.js · blog.js · sitio.js
  utils/        placeholder.js  (generador de imágenes de relleno)
  App.jsx  main.jsx  index.css
tailwind.config.js
```

## Personalización

### Colores de marca

Todos los colores viven en `tailwind.config.js` como tokens. Ningún componente
hardcodea un hexadecimal.

| Token | Valor provisional | Uso |
|---|---|---|
| `primary` | `#1B4F72` | Azul corporativo: CTAs, enlaces activos, acentos |
| `graphite` | `#2B2F33` | Gris grafito: bloques oscuros del patrón zebra |
| `sand` | `#F4F4F2` | Gris muy claro: fondos alternos |

Cada token tiene su escala (`primary-50` … `primary-900`). Al llegar el manual de
identidad definitivo basta con cambiar los valores de ese archivo.

### Contenido

- **Productos** → `src/data/productos.js` (18 referencias en 4 familias)
- **Proyectos** → `src/data/proyectos.js` (8 casos)
- **Blog** → `src/data/blog.js` (9 artículos)
- **Marcas** → `src/data/marcas.js` — ⚠️ **contenido placeholder**, ver más abajo
- **Navegación, footer y datos de contacto** → `src/data/sitio.js`

### Imágenes

No hay fotografía real todavía. Todas las imágenes se generan con
`src/utils/placeholder.js` (SVG en línea, funciona sin conexión). Los puntos de
sustitución están marcados con `{/* TODO: sustituir por fotografía real */}`.

Para pasar a fotografía real basta con cambiar el campo `imagen` / `galeria` de los
archivos de datos por rutas o URLs; los componentes aceptan cualquier `src`.
Si se prefiere un servicio externo tipo `placehold.co`, se cambia el `return` de
`placeholderImage()` (hay un ejemplo comentado en el propio archivo).

## ⚠️ Sección «Marcas relacionadas» — contenido pendiente

Todavía **no está decidido** qué marcas representará o distribuirá Solicar. La página
`/marcas` usa como ejemplo de maquetación las marcas del grupo Flokk (HÅG, RH,
Giroflex, Profim, Offecct, Connection, 9to5 Seating, VIA Seating, Stylex, Spec) con sus
URLs reales. **No implica ninguna relación comercial.**

- El aviso está documentado en la cabecera de `src/data/marcas.js`.
- La página muestra además una nota discreta al pie de la sección, controlada por
  la bandera `esContenidoPlaceholder` de ese mismo archivo.
- Para sustituirlo: editar el array `marcas` (`id`, `nombre`, `iniciales`, `pais`,
  `categoria`, `descripcion`, `url`, `logo` opcional) y poner
  `esContenidoPlaceholder = false`. **No hay que tocar el layout.**

## Otros TODO marcados en el código

- Logotipo de Solicar (`src/components/Logo.jsx` — hoy es tipográfico).
- Logotipos institucionales UE / Gobierno de España / Plan de Recuperación
  (recuadros de posición en el footer y en el cierre de la home).
- PDF del dossier de cumplimiento normativo y fichas técnicas / CAD / certificados.
- Envío real del formulario de presupuesto (`QuoteRequestForm`): hoy valida en
  cliente y muestra confirmación, sin backend.
- Mapa incrustado en `/contacto`.
- Datos de contacto reales (teléfono, dirección, email) en `src/data/sitio.js`.

## Accesibilidad

- Skip-link al contenido principal, foco visible en todos los interactivos.
- Un solo `<h1>` por página y jerarquía de encabezados coherente.
- Todas las imágenes con `alt` descriptivo.
- Filtros, carrusel y selectores operables con teclado, con `aria-*` y estado anunciado
  vía `role="status"` / `aria-live`.
- El formulario asocia errores con `aria-describedby` y mueve el foco al primer campo
  inválido.
