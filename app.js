import { icons } from './icons.js';
import {
  WHATSAPP_DISPLAY,
  destinations,
  disciplines,
  expeditions,
  expeditionCategories,
  experiences,
  experienceFilters,
  conservationValues,
  institutionCards,
  teamMembers,
  fossilsCatalog,
  scienceResources,
} from './data.js';
import {
  BASE_PATH,
  assetUrl,
  escapeHtml,
  routeHref,
  whatsappHref,
  renderHeader,
  renderFooter,
  renderPageBanner,
  renderAudienceBar,
  renderExpeditionCard,
  renderWhatsAppCta,
  renderDestinationCard,
  renderContactForm,
  attachContactFormHandlers,
} from './components.js';

if (window.location.search[1] === '/') {
  const decoded = window.location.search
    .slice(1)
    .split('&')
    .map((s) => s.replace(/~and~/g, '&'))
    .join('?');
  const baseDir = window.location.pathname.endsWith('/')
    ? window.location.pathname.slice(0, -1)
    : window.location.pathname;
  window.history.replaceState(null, '', baseDir + decoded + window.location.hash);
}

const state = {
  mobileMenuOpen: false,
  audienceMode: 'explorer',
  activeExpeditionCategory: 'Todas',
  activeExperienceFilter: 'Todas',
  fossilFilters: {
    period: '',
    location: '',
    type: '',
  },
};

function getCurrentRoute() {
  if (window.location.protocol === 'file:') {
    const rawHash = window.location.hash.replace(/^#/, '') || '/';
    const [pathname, search = ''] = rawHash.split('?');
    return { pathname: pathname || '/', search: search ? `?${search}` : '' };
  }
  let pathname = window.location.pathname || '/';
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    pathname = pathname.slice(BASE_PATH.length) || '/';
  }
  return {
    pathname,
    search: window.location.search || '',
  };
}

function syncFossilFiltersFromUrl(search) {
  const params = new URLSearchParams(search);
  state.fossilFilters.period = params.get('period') || '';
  state.fossilFilters.location = params.get('location') || '';
  state.fossilFilters.type = params.get('type') || '';
}

function updateFossilQueryParams() {
  const params = new URLSearchParams();
  if (state.fossilFilters.period) params.set('period', state.fossilFilters.period);
  if (state.fossilFilters.location) params.set('location', state.fossilFilters.location);
  if (state.fossilFilters.type) params.set('type', state.fossilFilters.type);
  const query = params.toString();
  const suffix = query ? `?${query}` : '';
  if (window.location.protocol === 'file:') {
    window.history.replaceState(null, '', `#/fosiles${suffix}`);
  } else {
    window.history.replaceState(null, '', `${BASE_PATH}/fosiles${suffix}`);
  }
}

export function navigate(path, scrollTop = true) {
  state.mobileMenuOpen = false;
  if (window.location.protocol === 'file:') {
    window.history.pushState(null, '', `#${path}`);
  } else {
    const target = BASE_PATH && path.startsWith(BASE_PATH) ? path : `${BASE_PATH}${path}`;
    window.history.pushState(null, '', target);
  }
  render(scrollTop, true);
}

function renderHomePage() {
  const disciplineLinks = disciplines
    .map(
      (d) =>
        `<a href="${routeHref(d.path)}" class="discipline-item" data-nav-link>
          ${icons[d.icon]()}
          <span>${escapeHtml(d.label)}</span>
        </a>`
    )
    .join('');

  const expeditionCards = expeditions
    .map((exp) => renderExpeditionCard(exp, state.audienceMode))
    .join('');

  const destCards = destinations.map(renderDestinationCard).join('');

  const valueCards = conservationValues
    .map(
      (v) => `
      <div class="value-item">
        ${icons[v.icon]('value-item-icon')}
        <h3>${escapeHtml(v.title)}</h3>
        <p>${escapeHtml(v.copy)}</p>
      </div>
    `
    )
    .join('');

  return {
    title: 'Explorar para comprender | COLOMBIA FÓSIL',
    html: `
      <section class="hero">
        <img
          src="${assetUrl('/assets/fosil-roca-portada.png')}"
          alt="Detalle de una roca con una impresión fósil, fotografía compartida para COLOMBIA FÓSIL"
          class="hero-image"
        />
        <div class="container-shell hero-inner">
          <div class="eyebrow">TURISMO GEOARQUEOLÓGICO · CIENCIA Y COMUNIDAD</div>
          <h1>COLOMBIA<br />FÓSIL</h1>
          <p class="hero-motto">Explorar para comprender.</p>
          <p class="hero-copy">
            Expediciones auténticas de conocimiento y territorio. Conectamos geología, paleontología,
            arte rupestre y gobernanza comunitaria para comprender el patrimonio natural y cultural de Colombia.
          </p>
          <div class="hero-actions">
            <a href="${routeHref('/expediciones')}" class="btn btn-primary" data-nav-link>
              Ver expediciones ${icons.arrowUpRight()}
            </a>
            <a href="${routeHref('/informacion')}" class="btn btn-hero-ghost" data-nav-link>
              Explorar información ${icons.arrowUpRight()}
            </a>
          </div>
        </div>
        <div class="hero-bottom">
          <div class="hero-location">
            ${icons.mapPin()}
            <div>
              <div>Registro fósil · Observar para comprender</div>
              <div class="hero-credits">Fotografía aportada al proyecto · Autoría por confirmar</div>
            </div>
          </div>
          <a href="#territorio" class="hero-scroll-btn" aria-label="Descubrir el territorio" data-scroll-anchor="territorio">
            ${icons.arrowDown()}
          </a>
          <div class="hero-index">01 / REGISTRO FÓSIL</div>
        </div>
      </section>

      <div class="container-shell discipline-band">
        ${disciplineLinks}
        <span class="discipline-tail">
          Ciencia que conecta con el territorio ${icons.arrowUpRight()}
        </span>
      </div>

      <section class="container-shell section">
        <div class="section-heading">
          <div>
            <div class="eyebrow text-primary">EXPEDICIONES GEOARQUEOLÓGICAS</div>
            <h2>Rutas auténticas de conocimiento y territorio.</h2>
          </div>
          <a href="${routeHref('/expediciones')}" class="text-link" data-nav-link>
            Explorar todas las expediciones ${icons.arrowUpRight()}
          </a>
        </div>
        <p class="section-copy mb-5">
          Planes cortos de 2 a 3 días con transporte terrestre privado y expediciones remotas de selva
          bajo gobernanza comunitaria. Sin tarifas públicas: cada salida se estructura a medida según
          tu grupo y perfil.
        </p>
        ${renderAudienceBar(state.audienceMode)}
        <div class="card-grid">
          ${expeditionCards}
        </div>
      </section>

      <section class="container-shell section section-tight-top">
        <div class="grid-2">
          <a href="${routeHref('/servicios')}" class="feature-link-card" data-nav-link>
            <div class="eyebrow text-primary">SERVICIOS</div>
            <h2>Expediciones y propuestas educativas</h2>
            <p>Planes cortos en desierto y piedemonte, expediciones en selva y líneas académicas.</p>
            <span class="text-link">Ver servicios ${icons.arrowUpRight()}</span>
          </a>
          <a href="${routeHref('/informacion')}" class="feature-link-card mineral-top" data-nav-link>
            <div class="eyebrow text-primary">INFORMACIÓN</div>
            <h2>Fósiles, territorio y fuentes</h2>
            <p>Catálogo documental, destinos de investigación y bibliografía oficial SGC e ICANH.</p>
            <span class="text-link">Explorar información ${icons.arrowUpRight()}</span>
          </a>
        </div>
      </section>

      <section id="territorio" class="container-shell section section-intro">
        <div>
          <div class="eyebrow text-primary">EL TERRITORIO ES UN LIBRO ABIERTO</div>
          <h2>No solo visitamos lugares.<br />Aprendemos a leerlos.</h2>
        </div>
        <div>
          <p class="section-copy">
            Colombia conserva millones de años de historia en sus rocas, tepuyes, cavernas y paisajes.
            Nuestro proyecto conecta la exploración científica con las comunidades anfitrionas para
            acercarnos a ese patrimonio con curiosidad, rigor y respeto.
          </p>
          <a href="${routeHref('/nosotros')}" class="text-link mt-5" data-nav-link>
            La ciencia y la comunidad como punto de partida ${icons.arrowUpRight()}
          </a>
        </div>
      </section>

      <figure class="landscape-story container-shell">
        <img
          src="${assetUrl('/assets/hero.webp')}"
          alt="Palmas de cera y montañas del Valle de Cocora, Colombia"
        />
        <figcaption>
          <span>Valle de Cocora · Un paisaje para observar y comprender</span>
          <a
            href="https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_06.jpg"
            target="_blank"
            rel="noreferrer"
          >Bernard Gagnon · CC BY-SA 4.0</a>
        </figcaption>
      </figure>

      <section class="bg-muted section">
        <div class="container-shell">
          <div class="section-heading">
            <div>
              <div class="eyebrow text-primary">TERRITORIOS POR COMPRENDER</div>
              <h2>Un país, muchas historias.</h2>
            </div>
            <a href="${routeHref('/destinos')}" class="text-link" data-nav-link>
              Explorar destinos ${icons.arrowUpRight()}
            </a>
          </div>
          <p class="section-copy mb-5">
            Escudo Guayanés en el Vaupés, Área Arqueológica Protegida de La Lindosa en Guaviare y
            territorios paleontológicos de Colombia.
          </p>
          <div class="card-grid">
            ${destCards}
          </div>
        </div>
      </section>

      <section class="conservation section">
        <div class="container-shell">
          <div class="section-intro">
            <div>
              <div class="eyebrow">NUESTRA FORMA DE EXPLORAR</div>
              <h2>Comprender también<br />es conservar.</h2>
            </div>
            <p class="section-copy">
              No somos turismo de lujo ni extracción comercial: somos expediciones comunitarias con
              respaldo científico real. Los ingresos operativos llegan directamente a las comunidades
              anfitrionas y en selva integramos aportes escolares para los niños del territorio.
            </p>
          </div>
          <div class="value-grid">
            ${valueCards}
          </div>
        </div>
      </section>

      <section class="container-shell section section-intro">
        <div>
          <div class="eyebrow text-primary">PARA INSTITUCIONES EDUCATIVAS</div>
          <h2>El aula también<br />está en el territorio.</h2>
        </div>
        <div>
          <p class="section-copy">
            Colegios, universidades y grupos científicos: diseñamos salidas pedagógicas y
            expediciones de campo adaptadas al nivel académico del grupo, con fuentes verificables de
            geología, paleontología y arqueología.
          </p>
          <a href="${routeHref('/instituciones')}" class="btn btn-outline mt-6" data-nav-link>
            Construir una experiencia académica ${icons.arrowUpRight()}
          </a>
        </div>
      </section>

      <section class="bg-muted section">
        <div class="container-shell contact-layout">
          <div>
            <div class="eyebrow text-primary">INICIEMOS UNA CONVERSACIÓN</div>
            <h2>La próxima pregunta<br />puede abrir un camino.</h2>
            <p class="section-copy">
              Cuéntanos si viajas como explorador o grupo académico, cuántas personas son y qué
              territorio te interesa comprender.
            </p>
            <div class="mt-6">
              <a
                href="${whatsappHref('Hola COLOMBIA FÓSIL, quisiera mayor información para planear una expedición.')}"
                target="_blank"
                rel="noreferrer"
                class="btn btn-whatsapp"
              >
                ${icons.whatsapp()} WhatsApp ${WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
          <div class="contact-card-surface">
            ${renderContactForm('home-contact-form')}
          </div>
        </div>
      </section>
    `,
  };
}

function renderExpedicionesPage() {
  const filtered =
    state.activeExpeditionCategory === 'Todas'
      ? expeditions
      : expeditions.filter((e) => e.category === state.activeExpeditionCategory);

  const filterButtons = expeditionCategories
    .map(
      (cat) => `
      <button
        type="button"
        class="btn-filter"
        data-expedition-cat="${escapeHtml(cat)}"
        aria-pressed="${state.activeExpeditionCategory === cat ? 'true' : 'false'}"
      >${escapeHtml(cat)}</button>
    `
    )
    .join('');

  const cards = filtered
    .map((exp) => renderExpeditionCard(exp, state.audienceMode))
    .join('');

  return {
    title: 'Expediciones geoarqueológicas y comunitarias | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Turismo geoarqueológico y comunitario',
        'Expediciones de conocimiento y territorio',
        'Planes cortos de 2 a 3 días y expediciones remotas de selva bajo gobernanza indígena y local. Narrativa orgánica sin horarios rígidos y cotización directa personalizada sin precios públicos.'
      )}
      <section class="container-shell section">
        ${renderAudienceBar(state.audienceMode)}
        <div class="filters" role="group" aria-label="Filtrar por tipología logística">
          ${filterButtons}
        </div>
        <div class="card-grid">
          ${cards}
        </div>
        ${renderWhatsAppCta(
          '¿Buscas una salida privada o para grupo académico?',
          'Para mayor información sobre disponibilidad, tamaño de grupo, vuelos chárter o salidas desde Bogotá, escríbenos directamente por WhatsApp.',
          'Hola COLOMBIA FÓSIL, quisiera mayor información sobre las expediciones geoarqueológicas.'
        )}
      </section>
    `,
  };
}

function renderExpedicionDetailPage(slug) {
  const exp = expeditions.find((e) => e.slug === slug);
  if (!exp) return renderNotFoundPage();

  const audience = state.audienceMode === 'academic' ? exp.academic : exp.explorer;
  const audienceLabel =
    state.audienceMode === 'academic'
      ? 'Público Científico / Académico'
      : 'Turista General / Explorador';

  const journeysHtml = exp.journeys
    .map(
      (j) => `
      <article class="journey-step">
        <h3>${escapeHtml(j.title)}</h3>
        <p>${escapeHtml(state.audienceMode === 'academic' ? j.academic : j.explorer)}</p>
      </article>
    `
    )
    .join('');

  const includesHtml = exp.includes
    .map(
      (item) => `
      <li>
        ${icons.check()}
        <span>${escapeHtml(item)}</span>
      </li>
    `
    )
    .join('');

  const jungleBlock = exp.jungleTransparency
    ? `
      <div class="jungle-clause">
        <div class="jungle-clause-title">
          ${icons.alertTriangle()}
          <span>Transparencia en selva · Condiciones especiales</span>
        </div>
        <p>${escapeHtml(exp.jungleTransparency)}</p>
      </div>
    `
    : '';

  return {
    title: `${exp.title} | COLOMBIA FÓSIL`,
    html: `
      ${renderPageBanner(
        `${exp.categoryShort} · ${exp.duration}`,
        exp.title,
        audience.summary
      )}
      <section class="container-shell section">
        ${renderAudienceBar(state.audienceMode)}

        <div class="detail-layout">
          <div>
            <div class="eyebrow text-primary">RELATO DE LA TRAVESÍA · ENFOQUE ${escapeHtml(
              audienceLabel.toUpperCase()
            )}</div>
            <h2>Narrativa de la expedición</h2>
            <p>${escapeHtml(audience.scientificPlus)}</p>

            <div class="journey-list">
              ${journeysHtml}
            </div>

            <div class="community-box">
              <div class="community-box-title">
                ${icons.users()}
                <span>Impacto social y gobernanza comunitaria</span>
              </div>
              <p>${escapeHtml(exp.communityImpact)}</p>
            </div>

            ${jungleBlock}

            <div class="includes-block">
              <h2>Qué incluye</h2>
              <ul class="includes-list">
                ${includesHtml}
              </ul>
            </div>

            ${renderWhatsAppCta(
              'Para mayor información y diseño de tu salida',
              'Para mayor información sobre fechas, logística según el número de participantes y formalización comunitaria, contáctanos directamente por WhatsApp.',
              `Hola COLOMBIA FÓSIL, quisiera mayor información sobre la expedición "${exp.title}" (enfoque: ${audienceLabel}).`
            )}
          </div>

          <aside>
            ${
              exp.image
                ? `<figure class="detail-photo mb-5">
                    <img src="${escapeHtml(assetUrl(exp.image))}" alt="${escapeHtml(exp.imageAlt)}" />
                    <figcaption>
                      ${escapeHtml(exp.imageAlt)}.
                      <a href="${escapeHtml(exp.imageSourceUrl)}" target="_blank" rel="noreferrer" class="text-link">
                        ${escapeHtml(exp.imageCredit)} · Wikimedia Commons ${icons.arrowUpRight()}
                      </a>
                    </figcaption>
                  </figure>`
                : ''
            }
            <dl class="detail-facts">
            <div>
              <dt>Tipología</dt>
              <dd>${escapeHtml(exp.category)}</dd>
            </div>
            <div>
              <dt>Duración</dt>
              <dd>${escapeHtml(exp.duration)}</dd>
            </div>
            <div>
              <dt>Territorio</dt>
              <dd>${escapeHtml(exp.region)}</dd>
            </div>
            <div>
              <dt>Logística de transporte</dt>
              <dd>${escapeHtml(exp.logisticsSummary)}</dd>
            </div>
            <div>
              <dt>Acomodación</dt>
              <dd>${escapeHtml(exp.accommodation)}</dd>
            </div>
            <div>
              <dt>Respaldo y fuentes</dt>
              <dd>${escapeHtml(audience.bibliography)}</dd>
            </div>
            <div>
              <dt>Cotización</dt>
              <dd>Personalizada por WhatsApp según grupo y logística (no publicamos tarifas en línea).</dd>
            </div>
          </dl>
          </aside>
        </div>
      </section>
    `,
  };
}

function renderServiciosPage() {
  return {
    title: 'Servicios y propuestas | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Exploración, ciencia y comunidad',
        'Servicios y propuestas',
        'Expediciones geoarqueológicas estructuradas en dos categorías logísticas (planes cortos de 2–3 días y travesías remotas de selva hasta 7 días), experiencias temáticas y diseño académico.'
      )}
      <section class="container-shell section">
        <p class="notice">
          Política de transparencia comercial: no publicamos tarifas estándar en línea porque cada
          expedición se cotiza según el número de participantes, permisos comunitarios y logística
          aérea o terrestre requerida.
        </p>
        <div class="card-grid">
          <article class="service-card">
            ${icons.mountain('service-card-icon')}
            <h2>Expediciones geoarqueológicas</h2>
            <p class="section-copy">
              Planes completos en Desierto (3 días), Guaviare (4 días) y Vaupés–Morroco (7 días)
              con adaptación para exploradores y público científico.
            </p>
            <a href="${routeHref('/expediciones')}" class="btn btn-primary" data-nav-link>
              Ver expediciones ${icons.arrowUpRight()}
            </a>
          </article>

          <article class="service-card">
            ${icons.compass('service-card-icon')}
            <h2>Experiencias por disciplina</h2>
            <p class="section-copy">
              Geología, paleontología, espeleología, biodiversidad, patrimonio cultural y astronomía
              en lenguaje divulgativo o técnico.
            </p>
            <a href="${routeHref('/experiencias')}" class="btn btn-outline" data-nav-link>
              Ver disciplinas ${icons.arrowUpRight()}
            </a>
          </article>

          <article class="service-card">
            ${icons.graduationCap('service-card-icon')}
            <h2>Instituciones educativas</h2>
            <p class="section-copy">
              Líneas de trabajo para colegios, universidades y grupos académicos interesados en
              salidas de campo con respaldo bibliográfico.
            </p>
            <a href="${routeHref('/instituciones')}" class="btn btn-outline" data-nav-link>
              Propuestas académicas ${icons.arrowUpRight()}
            </a>
          </article>
        </div>

        ${renderWhatsAppCta(
          'Para mayor información sobre nuestros servicios',
          'Cuéntanos el destino, el perfil del grupo y la duración estimada para prepararte una propuesta a medida.',
          'Hola COLOMBIA FÓSIL, solicito mayor información sobre sus servicios y expediciones.'
        )}
      </section>
    `,
  };
}

function renderExperienciasPage() {
  const filtered =
    state.activeExperienceFilter === 'Todas'
      ? experiences
      : experiences.filter((e) => e.discipline === state.activeExperienceFilter);

  const filterButtons = experienceFilters
    .map(
      (f) =>
        `<button
          type="button"
          class="btn-filter"
          data-exp-filter="${escapeHtml(f)}"
          aria-pressed="${state.activeExperienceFilter === f ? 'true' : 'false'}"
        >${escapeHtml(f)}</button>`
    )
    .join('');

  const cards = filtered
    .map(
      (exp) => `
      <a href="${routeHref(`/experiencias/${exp.slug}`)}" class="experience-card" data-nav-link>
        ${icons.compass('experience-card-icon')}
        <div class="card-label">${escapeHtml(exp.discipline)}</div>
        <h2>${escapeHtml(exp.title)}</h2>
        <p class="experience-card-summary">${escapeHtml(exp.summary)}</p>
        <p class="experience-card-location">${escapeHtml(exp.location)}</p>
        <div class="experience-card-footer">
          <span class="status">Componente científico activo</span>
          ${icons.arrowUpRight()}
        </div>
      </a>
    `
    )
    .join('');

  return {
    title: 'Experiencias científicas | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Aprender en el territorio',
        'Experiencias de conocimiento',
        'Disciplinas científicas que integran nuestras expediciones: geología, paleontología, espeleología, trekking científico, biodiversidad, patrimonio cultural y astronomía.'
      )}
      <section class="container-shell section">
        <div class="filters" role="group" aria-label="Filtrar por disciplina">
          ${filterButtons}
        </div>
        <div class="card-grid">
          ${cards}
        </div>
      </section>
    `,
  };
}

function renderExperienciaDetailPage(slug) {
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return renderNotFoundPage();

  const photoSection = exp.image
    ? `
      <figure class="detail-photo">
        <img src="${escapeHtml(assetUrl(exp.image))}" alt="${escapeHtml(exp.imageAlt)}" />
        <figcaption>
          ${escapeHtml(exp.imageCredit)}
          ${
            exp.imageSourceUrl
              ? ` <a href="${escapeHtml(exp.imageSourceUrl)}" target="_blank" rel="noreferrer" class="text-link">
                    Ver fuente original ${icons.arrowUpRight()}
                  </a>`
              : ''
          }
        </figcaption>
      </figure>
    `
    : `<p>Galería específica pendiente de documentación y autorización. No se muestran imágenes ilustrativas como evidencia del sitio.</p>`;

  return {
    title: `${exp.title} | COLOMBIA FÓSIL`,
    html: `
      ${renderPageBanner(exp.discipline, exp.title, exp.summary)}
      <section class="container-shell section">
        <p class="notice">
          Componente temático integrado en nuestras expediciones geoarqueológicas. Toda salida
          requiere evaluación técnica previa, condiciones climáticas seguras y permisos comunitarios.
        </p>
        <div class="detail-layout">
          <div>
            <h2>Objetivo de aprendizaje</h2>
            <p>${escapeHtml(exp.learningObjective)}</p>

            <h2>Recomendaciones y seguridad</h2>
            <p>
              No planificar un desplazamiento sin acompañamiento competente. Antes de cualquier
              actividad se requieren evaluación de riesgos, equipamiento adecuado, seguro de
              asistencia médica, acceso autorizado y protocolos de emergencia.
            </p>
            <p>
              La exploración de cavernas y los territorios remotos requieren evaluación técnica
              específica. No recolectar fósiles ni tocar o intervenir patrimonio rupestre.
            </p>

            <h2>Archivo fotográfico</h2>
            ${photoSection}

            <div class="success-actions mt-5">
              <a href="${routeHref('/expediciones')}" class="btn btn-outline" data-nav-link>
                Ver expediciones relacionadas ${icons.arrowUpRight()}
              </a>
              <a
                href="${whatsappHref(`Hola COLOMBIA FÓSIL, quisiera mayor información sobre la línea "${exp.title}".`)}"
                target="_blank"
                rel="noreferrer"
                class="btn btn-whatsapp"
              >
                ${icons.whatsapp()} Consultar por WhatsApp
              </a>
            </div>
          </div>

          <dl class="detail-facts">
            <div>
              <dt>Ubicación</dt>
              <dd>${escapeHtml(exp.location)}</dd>
            </div>
            <div>
              <dt>Disciplina</dt>
              <dd>${escapeHtml(exp.discipline)}</dd>
            </div>
            <div>
              <dt>Enfoque discursivo</dt>
              <dd>Adaptable entre explorador general y público científico/académico</dd>
            </div>
            <div>
              <dt>Seguridad</dt>
              <dd>Seguro de vida y asistencia médica en todas las salidas estructuradas</dd>
            </div>
            <div>
              <dt>Permisos</dt>
              <dd>Gestionados con las autoridades ambientales y comunidades anfitrionas</dd>
            </div>
          </dl>
        </div>
      </section>
    `,
  };
}

function renderInstitucionesPage() {
  const cards = institutionCards
    .map(
      (title) => `
      <article class="value-item">
        <h3>${escapeHtml(title)}</h3>
        <p>
          Propuesta estructurada según objetivos pedagógicos o de investigación, nivel académico
          del grupo, permisos comunitarios y bibliografía verificable (SGC, ICANH).
        </p>
      </article>
    `
    )
    .join('');

  return {
    title: 'Instituciones educativas | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Ciencia que se comparte',
        'El territorio como espacio de aprendizaje.',
        'Para colegios, universidades, docentes, investigadores, grupos académicos y organizaciones científicas que buscan conectar conocimiento riguroso y territorio.'
      )}
      <section class="container-shell section">
        <p class="notice">
          Diseñamos salidas académicas con el mismo destino base y rigor logístico, adaptando la
          profundidad técnica de la guianza y las fuentes documentales al programa de cada institución.
        </p>
        <div class="value-grid">
          ${cards}
        </div>
        ${renderWhatsAppCta(
          'Conversemos sobre tu institución o grupo académico',
          'Para mayor información y diseño de presupuesto institucional sin precios estándar públicos, escríbenos por WhatsApp indicando el número estimado de participantes.',
          'Hola COLOMBIA FÓSIL, represento a una institución educativa y quisiera información sobre expediciones académicas.'
        )}
      </section>
    `,
  };
}

function renderNosotrosPage() {
  const teamHtml = teamMembers
    .map(
      (member) => `
      <article class="team-card">
        <div class="team-card-head">
          <span class="team-index">${escapeHtml(member.index)}</span>
          <div>
            <h3>${escapeHtml(member.name)}</h3>
            <p class="team-role">${escapeHtml(member.role)}</p>
          </div>
        </div>
        <ul class="team-facts">
          ${member.facts.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}
        </ul>
        ${
          member.highlightCopy
            ? `<div class="team-highlight">
                 <strong>${escapeHtml(member.highlightTitle)}</strong>
                 <p>${escapeHtml(member.highlightCopy)}</p>
               </div>`
            : ''
        }
      </article>
    `
    )
    .join('');

  return {
    title: 'Quiénes somos | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Quiénes somos',
        'Explorar para comprender.',
        'Operamos expediciones auténticas de turismo geoarqueológico y comunitario en Colombia, uniendo conocimiento científico verificable y gobernanza territorial.'
      )}
      <section class="container-shell section">
        <div class="section-intro">
          <div>
            <h2>Nuestra misión</h2>
            <p class="section-copy">
              Acercar a exploradores y públicos científicos al patrimonio natural, geológico,
              paleontológico y rupestre colombiano mediante expediciones responsables que fortalecen
              directamente a las comunidades anfitrionas.
            </p>
          </div>
          <div>
            <h2>Nuestra visión</h2>
            <p class="section-copy">
              Consolidar en Colombia un modelo de turismo geoarqueológico donde el respaldo
              científico, la conservación no extractiva y los ingresos directos a las comunidades
              locales sean inseparables.
            </p>
          </div>
        </div>

        <div class="value-grid">
          <article class="value-item">
            <h3>Rigor científico y doble discurso</h3>
            <p>
              Adaptamos la narrativa entre divulgación cercana para viajeros exploradores y análisis
              técnico respaldado en SGC e ICANH para grupos académicos.
            </p>
          </article>
          <article class="value-item">
            <h3>Gobernanza comunitaria</h3>
            <p>
              Los permisos, lanchas, guías locales designados por la comunidad y alimentación en selva
              generan beneficio directo en el territorio, junto a aportes escolares en zonas remotas.
            </p>
          </article>
          <article class="value-item">
            <h3>Seguridad y conservación</h3>
            <p>
              Evaluación técnica previa, seguro médico en todas las salidas y respeto estricto por la
              integridad de fósiles y arte rupestre.
            </p>
          </article>
        </div>

        <div class="team-section">
          <div class="team-header-grid">
            <div>
              <div class="eyebrow text-primary">Equipo</div>
              <h2>Quiénes exploran contigo</h2>
              <p class="section-copy">
                Un equipo interdisciplinario que une geología de campo, seguridad ocupacional,
                guianza patrimonial y tecnología aplicada a la divulgación científica.
              </p>
            </div>
            <figure class="detail-photo team-banner-photo">
              <img
                src="${assetUrl('/assets/chicamocha-canon.jpg')}"
                alt="Cañón del Chicamocha y ecosistema xerofítico en Santander, Colombia"
              />
              <figcaption>
                Cañón del Chicamocha · Vigías del Patrimonio Geoarqueológico.
                <a
                  href="https://commons.wikimedia.org/wiki/File:WLE2026_CO_-_Ecosistema_xerof%C3%ADtico_del_Ca%C3%B1%C3%B3n_del_Chicamocha_(28).jpg"
                  target="_blank"
                  rel="noreferrer"
                  class="text-link"
                >Jedidiahhorne · CC BY-SA 4.0 ${icons.arrowUpRight()}</a>
              </figcaption>
            </figure>
          </div>
          <div class="team-grid">
            ${teamHtml}
          </div>
        </div>
      </section>
    `,
  };
}

function renderDestinosPage() {
  const destCards = destinations.map(renderDestinationCard).join('');
  return {
    title: 'Destinos geoarqueológicos | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Una geografía de preguntas',
        'Territorios por comprender',
        'Vaupés (Escudo Guayanés), Guaviare (Serranía de La Lindosa) y territorios paleontológicos y desérticos de Colombia.'
      )}
      <section class="container-shell section">
        <div class="card-grid">
          ${destCards}
        </div>
      </section>
    `,
  };
}

function renderDestinoDetailPage(slug) {
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return renderNotFoundPage();

  const linkedExp = expeditions.find((e) => e.slug === dest.expeditionSlug);

  const photoBlock = dest.detailImage
    ? `<figure class="detail-photo">
         <img src="${escapeHtml(assetUrl(dest.detailImage))}" alt="${escapeHtml(dest.detailImageAlt)}" />
         <figcaption>
           ${escapeHtml(dest.detailImageCaption)}
           ${
             dest.detailImageSourceUrl
               ? ` <a href="${escapeHtml(dest.detailImageSourceUrl)}" target="_blank" rel="noreferrer" class="text-link">
                     Wikimedia Commons ${icons.arrowUpRight()}
                   </a>`
               : ''
           }
         </figcaption>
       </figure>`
    : `<p>${escapeHtml(dest.photoNote)}</p>`;

  return {
    title: `${dest.title} | COLOMBIA FÓSIL`,
    html: `
      ${renderPageBanner(dest.bannerEyebrow, dest.title, dest.summary)}
      <section class="container-shell section">
        <p class="notice">
          Todas las visitas a este territorio operan bajo protocolos de conservación, evaluación de
          riesgos y participación comunitaria. No se publican coordenadas sensibles de sitios
          fosilíferos ni rupestres.
        </p>

        <div class="detail-layout">
          <div>
            <h2>${escapeHtml(dest.contextTitle)}</h2>
            <p>${escapeHtml(dest.contextCopy)}</p>
            <p>
              <a
                href="${escapeHtml(dest.contextLinkUrl)}"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                ${escapeHtml(dest.contextLinkLabel)} ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Puntos de interés y líneas de lectura</h2>
            <ul>
              ${dest.researchLines.map((line) => `<li>${escapeHtml(line)}</li>`).join('')}
            </ul>

            <h2>Consideraciones ambientales y culturales</h2>
            <p>
              Las propuestas requieren participación y consentimiento de las comunidades anfitrionas,
              guianza local autorizada, seguro de actividades y cumplimiento estricto de no
              extracción ni alteración del patrimonio.
            </p>

            <div class="success-actions mt-5">
              ${
                linkedExp
                  ? `<a href="${routeHref(`/expediciones/${linkedExp.slug}`)}" class="btn btn-primary" data-nav-link>
                      Ver ficha de expedición (${escapeHtml(linkedExp.durationShort)}) ${icons.arrowUpRight()}
                    </a>`
                  : ''
              }
              <a
                href="${whatsappHref(`Hola COLOMBIA FÓSIL, quisiera mayor información sobre expediciones en ${dest.title}.`)}"
                target="_blank"
                rel="noreferrer"
                class="btn btn-whatsapp"
              >
                ${icons.whatsapp()} Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div class="detail-facts">
              <div>
                <dt>Referencia territorial</dt>
                <dd>
                  <p>
                    Consulta la cartografía pública del IGAC. Esta referencia general no sustituye la
                    guianza local autorizada ni publica rutas sensibles.
                  </p>
                  <a
                    href="https://www.colombiaenmapas.gov.co/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link mt-4"
                  >
                    Colombia en Mapas · IGAC ${icons.arrowUpRight()}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Archivo fotográfico</dt>
                <dd>${photoBlock}</dd>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}

function renderFosilesPage() {
  const periods = [...new Set(fossilsCatalog.map((f) => f.period))];
  const locations = [...new Set(fossilsCatalog.map((f) => f.location))];
  const types = [...new Set(fossilsCatalog.map((f) => f.type))];

  const filtered = fossilsCatalog.filter((f) => {
    if (state.fossilFilters.period && f.period !== state.fossilFilters.period) return false;
    if (state.fossilFilters.location && f.location !== state.fossilFilters.location) return false;
    if (state.fossilFilters.type && f.type !== state.fossilFilters.type) return false;
    return true;
  });

  const hasActiveFilter = Boolean(
    state.fossilFilters.period || state.fossilFilters.location || state.fossilFilters.type
  );

  const countText =
    filtered.length === 1
      ? '1 registro documental'
      : `${filtered.length} registros documentales`;

  const cardsHtml = filtered
    .map(
      (item) => `
      <article class="fossil-card">
        <img src="${escapeHtml(assetUrl(item.image))}" alt="${escapeHtml(item.imageAlt)}" />
        <p class="fossil-credit">${escapeHtml(item.credit)}</p>
        <h2>${escapeHtml(item.title)}</h2>
        <dl class="fossil-meta">
          <div>
            <dt>Período</dt>
            <dd>${escapeHtml(item.period)}</dd>
          </div>
          <div>
            <dt>Ubicación</dt>
            <dd>${escapeHtml(item.location)}</dd>
          </div>
          <div>
            <dt>Tipo</dt>
            <dd>${escapeHtml(item.type)}</dd>
          </div>
        </dl>
        <p class="fossil-desc">${escapeHtml(item.description)}</p>
        <div class="fossil-links">
          <a
            href="${escapeHtml(item.photoSourceUrl)}"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >
            Fuente fotográfica ${icons.arrowUpRight()}
          </a>
          <a
            href="${escapeHtml(item.geoContextUrl)}"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >
            Contexto geológico ${icons.arrowUpRight()}
          </a>
        </div>
      </article>
    `
    )
    .join('');

  return {
    title: 'Catálogo de fósiles | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Archivo paleontológico',
        'Catálogo de fósiles',
        'Fotografías y registros publicados con fuentes identificadas. Un archivo para comprender el patrimonio, nunca para comprar ni recolectar fósiles.'
      )}
      <section class="container-shell section">
        <div class="fossil-filters" role="region" aria-label="Filtros del catálogo">
          <label class="fossil-filter-field">
            <span>Período geológico</span>
            <select id="filter-period">
              <option value="">Todos los períodos</option>
              ${periods
                .map(
                  (p) =>
                    `<option value="${escapeHtml(p)}" ${
                      state.fossilFilters.period === p ? 'selected' : ''
                    }>${escapeHtml(p)}</option>`
                )
                .join('')}
            </select>
          </label>

          <label class="fossil-filter-field">
            <span>Ubicación</span>
            <select id="filter-location">
              <option value="">Todas las ubicaciones</option>
              ${locations
                .map(
                  (loc) =>
                    `<option value="${escapeHtml(loc)}" ${
                      state.fossilFilters.location === loc ? 'selected' : ''
                    }>${escapeHtml(loc)}</option>`
                )
                .join('')}
            </select>
          </label>

          <label class="fossil-filter-field">
            <span>Tipo de fósil</span>
            <select id="filter-type">
              <option value="">Todos los tipos</option>
              ${types
                .map(
                  (t) =>
                    `<option value="${escapeHtml(t)}" ${
                      state.fossilFilters.type === t ? 'selected' : ''
                    }>${escapeHtml(t)}</option>`
                )
                .join('')}
            </select>
          </label>
        </div>

        <div class="fossil-status-bar">
          <span role="status" aria-live="polite">${escapeHtml(countText)}</span>
          <button
            type="button"
            class="btn-link-reset"
            id="reset-fossil-filters"
            ${hasActiveFilter ? '' : 'disabled'}
          >
            ${icons.rotateCcw()} Limpiar filtros
          </button>
        </div>

        <div class="fossil-grid">
          ${
            cardsHtml ||
            '<p class="section-copy">No hay registros documentales que coincidan con los filtros seleccionados.</p>'
          }
        </div>
      </section>
    `,
  };
}

function renderInformacionPage() {
  return {
    title: 'Información y conocimiento | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Documentación y divulgación',
        'Información y conocimiento',
        'Un espacio para consultar el registro fósil, conocer el territorio y acceder a fuentes públicas oficiales que respaldan nuestras expediciones.'
      )}
      <section class="container-shell section">
        <div class="grid-2-wide">
          <article class="info-card">
            <img
              src="${assetUrl('/assets/ammonites.webp')}"
              alt="Lámina publicada de ammonites de la Formación Paja"
            />
            <p class="fossil-credit">Pedro Patarroyo · 2009 · CC BY 3.0</p>
            ${icons.layers('info-card-icon')}
            <h2>Catálogo de fósiles</h2>
            <p class="section-copy">
              Registros documentales con período geológico, ubicación, tipo y fuente identificada.
            </p>
            <a href="${routeHref('/fosiles')}" class="btn btn-outline" data-nav-link>
              Explorar el catálogo ${icons.arrowUpRight()}
            </a>
          </article>

          <article class="info-card">
            <img
              src="${assetUrl('/assets/expedicion-el-hatico.webp')}"
              alt="Mediciones científicas de campo en bosque tropical"
            />
            <p class="fossil-credit">Neil Palmer / CIAT · 2011 · CC BY-SA 2.0 (fotografía documental de campo)</p>
            ${icons.bookOpen('info-card-icon')}
            <h2>Ciencia y conocimiento</h2>
            <p class="section-copy">
              Bibliografía y publicaciones oficiales (SGC, ICANH) que respaldan el componente
              científico de nuestras salidas.
            </p>
            <a href="${routeHref('/ciencia')}" class="btn btn-outline" data-nav-link>
              Consultar fuentes ${icons.arrowUpRight()}
            </a>
          </article>
        </div>
      </section>
    `,
  };
}

function renderCienciaPage() {
  const rows = scienceResources
    .map(
      (res) => `
      <a href="${routeHref(`/ciencia/${res.slug}`)}" class="resource" data-nav-link>
        <div class="resource-number">${escapeHtml(res.number)}</div>
        <div>
          <h2>${escapeHtml(res.title)}</h2>
          <p>${escapeHtml(res.summary)}</p>
          <div class="resource-meta">${escapeHtml(res.meta)}</div>
        </div>
        ${icons.arrowUpRight('resource-arrow')}
      </a>
    `
    )
    .join('');

  return {
    title: 'Ciencia y conocimiento | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Biblioteca de exploración',
        'La curiosidad necesita fuentes.',
        'Selección de publicaciones oficiales (SGC e ICANH) que fundamentan el discurso científico de nuestras expediciones geoarqueológicas.'
      )}
      <section class="container-shell section">
        <p class="notice">
          Los recursos enlazados pertenecen a sus entidades y autores oficiales. Para público
          científico o académico, cada expedición se acompaña de estas referencias verificables.
        </p>
        <div>
          ${rows}
        </div>
      </section>
    `,
  };
}

function renderCienciaDetailPage(slug) {
  const res = scienceResources.find((r) => r.slug === slug);
  if (!res) return renderNotFoundPage();

  return {
    title: `${res.title} | COLOMBIA FÓSIL`,
    html: `
      ${renderPageBanner('Fuentes y bibliografía', res.title, res.summary)}
      <section class="container-shell section">
        <div class="detail-layout">
          <div>
            <h2>Consultar la publicación original</h2>
            <p>
              Este registro orienta hacia una fuente externa oficial. Su contenido corresponde a la
              entidad o autores indicados y respalda la divulgación científica responsable de
              COLOMBIA FÓSIL.
            </p>
            <p>
              <a
                href="${escapeHtml(res.externalUrl)}"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Leer la fuente original ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Referencia bibliográfica</h2>
            <p>${escapeHtml(res.reference)}</p>
          </div>

          <dl class="detail-facts">
            <div>
              <dt>Autor o entidad responsable</dt>
              <dd>${escapeHtml(res.author)}</dd>
            </div>
            <div>
              <dt>Fecha de la fuente</dt>
              <dd>${escapeHtml(res.date)}</dd>
            </div>
            <div>
              <dt>Verificación editorial</dt>
              <dd>Fuente oficial identificada; recurso externo, no artículo propio.</dd>
            </div>
            <div>
              <dt>Fotografías</dt>
              <dd>No se reproducen imágenes de la publicación.</dd>
            </div>
          </dl>
        </div>
      </section>
    `,
  };
}

function renderContactoPage() {
  return {
    title: 'Contacto | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Iniciemos una conversación',
        '¿Qué te gustaría comprender?',
        'Escríbenos directamente por WhatsApp o prepara tu consulta aquí. Las cotizaciones se elaboran de forma privada según tamaño de grupo, logística aérea o terrestre y permisos comunitarios.'
      )}
      <section class="container-shell section contact-layout">
        <div>
          <h2>Cada exploración comienza con una pregunta.</h2>
          <p class="section-copy">
            Atendemos consultas de exploradores generales, grupos familiares, colegios,
            universidades e investigadores interesados en nuestras expediciones geoarqueológicas.
          </p>
          <p class="section-copy mt-5">
            Por transparencia y respeto al territorio, no publicamos tarifas estándar en línea.
            Escríbenos por WhatsApp para recibir una propuesta detallada.
          </p>
          <div class="mt-6">
            <a
              href="${whatsappHref('Hola COLOMBIA FÓSIL, quisiera mayor información y cotización personalizada.')}"
              target="_blank"
              rel="noreferrer"
              class="btn btn-whatsapp"
            >
              ${icons.whatsapp()} WhatsApp ${WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
        <div class="contact-card-surface">
          ${renderContactForm('page-contact-form')}
        </div>
      </section>
    `,
  };
}

function renderPrivacidadPage() {
  return {
    title: 'Privacidad y créditos | COLOMBIA FÓSIL',
    html: `
      ${renderPageBanner(
        'Transparencia',
        'Privacidad y créditos',
        'Información sobre los datos enviados y las imágenes utilizadas en este sitio.'
      )}
      <section class="container-shell section">
        <div class="detail-layout">
          <div>
            <h2>Datos de contacto</h2>
            <p>
              El formulario prepara tu consulta (nombre, correo, institución opcional, tipo de
              consulta, destino, participantes opcionales y mensaje) para enviarla directamente por
              nuestro canal oficial de WhatsApp. No se almacenan bases públicas ni se envían correos
              automáticos desde el sitio.
            </p>
            <p>
              No envíes datos sensibles ni información de menores de edad. Puedes solicitar
              eliminación o corrección de cualquier consulta directamente a través del canal oficial.
            </p>
            <p class="notice mt-6">
              Política comercial y comunitaria: las tarifas internas de operación no se publican en
              la web y se calculan de forma personalizada respetando los acuerdos de gobernanza local.
            </p>
          </div>

          <div>
            <h2>Fotografía de portada</h2>
            <p>
              Imagen aportada por el titular para la portada. Autoría y condiciones de uso pendientes
              de confirmación. Sin identificación taxonómica, período ni procedencia atribuidos; no
              constituye una ficha científica.
            </p>

            <h2>Fotografía de trabajo científico en campo</h2>
            <p>
              Salida de campo para mediciones de carbono en bosque tropical, en el marco de un taller
              sobre REDD+ organizado por el CIAT. Mayo de 2011. Fotografía documental; no corresponde a
              una actividad de COLOMBIA FÓSIL.
            </p>
            <p>Neil Palmer / CIAT · CC BY-SA 2.0. Imagen optimizada y recortada para presentación.</p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:NP_REDD_Workshop12_(5739799829).jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original ${icons.arrowUpRight()}
              </a>
            </p>
            <p>
              <a
                href="https://creativecommons.org/licenses/by-sa/2.0/"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Licencia Creative Commons ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía del Valle de Cocora</h2>
            <p>
              Bernard Gagnon · 2020 · CC BY-SA 4.0. Imagen optimizada y recortada para presentación. No
              representa una expedición ofrecida.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_06.jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía de ammonites</h2>
            <p>
              Pedro Patarroyo, 2009 · Boletín de Geología · CC BY 3.0. Formación Paja. Imagen
              optimizada; no identifica un itinerario comercial.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Paja_Formation_-_Ammonites.jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía del Raudal del Jirijirimó (Vaupés)</h2>
            <p>
              Raudal del Jirijirimó, Reserva Yaigojé Apaporis. Jucatili25 · CC BY-SA 4.0.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Raudal_del_Jirijirimo-_Reserva_Yaigoj%C3%A9_Apaporis.jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia (Wikimedia Commons) ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía de la Serranía de La Lindosa (Guaviare)</h2>
            <p>
              Serranía de La Lindosa, San José del Guaviare. Julianruizp · CC BY-SA 4.0.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:La_lindosa.jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia (Wikimedia Commons) ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía del Desierto de la Tatacoa</h2>
            <p>
              Formaciones erosionadas del Desierto de la Tatacoa, Huila. Ricardo Gonzalez Arango · CC BY-SA 4.0.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Tatacoa_Desert.jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia (Wikimedia Commons) ${icons.arrowUpRight()}
              </a>
            </p>

            <h2>Fotografía del Cañón del Chicamocha</h2>
            <p>
              Ecosistema xerofítico del Cañón del Chicamocha, Santander. Jedidiahhorne · CC BY-SA 4.0.
            </p>
            <p>
              <a
                href="https://commons.wikimedia.org/wiki/File:WLE2026_CO_-_Ecosistema_xerof%C3%ADtico_del_Ca%C3%B1%C3%B3n_del_Chicamocha_(28).jpg"
                target="_blank"
                rel="noreferrer"
                class="text-link"
              >
                Archivo original y licencia (Wikimedia Commons) ${icons.arrowUpRight()}
              </a>
            </p>
          </div>
        </div>
      </section>
    `,
  };
}

function renderNotFoundPage() {
  return {
    title: '404 | COLOMBIA FÓSIL',
    html: `
      <section class="container-shell section">
        <div class="eyebrow text-primary">404</div>
        <h2>Página no encontrada</h2>
        <p class="section-copy">La página que buscas no existe o fue movida.</p>
        <a href="${routeHref('/')}" class="btn btn-primary mt-6" data-nav-link>
          Volver al inicio ${icons.arrowUpRight()}
        </a>
      </section>
    `,
  };
}

function resolvePage(pathname, search) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (clean === '/') return renderHomePage();
  if (clean === '/expediciones') return renderExpedicionesPage();
  if (clean.startsWith('/expediciones/')) {
    return renderExpedicionDetailPage(clean.slice('/expediciones/'.length));
  }
  if (clean === '/servicios') return renderServiciosPage();
  if (clean === '/experiencias') return renderExperienciasPage();
  if (clean.startsWith('/experiencias/')) {
    return renderExperienciaDetailPage(clean.slice('/experiencias/'.length));
  }
  if (clean === '/instituciones') return renderInstitucionesPage();
  if (clean === '/nosotros') return renderNosotrosPage();
  if (clean === '/destinos') return renderDestinosPage();
  if (clean.startsWith('/destinos/')) {
    return renderDestinoDetailPage(clean.slice('/destinos/'.length));
  }
  if (clean === '/fosiles') {
    syncFossilFiltersFromUrl(search);
    return renderFosilesPage();
  }
  if (clean === '/informacion') return renderInformacionPage();
  if (clean === '/ciencia') return renderCienciaPage();
  if (clean.startsWith('/ciencia/')) {
    return renderCienciaDetailPage(clean.slice('/ciencia/'.length));
  }
  if (clean === '/contacto') return renderContactoPage();
  if (clean === '/privacidad') return renderPrivacidadPage();
  return renderNotFoundPage();
}

function attachPageHandlers(appRoot) {
  const toggleBtn = appRoot.querySelector('#mobile-menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      render(false);
    });
  }

  appRoot.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === '_blank'
      ) {
        return;
      }
      event.preventDefault();
      const targetPath = href.startsWith('#') ? href.slice(1) : href;
      navigate(targetPath, true);
    });
  });

  appRoot.querySelectorAll('[data-scroll-anchor]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute('data-scroll-anchor');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  appRoot.querySelectorAll('[data-audience-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.audienceMode = btn.getAttribute('data-audience-mode') || 'explorer';
      render(false);
    });
  });

  appRoot.querySelectorAll('[data-expedition-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeExpeditionCategory =
        btn.getAttribute('data-expedition-cat') || 'Todas';
      render(false);
    });
  });

  appRoot.querySelectorAll('[data-exp-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeExperienceFilter = btn.getAttribute('data-exp-filter') || 'Todas';
      render(false);
    });
  });

  const periodSel = appRoot.querySelector('#filter-period');
  const locationSel = appRoot.querySelector('#filter-location');
  const typeSel = appRoot.querySelector('#filter-type');
  const resetFossilsBtn = appRoot.querySelector('#reset-fossil-filters');

  if (periodSel) {
    periodSel.addEventListener('change', () => {
      state.fossilFilters.period = periodSel.value;
      updateFossilQueryParams();
      render(false);
    });
  }
  if (locationSel) {
    locationSel.addEventListener('change', () => {
      state.fossilFilters.location = locationSel.value;
      updateFossilQueryParams();
      render(false);
    });
  }
  if (typeSel) {
    typeSel.addEventListener('change', () => {
      state.fossilFilters.type = typeSel.value;
      updateFossilQueryParams();
      render(false);
    });
  }
  if (resetFossilsBtn) {
    resetFossilsBtn.addEventListener('click', () => {
      state.fossilFilters = { period: '', location: '', type: '' };
      updateFossilQueryParams();
      render(false);
    });
  }

  attachContactFormHandlers(appRoot);
}

function render(scrollTop = false, moveFocus = false) {
  const { pathname, search } = getCurrentRoute();
  const page = resolvePage(pathname, search);
  document.title = page.title;

  const appRoot = document.getElementById('app');
  appRoot.innerHTML = `
    ${renderHeader(pathname, state.mobileMenuOpen)}
    <main id="main-content" tabindex="-1">${page.html}</main>
    ${renderFooter()}
  `;

  attachPageHandlers(appRoot);

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  if (moveFocus) {
    const mainEl = document.getElementById('main-content');
    if (mainEl) mainEl.focus({ preventScroll: true });
  }
}

window.addEventListener('popstate', () => {
  state.mobileMenuOpen = false;
  render(false, true);
});

window.addEventListener('hashchange', () => {
  if (window.location.protocol === 'file:') {
    state.mobileMenuOpen = false;
    render(false, true);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760 && state.mobileMenuOpen) {
    state.mobileMenuOpen = false;
    render(false);
  }
});

render(false);
