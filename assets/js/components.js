const path = location.pathname.split("/").pop() || "index.html";
const pages = [
  ["index.html", "nav_home"], ["menu.html", "nav_menu"], ["poveste.html", "nav_story"], ["contact.html", "nav_contact"]
];

document.querySelector("[data-site-header]").innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="index.html" aria-label="Sunset Cafe — pagina principală" data-i18n-aria-label="home_label">
        <span class="brand-mark" aria-hidden="true"><img class="brand-logo" src="assets/images/sunset-logo.png" width="300" height="300" alt=""></span>
        <span class="brand-copy"><strong>SUNSET</strong><small>Cafe · Ialoveni</small></span>
      </a>
      <nav id="main-navigation" class="main-nav" aria-label="Navigare principală" data-i18n-aria-label="nav_label">
        ${pages.map(([href, key]) => `<a href="${href}" data-i18n="${key}" ${path === href ? 'aria-current="page"' : ""}></a>`).join("")}
      </nav>
      <div class="nav-actions">
        <label class="sr-only" for="lang-select" data-i18n="lang_label">Alege limba</label>
        <select id="lang-select" class="lang-select" aria-label="Alege limba" data-i18n-aria-label="lang_label">
          <option value="ro">RO</option><option value="en">EN</option><option value="ru">RU</option>
        </select>
        <a class="button button-light" href="contact.html#formular" data-i18n="reserve">Rezervă o masă</a>
        <button class="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded="false" aria-label="Deschide meniul de navigare" data-i18n-aria-label="menu_toggle_label">
          <span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>`;

document.querySelector("[data-site-footer]").innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" aria-label="Sunset Cafe — pagina principală" data-i18n-aria-label="home_label">
            <span class="brand-mark" aria-hidden="true"><img class="brand-logo" src="assets/images/sunset-logo.png" width="300" height="300" alt=""></span>
            <span class="brand-copy"><strong>SUNSET</strong><small>Cafe · Ialoveni</small></span>
          </a>
          <p data-i18n="footer_note">Cafea, mic dejun și timp bun petrecut împreună.</p>
        </div>
        <div>
          <p class="footer-title" data-i18n="footer_explore">Explorează</p>
          <div class="footer-links">${pages.map(([href, key]) => `<a href="${href}" data-i18n="${key}"></a>`).join("")}</div>
        </div>
        <div>
          <p class="footer-title" data-i18n="footer_visit">Vizitează-ne</p>
          <div class="footer-links">
            <a href="https://maps.app.goo.gl/7vemvwqDy1JJf23Y6" target="_blank" rel="noopener">Bd. Alexandru cel Bun 57</a>
            <a href="tel:+37361144412">+373 611 44 412</a>
            <span data-i18n="footer_hours">Luni–Duminică · 07:30–21:00</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><span>© <span data-current-year></span> Sunset Cafe. <span data-i18n="rights">Toate drepturile rezervate.</span></span><span>Ialoveni · Moldova</span></div>
    </div>
  </footer>`;
