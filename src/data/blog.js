/*
 * -----------------------------------------------------------------------------
 * BLOG — DATOS DE EJEMPLO
 * -----------------------------------------------------------------------------
 * Ocho entradas de muestra con temática realista para una marca B2B de
 * mobiliario de oficina. El cuerpo del artículo se describe como un array de
 * bloques ({ tipo: 'parrafo' | 'subtitulo' | 'lista' | 'cita' }), de forma que
 * el detalle de post se renderiza sin necesidad de inyectar HTML.
 *
 * TODO: sustituir por los artículos reales y por la fotografía de cabecera.
 *
 * ⚠️ El campo `imagen` de los artículos de abajo (bloques
 * `// unsplash:auto:start` … `// unsplash:auto:end`) es una fotografía de
 * banco de Unsplash, no la cabecera real del artículo. Se genera con
 * `npm run images:fetch` (scripts/generar-imagenes.mjs) únicamente como
 * contenido de desarrollo y debe sustituirse antes de pasar a producción.
 * -----------------------------------------------------------------------------
 */

const postsBase = [
  {
    slug: 'elegir-silla-oficina-une-en-1335',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1562643439-cf97e2f6d189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b2ZmaWNlJTIwcmVndWxhdGlvbnMlMjBwYXBlcndvcmt8ZW58MHwyfHx8MTc4NzU2Nzk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Cómo elegir una silla de oficina conforme a la UNE-EN 1335',
    categoria: 'Normativa y certificaciones',
    fecha: '2026-07-02',
    autor: 'Elena Ruiz',
    cargo: 'Responsable técnica de producto',
    tiempoLectura: '6 min',
    destacado: true,
    extracto:
      'La norma distingue tres tipos de silla según el grado de regulación. Saber cuál corresponde a cada puesto evita comprar de más y, sobre todo, comprar de menos.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Cuando un pliego o una compra corporativa exige "silla conforme a UNE-EN 1335", casi nunca se especifica a qué tipo se refiere. Y la diferencia entre los tres tipos que contempla la norma es la diferencia entre una silla que sirve para ocho horas al día y otra que no.' },
      { tipo: 'subtitulo', texto: 'Los tres tipos: A, B y C' },
      { tipo: 'parrafo', texto: 'La parte 1 de la norma (UNE-EN 1335-1) define las dimensiones y clasifica las sillas de trabajo en tres tipos según qué elementos son regulables. El tipo A es el más completo: altura de asiento, profundidad de asiento, altura y ángulo de respaldo y brazos regulables. El tipo B prescinde de la regulación de profundidad de asiento y ángulo. El tipo C es el más básico, con regulación de altura y poco más.' },
      { tipo: 'lista', items: [
        'Tipo A — puestos de jornada completa frente a pantalla, usuarios fijos, teletrabajo intensivo.',
        'Tipo B — puestos administrativos de uso regular y usuarios que comparten el mismo asiento por turnos.',
        'Tipo C — puestos de uso ocasional: consulta, mostradores auxiliares, salas técnicas.',
      ] },
      { tipo: 'subtitulo', texto: 'Qué pedir además del tipo' },
      { tipo: 'parrafo', texto: 'La parte 2 cubre los requisitos de seguridad y la parte 3, los métodos de ensayo. Un fabricante serio debe poder entregar el informe de ensayo de un laboratorio acreditado, no solo una declaración propia. Pida el número de informe y la entidad que lo emite: en España, AIDIMME e IBV son las referencias habituales para mobiliario de oficina.' },
      { tipo: 'parrafo', texto: 'Conviene también revisar el peso máximo de usuario declarado —lo habitual es 110 kg, pero hay puestos que exigen más— y la clase del cilindro de gas, que debe ser clase 4 según la norma DIN 4550 para uso de oficina.' },
      { tipo: 'cita', texto: 'Un informe de ensayo de laboratorio acreditado es lo único que convierte una declaración de conformidad en un dato verificable.' },
      { tipo: 'subtitulo', texto: 'El error más frecuente' },
      { tipo: 'parrafo', texto: 'Equipar toda la oficina con el mismo modelo. Un puesto de atención al público que rota entre tres personas al día tiene necesidades distintas a las de un puesto de desarrollo con un usuario fijo. Segmentar el pedido por tipo de puesto suele salir más barato que comprar el modelo intermedio para todo el mundo.' },
    ],
    relacionados: ['ergonomia-siete-ajustes', 'pliego-mobiliario-administracion-publica', 'reach-eutr-nimf15-importacion'],
  },
  {
    slug: 'ergonomia-siete-ajustes',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1681418659112-3b2375b68ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDB8Mnx8fDE3ODc1Njc5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Ergonomía en el puesto de trabajo: siete ajustes que marcan la diferencia',
    categoria: 'Ergonomía',
    fecha: '2026-06-11',
    autor: 'Elena Ruiz',
    cargo: 'Responsable técnica de producto',
    tiempoLectura: '5 min',
    destacado: true,
    extracto:
      'La mayoría de las sillas ergonómicas que instalamos nunca se ajustan después del primer día. Estos son los siete parámetros que sí conviene revisar.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Hay una brecha conocida entre el mobiliario ergonómico que se compra y el que se usa correctamente. En las revisiones que hacemos seis meses después de una instalación, más de la mitad de las sillas conserva exactamente los ajustes de fábrica.' },
      { tipo: 'subtitulo', texto: 'La secuencia correcta' },
      { tipo: 'parrafo', texto: 'El orden importa: ajustar la mesa antes que la silla obliga a rehacer el trabajo. La secuencia recomendada empieza siempre por la altura del asiento y termina en los accesorios.' },
      { tipo: 'lista', items: [
        'Altura de asiento: muslos paralelos al suelo, pies apoyados en plano, ángulo de rodilla en torno a 90°.',
        'Profundidad de asiento: dos o tres dedos de holgura entre el borde del asiento y la corva.',
        'Altura del apoyo lumbar: la curvatura del respaldo debe coincidir con la curva natural de la zona lumbar.',
        'Tensión del mecanismo: regulada al peso del usuario, de modo que el respaldo acompañe sin empujar.',
        'Altura de brazos: antebrazos horizontales y hombros relajados al apoyar.',
        'Altura de mesa o de monitor: el borde superior de la pantalla, a la altura de los ojos o algo por debajo.',
        'Reposapiés: solo si tras todo lo anterior los pies no llegan al suelo.',
      ] },
      { tipo: 'subtitulo', texto: 'El ajuste que nadie toca' },
      { tipo: 'parrafo', texto: 'La tensión del mecanismo sincro. Viene calibrada de fábrica para un usuario de unos 75 kg. Una persona de 55 kg que no la ajuste sentirá el respaldo rígido y acabará bloqueándolo, perdiendo justamente el beneficio del movimiento dinámico por el que se pagó la silla.' },
      { tipo: 'parrafo', texto: 'En instalaciones de más de veinte puestos incluimos una sesión de ajuste con el equipo. Son cuarenta minutos que cambian la percepción del mobiliario durante los siguientes cinco años.' },
    ],
    relacionados: ['elegir-silla-oficina-une-en-1335', 'mesas-regulables-altura-evidencia', 'amueblar-oficina-diez-personas'],
  },
  {
    slug: 'mesas-regulables-altura-evidencia',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1555474488-d2282fe0593f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDB8Mnx8fDE3ODc1Njc5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Mesas regulables en altura: qué dice la evidencia y cuándo compensa',
    categoria: 'Ergonomía',
    fecha: '2026-05-20',
    autor: 'Javier Moreno',
    cargo: 'Dirección comercial B2B',
    tiempoLectura: '7 min',
    extracto:
      'El puesto sit-stand se ha convertido en un estándar de facto en pliegos y planes de prevención. Repasamos qué aporta realmente y en qué puestos tiene sentido invertir.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Las mesas regulables en altura han pasado de ser una petición ocasional a aparecer por defecto en buena parte de los proyectos corporativos que presupuestamos. Conviene separar lo que está bien documentado de lo que es entusiasmo comercial.' },
      { tipo: 'subtitulo', texto: 'Lo que sí está documentado' },
      { tipo: 'parrafo', texto: 'La evidencia disponible respalda con bastante consistencia la reducción del tiempo sedentario y la mejora subjetiva del malestar musculoesquelético en zona lumbar y cervical, especialmente en usuarios que ya referían molestias. Es un efecto real y medible en cuestión de semanas.' },
      { tipo: 'parrafo', texto: 'Lo que la evidencia sostiene con mucha menos claridad son los efectos sobre productividad y sobre indicadores metabólicos. Prometer una mejora de rendimiento por instalar mesas elevables va más allá de lo que los datos permiten afirmar.' },
      { tipo: 'subtitulo', texto: 'Cuándo compensa el sobrecoste' },
      { tipo: 'parrafo', texto: 'Una mesa elevable eléctrica cuesta entre dos y tres veces lo que una mesa fija equivalente. Ese diferencial se justifica bien en tres escenarios concretos:' },
      { tipo: 'lista', items: [
        'Usuarios con molestias lumbares o cervicales ya identificadas por el servicio de prevención.',
        'Puestos compartidos por turnos entre personas de estatura muy diferente, donde la regulación resuelve además el ajuste entre usuarios.',
        'Puestos de jornada larga y baja movilidad, como control, soporte o desarrollo.',
      ] },
      { tipo: 'subtitulo', texto: 'Qué mirar en la ficha técnica' },
      { tipo: 'parrafo', texto: 'Tres datos separan una mesa elevable buena de una mediocre: el número de tramos de la columna —tres tramos dan más recorrido y más estabilidad en la posición alta que dos—, la capacidad de elevación real con la superficie cargada, y la existencia de detección de colisión. El nivel sonoro por debajo de 50 dB también importa más de lo que parece en una oficina abierta.' },
      { tipo: 'cita', texto: 'Instalar una mesa elevable sin explicar cómo y cada cuánto usarla convierte una inversión en ergonomía en una mesa fija cara.' },
      { tipo: 'parrafo', texto: 'El último factor es de gestión, no de producto: sin una pauta de uso —alternar cada 45 o 60 minutos, empezar por periodos cortos— la mayoría de usuarios deja de subir la mesa al cabo de un mes.' },
    ],
    relacionados: ['ergonomia-siete-ajustes', 'acustica-oficinas-diafanas', 'novedad-work-elevate'],
  },
  {
    slug: 'acustica-oficinas-diafanas',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1667646590380-670b53b8c393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHwyfHx8MTc4NzU2Nzk4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Acústica en oficinas diáfanas: soluciones sin obra',
    categoria: 'Tendencias y diseño',
    fecha: '2026-04-28',
    autor: 'Marta Sáez',
    cargo: 'Proyectos e instalación',
    tiempoLectura: '6 min',
    extracto:
      'El ruido es la primera queja en planta abierta. Repasamos qué se puede corregir solo con mobiliario, sin tocar techos ni levantar tabiques.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'En las encuestas de satisfacción de espacios de trabajo, el ruido encabeza sistemáticamente la lista de quejas en oficinas diáfanas. La buena noticia es que buena parte del problema se puede atenuar con mobiliario, sin intervenir en la envolvente del edificio —algo especialmente relevante cuando la sede está en alquiler.' },
      { tipo: 'subtitulo', texto: 'Tres problemas distintos que se confunden' },
      { tipo: 'lista', items: [
        'Reverberación: el sonido rebota en superficies duras y se acumula. Se corrige añadiendo superficie absorbente.',
        'Propagación directa: la conversación del puesto contiguo llega sin obstáculos. Se corrige interponiendo masa a la altura adecuada.',
        'Inteligibilidad: se entiende lo que dicen tres mesas más allá, y eso distrae más que el ruido de fondo. Se corrige con distancia, con barreras o con enmascaramiento.',
      ] },
      { tipo: 'subtitulo', texto: 'Qué funciona con mobiliario' },
      { tipo: 'parrafo', texto: 'Los paneles separadores de fieltro de PET reciclado sobre bench son la intervención con mejor relación coste-efecto: 12 mm de espesor y 400 mm de altura sobre el tablero interrumpen la línea directa entre usuarios enfrentados y aportan absorción cerca de la fuente, que es donde más rinde.' },
      { tipo: 'parrafo', texto: 'Las estanterías abiertas usadas como divisor entre islas de trabajo hacen un doble trabajo: rompen la línea visual, que ya reduce la percepción de ruido, y su contenido irregular difunde el sonido en lugar de reflejarlo de forma especular como haría un tabique liso.' },
      { tipo: 'parrafo', texto: 'Las zonas de espera con sofá y tapicería textil aportan absorción en la banda de voz precisamente en el área donde más se conversa. Es un efecto secundario del mobiliario blando que rara vez se contabiliza al diseñar el espacio.' },
      { tipo: 'subtitulo', texto: 'Qué no basta' },
      { tipo: 'parrafo', texto: 'Si el techo es de placa de yeso continua y el suelo, de porcelánico, ningún mobiliario compensa del todo. En ese escenario, un techo acústico o unas nubes suspendidas siguen siendo necesarios. El mobiliario reduce el problema; no lo sustituye.' },
    ],
    relacionados: ['amueblar-oficina-diez-personas', 'caso-52-puestos-planta-abierta', 'mesas-regulables-altura-evidencia'],
  },
  {
    slug: 'pliego-mobiliario-administracion-publica',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1764208666353-385d1427342a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8Z292ZXJubWVudCUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDB8Mnx8fDE3ODc1Njc5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Qué exige un pliego de mobiliario para administración pública',
    categoria: 'Administración pública',
    fecha: '2026-03-17',
    autor: 'Javier Moreno',
    cargo: 'Dirección comercial B2B',
    tiempoLectura: '8 min',
    extracto:
      'Accesibilidad, conformidad documentada y plazos con penalización. Guía práctica de los puntos donde se cae la mayoría de las ofertas.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Concurrir a una licitación de mobiliario no es vender más caro ni más barato: es acreditar. La mayor parte de las ofertas que se descartan no se descartan por precio, sino por documentación incompleta o por incumplir un requisito técnico que estaba escrito en el pliego.' },
      { tipo: 'subtitulo', texto: '1. Conformidad, con informe y no con declaración' },
      { tipo: 'parrafo', texto: 'Los pliegos suelen exigir conformidad con UNE-EN 1335 para sillería, UNE-EN 527 para mesas de trabajo y UNE-EN 14073 y 14074 para almacenamiento. Cada vez con más frecuencia se pide el informe de ensayo de laboratorio acreditado, no la declaración del fabricante. Reunir esos informes lleva semanas si no se tienen de antemano.' },
      { tipo: 'subtitulo', texto: '2. Accesibilidad en los puntos de atención' },
      { tipo: 'parrafo', texto: 'Cualquier mostrador de atención al público en un edificio de uso público debe contar con un tramo adaptado. La referencia habitual son los 800 mm de altura de mostrador y un hueco de aproximación de al menos 700 mm de alto para permitir el acercamiento frontal en silla de ruedas, según lo previsto en el DB-SUA y en la Orden VIV/561/2010. Es un requisito que se comprueba en la recepción del suministro.' },
      { tipo: 'subtitulo', texto: '3. Plazos con penalización' },
      { tipo: 'parrafo', texto: 'Los plazos de entrega en licitación suelen llevar penalización por día de retraso. Esto penaliza al distribuidor que trabaja íntegramente contra pedido de importación, con lead times de 60 a 90 días y sin margen ante una incidencia en tránsito. Disponer de stock nacional cambia por completo el perfil de riesgo de la oferta.' },
      { tipo: 'subtitulo', texto: '4. Criterios ambientales y sociales' },
      { tipo: 'parrafo', texto: 'Es cada vez más habitual encontrar criterios de valoración ligados a trazabilidad de la madera (EUTR), ausencia de sustancias del anexo XVII de REACH, o porcentaje de material reciclado. Conviene revisarlos antes de configurar la oferta, porque a menudo valen más puntos que una rebaja de precio.' },
      { tipo: 'cita', texto: 'La mayoría de las ofertas descartadas no fallan en precio: fallan en el sobre técnico.' },
      { tipo: 'parrafo', texto: 'Recomendación práctica: pedir al proveedor la carpeta de conformidad completa antes de decidir, no después de adjudicar. Un proveedor que tarda dos semanas en enviar un informe de ensayo tardará lo mismo cuando lo pida el órgano de contratación.' },
    ],
    relacionados: ['reach-eutr-nimf15-importacion', 'elegir-silla-oficina-une-en-1335', 'caso-52-puestos-planta-abierta'],
  },
  {
    slug: 'reach-eutr-nimf15-importacion',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwcmVndWxhdGlvbnMlMjBwYXBlcndvcmt8ZW58MHwyfHx8MTc4NzU2Nzk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'REACH, EUTR y NIMF-15: el papeleo que respalda el mobiliario importado',
    categoria: 'Normativa y certificaciones',
    fecha: '2026-02-19',
    autor: 'Elena Ruiz',
    cargo: 'Responsable técnica de producto',
    tiempoLectura: '7 min',
    extracto:
      'Tres siglas que aparecen en toda operación de importación de mobiliario y que conviene entender antes de firmar una compra.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Cuando parte del catálogo se fabrica fuera de la Unión Europea, el importador asume responsabilidades que no siempre se explican al cliente final. Explicarlas bien es, además, un argumento comercial: el comprador profesional quiere saber quién responde si algo falla.' },
      { tipo: 'subtitulo', texto: 'REACH: qué lleva dentro el producto' },
      { tipo: 'parrafo', texto: 'El Reglamento (CE) 1907/2006 regula el registro, evaluación y autorización de sustancias químicas. Para mobiliario afecta sobre todo a tapicerías, espumas, recubrimientos y adhesivos. El importador es responsable de que el artículo no contenga sustancias restringidas del anexo XVII por encima de los límites, y de informar sobre sustancias de la lista de candidatas si superan el 0,1 % en peso.' },
      { tipo: 'subtitulo', texto: 'EUTR: de dónde viene la madera' },
      { tipo: 'parrafo', texto: 'El Reglamento de la madera de la UE obliga a ejercer diligencia debida sobre el origen legal de la madera y de los productos derivados —incluidos los tableros de aglomerado y las estructuras de sofá—. En la práctica significa mantener un sistema documentado que permita trazar cada lote hasta su origen y evaluar el riesgo de tala ilegal.' },
      { tipo: 'subtitulo', texto: 'NIMF-15: el embalaje, no el producto' },
      { tipo: 'parrafo', texto: 'Es la norma internacional de medidas fitosanitarias que regula el embalaje de madera usado en comercio internacional: palés, calzos, jaulas. Exige tratamiento térmico o fumigación y un marcado visible. Un contenedor con embalaje sin sello NIMF-15 puede quedar retenido en frontera, con el coste y el retraso que eso implica.' },
      { tipo: 'lista', items: [
        'REACH — afecta al contenido químico del producto. Documento: declaración de conformidad de materiales.',
        'EUTR — afecta al origen legal de la madera. Documento: sistema de diligencia debida y trazabilidad de lote.',
        'NIMF-15 — afecta al embalaje de madera. Documento: sello visible en el propio palé o jaula.',
      ] },
      { tipo: 'parrafo', texto: 'A esto se añaden los ensayos de producto (UNE-EN) que acreditan resistencia y seguridad, y que en mobiliario técnico conviene encargar a un laboratorio acreditado en España para que el informe sea directamente utilizable ante un cliente público.' },
    ],
    relacionados: ['pliego-mobiliario-administracion-publica', 'elegir-silla-oficina-une-en-1335', 'amueblar-oficina-diez-personas'],
  },
  {
    slug: 'amueblar-oficina-diez-personas',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1576057121845-85eca73ce825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8c21hbGwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MHwyfHx8MTc4NzU2Nzk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Cómo amueblar una oficina de diez personas: presupuesto, plazos y errores frecuentes',
    categoria: 'Pymes y autónomos',
    fecha: '2026-01-22',
    autor: 'Marta Sáez',
    cargo: 'Proyectos e instalación',
    tiempoLectura: '6 min',
    extracto:
      'Guía práctica para una pyme que amuebla su primera oficina: qué partidas se subestiman siempre y dónde no conviene recortar.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Amueblar una oficina de diez personas es un proyecto pequeño en volumen y grande en consecuencias: quien lo hace suele hacerlo una vez cada diez años y sin experiencia previa. Estos son los puntos donde más veces hemos visto rectificar sobre la marcha.' },
      { tipo: 'subtitulo', texto: 'Las partidas que se olvidan' },
      { tipo: 'lista', items: [
        'Almacenamiento. Se presupuestan las mesas y las sillas, y el archivo se deja para después. Acaba resolviéndose con muebles de bricolaje que desentonan y duran dos años.',
        'Gestión de cableado. Sin canaleta ni pasacables, la instalación eléctrica queda vista sobre el suelo desde el primer día.',
        'Zona de espera y de descanso. Diez personas necesitan un sitio donde comer y donde esperar una visita, aunque sean seis metros cuadrados.',
        'Montaje e instalación. Es entre un 6 % y un 10 % del importe del mobiliario y aparece al final, cuando el presupuesto ya está cerrado.',
      ] },
      { tipo: 'subtitulo', texto: 'Dónde no recortar' },
      { tipo: 'parrafo', texto: 'En sillería. Es el elemento que se toca ocho horas al día y el único con impacto directo sobre la salud del equipo. Una diferencia de 120 € por silla se amortiza en confort y en vida útil; una diferencia de 120 € por mesa, mucho menos.' },
      { tipo: 'subtitulo', texto: 'Plazos realistas' },
      { tipo: 'parrafo', texto: 'Con referencias en stock nacional, dos o tres semanas desde la confirmación del pedido son un plazo razonable para diez puestos completos. Si el proyecto incluye acabados especiales o mostrador a medida, hay que contar seis u ocho semanas. Los plazos de importación directa sin stock intermedio se mueven entre 60 y 90 días.' },
      { tipo: 'cita', texto: 'La pregunta útil no es cuánto cuesta la mesa, sino cuánto cuesta el puesto completo: mesa, silla, cajonera, archivo y cableado.' },
      { tipo: 'parrafo', texto: 'Y una recomendación operativa: pedir el plano de distribución antes de comprar. Cuarenta minutos de planificación evitan descubrir que el pasillo entre mesas se queda en 70 cm, por debajo del mínimo cómodo de circulación.' },
    ],
    relacionados: ['acustica-oficinas-diafanas', 'ergonomia-siete-ajustes', 'novedad-work-elevate'],
  },
  {
    slug: 'caso-52-puestos-planta-abierta',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1499147318688-840680f266e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8b3BlbiUyMHBsYW4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MHwyfHx8MTc4NzU2Nzk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Caso práctico: 52 puestos en planta abierta sin levantar un tabique',
    categoria: 'Casos de éxito',
    fecha: '2025-11-14',
    autor: 'Marta Sáez',
    cargo: 'Proyectos e instalación',
    tiempoLectura: '5 min',
    extracto:
      'Cómo se organizó la nueva sede de Grupo Alcázar Logística en 780 m² diáfanos manteniendo el ruido bajo control y la flexibilidad del alquiler.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Grupo Alcázar Logística trasladó sus servicios centrales a una nave rehabilitada en el polígono Alces de Alcázar de San Juan: 780 m² completamente diáfanos, en régimen de alquiler, para 52 puestos de trabajo. La condición de partida era no levantar tabiquería.' },
      { tipo: 'subtitulo', texto: 'El problema: densidad sin ruido' },
      { tipo: 'parrafo', texto: 'Cincuenta y dos puestos en planta abierta generan, sin ninguna intervención, un nivel de fondo que hace incómoda la conversación telefónica. La dirección había vivido esa situación en la sede anterior y la puso como criterio principal por delante del precio.' },
      { tipo: 'subtitulo', texto: 'La solución: islas, no filas' },
      { tipo: 'parrafo', texto: 'Se compusieron ocho islas de seis puestos sobre bench, separadas entre sí por estanterías abiertas de doble cara que funcionan como divisor visual y difusor acústico. Sobre cada bench, panel separador de fieltro de PET de 400 mm. Los doce puestos de operaciones, con doble pantalla y turnos largos, se equiparon con mesas regulables en altura.' },
      { tipo: 'lista', items: [
        '8 islas de 6 puestos sobre bench electrificado.',
        '12 puestos con mesa regulable en altura para el equipo de operaciones.',
        '4 salas de reunión de distinta capacidad y 2 despachos de dirección.',
        '11 estanterías abiertas usadas como divisores de doble cara.',
      ] },
      { tipo: 'subtitulo', texto: 'El resultado' },
      { tipo: 'parrafo', texto: 'La planta se ocupó en una única mudanza de fin de semana, ocho semanas después de la firma. La medición acústica posterior arrojó una reducción de 6 dB en el nivel de fondo respecto a la configuración inicial sin divisores, y el conjunto es desmontable y trasladable si la empresa cambia de sede.' },
    ],
    relacionados: ['acustica-oficinas-diafanas', 'mesas-regulables-altura-evidencia', 'pliego-mobiliario-administracion-publica'],
  },
  {
    slug: 'novedad-work-elevate',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1686715017969-eda1e207029a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8b2ZmaWNlJTIwZGVzayUyMHByb2R1Y3R8ZW58MHwyfHx8MTc4NzU2Nzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    // unsplash:auto:end
    titulo: 'Novedad: WORK Elevate incorpora memoria de posiciones y detección de colisión',
    categoria: 'Novedades de producto',
    fecha: '2025-10-03',
    autor: 'Javier Moreno',
    cargo: 'Dirección comercial B2B',
    tiempoLectura: '4 min',
    extracto:
      'La línea WORK amplía su gama con un escritorio regulable de doble motor, columna de tres tramos y consumo en reposo por debajo de 0,1 W.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'WORK Elevate completa la familia de mesas WORK con la versión regulable en altura que más nos venían pidiendo los proyectos corporativos y los planes de prevención de riesgos laborales.' },
      { tipo: 'subtitulo', texto: 'Qué incorpora' },
      { tipo: 'lista', items: [
        'Doble motor con columna de tres tramos: recorrido de 650 a 1.290 mm.',
        'Velocidad de 32 mm/s con nivel sonoro por debajo de 50 dB.',
        'Mando digital con cuatro posiciones de memoria.',
        'Detección de colisión que detiene y revierte el movimiento ante un obstáculo.',
        'Consumo en reposo inferior a 0,1 W.',
        'Capacidad de elevación de 120 kg.',
      ] },
      { tipo: 'subtitulo', texto: 'Compatibilidad con la línea WORK' },
      { tipo: 'parrafo', texto: 'Elevate comparte tableros, cantos y acabados con el resto de la familia WORK, de modo que puede introducirse en una oficina ya equipada sin que se note el cambio de referencia. Está disponible en 1.400 y 1.600 mm de ancho y en los cuatro acabados de la gama.' },
      { tipo: 'parrafo', texto: 'La garantía de motor y electrónica es de cinco años, la misma que el resto de la estructura de la línea.' },
    ],
    relacionados: ['mesas-regulables-altura-evidencia', 'ergonomia-siete-ajustes', 'amueblar-oficina-diez-personas'],
  },
];

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export function formatearFecha(iso) {
  const [anio, mes, dia] = iso.split('-').map(Number);
  return `${dia} de ${MESES[mes - 1]} de ${anio}`;
}

/** Ruta esperada del archivo de imagen destacada de un artículo. */
const rutaImagenPost = (slug) => `/images/blog/${slug}.jpg`;

export const posts = postsBase
  .map((p) => ({
    imagen: rutaImagenPost(p.slug),
    ...p,
    fechaTexto: formatearFecha(p.fecha),
  }))
  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

export function getPostPorSlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsRelacionados(slugs = [], limite = 3) {
  return slugs.map((s) => getPostPorSlug(s)).filter(Boolean).slice(0, limite);
}

export default posts;
