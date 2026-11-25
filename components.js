import { brandMarkSvg, icons, topoArtwork } from './icons.js';
import { navItems, footerLinks, WHATSAPP_DISPLAY, WHATSAPP_URL } from './data.js';

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const BASE_PATH =
  window.location.hostname === 'jmtechquindio.github.io' &&
  window.location.pathname.startsWith('/colombia-fosil-web')
    ? '/colombia-fosil-web'
    : '';

export function assetUrl(path) {
  if (!path) return path;
  if (window.location.protocol === 'file:') {
    return path.startsWith('/') ? `.${path}` : path;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export function routeHref(path) {
  if (window.location.protocol === 'file:') {
    return `#${path}`;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export function whatsappHref(message = '') {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function isNavActive(currentPath, itemPath) {
  if (itemPath === '/') return currentPath === '/';
  if (itemPath === '/servicios') {
    return (
      currentPath === '/servicios' ||
      currentPath.startsWith('/experiencias') ||
      currentPath === '/instituciones'
    );
  }
  if (itemPath === '/informacion') {
    return currentPath === '/informacion' || currentPath.startsWith('/ciencia');
  }
  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}

export function renderHeader(currentPath, mobileMenuOpen) {
  const navLinksHtml = navItems
    .map((item) => {
      const active = isNavActive(currentPath, item.path);
      return `<a href="${routeHref(item.path)}" class="nav-link" data-nav-link ${
        active ? 'data-status="active" aria-current="page"' : ''
      }>${escapeHtml(item.label)}</a>`;
    })
    .join('');

  const mobileLinksHtml = [
    ...navItems,
    { label: 'Contacto', path: '/contacto' },
  ]
    .map((item) => {
      const active =
        item.path === '/contacto'
          ? currentPath === '/contacto'
          : isNavActive(currentPath, item.path);
      return `<a href="${routeHref(item.path)}" class="nav-link" data-nav-link ${
        active ? 'data-status="active" aria-current="page"' : ''
      }>${escapeHtml(item.label)}</a>`;
    })
    .join('');

  return `
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
    <header class="site-header">
      <div class="container-shell header-inner">
        <a href="${routeHref('/')}" class="brand" data-nav-link>
          ${brandMarkSvg}
          <div>
            <div class="brand-name">COLOMBIA FÓSIL</div>
            <div class="brand-tagline">EXPLORAR PARA COMPRENDER</div>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${navLinksHtml}
        </nav>

        <a
          href="${whatsappHref('Hola COLOMBIA FÓSIL, quisiera mayor información sobre sus expediciones geoarqueológicas.')}"
          target="_blank"
          rel="noreferrer"
          class="btn btn-outline header-contact"
        >
          ${icons.whatsapp()} WhatsApp
        </a>

        <button
          type="button"
          class="mobile-menu-button"
          id="mobile-menu-toggle"
          aria-expanded="${mobileMenuOpen ? 'true' : 'false'}"
          aria-label="${mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}"
        >
          ${mobileMenuOpen ? icons.x() : icons.menu()}
        </button>
      </div>
      ${
        mobileMenuOpen
          ? `<nav class="mobile-nav" aria-label="Navegación móvil">${mobileLinksHtml}
              <a
                href="${whatsappHref('Hola COLOMBIA FÓSIL, quisiera mayor información sobre sus expediciones geoarqueológicas.')}"
                target="_blank"
                rel="noreferrer"
                class="btn btn-whatsapp mt-4"
              >
                ${icons.whatsapp()} Escribir por WhatsApp (${WHATSAPP_DISPLAY})
              </a>
            </nav>`
          : ''
      }
    </header>
  `;
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container-shell">
        <div class="footer-grid">
          <div class="footer-brand-col">
            <a href="${routeHref('/')}" class="brand" data-nav-link>
              ${brandMarkSvg}
              <div>
                <div class="brand-name">COLOMBIA FÓSIL</div>
                <div class="brand-tagline">Explorar para comprender</div>
              </div>
            </a>
            <p class="footer-manifesto">
              Turismo geoarqueológico, divulgación científica verificable y gobernanza comunitaria
              en territorios naturales y culturales de Colombia.
            </p>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Explorar</div>
            <div class="footer-col-links">
              <a href="${routeHref('/expediciones')}" data-nav-link>Expediciones</a>
              <a href="${routeHref('/servicios')}" data-nav-link>Servicios y propuestas</a>
              <a href="${routeHref('/destinos')}" data-nav-link>Destinos</a>
              <a href="${routeHref('/fosiles')}" data-nav-link>Catálogo de fósiles</a>
            </div>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Proyecto y contacto</div>
            <div class="footer-col-links">
              <a href="${routeHref('/nosotros')}" data-nav-link>Quiénes somos</a>
              <a href="${routeHref('/ciencia')}" data-nav-link>Ciencia y conocimiento</a>
              <a href="${routeHref('/privacidad')}" data-nav-link>Privacidad y créditos</a>
              <a
                href="${whatsappHref('Hola COLOMBIA FÓSIL, solicito mayor información.')}"
                target="_blank"
                rel="noreferrer"
                class="footer-wa-link"
              >
                ${icons.whatsapp()} WhatsApp ${WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 COLOMBIA FÓSIL · Explorar para comprender.</span>
          <span>Ciencia, territorio y conservación. Hecho en Colombia.</span>
        </div>
      </div>
    </footer>
  `;
}

export function renderPageBanner(eyebrow, title, subtitle) {
  return `
    <section class="page-banner">
      <div class="container-shell">
        <div class="eyebrow text-primary">${escapeHtml(eyebrow)}</div>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(subtitle)}</p>
      </div>
    </section>
  `;
}

export function renderAudienceBar(audienceMode) {
  return `
    <div class="audience-bar" role="region" aria-label="Enfoque de lectura">
      <div class="audience-bar-label">
        <strong>Modo de lectura</strong>
        <span>Mismo territorio y logística; elige la profundidad del relato.</span>
      </div>
      <div class="audience-switch" role="group" aria-label="Seleccionar perfil de lector">
        <button
          type="button"
          class="audience-btn"
          data-audience-mode="explorer"
          aria-pressed="${audienceMode === 'explorer' ? 'true' : 'false'}"
        >
          Turista General / Explorador
        </button>
        <button
          type="button"
          class="audience-btn"
          data-audience-mode="academic"
          aria-pressed="${audienceMode === 'academic' ? 'true' : 'false'}"
        >
          Público Científico / Académico
        </button>
      </div>
    </div>
  `;
}

export function renderExpeditionCard(exp, audienceMode = 'explorer') {
  const isCatB = exp.category.startsWith('Categoría B');
  const content = audienceMode === 'academic' ? exp.academic : exp.explorer;
  const topo = topoArtwork[exp.topoKey] || topoArtwork.desierto;

  return `
    <a
      href="${routeHref(`/expediciones/${exp.slug}`)}"
      class="expedition-card ${isCatB ? 'cat-b' : ''}"
      data-nav-link
    >
      <div class="expedition-visual">
        ${topo}
        <span class="expedition-cat-tag">${escapeHtml(exp.categoryShort)}</span>
      </div>
      <div class="card-label">${escapeHtml(exp.cardLabel)}</div>
      <h3>${escapeHtml(exp.title)}</h3>
      <p>${escapeHtml(content.summary)}</p>
      <dl class="expedition-specs">
        <div>
          <dt>Duración</dt>
          <dd>${escapeHtml(exp.durationShort)}</dd>
        </div>
        <div>
          <dt>Logística</dt>
          <dd>${escapeHtml(exp.transportShort)}</dd>
        </div>
        <div>
          <dt>Territorio</dt>
          <dd>${escapeHtml(exp.ecosystemShort)}</dd>
        </div>
      </dl>
      <div class="expedition-card-footer">
        <span class="text-link">Ver ficha completa ${icons.arrowUpRight()}</span>
      </div>
    </a>
  `;
}

export function renderWhatsAppCta(
  heading = 'Para mayor información y cotización personalizada',
  body = 'No publicamos tarifas estándar en línea porque cada salida se ajusta al tamaño del grupo, permisos comunitarios y logística aérea o terrestre. Escríbenos directamente para estructurar tu expedición.',
  prefillMessage = 'Hola COLOMBIA FÓSIL, quisiera mayor información sobre sus expediciones geoarqueológicas.'
) {
  return `
    <aside class="whatsapp-cta-box" aria-label="Contacto directo por WhatsApp">
      <div>
        <h3>${escapeHtml(heading)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
      <a
        href="${whatsappHref(prefillMessage)}"
        target="_blank"
        rel="noreferrer"
        class="btn btn-whatsapp"
      >
        ${icons.whatsapp()} WhatsApp ${WHATSAPP_DISPLAY}
      </a>
    </aside>
  `;
}

export function renderDestinationCard(dest) {
  const topo = dest.topoKey ? topoArtwork[dest.topoKey] : '';
  const visual = dest.image
    ? `<img src="${escapeHtml(assetUrl(dest.image))}" alt="${escapeHtml(dest.imageAlt)}" />`
    : `<div class="territory-placeholder">
         ${topo || icons[dest.icon]()}
         <span>CARTOGRAFÍA VISUAL · EN DOCUMENTACIÓN</span>
       </div>`;

  return `
    <a href="${routeHref(`/destinos/${dest.slug}`)}" class="destination-card" data-nav-link>
      <div class="card-photo ${dest.image ? 'is-specimen-plate' : ''}">${visual}</div>
      <div class="card-label">${escapeHtml(dest.label)}</div>
      <div class="destination-card-title-row">
        <h3>${escapeHtml(dest.title)}</h3>
        ${icons.arrowUpRight()}
      </div>
      <p>${escapeHtml(dest.summary)}</p>
      <span class="status">${escapeHtml(dest.status)}</span>
    </a>
  `;
}

export function renderContactForm(formId = 'contact-form') {
  return `
    <div data-contact-wrapper="${formId}">
      <form id="${formId}" novalidate>
        <div class="form-grid">
          <label class="field">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              required
              minlength="2"
              maxlength="120"
              autocomplete="name"
            />
          </label>

          <label class="field">
            <span>Correo electrónico</span>
            <input
              type="email"
              name="email"
              required
              maxlength="254"
              autocomplete="email"
            />
          </label>

          <label class="field full-width">
            <span>
              Institución
              <span class="optional-note">(opcional)</span>
            </span>
            <input
              type="text"
              name="institution"
              maxlength="200"
              autocomplete="organization"
            />
          </label>

          <label class="field">
            <span>Tipo de consulta</span>
            <select name="inquiry_type">
              <option value="Información general">Información general</option>
              <option value="Expedición geoarqueológica">Expedición geoarqueológica</option>
              <option value="Instituciones educativas">Instituciones educativas</option>
              <option value="Colaboración científica">Colaboración científica</option>
            </select>
          </label>

          <label class="field">
            <span>Destino o plan de interés</span>
            <select name="destination">
              <option value="Por definir">Por definir</option>
              <option value="Trekking Georupestre del Desierto (3 días)">Trekking Georupestre del Desierto (3 días)</option>
              <option value="Trekking Georupestre a la Guyana / Vaupés (7 días)">Trekking Georupestre a la Guyana / Vaupés (7 días)</option>
              <option value="Trekking Georupestre Guaviare (4 días)">Trekking Georupestre Guaviare (4 días)</option>
              <option value="Territorios paleontológicos">Territorios paleontológicos</option>
            </select>
          </label>

          <label class="field full-width">
            <span>Número de participantes (opcional)</span>
            <input type="number" name="participants" min="1" max="10000" />
          </label>

          <label class="field full-width">
            <span>Mensaje</span>
            <textarea
              name="message"
              required
              minlength="10"
              maxlength="4000"
            ></textarea>
          </label>
        </div>

        <label class="spam-trap" aria-hidden="true">
          Sitio web
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </label>

        <label class="consent">
          <input type="checkbox" name="consent" required />
          <span>
            Autorizo el uso de estos datos para gestionar mi consulta según la
            <a href="${routeHref('/privacidad')}" data-nav-link>información de privacidad</a>.
          </span>
        </label>

        <p class="form-error" role="alert" hidden></p>

        <div class="success-actions">
          <button type="submit" class="btn btn-primary" data-submit-btn>
            Enviar consulta ${icons.arrowUpRight()}
          </button>
          <a
            href="${whatsappHref('Hola COLOMBIA FÓSIL, quisiera mayor información sobre sus expediciones.')}"
            target="_blank"
            rel="noreferrer"
            class="btn btn-outline btn-wa-outline"
          >
            ${icons.whatsapp()} Escribir directo por WhatsApp
          </a>
        </div>
      </form>
    </div>
  `;
}

export function attachContactFormHandlers(root) {
  root.querySelectorAll('form[id]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const wrapper = form.closest('[data-contact-wrapper]');
      const errorEl = form.querySelector('.form-error');
      const submitBtn = form.querySelector('[data-submit-btn]');

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const institution = String(data.get('institution') || '').trim();
      const inquiryType = String(data.get('inquiry_type') || '').trim();
      const destination = String(data.get('destination') || '').trim();
      const participants = String(data.get('participants') || '').trim();
      const message = String(data.get('message') || '').trim();
      const website = String(data.get('website') || '').trim();
      const consent = data.get('consent') === 'on';

      if (website) {
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (name.length < 2 || !emailValid || message.length < 10 || !consent) {
        errorEl.textContent =
          'Revisa los datos y autoriza el tratamiento de tu consulta. El mensaje debe tener al menos 10 caracteres.';
        errorEl.hidden = false;
        return;
      }

      errorEl.hidden = true;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `${icons.loaderCircle('spin')} Preparando consulta…`;

      const waMessage = [
        `Hola COLOMBIA FÓSIL, soy ${name}.`,
        institution ? `Institución: ${institution}.` : '',
        `Tipo de consulta: ${inquiryType}.`,
        `Interés: ${destination}.`,
        participants ? `Participantes estimados: ${participants}.` : '',
        `Correo: ${email}.`,
        `Mensaje: ${message}`,
      ]
        .filter(Boolean)
        .join(' ');

      window.setTimeout(() => {
        const formId = form.id;
        wrapper.innerHTML = `
          <div class="success-panel" role="status">
            ${icons.circleCheck('success-panel-icon')}
            <h2>Consulta preparada</h2>
            <p>
              Tu mensaje quedó validado. Para atención directa sin intermediarios y cotización
              personalizada según tamaño de grupo y logística, envíalo ahora por nuestro canal
              oficial de WhatsApp (${WHATSAPP_DISPLAY}).
            </p>
            <div class="success-actions">
              <a
                href="${whatsappHref(waMessage)}"
                target="_blank"
                rel="noreferrer"
                class="btn btn-whatsapp"
              >
                ${icons.whatsapp()} Enviar por WhatsApp (${WHATSAPP_DISPLAY})
              </a>
              <button type="button" class="btn btn-outline" data-reset-form="${formId}">
                Editar o hacer otra consulta ${icons.arrowUpRight()}
              </button>
            </div>
          </div>
        `;
        const resetBtn = wrapper.querySelector('[data-reset-form]');
        resetBtn.addEventListener('click', () => {
          wrapper.outerHTML = renderContactForm(formId);
          attachContactFormHandlers(root);
        });
      }, 250);
    });
  });
}
