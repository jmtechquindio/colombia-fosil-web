export const WHATSAPP_DISPLAY = '+57 322 625 0965';
export const WHATSAPP_URL = 'https://wa.me/573226250965';

export const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Expediciones', path: '/expediciones' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Destinos', path: '/destinos' },
  { label: 'Fósiles', path: '/fosiles' },
  { label: 'Información', path: '/informacion' },
  { label: 'Quiénes somos', path: '/nosotros' },
];

export const footerLinks = [
  { label: 'Expediciones', path: '/expediciones' },
  { label: 'Nuestro proyecto', path: '/nosotros' },
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
    photo: null,
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
