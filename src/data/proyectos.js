/*
 * -----------------------------------------------------------------------------
 * PROYECTOS INSTALADOS — DATOS DE EJEMPLO
 * -----------------------------------------------------------------------------
 * Casos de éxito de muestra para maquetar la sección /proyectos.
 * TODO: sustituir por las instalaciones reales de Solicar y por la fotografía
 * de obra correspondiente (ver checklist de contenido del proyecto).
 *
 * ⚠️ Los campos `imagen` y `galeria` de los proyectos de abajo (bloques
 * `// unsplash:auto:start` … `// unsplash:auto:end`) son fotografías de
 * banco de Unsplash, no de obra real. Se generan con `npm run images:fetch`
 * (scripts/generar-imagenes.mjs) únicamente como contenido de desarrollo y
 * deben sustituirse por fotografía de obra real antes de pasar a producción.
 * -----------------------------------------------------------------------------
 */

const proyectosBase = [
  {
    slug: 'ayuntamiento-manzanares',
    // unsplash:auto:start
    imagen: 'https://www.manzanares.es/sites/default/files/styles/450x450/public/images/noticias/imgnot15704.jpg?itok=55z97fsE',
    galeria: [
      { src: 'https://www.manzanares.es/sites/default/files/images/noticias/imgnot15704.jpg', alt: 'Vista general de la instalación en Ayuntamiento de Manzanares' },
      { src: 'https://manzanareselreal.es/wp-content/uploads/2026/06/AH9A8611.jpg', alt: 'Zona de trabajo instalada en Ayuntamiento de Manzanares' },
    ],
    // unsplash:auto:end
    nombre: 'Renovación de las oficinas de atención al ciudadano',
    cliente: 'Ayuntamiento de Manzanares',
    sector: 'Administración pública',
    sectorId: 'administracion',
    ubicacion: 'Manzanares, Ciudad Real',
    anio: 2025,
    superficie: '420 m²',
    plazo: '6 semanas',
    puestos: 24,
    destacado: true,
    resumen:
      'Sustitución completa del mobiliario de la planta baja del consistorio: 24 puestos operativos, mostrador de recepción accesible y sala de comisiones.',
    contexto:
      'El Ayuntamiento de Manzanares afrontaba la renovación del Servicio de Atención al Ciudadano tras veinte años sin actualizar el mobiliario. La planta baja concentra el registro general, urbanismo y tesorería, con una afluencia media de 180 visitas diarias y un mostrador que no cumplía las condiciones de accesibilidad exigidas para edificios de uso público.',
    necesidad:
      'El pliego exigía tres cosas difíciles de conjugar: acreditar conformidad con UNE-EN 1335 y UNE-EN 527 en cada referencia, un mostrador con tramo accesible según la Orden VIV/561/2010, y ejecutar la instalación sin cerrar la atención al público más de dos días seguidos.',
    solucion:
      'Se planificó la instalación por bloques de seis puestos en fines de semana consecutivos, de modo que el servicio nunca se interrumpió en día hábil. La recepción se resolvió con un Atrio Recepción L con tramo rebajado a 800 mm y hueco de aproximación de 700 mm. La sala de comisiones se equipó con una Consejo 240 y sillería Nexo Confidente, y el archivo de gestión con una pared continua de 11 módulos Modul.',
    resultado:
      'Entrega completa en seis semanas desde la firma, sin ninguna jornada de cierre al público. Toda la documentación de conformidad se aportó en el acta de recepción del suministro.',
    productos: ['work-120', 'ergo-pro-300', 'atrio-recepcion-l', 'consejo-240', 'modul-alto-5', 'modul-archivador-3c', 'nexo-confidente', 'sala-bancada-4p'],
    cita: {
      texto:
        'Lo que más valoramos fue la planificación por fases: pudimos mantener el registro abierto todos los días hábiles durante la reforma.',
      autor: 'Jefatura de Servicios Generales, Ayuntamiento de Manzanares',
    },
  },
  {
    slug: 'grupo-alcazar-corporativo',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1770993151205-f9534b48eb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwY29ycG9yYXRlJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1699645589794-b5f0c8483cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8b3BlbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTcwfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en Grupo Alcázar Logística' },
      { src: 'https://images.unsplash.com/photo-1766411503480-d3b0df6ef198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8b3BlbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTcwfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en Grupo Alcázar Logística' },
      { src: 'https://images.unsplash.com/photo-1770993151375-0dee97eda931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTIwY29ycG9yYXRlJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk2OHww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en Grupo Alcázar Logística' },
      { src: 'https://images.unsplash.com/photo-1770993151205-f9534b48eb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwY29ycG9yYXRlJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk2OHww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de Grupo Alcázar Logística' },
    ],
    // unsplash:auto:end
    nombre: 'Nueva sede corporativa en espacio abierto',
    cliente: 'Grupo Alcázar Logística',
    sector: 'Oficina corporativa',
    sectorId: 'corporativo',
    ubicacion: 'Alcázar de San Juan, Ciudad Real',
    anio: 2025,
    superficie: '780 m²',
    plazo: '8 semanas',
    puestos: 52,
    destacado: true,
    resumen:
      'Traslado de 52 puestos a una planta diáfana con bench electrificado, cuatro salas de reunión y una zona de dirección.',
    contexto:
      'Grupo Alcázar Logística trasladó sus servicios centrales a una nave rehabilitada de 780 m² en el polígono Alces. La planta, completamente diáfana, debía acoger 52 puestos de trabajo, cuatro salas de reunión de distinta capacidad, dos despachos de dirección y una zona de descanso.',
    necesidad:
      'La dirección quería evitar el efecto "mar de mesas": el reto era organizar 52 puestos en planta abierta manteniendo niveles de ruido aceptables y sin levantar tabiquería, para conservar la flexibilidad del alquiler.',
    solucion:
      'Se compusieron ocho islas de WORK Bench Duo de seis puestos, separadas por estanterías Modul Estante Open usadas como divisores de doble cara y por paneles acústicos de fieltro de PET sobre los benches. Los doce puestos del equipo de operaciones, que trabaja a doble pantalla y turnos largos, se equiparon con WORK Elevate regulable en altura. Las salas de reunión se resolvieron con Consejo 240 y Consejo 160.',
    resultado:
      'La planta se ocupó en una única mudanza de fin de semana. La medición acústica posterior arrojó una reducción de 6 dB en el nivel de fondo respecto a la configuración inicial sin divisores.',
    productos: ['work-bench-duo', 'work-elevate', 'work-160', 'ergo-pro-300', 'ergo-executive-500', 'consejo-240', 'sala-sofa-3p'],
    cita: {
      texto:
        'Nos plantearon la planta entera en 3D antes de comprar nada. Eso nos ahorró dos cambios de criterio que habrían salido caros.',
      autor: 'Dirección de Operaciones, Grupo Alcázar Logística',
    },
  },
  {
    slug: 'coworking-ciudad-real',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1722409195404-dddecbd49dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1751151015850-ae5e0356bb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en La Fábrica Coworking' },
      { src: 'https://images.unsplash.com/photo-1705909772639-69d68969ab00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en La Fábrica Coworking' },
      { src: 'https://images.unsplash.com/photo-1776653095346-726a740d8619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en La Fábrica Coworking' },
      { src: 'https://images.unsplash.com/photo-1664153672323-e281ea365a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Nnx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de La Fábrica Coworking' },
    ],
    // unsplash:auto:end
    nombre: 'Espacio de coworking de 30 posiciones',
    cliente: 'La Fábrica Coworking',
    sector: 'Pyme',
    sectorId: 'pyme',
    ubicacion: 'Ciudad Real',
    anio: 2024,
    superficie: '310 m²',
    plazo: '3 semanas',
    puestos: 30,
    resumen:
      'Equipamiento completo de un coworking en una antigua fábrica de harinas: 30 posiciones flexibles, taquillas y sala de videollamadas.',
    contexto:
      'La Fábrica Coworking abrió en el casco antiguo de Ciudad Real reutilizando una antigua fábrica de harinas de tres plantas. El proyecto tenía un presupuesto de equipamiento cerrado y una fecha de apertura comprometida con los primeros socios.',
    necesidad:
      'Cada posición debía poder reconfigurarse: un mes podía haber diez mesas individuales y al siguiente tres equipos de seis personas. Además, el mobiliario tenía que convivir con una nave de ladrillo visto y vigas de madera sin resultar corporativo.',
    solucion:
      'Se combinaron mesas WORK 120 sueltas —fáciles de recolocar— con dos islas de WORK Bench Duo para los equipos estables. El acabado en roble natural sobre estructura grafito responde al carácter industrial del edificio. Los Modul Bajo 2 hacen de taquilla individual con cerradura y, a la vez, de superficie de apoyo perimetral.',
    resultado:
      'Instalación completa en tres semanas, incluida la subida de material a la segunda planta sin ascensor. El espacio abrió en la fecha comprometida con el 70 % de las posiciones ya contratadas.',
    productos: ['work-120', 'work-bench-duo', 'ergo-lite-200', 'modul-bajo-2', 'modul-estante-open'],
    cita: {
      texto:
        'Llamamos un martes con una duda de medidas y el jueves teníamos el plano corregido. Con un proveedor grande eso no pasa.',
      autor: 'Fundación de La Fábrica Coworking',
    },
  },
  {
    slug: 'ies-daimiel-administracion',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1634313946117-25462979f178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1768700519416-60d5e8931b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTc4fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en IES Juan D’Opazo' },
      { src: 'https://images.unsplash.com/photo-1667532447990-51c6704ef358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en IES Juan D’Opazo' },
      { src: 'https://images.unsplash.com/photo-1766228271510-acbefbd9e0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en IES Juan D’Opazo' },
      { src: 'https://images.unsplash.com/photo-1768700519416-60d5e8931b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTc4fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de IES Juan D’Opazo' },
    ],
    // unsplash:auto:end
    nombre: 'Zona administrativa y sala de profesores',
    cliente: 'IES Juan D’Opazo',
    sector: 'Centro educativo',
    sectorId: 'educativo',
    ubicacion: 'Daimiel, Ciudad Real',
    anio: 2024,
    superficie: '260 m²',
    plazo: '4 semanas (verano)',
    puestos: 18,
    resumen:
      'Secretaría, jefatura de estudios, dirección y sala de profesores de un instituto de 640 alumnos, ejecutado íntegramente en agosto.',
    contexto:
      'El IES Juan d’Opazo renovó en un solo verano el equipamiento de su zona administrativa: secretaría, conserjería, jefatura de estudios, dirección, departamento de orientación y sala de profesores.',
    necesidad:
      'El centro solo podía recibir la instalación durante agosto, con el edificio cerrado y sin personal de referencia más de dos horas al día. El archivo de secretaría, con más de 900 expedientes en carpeta colgante, debía trasladarse sin perder el orden.',
    solucion:
      'Solicar coordinó la retirada del mobiliario antiguo, la instalación y el traslado del archivo con etiquetado por bloques. La secretaría se equipó con seis módulos Modul Archivador 3C y una pared de Modul Alto 5 con persiana. La sala de profesores combina mesas WORK 160 en configuración de trabajo compartido con sillería Kanta Stack apilable para las reuniones de claustro.',
    resultado:
      'El centro abrió el 1 de septiembre con todo operativo. La proximidad del almacén de Daimiel —a diez minutos del instituto— permitió resolver dos incidencias de medidas el mismo día.',
    productos: ['work-160', 'modul-alto-5', 'modul-archivador-3c', 'kanta-stack-080', 'nexo-confidente', 'atrio-recepcion-compact', 'sala-bancada-4p'],
    cita: {
      texto:
        'Tener el almacén a diez minutos se nota. Dos piezas que no encajaban se cambiaron esa misma tarde.',
      autor: 'Secretaría del IES Juan d’Opazo',
    },
  },
  {
    slug: 'clinica-dental-tomelloso',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1705909773171-4ba952b9c0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8N3x8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1554039923-b14c7459b605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OXx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en Clínica Dental Vega' },
      { src: 'https://images.unsplash.com/photo-1656494649244-cead1ed7c344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MTB8fHNtYWxsJTIwYnVzaW5lc3MlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwwfDJ8fHwxNzg3NTY3OTcyfDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en Clínica Dental Vega' },
      { src: 'https://images.unsplash.com/photo-1770993151205-f9534b48eb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8c3RhcnR1cCUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwwfDJ8fHwxNzg3NTY3OTc0fDA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en Clínica Dental Vega' },
      { src: 'https://images.unsplash.com/photo-1706689656095-168768dc20a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de Clínica Dental Vega' },
    ],
    // unsplash:auto:end
    nombre: 'Recepción y sala de espera de clínica',
    cliente: 'Clínica Dental Vega',
    sector: 'Pyme',
    sectorId: 'pyme',
    ubicacion: 'Tomelloso, Ciudad Real',
    anio: 2025,
    superficie: '95 m²',
    plazo: '2 semanas',
    puestos: 3,
    resumen:
      'Mostrador compacto, sala de espera de 14 plazas y dos puestos administrativos en una clínica de nueva apertura.',
    contexto:
      'Una clínica dental de nueva apertura en Tomelloso necesitaba resolver el área de acogida —recepción, sala de espera y administración— con un presupuesto de equipamiento acotado y en el plazo que marcaba la fecha de licencia de actividad.',
    necesidad:
      'El uso sanitario impone tapicerías limpiables y resistentes a desinfectantes, y la sala de espera debía ofrecer 14 plazas sin resultar un pasillo de sillas alineadas.',
    solucion:
      'La espera se compuso con tres Sala Sofá (dos de tres plazas y uno de dos) en polipiel técnica limpiable, más dos butacas individuales que rompen la alineación, y una bancada de cuatro plazas junto al acceso. La recepción se resolvió con un Atrio Recepción Compact de 1.600 mm y un Modul Bajo 2 interior para impresora y consumibles.',
    resultado:
      'Dos semanas desde el pedido a la entrega, con la clínica abriendo en la fecha prevista de licencia.',
    productos: ['atrio-recepcion-compact', 'sala-sofa-3p', 'modul-bajo-2', 'work-elevate', 'atrio-recepcion-l'],
    cita: {
      texto:
        'Nos enseñaron muestras de tapicería y nos confirmaron por escrito que aguantan los desinfectantes que usamos. Eso nos decidió.',
      autor: 'Dirección de Clínica Dental Vega',
    },
  },
  {
    slug: 'estudio-arquitectura-puertollano',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8OHx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1722409195404-dddecbd49dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en Ortega & Marín Arquitectos' },
      { src: 'https://images.unsplash.com/photo-1751151015850-ae5e0356bb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en Ortega & Marín Arquitectos' },
      { src: 'https://images.unsplash.com/photo-1705909772639-69d68969ab00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en Ortega & Marín Arquitectos' },
      { src: 'https://images.unsplash.com/photo-1776653095346-726a740d8619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NXx8c21hbGwlMjBidXNpbmVzcyUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NzJ8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de Ortega & Marín Arquitectos' },
    ],
    // unsplash:auto:end
    nombre: 'Estudio de arquitectura en planta única',
    cliente: 'Ortega & Marín Arquitectos',
    sector: 'Pyme',
    sectorId: 'pyme',
    ubicacion: 'Puertollano, Ciudad Real',
    anio: 2024,
    superficie: '140 m²',
    plazo: '2 semanas',
    puestos: 8,
    resumen:
      'Ocho puestos de doble pantalla, mesa de planos y archivo de proyectos para un estudio de arquitectura.',
    contexto:
      'Un estudio de arquitectura de ocho personas se trasladó a una planta única de 140 m² en el centro de Puertollano y aprovechó la mudanza para renovar el equipamiento completo.',
    necesidad:
      'Todos los puestos trabajan con dos monitores de 27 pulgadas y una tableta gráfica, lo que exige más superficie de la habitual, y el archivo de proyectos acumulaba planos en formato A1 sin un sistema de guardado estable.',
    solucion:
      'Ocho mesas WORK 160 con canaleta de serie resuelven la superficie y el cableado de doble pantalla. Dos de ellas se sustituyeron por WORK Elevate a petición del equipo. El archivo se organizó con Modul Estante Open de 1.000 mm reforzado, y una Consejo 160 hace de mesa de planos y de mesa de reunión con cliente.',
    resultado:
      'El estudio ganó dos puestos de trabajo respecto a la sede anterior con la misma superficie útil.',
    productos: ['work-160', 'work-elevate', 'ergo-pro-300', 'modul-estante-open', 'consejo-240'],
    cita: {
      texto:
        'Nos ajustaron la profundidad de la canaleta para que cupiesen los dos brazos de monitor. No dieron por hecho que valía la solución estándar.',
      autor: 'Socio director, Ortega & Marín Arquitectos',
    },
  },
  {
    slug: 'oficina-empleo-valdepenas',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1646120018656-dc7829a646a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8Z292ZXJubWVudCUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1779373237828-20dff4964012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8Z292ZXJubWVudCUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NjR8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en Oficina Comarcal de Empleo de Valdepeñas' },
      { src: 'https://images.unsplash.com/photo-1581540969368-65299b6153b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8Z292ZXJubWVudCUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NjR8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en Oficina Comarcal de Empleo de Valdepeñas' },
      { src: 'https://images.unsplash.com/photo-1646120018656-dc7829a646a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8Z292ZXJubWVudCUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NjR8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en Oficina Comarcal de Empleo de Valdepeñas' },
      { src: 'https://images.unsplash.com/photo-1779373237828-20dff4964012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8Z292ZXJubWVudCUyMG9mZmljZSUyMGludGVyaW9yfGVufDB8Mnx8fDE3ODc1Njc5NjR8MA&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de Oficina Comarcal de Empleo de Valdepeñas' },
    ],
    // unsplash:auto:end
    nombre: 'Oficina comarcal de empleo',
    cliente: 'Oficina Comarcal de Empleo de Valdepeñas',
    sector: 'Administración pública',
    sectorId: 'administracion',
    ubicacion: 'Valdepeñas, Ciudad Real',
    anio: 2023,
    superficie: '340 m²',
    plazo: '5 semanas',
    puestos: 16,
    resumen:
      'Dieciséis puestos de atención con mamparas, sala de espera de 30 plazas y archivo cerrado bajo llave.',
    contexto:
      'La oficina comarcal de empleo de Valdepeñas atiende a población de once municipios y registra picos de más de 200 visitas en los primeros días de mes. La reforma buscaba ordenar la espera y dar privacidad a las entrevistas de orientación.',
    necesidad:
      'Las entrevistas de orientación tratan datos personales y requerían separación visual entre puestos contiguos. Además, la documentación de expedientes debía quedar bajo llave al cierre de la jornada.',
    solucion:
      'Los dieciséis puestos se montaron sobre WORK 120 con mampara frontal de 600 mm, agrupados de dos en dos con un Modul Bajo 2 con cerradura entre cada pareja. La espera se resolvió con siete bancadas Sala Bancada 4P en disposición perimetral, y el archivo con una pared de Modul Alto 5 con cerradura maestreable por departamento.',
    resultado:
      'El tiempo medio de espera se redujo tras la reordenación del flujo de acceso y la señalización de los puestos, y la oficina superó la auditoría de protección de datos del ejercicio siguiente.',
    productos: ['work-120', 'ergo-lite-200', 'modul-bajo-2', 'modul-alto-5', 'sala-bancada-4p', 'atrio-recepcion-l'],
    cita: {
      texto:
        'La maestreabilidad de las cerraduras por departamento fue clave para nosotros. Nadie más lo había planteado.',
      autor: 'Dirección de la Oficina Comarcal de Empleo',
    },
  },
  {
    slug: 'eoi-alcazar-aulas',
    // unsplash:auto:start
    imagen: 'https://images.unsplash.com/photo-1667532447990-51c6704ef358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    galeria: [
      { src: 'https://images.unsplash.com/photo-1634313946117-25462979f178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8MXx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Vista general de la instalación en Escuela Oficial de Idiomas' },
      { src: 'https://images.unsplash.com/photo-1667532447990-51c6704ef358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8Mnx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de trabajo instalada en Escuela Oficial de Idiomas' },
      { src: 'https://images.unsplash.com/photo-1768700519416-60d5e8931b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8M3x8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Detalle de acabados del mobiliario en Escuela Oficial de Idiomas' },
      { src: 'https://images.unsplash.com/photo-1766228271510-acbefbd9e0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDQwOTk5fDB8MXxzZWFyY2h8NHx8c2Nob29sJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHwyfHx8MTc4NzU2Nzk3Nnww&ixlib=rb-4.1.0&q=80&w=400', alt: 'Zona de espera de Escuela Oficial de Idiomas' },
    ],
    // unsplash:auto:end
    nombre: 'Aulas de formación y despachos de la EOI',
    cliente: 'Escuela Oficial de Idiomas',
    sector: 'Centro educativo',
    sectorId: 'educativo',
    ubicacion: 'Alcázar de San Juan, Ciudad Real',
    anio: 2023,
    superficie: '520 m²',
    plazo: '5 semanas',
    puestos: 12,
    resumen:
      'Seis aulas de formación reconfigurables, doce despachos de departamento y una sala de reuniones.',
    contexto:
      'La Escuela Oficial de Idiomas de Alcázar de San Juan imparte clases en seis aulas que cambian de formato varias veces al día: de disposición en U para conversación a filas para examen oficial.',
    necesidad:
      'El mobiliario de aula debía poder recolocarse en menos de cinco minutos por una sola persona, apilarse para liberar el aula en periodo de exámenes y resistir un uso de doce horas diarias.',
    solucion:
      'Se eligió Kanta Stack 080 con carro de transporte para 24 unidades: 4,6 kg por silla y apilado de doce permiten vaciar un aula completa en dos viajes. Los doce despachos de departamento se equiparon con WORK 120 y Modul Alto 5, y la sala de reuniones de claustro con Consejo 240 y Nexo Confidente con enganche de fila.',
    resultado:
      'Tras dos cursos completos de uso no se ha registrado ninguna rotura de carcasa, y la reconfiguración de aula se hace de forma habitual entre clase y clase.',
    productos: ['kanta-stack-080', 'nexo-confidente', 'work-120', 'modul-alto-5', 'consejo-240'],
    cita: {
      texto:
        'Pedimos que una sola persona pudiera cambiar el aula entre clases. Es exactamente lo que hacemos ahora.',
      autor: 'Jefatura de Estudios de la EOI',
    },
  },
];

/** Ruta esperada de un archivo de imagen de proyecto (portada o galería). */
const rutaImagenProyecto = (slug, sufijo = '') => `/images/proyectos/${slug}${sufijo}.jpg`;

export const proyectos = proyectosBase.map((p) => ({
  imagen: rutaImagenProyecto(p.slug),
  galeria: [
    { src: rutaImagenProyecto(p.slug, '-1'), alt: `Vista general de la instalación en ${p.cliente}` },
    { src: rutaImagenProyecto(p.slug, '-2'), alt: `Zona de trabajo instalada en ${p.cliente}` },
    { src: rutaImagenProyecto(p.slug, '-3'), alt: `Detalle de acabados del mobiliario en ${p.cliente}` },
    { src: rutaImagenProyecto(p.slug, '-4'), alt: `Zona de espera de ${p.cliente}` },
  ],
  ...p,
}));

export function getProyectoPorSlug(slug) {
  return proyectos.find((p) => p.slug === slug);
}

export function getProyectosPorSlugs(slugs = []) {
  return slugs.map((s) => getProyectoPorSlug(s)).filter(Boolean);
}

export default proyectos;
