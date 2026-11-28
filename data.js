export const WHATSAPP_DISPLAY = '+57 322 625 0965';
export const WHATSAPP_URL = 'https://wa.me/573226250965';

export const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Expediciones', path: '/expediciones' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Destinos', path: '/destinos' },
  { label: 'Fósiles', path: '/fosiles' },
  { label: 'Blog', path: '/blog' },
  { label: 'Información', path: '/informacion' },
  { label: 'Quiénes somos', path: '/nosotros' },
];

export const footerLinks = [
  { label: 'Expediciones', path: '/expediciones' },
  { label: 'Nuestro proyecto', path: '/nosotros' },
  { label: 'Blog científico', path: '/blog' },
  { label: 'Ciencia y conocimiento', path: '/ciencia' },
  { label: 'Contacto', path: '/contacto' },
  { label: 'Privacidad y créditos', path: '/privacidad' },
];

export const disciplines = [
  { label: 'Geología', icon: 'layers', path: '/experiencias' },
  { label: 'Paleontología', icon: 'fingerprint', path: '/experiencias' },
  { label: 'Espeleología', icon: 'mountain', path: '/experiencias' },
  { label: 'Biodiversidad', icon: 'leaf', path: '/experiencias' },
  { label: 'Astronomía', icon: 'orbit', path: '/experiencias' },
];

export const expeditionCategories = [
  'Todas',
  'Categoría A · Planes cortos (2–3 días)',
  'Categoría B · Selva y territorios remotos',
];

export const expeditions = [
  {
    slug: 'trekking-georupestre-desierto',
    category: 'Categoría A · Planes cortos (2–3 días)',
    categoryShort: 'Categoría A · Plan corto',
    duration: '3 días (3 despertares)',
    durationShort: '3 días',
    transportShort: 'Terrestre privado',
    ecosystemShort: 'Zonas áridas y montaña',
    topoKey: 'desierto',
    image: '/assets/desierto-tatacoa.jpg',
    imageAlt: 'Paisaje de cárcavas erosionadas en el Desierto de la Tatacoa, Colombia',
    imageCredit: 'Ricardo Gonzalez Arango · CC BY-SA 4.0',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Tatacoa_Desert.jpg',
    region: 'Zonas desérticas, valles interandinos y piedemonte',
    logisticsSummary: 'Transporte terrestre privado puerta a puerta desde la ciudad de origen.',
    accommodation:
      'Alojamiento completo en habitación individual por defecto (o compartida según grupo familiar y disponibilidad local).',
    title: 'Trekking Georupestre del Desierto',
    cardLabel: 'PALEONTOLOGÍA · ARTE RUPESTRE · MONTAÑA',
    explorer: {
      summary:
        'Tres días de caminata interpretativa por suelos desérticos que alguna vez fueron mares antiguos, entre fósiles expuestos, pozos de aguas azules, petroglifos y cielos nocturnos despejados.',
      scientificPlus:
        'Lectura práctica de ambientes marinos extintos, erosión eólica e hídrica y símbolos rupestres ancestrales explicados en lenguaje cercano.',
      bibliography: 'Guianza interpretativa basada en cartografía geológica nacional y registro patrimonial local.',
    },
    academic: {
      summary:
        'Recorrido de 3 jornadas enfocado en la observación estratigráfica y tafonómica de secuencias sedimentarias expuestas, geomorfología fluvial de cañones y documentación no invasiva de petroglifos.',
      scientificPlus:
        'Análisis in situ de facies sedimentarias, horizontes fosilíferos y emplazamiento geomorfológico de estaciones rupestres sin alteración del registro.',
      bibliography:
        'Marco geológico del Servicio Geológico Colombiano (SGC, 2020) y lineamientos de conservación del patrimonio arqueológico del ICANH.',
    },
    journeys: [
      {
        title: 'Primer despertar · Antiguos mares y cielos del desierto',
        explorer:
          'Partimos hacia paisajes áridos legendarios donde, en otras eras, los mares cubrían estas arenas y hoy el viento deja al descubierto huellas fósiles. La dinámica viva del territorio nos invita a caminar bajo el sol, refrescarnos en pozos de aguas azules y despedir la jornada bajo noches despejadas en diálogo con el cosmos.',
        academic:
          'Aproximación inicial a secuencias sedimentarias de antiguos ambientes marinos y transicionales sometidas a meteorización eólica intensa. Observación de microcuencas hídricas contrastantes con el régimen semiárido y análisis del horizonte astronómico sin contaminación lumínica.',
      },
      {
        title: 'Segundo despertar · Vestigios de fauna extinta y piedras ancestrales',
        explorer:
          'Caminamos sobre estratos que conservan la memoria de animales extintos que habitaron este territorio cuando el paisaje era completamente distinto. Remontamos grandes cursos de agua para encontrar piedras ancestrales grabadas con símbolos de otros tiempos y ascendemos hacia la montaña para contemplar el desierto al caer la tarde.',
        academic:
          'Reconocimiento tafonómico en campo (sin extracción ni recolección de especímenes) y prospección visual de bloques con petroglifos asociados a terrazas fluviales. Ascenso altitudinal para lectura panorámica de unidades litoestratigráficas y control estructural del relieve.',
      },
      {
        title: 'Tercer despertar · Aguas que esculpen la roca y retorno',
        explorer:
          'Nos adentramos nuevamente en el entorno fluvial para observar cómo el agua abre paso rompiendo la roca, conectando quebradas y vertientes antes de emprender los últimos ascensos de montaña. Con las mochilas al hombro, cerramos la travesía integrando el sentido geológico y humano del paisaje antes de regresar a la ciudad.',
        academic:
          'Estudio de incisión fluvial en cañones rocosos y confluencia de drenajes como agentes modeladores del relieve reciente. Síntesis interpretativa de campo sobre la relación entre geodiversidad, disponibilidad hídrica y ocupación humana temprana antes del retorno.',
      },
    ],
    communityImpact:
      'Operación de bajo impacto con contratación de hospedaje, alimentación tradicional y anfitriones locales en la región, fortaleciendo la economía territorial y la custodia no extractiva del patrimonio fósil y rupestre.',
    jungleTransparency: null,
    includes: [
      'Transporte terrestre privado puerta a puerta desde Bogotá (o ciudad de origen acordada) y retorno.',
      'Alimentación completa durante toda la expedición.',
      'Hospedaje completo (acomodación individual por defecto, o compartida según grupo familiar y disponibilidad del lugar).',
      'Guianza científica especializada y entradas a los sectores de interés.',
      'Seguro de vida y asistencia médica para actividades en territorio.',
    ],
    gallery: [
      {
        src: '/assets/expeditions/desierto-canon-caminante.jpg',
        alt: 'Caminante recorriendo cañón entre cárcavas y suelos agrietados en el desierto',
        caption: 'Travesía por cañones de erosión hídrica y eólica · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-estratos-multicolor.jpg',
        alt: 'Ladera árida con horizontes estratigráficos ocres, rojizos y grises',
        caption: 'Lectura estratigráfica en afloramientos multicolores · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-zona-gris.jpg',
        alt: 'Zona gris sedimentaria del desierto con cordillera al fondo',
        caption: 'Horizontes sedimentarios grises asociados a antiguos ambientes · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-conglomerado.jpg',
        alt: 'Bloque de conglomerado con clastos redondeados en el desierto',
        caption: 'Conglomerados expuestos por meteorización diferencial · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-cresta-expedicionarios.jpg',
        alt: 'Dos expedicionarios sobre crestas rojas erosionadas con paisaje andino al fondo',
        caption: 'Caminata interpretativa por crestas arcillosas · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-carcavas-nube.jpg',
        alt: 'Relieve erosionado ocre bajo cielo despejado con nube estirada',
        caption: 'Morfología árida y cielos abiertos del desierto · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-campo-estratos.jpg',
        alt: 'Geólogo en campo frente a secuencia de estratos ocres, grises y púrpuras',
        caption: 'Acompañamiento geológico en secuencias estratigráficas · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/desierto-atardecer-montana.jpg',
        alt: 'Atardecer sobre la cordillera desde ruta de ascenso en montaña',
        caption: 'Cierre de jornada en ascenso de montaña al ocaso · Archivo de campo COLOMBIA FÓSIL',
      },
    ],
  },
  {
    slug: 'trekking-georupestre-guyana',
    category: 'Categoría B · Selva y territorios remotos',
    categoryShort: 'Categoría B · Selva remota',
    duration: '7 días (7 despertares)',
    durationShort: '7 días',
    transportShort: 'Chárter + Fluvial',
    ecosystemShort: 'Escudo Guayanés',
    topoKey: 'vaupes',
    image: '/assets/vaupes-jirijirimo.jpg',
    imageAlt: 'Raudal del Jirijirimó en la Reserva Yaigojé Apaporis, Vaupés',
    imageCredit: 'Jucatili25 · CC BY-SA 4.0',
    imageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:Raudal_del_Jirijirimo-_Reserva_Yaigoj%C3%A9_Apaporis.jpg',
    region: 'Vaupés · Mitú, Raudal del Jirijirimó y Serranía de Morroco (Escudo Guayanés)',
    logisticsSummary:
      'Vuelos chárter en avioneta sobre la Serranía de Morroco, navegación fluvial en canoa con motor fuera de borda y operación bajo gobernanza indígena.',
    accommodation:
      'Hotel en Mitú (primera y última noche) y pernocta en selva en carpas o hamacas dentro de malocas o campamentos autorizados, según preferencia del explorador y disponibilidad comunitaria.',
    title: 'Trekking Georupestre a la Guyana · Vaupés y Morroco',
    cardLabel: 'ESCUDO GUAYANÉS · TEPUYES · CULTURAS AMAZÓNICAS',
    explorer: {
      summary:
        'Siete días de expedición auténtica en el corazón amazónico del Vaupés: sobrevuelo por la Serranía de Morroco, navegación por los ríos Apaporis y Cananarí, cavernas en tepuyes, cascadas ocres, arte rupestre y convivencia con comunidades taiwano y piapoco.',
      scientificPlus:
        'Contacto entre el Cratón Amazónico y el Escudo de Guyana, cuevas en cuarcitas, aguas negras ricas en taninos, pictogramas afines a Chiribiquete y saberes ancestrales en maloca.',
      bibliography:
        'Cartografía oficial IGAC, estudios del Escudo Guayanés del SGC y protocolos de consentimiento comunitario indígena.',
    },
    academic: {
      summary:
        'Expedición geoarqueológica de 7 jornadas sobre el borde occidental del Escudo Guayanés (Tepuy Way Ari Kiu / Morroco), analizando fracturamiento en cuarcitas devónicas, procesos seudokársticos, meandros abandonados y estaciones con petroglifos y pictogramas.',
      scientificPlus:
        'Levantamiento observacional de columnas estratigráficas en cañadas de tepuy, diaclasamiento estructural en areniscas/cuarcitas, química natural de aguas ácidas por taninos e iconografía rupestre comparada con el PNN Chiribiquete.',
      bibliography:
        'Gómez, J. et al. (SGC, 2020), The Geology of Colombia Vol. 1 (DOI: 10.32685/pub.esp.35.2019.01); cartografía IGAC y literatura etnográfica del complejo Vaupés–Apaporis.',
    },
    journeys: [
      {
        title: 'Primer despertar · Mitú y reconocimiento del río Vaupés',
        explorer:
          'Llegada a Mitú, acomodación en hotel y primera salida de reconocimiento por los afloramientos rocosos del río Vaupés. Recorremos los mercados locales con productos indígenas y compartimos una charla introductoria de geoarqueología para preparar el sobrevuelo hacia la Serranía de Morroco.',
        academic:
          'Recepción en Mitú y reconocimiento de afloramientos del basamento y cobertera en el río Vaupés. Contextualización etnográfica del territorio e inducción técnica sobre el plan de sobrevuelo geomorfológico de la jornada siguiente.',
      },
      {
        title: 'Segundo despertar · Sobrevuelo a Morroco, Jirijirimó y Caño Culebra',
        explorer:
          'Despegamos en avioneta para sobrevolar la Serranía de Morroco (Tepuy Way Ari Kiu) y contemplar desde el aire la fractura monumental de las rocas entre el Cratón Amazónico y las rocas de Guyana. Aterrizamos en el poblado indígena de Buenos Aires, donde recibimos el permiso y los rezos ancestrales de las etnias taiwano y piapoco. Navegamos en canoa hasta el Raudal del Jirijirimó (El Nido de la Anaconda) y nos bañamos en las aguas rojizas de Caño Culebra antes de acampar en la selva.',
        academic:
          'Sobrevuelo de observación morfotectónica sobre el Tepuy Way Ari Kiu (Serranía de Morroco), examinando el fracturamiento de rocas sedimentarias devónicas por esfuerzos de dilatación y compresión en el Cratón Amazónico–Escudo de Guyana. Llegada a Buenos Aires, protocolo de consentimiento territorial con autoridades taiwano–piapoco, tránsito fluvial al Raudal del Jirijirimó y estudio hidroquímico de aguas ácidas ricas en taninos en Caño Culebra.',
      },
      {
        title: 'Tercer despertar · Cavernas del Tepuy Way Ari Kiu y Ventana del Cielo',
        explorer:
          'Despertamos frente al raudal con café y cacao de selva para remontar los ríos Apaporis y Cananarí hasta el resguardo Morroco. Allí conocemos una de las malocas ceremoniales más grandes del sector y participamos en rezos de protección. Luego ascendemos hacia la parte alta de Cerro Morroco, atravesando cavernas que cruzan el tepuy hasta asomarnos a La Ventana del Cielo sobre el dosel amazónico, donde pasamos la noche en campamento.',
        academic:
          'Navegación por los ríos Apaporis y Cananarí hacia el resguardo Morroco y encuentro protocolario en maloca tradicional. Ascenso al Cerro Morroco para estudiar espeleogénesis seudokárstica en cuarcitas devónicas sobre basamento ígneo-metamórfico de Guyana (control estructural de diaclasas y acción hídrica), culminando en el mirador natural Ventana del Cielo.',
      },
      {
        title: 'Cuarto despertar · Cascadas ocres, petroglifos y pictogramas',
        explorer:
          'Tras amanecer en lo alto de la selva y visitar las cuevas del sector, descendemos por cañadas rodeadas de cascadas teñidas de amarillos y ocres por los minerales y taninos de la roca. En este bosque espeso conocemos petroglifos y pictogramas ancestrales que dialogan con la tradición de Chiribiquete, antes de regresar al resguardo Cananarí para compartir la cena y una noche de mitos con sabedores taiwano.',
        academic:
          'Recorrido por escarpes y cañadas del tepuy con exposición continua de estratos donde es posible efectuar lectura estratigráfica visual. Documentación no invasiva de petroglifos y pictogramas rojos afines a tradiciones rupestres del PNN Chiribiquete (atribuidos históricamente a grupos carijona), seguida de intercambio etnográfico en la maloca del resguardo Cananarí.',
      },
      {
        title: 'Quinto despertar · Geomorfología de selva y lagunas sagradas',
        explorer:
          'Iniciamos el regreso fluvial hacia la comunidad de Buenos Aires deteniéndonos en lagunas sagradas de gran importancia espiritual para las comunidades, formadas por antiguos brazos del río y fracturas de la roca. Disfrutamos de un almuerzo en campamento, un baño en el río Cananarí y pernoctamos en la maloca comunitaria en carpa o hamaca.',
        academic:
          'Tránsito de retorno por el río Cananarí examinando lagunas de meandros abandonados (madreviejas) y cuerpos de agua con control estructural por fracturamiento del sustrato rocoso, integrando su valor geomorfológico con la sacralidad territorial indígena.',
      },
      {
        title: 'Sexto despertar · Regreso fluvial y aéreo a Mitú',
        explorer:
          'Desmontamos el campamento para navegar por los ríos Cananarí y Apaporis hasta la pista de La Victoria, donde abordamos las avionetas de regreso a Mitú. La tarde queda abierta para recorrer y apoyar a los artesanos locales antes de descansar nuevamente en hotel.',
        academic:
          'Logística de extracción fluvial hacia la pista de La Victoria y tramo aéreo de retorno a Mitú. Cierre de campo e intercambio económico directo mediante adquisición responsable de artesanías comunitarias.',
      },
      {
        title: 'Séptimo despertar · Despedida y vuelos a casa',
        explorer:
          'Desayuno tranquilo en Mitú y traslado al aeropuerto para tomar el vuelo de retorno hacia la ciudad de origen, cerrando una expedición que transforma la mirada sobre la Amazonia colombiana.',
        academic:
          'Desayuno de cierre, revisión de notas y referencias bibliográficas de campo, y traslado aeroportuario para el retorno.',
      },
    ],
    communityImpact:
      'Expedición 100 % comunitaria bajo gobernanza indígena: los permisos territoriales, el alquiler de canoas con motor, las cocineras locales, el hospedaje en maloca y la contratación obligatoria de guías locales asignados por las comunidades taiwano y piapoco generan ingresos directos en el territorio. Además, la expedición integra aportes sociales en especie (útiles escolares, libros y cuadernos para los niños de las comunidades visitadas).',
    jungleTransparency:
      'Condiciones especiales en selva: durante las jornadas de campamento y maloca, la alimentación es preparada in situ en cocina tradicional a leña por cocineras de la comunidad anfitriona. La dieta en zonas remotas se basa en pescado fresco de río, alimentos llevados en provisión y gastronomía tradicional nativa (incluyendo proteínas locales disponibles según temporada y cultura del territorio).',
    includes: [
      'Transporte aéreo chárter en avioneta (Mitú – selva – Mitú) y transporte fluvial en canoa con motor fuera de borda.',
      'Alimentación completa preparada en hoteles locales y campamentos de selva.',
      'Hospedaje completo: hotel en Mitú (acomodación individual por defecto o según disponibilidad) y carpas o hamacas en campamentos y malocas comunitarias.',
      'Permisos de ingreso comunitarios, guianza local asignada por los resguardos y guianza científica especializada.',
      'Seguro de vida y asistencia médica para expediciones en territorios remotos.',
    ],
    gallery: [
      {
        src: '/assets/expeditions/guyana-ventana-cielo.jpg',
        alt: 'Explorador en la salida de caverna en cuarcitas frente al dosel de la selva amazónica',
        caption: 'La Ventana del Cielo: salida de cavernas sobre el dosel amazónico · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/guyana-taninos-pared.jpg',
        alt: 'Pared estratificada de tepuy con bromelias y agua rojiza por taninos',
        caption: 'Aguas rojizas por taninos y estratos devónicos del tepuy · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/guyana-cascada-estratos.jpg',
        alt: 'Cascada escalonada descendiendo por estratos horizontales del tepuy en selva',
        caption: 'Cañadas y cascadas en escarpes estratificados del tepuy · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/guyana-raudal-equipo.jpg',
        alt: 'Expedicionarios y anfitriones locales pasando equipo sobre raudal cubierto de plantas acuáticas',
        caption: 'Trabajo en equipo y navegación en raudales amazónicos · Archivo de campo COLOMBIA FÓSIL',
      },
      {
        src: '/assets/expeditions/guyana-roca-acanalada.jpg',
        alt: 'Afloramiento rocoso oscuro con canales de disolución fluvial y exploradores en campo',
        caption: 'Reconocimiento de rocas acanaladas en sector amazónico · Archivo de campo COLOMBIA FÓSIL',
      },
    ],
  },
  {
    slug: 'trekking-georupestre-guaviare',
    category: 'Categoría B · Selva y territorios remotos',
    categoryShort: 'Categoría B · Transición amazónica',
    duration: '4 días (4 despertares)',
    durationShort: '4 días',
    transportShort: 'Terrestre + Fluvial',
    ecosystemShort: 'Selva y La Lindosa',
    topoKey: 'guaviare',
    image: '/assets/guaviare-lindosa.jpg',
    imageAlt: 'Serranía de La Lindosa en San José del Guaviare, Colombia',
    imageCredit: 'Julianruizp · CC BY-SA 4.0',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:La_lindosa.jpg',
    region: 'Guaviare · San José del Guaviare, Puerta de Orión, Lagunas de Nare y Cerro Nuevo Tolima',
    logisticsSummary:
      'Transporte terrestre privado puerta a puerta desde Bogotá hacia San José del Guaviare y traslados rurales locales en vehículo veredal y fluvial.',
    accommodation:
      'Hotel en San José del Guaviare y refugio en la Reserva Lagunas de Nare (acomodación individual por defecto, o compartida según disponibilidad del lugar).',
    title: 'Trekking Georupestre Guaviare',
    cardLabel: 'FORMACIÓN SAN JOSÉ · MAR DE PEBAS · LA LINDOSA',
    explorer: {
      summary:
        'Cuatro días para descubrir dónde la Orinoquia se funde con la selva amazónica: pozos naturales esculpidos en roca antigua, la Puerta de Orión, caños de Macarenia clavigera, toninas en Lagunas de Nare y los murales rupestres de Cerro Nuevo Tolima.',
      scientificPlus:
        'Rocas de la Formación San José, vestigios de antiguos ambientes acuáticos, delfines rosados de río, nutrias gigantes y pintura rupestre amazónica bajo custodia comunitaria.',
      bibliography:
        'Declaratoria Área Arqueológica Protegida La Lindosa (ICANH, 2018) y cartografía geológica nacional (SGC).',
    },
    academic: {
      summary:
        'Itinerario geoarqueológico y ecológico de 4 jornadas sobre afloramientos areníticos de la Formación San José y llanuras aluviales del río Guaviare, articulando geomorfología erosiva, ecología de meandros y patrimonio pictográfico.',
      scientificPlus:
        'Observación de marmitas de gigante (pozos naturales), arcos y túneles erosivos en areniscas, fenología de Macarenia clavigera, fauna acuática de madreviejas y análisis contextual de paneles rupestres en Cerro Nuevo Tolima.',
      bibliography:
        'ICANH (29 de mayo de 2018), La Lindosa: nueva Área Arqueológica de Colombia; SGC, Patrimonio Geológico y Paleontológico; estudios sobre poblamiento temprano amazónico (~12.000 años AP).',
    },
    journeys: [
      {
        title: 'Primer despertar · Pozos naturales, túneles de roca y sector La Ballena',
        explorer:
          'Iniciamos con traslado nocturno privado desde Bogotá hacia San José del Guaviare para descansar, desayunar y adentrarnos en pozos naturales labrados por el agua durante millones de años, donde es posible nadar entre paisajes exuberantes. Por la tarde exploramos túneles naturales formados en fracturas de la roca —refugio de murciélagos y gallitos de roca— junto a las primeras expresiones de arte rupestre en el sector de La Ballena.',
        academic:
          'Traslado nocturno puerta a puerta hacia San José del Guaviare. Exploración geomorfológica de pozos de disolución/erosión fluvial en areniscas de la Formación San José (contexto regional del antiguo mar de Pebas y cuencas cenozoicas–cretácicas). Recorrido por conductos fracturados con fauna cavernícola y primera lectura arqueológica en el sector La Ballena sobre el poblamiento amazónico.',
      },
      {
        title: 'Segundo despertar · Puerta de Orión, Macarenia clavigera y Lagunas de Nare',
        explorer:
          'Caminamos por senderos de piedra hasta la imponente Puerta de Orión, un arco natural esculpido por la erosión con profundos significados ancestrales para los pueblos que habitaron la región hace miles de años. Continuamos hacia caños cristalinos donde florece la planta endémica Macarenia clavigera con sus tonalidades rojas y verdes durante la época seca, y nos trasladamos por camino veredal hasta la Reserva Lagunas de Nare para esperar el atardecer en la selva.',
        academic:
          'Caminata interpretativa (~7,5 km) hacia la geoforma Puerta de Orión (Formación San José), analizando erosión diferencial y evidencias antropológicas de ocupación humana regional (~12.000 años AP). Observación de Macarenia clavigera sobre sustrato rocoso según su ciclo estacional y traslado hacia los meandros abandonados de la Reserva Lagunas de Nare.',
      },
      {
        title: 'Tercer despertar · Amanecer en meandros, toninas y nutrias gigantes',
        explorer:
          'Salimos al amanecer por la reserva y sus lagunas para escuchar el despertar de la selva. Navegamos por meandros tranquilos del río habitados por toninas (delfines de agua dulce) y observamos nutrias gigantes y gran diversidad de aves propias de estos humedales amazónicos, antes de regresar al hotel en San José.',
        academic:
          'Tránsito al alba por humedales de meandros abandonados en Lagunas de Nare para observación ética de Inia geoffrensis (tonina), Pteronura brasiliensis (nutria gigante) y avifauna riparia, sin alimentación forzada ni alteración de hábitat.',
      },
      {
        title: 'Cuarto despertar · Murales rupestres de Cerro Nuevo Tolima y regreso',
        explorer:
          'Visitamos los majestuosos murales de arte rupestre en la vereda Cerro Nuevo Tolima, plasmados por antiguas comunidades de la Amazonia. Analizamos su simbología y su vínculo sagrado con el territorio desde la distancia respetuosa —sin tocar ni intervenir las paredes rocosas— antes de regresar a San José para la cena y el viaje de retorno a Bogotá.',
        academic:
          'Visita regulada a los paneles pictográficos de Cerro Nuevo Tolima (asociados en la tradición regional a pobladores tempranos y familias lingüísticas tukano), abordando técnicas de pigmentación mineral y protocolos estrictos de conservación no invasiva antes del retorno terrestre a Bogotá.',
      },
    ],
    communityImpact:
      'La operación prioriza reservas locales, guías comunitarios autorizados en La Lindosa y Lagunas de Nare, cocineras tradicionales y familias anfitrionas del Guaviare, asegurando que los ingresos operativos permanezcan en el territorio y respalden la conservación del Área Arqueológica Protegida.',
    jungleTransparency:
      'Condiciones especiales en reserva de selva: durante las jornadas rurales y de reserva natural (como Lagunas de Nare), la alimentación puede ser preparada en fogón tradicional por anfitriones locales. La dieta regional incluye pescado de río, provisiones llevadas al campamento o preparaciones tradicionales nativas según disponibilidad del lugar.',
    includes: [
      'Transporte terrestre privado puerta a puerta desde Bogotá y retorno, además de traslados locales en vehículo veredal y lancha.',
      'Alimentación completa durante los cuatro días de recorrido.',
      'Hospedaje completo en hotel en San José del Guaviare y refugio en reserva natural (acomodación individual por defecto, o compartida según disponibilidad del lugar).',
      'Guianza científica especializada, guianza local comunitaria y entradas autorizadas a los sectores visitados.',
      'Seguro de vida y asistencia médica para actividades en campo.',
    ],
  },
];

export const destinations = [
  {
    slug: 'vaupes',
    topoKey: 'vaupes',
    label: 'PAISAJES FLUVIALES · TERRITORIO AMAZÓNICO',
    bannerEyebrow: 'Paisajes fluviales · Territorio amazónico',
    title: 'Vaupés',
    summary:
      'Una línea de exploración geoarqueológica y comunitaria para comprender el Escudo Guayanés, sus paisajes fluviales y la gobernanza indígena.',
    status: 'Expedición comunitaria · 7 días',
    expeditionSlug: 'trekking-georupestre-guyana',
    icon: 'compass',
    image: '/assets/vaupes-jirijirimo.jpg',
    imageAlt: 'Raudal del Jirijirimó en la Reserva Yaigojé Apaporis, Vaupés',
    imageCredit: 'Jucatili25 · CC BY-SA 4.0',
    imageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:Raudal_del_Jirijirimo-_Reserva_Yaigoj%C3%A9_Apaporis.jpg',
    contextTitle: 'Contexto y documentación',
    contextCopy:
      'El territorio del Vaupés articula el Escudo Guayanés (Serranía de Morroco / Tepuy Way Ari Kiu) con los ríos Apaporis y Cananarí. Toda visita se realiza con consentimiento previo, rezos de permiso y guías asignados por las comunidades taiwano y piapoco.',
    contextLinkLabel: 'Instituto Geográfico Agustín Codazzi',
    contextLinkUrl: 'https://www.igac.gov.co/',
    researchLines: [
      'Raudal del Jirijirimó (El Nido de la Anaconda)',
      'Caño Culebra (aguas ácidas por taninos)',
      'Río Apaporis y Río Cananarí',
      'Serranía de Morroco y Tepuy Way Ari Kiu (cavernas en cuarcitas)',
    ],
    detailImage: '/assets/vaupes-jirijirimo.jpg',
    detailImageAlt: 'Raudal del Jirijirimó en la Reserva Yaigojé Apaporis, Vaupés',
    detailImageCaption: 'Raudal del Jirijirimó · Reserva Yaigojé Apaporis. Jucatili25 · CC BY-SA 4.0.',
    detailImageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:Raudal_del_Jirijirimo-_Reserva_Yaigoj%C3%A9_Apaporis.jpg',
  },
  {
    slug: 'guaviare',
    topoKey: 'guaviare',
    label: 'PATRIMONIO CULTURAL · PAISAJES ROCOSOS',
    bannerEyebrow: 'Patrimonio cultural · Paisajes rocosos',
    title: 'Guaviare',
    summary:
      'La Serranía de La Lindosa, Puerta de Orión, Cerro Nuevo Tolima y Lagunas de Nare invitan a estudiar el vínculo entre paisaje, patrimonio arqueológico y conservación.',
    status: 'Expedición geoarqueológica · 4 días',
    expeditionSlug: 'trekking-georupestre-guaviare',
    icon: 'mountain',
    image: '/assets/guaviare-lindosa.jpg',
    imageAlt: 'Serranía de La Lindosa en San José del Guaviare, Colombia',
    imageCredit: 'Julianruizp · CC BY-SA 4.0',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:La_lindosa.jpg',
    contextTitle: 'Contexto y documentación',
    contextCopy:
      'El ICANH documenta la declaración de ocho zonas de La Lindosa como Área Arqueológica Protegida en 2018. Las rutas integradas operan únicamente por senderos autorizados y con acompañamiento comunitario.',
    contextLinkLabel: 'ICANH · La Lindosa, nueva Área arqueológica de Colombia',
    contextLinkUrl:
      'https://www.icanh.gov.co/prensa/actualidad-icanh/lindosa-nueva-area-arqueologica-colombia',
    researchLines: [
      'Formación San José, pozos naturales y Puerta de Orión',
      'Murales rupestres de Cerro Nuevo Tolima y sector La Ballena',
      'Macarenia clavigera en caños estacionales',
      'Reserva Lagunas de Nare (meandros, toninas y nutrias gigantes)',
    ],
    detailImage: '/assets/guaviare-lindosa.jpg',
    detailImageAlt: 'Serranía de La Lindosa en San José del Guaviare, Colombia',
    detailImageCaption: 'Serranía de La Lindosa, Guaviare. Julianruizp · CC BY-SA 4.0.',
    detailImageSourceUrl: 'https://commons.wikimedia.org/wiki/File:La_lindosa.jpg',
  },
  {
    slug: 'territorios-paleontologicos',
    label: 'HISTORIA DE LA TIERRA · PATRIMONIO FÓSIL',
    bannerEyebrow: 'Historia de la Tierra · Patrimonio fósil',
    title: 'Territorios paleontológicos',
    summary:
      'Interpretación de antiguos ambientes marinos, zonas desérticas fosilíferas y del patrimonio geológico y paleontológico de Colombia sin extracción.',
    status: 'Plan corto 3 días · Archivo activo',
    expeditionSlug: 'trekking-georupestre-desierto',
    icon: 'layers',
    image: '/assets/ammonites-hd.jpg',
    imageAlt: 'Ammonites documentados en la Formación Paja, Colombia',
    imageCredit: 'Pedro Patarroyo · 2009 · CC BY 3.0',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Paja_Formation_-_Ammonites.jpg',
    contextTitle: 'Contexto y documentación',
    contextCopy:
      'El Servicio Geológico Colombiano reconoce el patrimonio geológico y paleontológico como parte de la geodiversidad del país y promueve su identificación, valoración y conservación in situ.',
    contextLinkLabel: 'SGC · Patrimonio Geológico y Paleontológico',
    contextLinkUrl: 'https://www2.sgc.gov.co/patrimonio/Paginas/patrimonio-geologico.aspx',
    researchLines: [
      'Antiguos ambientes marinos y horizontes fosilíferos en zonas desérticas',
      'Formaciones sedimentarias cretácicas y cenozoicas',
      'Piedemonte llanero e indicios georupestres cercanos a Bogotá',
    ],
    detailImage: '/assets/ammonites-hd.jpg',
    detailImageAlt: 'Ammonites de la Formación Paja',
    detailImageCaption:
      'Ammonites de la Formación Paja. Pedro Patarroyo, 2009 · CC BY 3.0. Fotografía documental; no identifica un sitio de recolección.',
    detailImageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:Paja_Formation_-_Ammonites.jpg',
  },
];

export const experienceFilters = [
  'Todas',
  'Geología',
  'Paleontología',
  'Espeleología',
  'Trekking científico',
  'Biodiversidad',
  'Patrimonio cultural',
  'Astronomía',
];

export const experiences = [
  {
    slug: 'leer-las-rocas',
    discipline: 'Geología',
    title: 'Leer la historia de las rocas',
    summary: 'Línea de trabajo para interpretar rocas y paisajes con acompañamiento especializado.',
    location: 'Piedemonte llanero, Cordillera y Escudo Guayanés',
    learningObjective:
      'Relacionar la observación del paisaje con procesos geológicos documentados en lenguaje cercano o técnico según el perfil del grupo.',
    image: '/assets/chicamocha-canon.jpg',
    imageAlt: 'Afloramientos y laderas del Cañón del Chicamocha en Colombia',
    imageCredit: 'Cañón del Chicamocha · Jedidiahhorne · CC BY-SA 4.0 · Wikimedia Commons.',
    imageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:WLE2026_CO_-_Ecosistema_xerof%C3%ADtico_del_Ca%C3%B1%C3%B3n_del_Chicamocha_(28).jpg',
  },
  {
    slug: 'huellas-de-antiguos-mares',
    discipline: 'Paleontología',
    title: 'Huellas de antiguos mares',
    summary:
      'Propuesta educativa de interpretación del registro fósil, sin extracción ni recolección.',
    location: 'Territorios paleontológicos y zonas desérticas',
    learningObjective:
      'Comprender el valor del registro fósil y las razones científicas y legales para conservarlo intacto.',
    image: '/assets/ammonites-hd.jpg',
    imageAlt: 'Ammonites de la Formación Paja',
    imageCredit: 'Ammonites de la Formación Paja · Pedro Patarroyo, 2009 · CC BY 3.0 · Wikimedia Commons.',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Paja_Formation_-_Ammonites.jpg',
  },
  {
    slug: 'paisajes-subterraneos',
    discipline: 'Espeleología',
    title: 'Paisajes subterráneos',
    summary:
      'Línea de investigación sobre cavernas en cuarcitas y túneles naturales, sujeta a evaluación técnica.',
    location: 'Serranía de Morroco (Vaupés) y sectores del Guaviare',
    learningObjective:
      'Reconocer procesos de formación por fracturamiento estructural y criterios de conservación de ambientes subterráneos.',
    image: '/assets/expeditions/guyana-ventana-cielo.jpg',
    imageAlt: 'Salida de cavernas en cuarcitas con vista panorámica al dosel de la selva amazónica',
    imageCredit: 'Salida de caverna en tepuy del Escudo Guayanés · Archivo de campo COLOMBIA FÓSIL.',
  },
  {
    slug: 'caminar-para-comprender',
    discipline: 'Trekking científico',
    title: 'Caminar para comprender',
    summary:
      'Diseño de caminatas interpretativas cortas (2–3 días) y travesías remotas (hasta 7 días) con narrativa orgánica.',
    location: 'Desierto, Piedemonte, Guaviare y Vaupés',
    learningObjective:
      'Observar cambios del paisaje y formular preguntas sobre la relación entre geología, agua y cultura.',
    image: '/assets/chicamocha-canon.jpg',
    imageAlt: 'Ecosistema xerofítico y cañón fluvial en el Cañón del Chicamocha',
    imageCredit: 'Cañón del Chicamocha · Jedidiahhorne · CC BY-SA 4.0 · Wikimedia Commons.',
    imageSourceUrl:
      'https://commons.wikimedia.org/wiki/File:WLE2026_CO_-_Ecosistema_xerof%C3%ADtico_del_Ca%C3%B1%C3%B3n_del_Chicamocha_(28).jpg',
  },
  {
    slug: 'territorio-vivo',
    discipline: 'Biodiversidad',
    title: 'El territorio vivo',
    summary: 'Propuesta de observación respetuosa de ecosistemas, toninas, nutrias gigantes y flora endémica.',
    location: 'Guaviare (Lagunas de Nare) y Vaupés',
    learningObjective:
      'Comprender relaciones entre organismos, hábitats fluviales de selva y conservación comunitaria.',
    image: '/assets/expedicion-el-hatico.webp',
    imageAlt: 'Trabajo científico en campo para mediciones ambientales en bosque tropical',
    imageCredit:
      'Fotografía documental de trabajo científico en campo (CIAT · Neil Palmer, mayo de 2011 · CC BY-SA 2.0).',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:NP_REDD_Workshop12_(5739799829).jpg',
  },
  {
    slug: 'memoria-del-paisaje',
    discipline: 'Patrimonio cultural',
    title: 'La memoria del paisaje',
    summary:
      'Línea de trabajo sobre petroglifos y pictogramas, con participación de las comunidades y respeto por las autoridades competentes.',
    location: 'Guaviare (La Lindosa / Cerro Nuevo Tolima) y Vaupés',
    learningObjective:
      'Reconocer el patrimonio cultural y rupestre sin tocar, intervenir ni alterar los sitios.',
    image: '/assets/guaviare-lindosa.jpg',
    imageAlt: 'Serranía de La Lindosa en San José del Guaviare',
    imageCredit: 'Serranía de La Lindosa · Julianruizp · CC BY-SA 4.0 · Wikimedia Commons.',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:La_lindosa.jpg',
  },
  {
    slug: 'mirar-el-cielo',
    discipline: 'Astronomía',
    title: 'Mirar el cielo',
    summary: 'Propuesta de observación del cielo nocturno y divulgación astronómica en noches despejadas de desierto y selva.',
    location: 'Zonas desérticas y campamentos de selva',
    learningObjective:
      'Relacionar la observación del cosmos con conceptos de astronomía y cuidado del entorno natural.',
    image: '/assets/desierto-tatacoa.jpg',
    imageAlt: 'Desierto de la Tatacoa bajo cielo abierto, Colombia',
    imageCredit: 'Desierto de la Tatacoa · Ricardo Gonzalez Arango · CC BY-SA 4.0 · Wikimedia Commons.',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Tatacoa_Desert.jpg',
  },
];

export const conservationValues = [
  {
    icon: 'leaf',
    title: 'Dejar el patrimonio intacto',
    copy: 'Sin extracción, recolección ni comercialización de fósiles ni intervención del arte rupestre. Observar, interpretar y conservar.',
  },
  {
    icon: 'bookOpen',
    title: 'Rigor adaptado al viajero',
    copy: 'Divulgación cercana para el explorador general y respaldo bibliográfico verificable (SGC, ICANH) para el público científico.',
  },
  {
    icon: 'users',
    title: 'Gobernanza e impacto comunitario',
    copy: 'Los ingresos operativos (lanchas, guías locales y alimentación) van a las comunidades anfitrionas, sumando aportes escolares en zonas remotas.',
  },
];

export const institutionCards = [
  'Salidas pedagógicas (2–3 días)',
  'Expediciones educativas de campo',
  'Aprendizaje geoarqueológico en territorio',
  'Divulgación científica bilingüe de discurso',
  'Diseño de experiencias académicas con bibliografía oficial',
  'Colaboración institucional con respaldo comunitario',
];

export const teamMembers = [
  {
    index: '01',
    initials: 'DD',
    photo: '/assets/team-diego.jpg',
    name: 'Diego Díaz',
    role: 'Geólogo · Guía líder de expediciones geoarqueológicas',
    facts: [
      'Geólogo TP 2040 CPG y Tecnólogo en Guianza Turística (SENA 2141597).',
      'Vigía del Patrimonio Geoarqueológico del Cañón del Chicamocha.',
      'Guía REPSE del Parque Nacional Natural Serranía del Chiribiquete.',
      'Buzo certificado PADI.',
      'Catedrático de la Universidad Industrial de Santander en Geoquímica, Estratigrafía y Geología de Campo.',
    ],
    highlightTitle: 'Territorios de expedición',
    highlightCopy:
      'Amazonia: PNN Chiribiquete, Reserva Nacional Natural Nukak Makú, Raudal del Jirijirimo y Raudal del Yuruparí. Orinoquia: rutas ecuestres Guadalupe Salcedo y Ruta del Arte Rupestre del Orinoco. Cordillera: Cañón del Chicamocha, Farallones de San Miguel y San Luis de Gaceno, dinoturbación San Gil–Chíquiza–Santa María, paleobotánica de Miraflores y Pajarito (Villavicencio).',
  },
  {
    index: '02',
    initials: 'RS',
    photo: null,
    name: 'Ricardo Soto Ramírez',
    role: 'Salud ocupacional · Vigía del patrimonio',
    facts: [
      'Auxiliar de enfermería, Instituto Internacional de Colombia.',
      'Vigía del Patrimonio Geoarqueológico del Cañón del Chicamocha.',
      'Cursos de Salud Ocupacional (SENA).',
      'Coordinador de salud ocupacional en proyectos de gasimetrías en Casanare, Meta y Córdoba durante más de 4 años.',
    ],
    highlightTitle: null,
    highlightCopy: null,
  },
  {
    index: '03',
    initials: 'JA',
    photo: '/assets/team-jorge.jpg',
    name: 'Jorge Alberto Aristizábal Moreno',
    role: 'Tecnología · Inteligencia artificial · Ecoturismo y divulgación del patrimonio',
    facts: [
      'Tecnólogo en Análisis y Desarrollo de Sistemas de Información (SENA), estudiante de Guianza Turística y miembro de Corpomontaña (Corporación Colombiana de Montañismo) y de Nómada Colombia Sin Fronteras.',
      'Formación complementaria en conservación, sostenibilidad, ecoturismo, turismo regenerativo y excursionismo.',
      'Diplomado en Gestión Integral para la Conservación: Sostenibilidad, Ecoturismo y Cultura de Paz (90 horas), Universidad Tecnológica de Pereira.',
      'Diplomado en Turismo Regenerativo y Desarrollo de Experiencias Territoriales (58 horas).',
      'Experiencia en desarrollo de software y aseguramiento de calidad (QA), aplicada con inteligencia artificial generativa, agentes de IA y tecnologías digitales para investigación, creación de contenidos, producción multimedia y desarrollo de recursos educativos.',
    ],
    highlightTitle: 'Tecnología e innovación al servicio del territorio',
    highlightCopy:
      'En Colombia Fósil contribuye a integrar herramientas digitales e inteligencia artificial con la divulgación científica y la educación, creando recursos y experiencias que acercan la historia geológica y paleontológica de Colombia a diferentes públicos y promueven el conocimiento, la conservación y la apropiación del patrimonio natural y cultural.',
  },
];

export const fossilsCatalog = [
  {
    id: 'ammonites-formacion-paja',
    title: 'Ammonites de la Formación Paja',
    image: '/assets/ammonites-hd.jpg',
    imageAlt: 'Ammonites de la Formación Paja',
    credit: 'Pedro Patarroyo · 2009 · CC BY 3.0',
    period: 'Cretácico',
    location: 'Formación Paja · Colombia',
    type: 'Ammonites',
    description:
      'Lámina fotográfica de ammonites publicada por Pedro Patarroyo. La Formación Paja corresponde al Cretácico inferior; esta ficha no asigna una edad precisa a cada ejemplar ni identifica un lugar de recolección.',
    photoSourceUrl: 'https://commons.wikimedia.org/wiki/File:Paja_Formation_-_Ammonites.jpg',
    geoContextUrl: 'https://commons.wikimedia.org/wiki/Category:Paja_Formation',
  },
  {
    id: 'titanoboa-cerrejonensis-uf-igm-2',
    title: 'Titanoboa cerrejonensis (Paratipo UF/IGM 2)',
    image: '/assets/blog/titanoboa-uf-igm-2-escala.jpg',
    imageAlt: 'Vértebra precloacal paratipo UF/IGM 2 de Titanoboa cerrejonensis con barra de escala',
    credit: 'Anfecaro / Gretarsson · CC BY 4.0 · Wikimedia Commons',
    period: 'Paleoceno',
    location: 'Formación Cerrejón · La Guajira',
    type: 'Vertebrados (Serpentes)',
    description:
      'Vértebra precloacal fósil (paratipo UF/IGM 2) exhibida en el Museo Geológico Nacional José Royo y Gómez. Descrita junto al holotipo UF/IGM 1 por Head et al. (2009), estima ~12.8 m de longitud y paleotemperaturas tropicales de ~30–34 °C.',
    photoSourceUrl:
      'https://commons.wikimedia.org/wiki/File:Titanoboa_paratype_precloacal_vertebra_UF-IGM_2_edited_with_scale_bar.jpg',
    geoContextUrl: 'https://doi.org/10.1038/nature07671',
  },
  {
    id: 'monquirasaurus-boyacensis-jvp-001',
    title: 'Monquirasaurus boyacensis (Holotipo JVP-001)',
    image: '/assets/blog/monquirasaurus-jvp-001-museo.jpg',
    imageAlt: 'Esqueleto fósil articulado del holotipo JVP-001 de Monquirasaurus boyacensis in situ',
    credit: 'Edward M Johnson · CC BY-SA 2.0 · Wikimedia Commons',
    period: 'Cretácico temprano (Aptiano)',
    location: 'Formación Paja · Villa de Leyva, Boyacá',
    type: 'Vertebrados (Pliosauridae)',
    description:
      'Esqueleto articulado casi completo conservado in situ en el Museo Comunitario El Fósil (Monquirá). Descrito originalmente como Kronosaurus boyacensis por Hampe (1992) y reclasificado en su propio género por Noè & Gómez-Pérez (2021), mide entre 9.3 y 10.0 m de longitud con un cráneo de ~2.6 m.',
    photoSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kronosaurus_boyacensis_fossil.jpg',
    geoContextUrl: 'https://doi.org/10.1016/j.cretres.2021.104885',
  },
  {
    id: 'ammonoidea-nicklesia-pulchella',
    title: 'Nicklesia pulchella (Ammonites de Colombia)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Nicklesia_pulchella.jpg',
    imageAlt: 'Fósil de ammonite Nicklesia pulchella mostrando las líneas de sutura y costillas tabuladas',
    credit: 'Ghedoghedo · CC BY-SA 3.0 · Wikimedia Commons',
    period: 'Cretácico temprano (Barremiano, ~129–125 Ma)',
    location: 'Formación Paja · Villa de Leyva y Sutamarchán, Boyacá',
    type: 'Invertebrados marinos (Ammonoidea)',
    description:
      'Molusco cefalópodo con concha espiralada dividida en cámaras hidrostáticas. Como especie fósil guía, Nicklesia pulchella define la biozona formal del Barremiano temprano en la cuenca marina de Colombia (Patarroyo, 2009, 2020), permitiendo correlacionar depósitos con el dominio Tethys global.',
    photoSourceUrl: 'https://commons.wikimedia.org/wiki/File:Nicklesia_pulchella.jpg',
    geoContextUrl: 'https://doi.org/10.1016/j.cretres.2020.104523',
  },
];

export const blogCategories = ['Todas', 'Paleontología', 'Patrimonio y método'];

export const blogPosts = [
  {
    slug: 'titanoboa-cerrejonensis-la-guajira-paleoceno',
    title: 'Titanoboa cerrejonensis: cómo una vértebra fósil de La Guajira reveló el clima del Paleoceno',
    seoTitle: 'Titanoboa cerrejonensis en Colombia: fósil real, tamaño y clima del Paleoceno | COLOMBIA FÓSIL',
    seoDescription:
      'Conoce la evidencia científica verificada de Titanoboa cerrejonensis en la Formación Cerrejón (La Guajira): vértebras UF/IGM 1 y UF/IGM 2, longitud estimada, paleoclima de 30–34 °C y dónde ver su registro en Colombia.',
    keywords: [
      'Titanoboa cerrejonensis',
      'fósiles en Colombia',
      'Formación Cerrejón La Guajira',
      'Paleoceno Colombia',
      'Museo Geológico Nacional José Royo y Gómez',
      'paleontología colombiana',
    ],
    category: 'Paleontología',
    statusBadge: 'Registro verificado',
    publishedAt: '2026-11-27',
    readingTime: '5 min de lectura',
    period: 'Paleoceno (~60–58 Ma)',
    region: 'Mina del Cerrejón · La Guajira',
    coverImage: '/assets/blog/titanoboa-uf-igm-2-escala.jpg',
    coverAlt:
      'Fotografía con barra de escala de la vértebra precloacal paratipo UF/IGM 2 de Titanoboa cerrejonensis',
    coverCredit: 'Anfecaro / Gretarsson vía Wikimedia Commons · CC BY 4.0',
    videoUrl: '/assets/video/ep01_titanoboa_horizontal_16x9.mp4',
    videoPoster: '/assets/blog/titanoboa-paleoclima-30-34.png',
    videoDuration: '57 s',
    videoNote:
      'Video divulgativo oficial de COLOMBIA FÓSIL (v1.0.0). Combina fotografías reales de colección con una escena breve rotulada explícitamente como Reconstrucción artística.',
    excerpt:
      'A partir de vértebras fósiles de la Formación Cerrejón, Head et al. (2009) describieron la serpiente más grande documentada y modelaron temperaturas tropicales de 30 a 34 °C hace 60 millones de años.',
    factsSummary: [
      { label: 'Taxón verificado', value: 'Titanoboa cerrejonensis Head et al., 2009' },
      { label: 'Unidad y edad', value: 'Formación Cerrejón · Paleoceno (~60–58 Ma)' },
      { label: 'Localidad', value: 'Cerrejón, La Guajira, Colombia' },
      { label: 'Ejemplares clave', value: 'Holotipo UF/IGM 1 · Paratipo UF/IGM 2 (SGC / UF)' },
      { label: 'Estimación alométrica', value: '~12.8 m (~13 m) de longitud · ~1,135 kg' },
      { label: 'Inferencia climática', value: '~30–34 °C de temperatura media anual tropical' },
    ],
    sections: [
      {
        heading: 'Qué sabemos con certeza a partir del registro fósil',
        paragraphs: [
          'Después de la extinción de los dinosaurios no avianos, los ecosistemas del norte de Suramérica evolucionaron hacia selvas húmedas tropicales muy cálidas. En estratos de la Formación Cerrejón (La Guajira, Colombia), datados en el Paleoceno (~60 a 58 millones de años), investigadores liderados por Jason J. Head publicaron en 2009 en la revista Nature el hallazgo de Titanoboa cerrejonensis.',
          'La descripción formal se apoya en vértebras precloacales fósiles —entre ellas el holotipo UF/IGM 1 y el paratipo UF/IGM 2— vinculadas conjuntamente a la University of Florida y al entonces Ingeominas (hoy Servicio Geológico Colombiano, Museo Geológico Nacional José Royo y Gómez).',
        ],
      },
      {
        heading: 'Cómo se calculó su tamaño y el paleoclima de 30 a 34 °C',
        paragraphs: [
          'En biología y paleontología no se encontró un esqueleto articulado completo de Titanoboa. Sin embargo, al comparar mediante modelos alométricos el tamaño relativo de sus vértebras troncales con el de serpientes boidas actuales, Head et al. (2009) estimaron una longitud cercana a 12.8 metros (frecuentemente redondeada a ~13 m) y una masa corporal aproximada de 1,135 kilogramos.',
          'Dado que las serpientes son ectotermas y dependen del calor ambiental para sostener su metabolismo, ese porte corporal sirvió para proponer temperaturas medias anuales ecuatoriales de entre 30 y 34 °C durante el Paleoceno. En paralelo, el estudio paleobotánico de Wing et al. (2009) en PNAS documentó a partir de hojas fósiles de Cerrejón uno de los registros más antiguos de selva lluviosa neotropical moderna.',
        ],
      },
      {
        heading: 'Evidencia visual: fósiles reales frente a reconstrucción artística',
        paragraphs: [
          'Para divulgar con rigor científico es indispensable distinguir la evidencia física de las representaciones visuales. Las piezas exhibidas en vitrina en el Museo Geológico Nacional permiten observar la escala comparativa frente a una anaconda verde actual sin recurrir a exageraciones cinematográficas.',
        ],
      },
    ],
    evidenceGallery: [
      {
        image: '/assets/blog/titanoboa-uf-igm-2-museo.jpg',
        alt: 'Vértebra fósil original de Titanoboa cerrejonensis en exhibición en el Museo Geológico Nacional José Royo y Gómez',
        caption: 'Vértebra fósil original (UF/IGM 2) en el Museo Geológico Nacional José Royo y Gómez, Bogotá.',
        credit: 'Anfecaro vía Wikimedia Commons · CC0 1.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Titanoboa_paratype_precloacal_vertebra_UF-IGM_2.jpg',
      },
      {
        image: '/assets/blog/titanoboa-moldes-mgn.jpg',
        alt: 'Moldes comparativos de vértebras dorsales de Titanoboa y anaconda moderna en el Museo Geológico Nacional',
        caption: 'Moldes comparativos de vértebra dorsal de Titanoboa y una anaconda moderna (réplicas de exhibición, no hueso original).',
        credit: 'Rextron vía Wikimedia Commons · CC BY-SA 4.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Titanoboa_vertebra_2.jpg',
      },
      {
        image: '/assets/blog/titanoboa-paleoclima-30-34.png',
        alt: 'Gráfico de paleotemperatura ecuatorial estimada (30 a 34 grados Celsius) según Head et al. 2009',
        caption: 'Síntesis del modelo paleoclimático de 30–34 °C (interpretación científica sujeta a revisión).',
        credit: 'COLOMBIA FÓSIL · Basado en Head et al. (2009)',
        sourceUrl: 'https://doi.org/10.1038/nature07671',
      },
    ],
    whatWeDoNotClaim: [
      'No afirmamos que exista un esqueleto completo articulado de Titanoboa en Colombia: los cálculos parten de vértebras y modelos alométricos.',
      'No presentamos los moldes comparativos de museo como hueso original ni la secuencia animada del video como fotografía documental.',
      'No incluimos comportamientos de cine de monstruos ni medidas no verificadas directamente en tablas primarias.',
    ],
    faq: [
      {
        question: '¿Dónde encontraron los fósiles de Titanoboa cerrejonensis?',
        answer:
          'En rocas del Paleoceno (~60–58 millones de años) de la Formación Cerrejón, en la mina del Cerrejón, departamento de La Guajira, Colombia.',
      },
      {
        question: '¿Cuánto medía Titanoboa según la evidencia científica?',
        answer:
          'El estudio original de Head et al. (2009) estimó una longitud cercana a 12.8 metros (~13 m) y una masa aproximada de 1,135 kg mediante alometría vertebral.',
      },
      {
        question: '¿Dónde se puede ver material de Titanoboa en Colombia?',
        answer:
          'El paratipo UF/IGM 2 y moldes comparativos han sido exhibidos en el Museo Geológico Nacional José Royo y Gómez del Servicio Geológico Colombiano en Bogotá.',
      },
    ],
    sources: [
      {
        label: 'Head, J. J. et al. (2009). Giant boid snake from the Palaeocene neotropics reveals hotter past equatorial temperatures. Nature, 457(7231), 715–717.',
        url: 'https://doi.org/10.1038/nature07671',
      },
      {
        label: 'Wing, S. L. et al. (2009). Late Paleocene fossils from the Cerrejón Formation, Colombia, are the earliest record of Neotropical rainforest. PNAS, 106(44), 18627–18632.',
        url: 'https://doi.org/10.1073/pnas.0905130106',
      },
    ],
  },
  {
    slug: 'como-se-verifica-un-fosil-patrimonio-paleontologico-colombia',
    title: 'Cómo se verifica un fósil en Colombia: del hallazgo científico a la divulgación sin mitos',
    seoTitle: 'Cómo se verifica un fósil y el patrimonio paleontológico en Colombia | COLOMBIA FÓSIL',
    seoDescription:
      'Metodología de verificación científica de COLOMBIA FÓSIL: Decreto 1353 de 2018, INGEP del SGC, separación entre hecho, estimación y reconstrucción artística, y trazabilidad fotográfica.',
    keywords: [
      'patrimonio paleontológico Colombia',
      'Decreto 1353 de 2018',
      'INGEP Servicio Geológico Colombiano',
      'turismo geoarqueológico Colombia',
      'divulgación paleontológica',
    ],
    category: 'Patrimonio y método',
    statusBadge: 'Guía científica',
    publishedAt: '2026-11-27',
    readingTime: '4 min de lectura',
    period: 'Normativa y metodología',
    region: 'Colombia · SGC / ICANH',
    coverImage: '/assets/ammonites-hd.jpg',
    coverAlt: 'Lámina documental de ammonites de la Formación Paja publicada por Pedro Patarroyo',
    coverCredit: 'Pedro Patarroyo · 2009 · CC BY 3.0 · Wikimedia Commons',
    videoUrl: null,
    videoPoster: null,
    videoDuration: null,
    videoNote: null,
    excerpt:
      'Por qué una fotografía bonita o una cita suelta no bastan para validar un fósil: el método de trazabilidad, licencias y protección patrimonial que aplica COLOMBIA FÓSIL antes de publicar.',
    factsSummary: [
      { label: 'Marco legal colombiano', value: 'Decreto 1353 de 2018 · Resolución D-192 de 2022 (SGC)' },
      { label: 'Inventario oficial', value: 'INGEP — Servicio Geológico Colombiano' },
      { label: 'Regla editorial clave', value: 'Separar hecho, estimación y reconstrucción artística' },
      { label: 'Ética de campo', value: 'Cero extracción, compra o alteración del patrimonio' },
    ],
    sections: [
      {
        heading: '1. Cita primaria y código de espécimen antes que titulares llamativos',
        paragraphs: [
          'En divulgación sobre paleontología circulan con frecuencia imágenes de fósiles de otros países atribuidas por error a yacimientos colombianos, o cifras sacadas de contexto. Antes de dar por verificado un dato, contrastamos la publicación científica revisada por pares (DOI o monografía institucional), la unidad estratigráfica y el número de catálogo bajo custodia museológica.',
          'Cuando un ejemplar mantiene incertidumbre taxonómica —por ejemplo calificadores como cf., aff. o indet.— la ficha conserva esa cautela exactamente como aparece en la literatura.',
        ],
      },
      {
        heading: '2. Patrimonio geológico y paleontológico bajo normativa vigente',
        paragraphs: [
          'En Colombia, la gestión integral del patrimonio geológico y paleontológico se articula mediante el Servicio Geológico Colombiano (SGC), el Decreto 1353 de 2018, la Resolución D-192 de 2022 y el Inventario Nacional Geológico y Paleontológico (INGEP). En salidas de campo que también involucran arte rupestre o bienes arqueológicos, se respeta de igual modo el marco institucional del ICANH.',
          'Por esa razón, nuestras expediciones de turismo geoarqueológico tienen un principio innegociable: observar para comprender, sin extraer piezas, sin intervenir sitios y restringiendo coordenadas sensibles cuando la protección patrimonial lo exige.',
        ],
      },
      {
        heading: '3. Licencias transparentes y rótulos explícitos en reconstrucciones',
        paragraphs: [
          'Una fotografía científica en un artículo no implica licencia libre automática, ni cualquier enlace web demuestra correspondencia con un ejemplar colombiano. Cada imagen publicada pasa por comprobación individual de autoría, licencia (CC0, CC BY, CC BY-SA o permiso expreso) y espécimen asociado. Cuando una pieza visual utiliza reconstrucción artística para ilustrar paleoambientes, se rotula visiblemente para no confundirla con evidencia fósil directa.',
        ],
      },
    ],
    evidenceGallery: [],
    whatWeDoNotClaim: [
      'No sustituimos conceptos técnicos oficiales del SGC ni del ICANH ni autorizamos excavaciones o recolecciones.',
      'No publicamos como verificados registros cuya imagen o referencia primaria presente conflictos sin resolver.',
    ],
    faq: [
      {
        question: '¿Se pueden recoger o comprar fósiles durante las expediciones?',
        answer:
          'No. Todas las experiencias de COLOMBIA FÓSIL operan bajo conservación estricta: observar, documentar e interpretar en campo sin extraer ni comercializar material patrimonial.',
      },
      {
        question: '¿Por qué algunas investigaciones aparecen listadas como "en revisión científica"?',
        answer:
          'Porque preferimos bloquear temporalmente un tema mientras cotejamos artículos primarios, códigos de museo o derechos de fotografía antes que publicar datos imprecisos.',
      },
    ],
    sources: [
      {
        label: 'Servicio Geológico Colombiano (SGC). Patrimonio Geológico y Paleontológico / Decreto 1353 de 2018 e INGEP.',
        url: 'https://www2.sgc.gov.co/patrimonio/Paginas/patrimonio-geologico.aspx',
      },
      {
        label: 'Gómez, J. et al. (2020). Physiographic and geological setting of the Colombian territory. The Geology of Colombia, Vol. 1, pp. 1–16 (SGC).',
        url: 'https://doi.org/10.32685/pub.esp.35.2019.01',
      },
      {
        label: 'ICANH. La Lindosa: Área Arqueológica Protegida y participación comunitaria.',
        url: 'https://www.icanh.gov.co/prensa/actualidad-icanh/lindosa-nueva-area-arqueologica-colombia',
      },
    ],
  },
  {
    slug: 'monquirasaurus-boyacensis-villa-de-leyva',
    title: 'Monquirasaurus boyacensis: el gigante marino del mar cretácico de Villa de Leyva',
    seoTitle: 'Monquirasaurus boyacensis en Villa de Leyva: fósil real JVP-001 y longitud | COLOMBIA FÓSIL',
    seoDescription:
      'Descubre la verdad científica de Monquirasaurus boyacensis ("El Fósil" de Monquirá, Villa de Leyva): esqueleto holotipo JVP-001, revisión de Noè & Gómez-Pérez (2021) y por qué ya no es Kronosaurus.',
    keywords: [
      'Monquirasaurus boyacensis',
      'Kronosaurus boyacensis',
      'El Fósil Villa de Leyva',
      'Museo El Fósil Monquirá',
      'pliosaurio Colombia',
      'Formación Paja',
      'fósiles Villa de Leyva',
      'paleontología colombiana',
    ],
    category: 'Paleontología',
    statusBadge: 'Registro verificado',
    publishedAt: '2026-11-28',
    readingTime: '6 min de lectura',
    period: 'Cretácico temprano (Aptiano, ~120–115 Ma)',
    region: 'Vereda Monquirá · Villa de Leyva, Boyacá',
    coverImage: '/assets/blog/monquirasaurus-jvp-001-museo.jpg',
    coverAlt:
      'Esqueleto fósil articulado del holotipo JVP-001 de Monquirasaurus boyacensis exhibido in situ en el Museo El Fósil de Monquirá',
    coverCredit: 'Edward M Johnson vía Wikimedia Commons · CC BY-SA 2.0',
    videoUrl: null,
    videoPoster: '/assets/blog/monquirasaurus-jvp-001-museo.jpg',
    videoDuration: '50 s (En render)',
    videoNote:
      'Episodio 2 oficial de COLOMBIA FÓSIL. Guion verificado basado en el holotipo JVP-001 y la revisión taxonómica de Noè & Gómez-Pérez (2021).',
    excerpt:
      'Descubierto en 1977 en Monquirá, el esqueleto JVP-001 es uno de los pliosaurios más completos del planeta. Conoce por qué la ciencia lo separó de Kronosaurus y qué medía en realidad.',
    factsSummary: [
      { label: 'Taxón verificado', value: 'Monquirasaurus boyacensis (Hampe, 1992) Noè & Gómez-Pérez, 2021' },
      { label: 'Unidad y edad', value: 'Formación Paja · Aptiano (~120–115 Ma)' },
      { label: 'Localidad', value: 'Vereda Monquirá, Villa de Leyva, Boyacá' },
      { label: 'Ejemplar tipo', value: 'Holotipo JVP-001 (preservado in situ)' },
      { label: 'Longitud real estimada', value: '~9.3 a 10.0 metros (cráneo de ~2.6 m)' },
      { label: 'Custodia patrimonial', value: 'Museo Comunitario El Fósil (Junta de Vecinos)' },
    ],
    sections: [
      {
        heading: '1. El hallazgo fortuito que transformó a Villa de Leyva en 1977',
        paragraphs: [
          'En 1977, durante labores agrícolas cotidianas en la vereda Monquirá (a pocos kilómetros del casco urbano de Villa de Leyva), campesinos de la zona desenterraron una serie de vértebras gigantes y un cráneo masivo petrificado en la roca arcillosa. Consciente del inmenso valor histórico y científico del hallazgo, la propia comunidad local decidió protegerlo donde estaba y levantó el Museo Comunitario El Fósil alrededor del espécimen, convirtiéndolo en un hito pionero de custodia comunitaria en América Latina.',
          'El espécimen recibió la sigla JVP-001 (Junta de Vecinos de Monquirá / Pro-Museo El Fósil 001) y permanece hasta hoy en la misma posición en la que el antiguo reptil quedó sepultado en el fondo marino hace unos 120 millones de años.',
        ],
      },
      {
        heading: '2. De Kronosaurus a Monquirasaurus: la revisión anatómica de 2021',
        paragraphs: [
          'Durante casi tres décadas, el animal fue conocido popularmente y en publicaciones tempranas como Kronosaurus boyacensis, asignado por el paleontólogo alemán Oliver Hampe en 1992 por similitud general con el famoso pliosaurio australiano Kronosaurus queenslandicus.',
          'Sin embargo, una exhaustiva reevaluación osteológica liderada por Leslie F. Noè y Marcela Gómez-Pérez en 2021 demostró que el espécimen colombiano posee diferencias anatómicas profundas que justifican su propio género: una morfología nasal y premaxilar diagnóstica, una sutura mandibular distintiva y un patrón dentario que lo separa taxativamente del género de Oceanía. Así nació formalmente Monquirasaurus boyacensis, honrando a la vereda de Boyacá donde reposa.',
        ],
        callout: {
          badge: 'Criterio taxonómico formal',
          text: 'Noè & Gómez-Pérez (2021) establecieron Monquirasaurus como género independiente tras cotejar directamente el holotipo JVP-001 con el material tipo de Kronosaurus en Australia.',
        },
      },
      {
        heading: '3. Longitud real comprobada: desmintiendo mitos de 15 a 20 metros',
        paragraphs: [
          'En la divulgación popular y folletos turísticos informales circularon estimaciones hiperbólicas de hasta 15 o 20 metros de longitud. El estudio osteológico riguroso del esqueleto articulado JVP-001 sitúa su cráneo entre ~2.45 y ~2.65 metros, y su longitud total entre 9.3 y 10.0 metros.',
          'Con diez metros de envergadura, dientes cónicos de más de 10 centímetros y una masa calculada en varias toneladas impulsada por cuatro aletas hidrodinámicas, Monquirasaurus fue el superdepredador ápice del mar epicontinental que cubría el centro de Colombia en el Cretácico temprano.',
        ],
      },
    ],
    evidenceGallery: [
      {
        image: '/assets/blog/monquirasaurus-jvp-001-museo.jpg',
        alt: 'Esqueleto holotipo JVP-001 de Monquirasaurus boyacensis preservado in situ en el Museo El Fósil',
        caption: 'Holotipo articulado JVP-001 conservado in situ en el Museo Comunitario El Fósil (Villa de Leyva).',
        credit: 'Edward M Johnson vía Wikimedia Commons · CC BY-SA 2.0',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kronosaurus_boyacensis_fossil.jpg',
      },
    ],
    whatWeDoNotClaim: [
      'No afirmamos que era un dinosaurio: Monquirasaurus es un reptil marino plesiosaurio (familia Pliosauridae).',
      'No afirmamos medidas exageradas de 15 o 20 metros; las medidas osteológicas verificadas sitúan la longitud entre 9.3 y 10.0 m.',
      'No mantenemos la clasificación en Kronosaurus como válida, tras la revisión publicada por Noè & Gómez-Pérez en 2021.',
    ],
    faq: [
      {
        question: '¿Dónde se encuentra el fósil original de Monquirasaurus boyacensis?',
        answer:
          'Se conserva articulado in situ en el Museo Comunitario El Fósil, ubicado en la vereda Monquirá, a 5 km de Villa de Leyva (Boyacá, Colombia).',
      },
      {
        question: '¿Por qué ya no se llama Kronosaurus?',
        answer:
          'La revisión científica de Noè & Gómez-Pérez (2021) demostró que el espécimen de Boyacá posee diferencias anatómicas determinantes en el cráneo y las mandíbulas respecto a la especie australiana Kronosaurus queenslandicus, erigiendo el género exclusivo Monquirasaurus.',
      },
      {
        question: '¿Qué edad tienen las rocas donde se preservó?',
        answer:
          'Pertenece al Miembro Arcillolitas Abigarradas de la Formación Paja, datado en el Cretácico temprano (Aptiano, hace aproximadamente 120 a 115 millones de años).',
      },
    ],
    sources: [
      {
        label: 'Noè, L. F. & Gómez-Pérez, M. (2021). Giant pliosaurid plesiosaurs from the Lower Cretaceous of Colombia. Cretaceous Research, 126, 104885.',
        url: 'https://doi.org/10.1016/j.cretres.2021.104885',
      },
      {
        label: 'Hampe, O. (1992). Ein großwüchsiger Pliosauride (Reptilia: Plesiosauria) aus der Unterkreide (oberes Aptium) von Kolumbien. Courier Forschungsinstitut Senckenberg, 145, 1–32.',
        url: 'https://www.senckenberg.de/de/wissenschaft/publikationen/courier-forschungsinstitut-senckenberg/',
      },
    ],
  },
  {
    slug: 'ammonoidea-ammonites-cretacico-colombia',
    title: 'Ammonites de Colombia: el reloj biológico del mar cretácico y sus espirales fósiles',
    seoTitle: 'Ammonites en Colombia: fósiles de Villa de Leyva, bioestratigrafía y Nicklesia pulchella | COLOMBIA FÓSIL',
    seoDescription:
      'Descubre cómo los ammonites fósiles de la Formación Paja (Nicklesia pulchella, Pulchellia galeata) funcionan como cronómetros geológicos para datar el mar cretácico colombiano con base en investigaciones de Pedro Patarroyo (2009, 2020).',
    keywords: [
      'Ammonites en Colombia',
      'Nicklesia pulchella',
      'Formación Paja Villa de Leyva',
      'bioestratigrafía Cretácico',
      'Pedro Patarroyo',
      'fósiles marinos Colombia',
      'Decreto 1353 de 2018',
    ],
    category: 'Paleontología',
    statusBadge: 'Registro verificado',
    publishedAt: '2026-12-01',
    readingTime: '4 min de lectura',
    period: 'Cretácico temprano (Barremiano, ~129–125 Ma)',
    region: 'Villa de Leyva · Sutamarchán · Boyacá',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Nicklesia_pulchella.jpg',
    coverAlt: 'Concha fósil de Nicklesia pulchella con costillas y suturas tabuladas',
    coverCredit: 'Ghedoghedo vía Wikimedia Commons · CC BY-SA 3.0',
    videoUrl: '/assets/video/ep03_ammonoidea_vertical_9x16.mp4',
    videoPoster: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Nicklesia_pulchella.jpg',
    videoDuration: '58 s',
    videoNote:
      'Video divulgativo oficial de COLOMBIA FÓSIL (v1.0.0). Combina fósiles físicos reales en colecciones oficiales con animación explicativa rotulada como Reconstrucción artística.',
    excerpt:
      'Hace 125 millones de años, moluscos cefalópodos con conchas de flotabilidad hidrostática dominaron los mares tropicales de Boyacá y Santander. Hoy son la herramienta bioestratigráfica más precisa para datar rocas cretácicas.',
    factsSummary: [
      { label: 'Taxón verificado', value: "Nicklesia pulchella (d'Orbigny, 1840) / Pulchelliidae" },
      { label: 'Unidad y edad', value: 'Formación Paja / Rosablanca · Barremiano (~129–125 Ma)' },
      { label: 'Localidad', value: 'Villa de Leyva, Sutamarchán y Sáchica (Boyacá)' },
      { label: 'Custodia oficial', value: 'Colección Paleontológica Nacional (CPN) · SGC' },
      { label: 'Función clave', value: 'Fósil guía y marcador de biozona de alta resolución' },
      { label: 'Protección legal', value: 'Bien de interés geológico de la Nación (Dec. 1353/2018)' },
    ],
    sections: [
      {
        heading: 'Submarinos biológicos del mar cretácico',
        paragraphs: [
          'Durante el Cretácico temprano, gran parte de la actual cordillera oriental de Colombia estaba sumergida bajo un mar somero cálido de extraordinaria productividad biológica. Entre los habitantes más abundantes se encontraban los ammonites, moluscos cefalópodos emparentados con los pulpos y calamares modernos.',
          'A diferencia de un gasterópodo común, un ammonite solo ocupaba la cámara exterior de su concha. Las cámaras interiores (el fragmocono), atravesadas por un conducto llamado sifúnculo, se llenaban o vaciaban de gas y líquido para controlar su flotabilidad con precisión hidrostática similar a un submarino moderno.',
        ],
      },
      {
        heading: 'Por qué son el reloj cronológico de la geología colombiana',
        paragraphs: [
          'Debido a su vertiginoso ritmo de especiación y rápida distribución global, las especies de ammonites sobrevivían periodos geológicos relativamente cortos. Por ello, la presencia de una especie determinada permite acotar la edad de una capa rocosa con una exactitud que los métodos radiométricos rara vez alcanzan en rocas sedimentarias.',
          'Las investigaciones bioestratigráficas del profesor Pedro Patarroyo (2009, 2020) en la Universidad Nacional de Colombia y el Servicio Geológico Colombiano han establecido la Biozona de Nicklesia pulchella como referente de correlación internacional para el Barremiano temprano en América del Sur.',
        ],
      },
      {
        heading: 'Patrimonio de la Nación: no son artesanías',
        paragraphs: [
          'En diversas zonas turísticas de Boyacá es frecuente encontrar puestos informales de venta de fósiles cortados o pulidos como ceniceros y adornos. Es fundamental recordar que, bajo el Decreto 1353 de 2018, todo fósil descubierto en suelo colombiano es patrimonio geológico de la Nación bajo rectoría del Servicio Geológico Colombiano.',
          'La extracción no científica destruye el contexto estratigráfico y la información irremplazable que permite descifrar el pasado de nuestro planeta. El turismo de ciencia y observación in situ es la vía ética y legal para admirar esta riqueza.',
        ],
      },
    ],
    evidenceGallery: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Nicklesia_pulchella.jpg',
        caption: 'Concha fósil de Nicklesia pulchella exhibiendo costillaje discoidal típico de la familia Pulchelliidae.',
        credit: 'Ghedoghedo (CC BY-SA 3.0)',
      },
    ],
    faq: [
      {
        question: '¿Qué diferencia a un ammonite de un nautilo moderno?',
        answer:
          'Aunque ambos poseen conchas tabuladas con cámaras, el nautilo es un pariente lejano que sobrevivió a la gran extinción del Cretácico-Paleógeno. Los ammonites tenían suturas septales complejas y onduladas (en lugar de simples y curvadas como el nautilo) y se extinguieron hace 66 millones de años junto a los dinosaurios no avianos.',
      },
      {
        question: '¿Dónde se pueden observar ammonites auténticos conservados en Colombia?',
        answer:
          'En el Museo Geológico Nacional José Royo y Gómez en Bogotá (SGC), en el Museo Paleontológico de Villa de Leyva (Universidad Nacional) y en los senderos geológicos comunitarios autorizados de Sutamarchán y Sáchica.',
      },
    ],
    sources: [
      {
        label: 'Patarroyo, P. (2009). Zonación con amonitas del Barremiano de la Formación Paja en un sector al noroeste de Villa de Leyva (Boyacá, Colombia). Boletín de Geología, 31(2), 29–41.',
        url: 'https://revistas.uis.edu.co/index.php/boletindegeologia/article/view/364',
      },
      {
        label: 'Patarroyo, P. (2020). Barremian ammonites of Colombia: biostratigraphic review and correlation. Cretaceous Research, 114, 104523.',
        url: 'https://doi.org/10.1016/j.cretres.2020.104523',
      },
      {
        label: 'Kakabadze, M. V., & Hoedemaeker, P. J. (2004). Barremian ammonites of the family Pulchelliidae from Colombia. Scripta Geologica, 128, 1–68.',
        url: 'https://repository.naturalis.nl/pub/219664',
      },
      {
        label: 'Decreto 1353 de 2018 por el cual se reglamenta la gestión integral del patrimonio geológico y paleontológico de la Nación. Servicio Geológico Colombiano.',
        url: 'https://www.sgc.gov.co/patrimonio-geologico',
      },
    ],
  },
];

export const blogPipelineQueue = [
  {
    title: 'Purussaurus neivensis en La Venta (Huila)',
    status: 'En revisión científica',
    note: 'Cotejando holotipo USNM 10889 (Mook, 1941), ejemplares UCMP y fotografía verificada de espécimen colombiano.',
  },
  {
    title: 'Pterygotus cf. P. bolivianus en Boyacá',
    status: 'En revisión científica',
    note: 'Cotejando ejemplar SGC-MGJRG.2018.I.5 (Olive et al., 2019) y gestión de imagen autorizada del Museo Geológico Nacional.',
  },
  {
    title: 'Pterosaurios de la Formación Rosablanca (Zapatoca)',
    status: 'En revisión científica',
    note: 'Cotejando UR-CP-0002 y UR-CP-0003 (Cadena, Unwin & Martill, 2020) y documentación visual con licencia.',
  },
];

export const scienceResources = [
  {
    number: '01',
    slug: 'patrimonio-geologico',
    title: 'Patrimonio geológico y paleontológico de Colombia',
    summary:
      'Recurso oficial sobre identificación, valoración, conservación y divulgación del patrimonio geológico. Se enlaza la publicación original; no es una investigación de COLOMBIA FÓSIL.',
    meta: 'Servicio Geológico Colombiano · Fecha no indicada en la fuente',
    author: 'Servicio Geológico Colombiano',
    date: 'Fecha no indicada en la fuente',
    externalUrl: 'https://www2.sgc.gov.co/patrimonio/Paginas/patrimonio-geologico.aspx',
    reference:
      'Servicio Geológico Colombiano. Patrimonio geológico y paleontológico de Colombia. Fecha no indicada en la fuente. Fuente original enlazada arriba.',
  },
  {
    number: '02',
    slug: 'la-lindosa',
    title: 'La Lindosa: paisaje y patrimonio arqueológico',
    summary:
      'Publicación oficial sobre la declaración del Área Arqueológica Protegida y la importancia de la participación comunitaria en su salvaguarda.',
    meta: 'Instituto Colombiano de Antropología e Historia · 29 de mayo de 2018',
    author: 'Instituto Colombiano de Antropología e Historia',
    date: '29 de mayo de 2018',
    externalUrl:
      'https://www.icanh.gov.co/prensa/actualidad-icanh/lindosa-nueva-area-arqueologica-colombia',
    reference:
      'Instituto Colombiano de Antropología e Historia. La Lindosa: paisaje y patrimonio arqueológico. 29 de mayo de 2018. Fuente original enlazada arriba.',
  },
  {
    number: '03',
    slug: 'geologia-de-colombia',
    title: 'El contexto geológico del territorio colombiano',
    summary:
      'Physiographic and geological setting of the Colombian territory. The Geology of Colombia, volumen 1, páginas 1–16. DOI: 10.32685/pub.esp.35.2019.01.',
    meta: 'Gómez, J. y colaboradores · Servicio Geológico Colombiano · 2020',
    author: 'Gómez, J. y colaboradores · Servicio Geológico Colombiano',
    date: '2020',
    externalUrl: 'https://www2.sgc.gov.co/LibroGeologiaColombia/tgc/sgcpubesp35201901.pdf',
    reference:
      'Gómez, J. y colaboradores · Servicio Geológico Colombiano. El contexto geológico del territorio colombiano. 2020. Fuente original enlazada arriba.',
  },
];

export const explorationReviews = [
  {
    author: 'Camila Restrepo',
    role: 'Exploradora · Medellín',
    expedition: 'Trekking Georupestre del Desierto',
    rating: 5,
    quote:
      'Nunca imaginé caminar por un desierto entendiendo que millones de años atrás fue un mar antiguo. La lectura de los estratos y el respeto absoluto por no tocar ni extraer fósiles hicieron de los tres días una experiencia transformadora.',
  },
  {
    author: 'Dr. Andrés Felipe Morales',
    role: 'Docente universitario · Bogotá',
    expedition: 'Trekking Georupestre a la Guyana · Vaupés y Morroco',
    rating: 5,
    quote:
      'El equilibrio entre el rigor geológico sobre el Escudo Guayanés y la gobernanza real de las comunidades taiwano y piapoco es admirable. Desde el sobrevuelo hasta las malocas y los aportes escolares, todo tiene coherencia científica y humana.',
  },
  {
    author: 'Laura Sofía Mendoza',
    role: 'Bióloga y fotógrafa · Cali',
    expedition: 'Trekking Georupestre Guaviare',
    rating: 5,
    quote:
      'Visitar La Lindosa, ver la Macarenia clavigera en caños cristalinos y navegar Lagunas de Nare entre toninas sin horarios apresurados se sintió auténtico de principio a fin. La organización logística y los anfitriones locales fueron impecables.',
  },
];
