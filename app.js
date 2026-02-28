// app.js — Main application

// ========== SVG Icons ==========
const Icons = {
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>',
  ram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 19v-3M10 19v-3M14 19v-3M18 19v-3M8 11V9M16 11V9M12 11V9M2 15h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8H2V7Z"/></svg>',
  hdd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  gpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  monitorIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>',
};

// ========== Toast ==========
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// ========== Helpers ==========
function pluralize(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'товар';
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'товара';
  return 'товаров';
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ========== Router ==========
function getRoute() { return (location.hash || '#/').slice(1); }
function navigate(path) { location.hash = '#' + path; }

function parseRoute(route) {
  if (route.startsWith('/product/')) return { page: 'product', id: route.split('/product/')[1] };
  if (route.startsWith('/catalog')) return { page: 'catalog', search: new URLSearchParams(route.split('?')[1] || '').get('search') || '' };
  if (route === '/checkout') return { page: 'checkout' };
  return { page: 'home' };
}

// ========== Hero Carousel ==========
const heroSlides = [
  { title: 'Хиты сезона 2026', desc: 'Новейшие ноутбуки по лучшим ценам', gradient: 'gradient-0', badge: '🔥 Популярное' },
  { title: 'Скидки до 15%', desc: 'Успейте купить по специальным ценам', gradient: 'gradient-1', badge: '💰 Распродажа' },
  { title: 'Для геймеров', desc: 'Мощные игровые ноутбуки', gradient: 'gradient-2', badge: '🎮 Gaming' },
  { title: 'Apple MacBook', desc: 'Производительность и элегантность', gradient: 'gradient-3', badge: '🍎 Apple' },
];
let heroIndex = 0;
let heroInterval = null;

function renderHero() {
  const s = heroSlides[heroIndex];
  return `
    <div class="hero">
      <div class="hero-slide ${s.gradient}">
        <span class="hero-badge">${s.badge}</span>
        <h2 class="hero-title">${s.title}</h2>
        <p class="hero-desc">${s.desc}</p>
        <div class="hero-cta">
          <a href="#/catalog" class="btn btn-hero">Перейти в каталог ${Icons.arrowRight}</a>
        </div>
      </div>
      <button class="hero-arrow left" onclick="heroNav(-1)" aria-label="Предыдущий слайд">${Icons.chevronLeft}</button>
      <button class="hero-arrow right" onclick="heroNav(1)" aria-label="Следующий слайд">${Icons.chevronRight}</button>
      <div class="hero-dots">
        ${heroSlides.map((_, i) => `<button class="hero-dot ${i === heroIndex ? 'active' : ''}" onclick="heroGo(${i})"></button>`).join('')}
      </div>
    </div>`;
}

function heroNav(dir) {
  heroIndex = (heroIndex + dir + heroSlides.length) % heroSlides.length;
  updateHeroOnly(); resetHeroTimer();
}
function heroGo(i) { heroIndex = i; updateHeroOnly(); resetHeroTimer(); }

function updateHeroOnly() {
  const heroContainer = document.querySelector('.hero');
  if (!heroContainer) { renderPage(); return; }
  const s = heroSlides[heroIndex];
  const slide = heroContainer.querySelector('.hero-slide');
  if (slide) {
    slide.className = `hero-slide ${s.gradient}`;
    slide.querySelector('.hero-badge').textContent = s.badge;
    slide.querySelector('.hero-title').textContent = s.title;
    slide.querySelector('.hero-desc').textContent = s.desc;
  }
  heroContainer.querySelectorAll('.hero-dot').forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
}

function startHeroTimer() {
  clearInterval(heroInterval);
  heroInterval = setInterval(() => { heroIndex = (heroIndex + 1) % heroSlides.length; updateHeroOnly(); }, 5000);
}
function resetHeroTimer() { startHeroTimer(); }
function stopHeroTimer() { clearInterval(heroInterval); heroInterval = null; }

// ========== Card Image Carousel ==========
// Per-card selected image index
const cardImageMap = {};

function prevCardImage(e, id) {
  e.preventDefault(); e.stopPropagation();
  const p = Store.getProduct(id);
  if (!p || p.images.length <= 1) return;
  cardImageMap[id] = ((cardImageMap[id] ?? 0) - 1 + p.images.length) % p.images.length;
  updateCardImageInPlace(id);
}
function nextCardImage(e, id) {
  e.preventDefault(); e.stopPropagation();
  const p = Store.getProduct(id);
  if (!p || p.images.length <= 1) return;
  cardImageMap[id] = ((cardImageMap[id] ?? 0) + 1) % p.images.length;
  updateCardImageInPlace(id);
}

function updateCardImageInPlace(id) {
  const card = document.querySelector(`.card[data-id="${id}"]`);
  if (!card) return;
  const p = Store.getProduct(id);
  if (!p) return;
  const imgEl = card.querySelector('.card-main-img');
  const dots = card.querySelectorAll('.card-img-dot');
  const idx = cardImageMap[id] ?? 0;
  if (imgEl) imgEl.src = p.images[idx];
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// ========== Product Card ==========
let _isFirstRender = true;

function renderProductCard(p, delay = 0) {
  const inCart = Store.isInCart(p.id);
  const inWish = Store.isInWishlist(p.id);
  const inComp = Store.isInCompare(p.id);
  const outOfStock = p.count <= 0;
  const badgeLabel = p.badge === 'hit' ? 'Хит' : p.badge === 'sale' ? 'Скидка' : p.badge === 'new' ? 'Новинка' : '';
  const animStyle = (_isFirstRender && delay > 0) ? ` style="animation-delay:${delay}s"` : '';
  const imgIdx = cardImageMap[p.id] ?? 0;
  const hasMultiple = p.images.length > 1;

  const imageHTML = p.image
    ? `<img class="card-main-img" src="${p.images[imgIdx] || p.image}" alt="${p.brand} ${p.name}" loading="lazy"/>
       ${hasMultiple ? `
         <button class="card-img-arrow left" onclick="prevCardImage(event,'${p.id}')" aria-label="Предыдущее фото">${Icons.chevronLeft}</button>
         <button class="card-img-arrow right" onclick="nextCardImage(event,'${p.id}')" aria-label="Следующее фото">${Icons.chevronRight}</button>
         <div class="card-img-dots">
           ${p.images.map((_, i) => `<span class="card-img-dot ${i === imgIdx ? 'active' : ''}"></span>`).join('')}
         </div>` : ''}`
    : `<span class="placeholder-brand">${p.brand}</span>`;

  // Out of stock button: non-clickable label, not a disabled button (still navigable via card-link)
  const cartBtnHTML = outOfStock
    ? `<div class="btn-out-of-stock">Нет в наличии</div>`
    : `<button class="btn ${inCart ? 'btn-secondary' : 'btn-primary'} btn-sm btn-full" onclick="event.preventDefault();event.stopPropagation();addToCartClick('${p.id}')" aria-label="${inCart ? 'Перейти в корзину' : 'Добавить в корзину'}">
         ${inCart ? `${Icons.check} В корзине` : `${Icons.cart} В корзину`}
       </button>`;

  return `
    <div class="card ${outOfStock ? 'card-out-of-stock' : ''} animate-in"${animStyle} data-id="${p.id}">
      <a href="#/product/${p.id}" class="card-link">
        <div class="card-image">
          ${p.badge ? `<span class="card-badge ${p.badge}">${badgeLabel}</span>` : ''}
          <div class="card-actions">
            <button class="card-action-btn ${inWish ? 'active-wish' : ''}" onclick="event.preventDefault();event.stopPropagation();toggleWish('${p.id}')" title="${inWish ? 'Убрать из избранного' : 'В избранное'}" aria-label="${inWish ? 'Убрать из избранного' : 'В избранное'}">
              ${inWish ? Icons.heartFill : Icons.heart}
            </button>
            <button class="card-action-btn ${inComp ? 'active-comp' : ''}" onclick="event.preventDefault();event.stopPropagation();toggleComp('${p.id}')" title="${inComp ? 'Убрать из сравнения' : 'Добавить к сравнению'}" aria-label="${inComp ? 'Убрать из сравнения' : 'Добавить к сравнению'}">
              ${Icons.scale}
            </button>
          </div>
          ${imageHTML}
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.brand} ${p.name}</h3>
          <div class="card-specs">
            <span class="card-spec">${Icons.cpu} ${p.cpu}</span>
            <span class="card-spec">${Icons.ram} ${p.ram} ГБ RAM</span>
          </div>
          <div class="card-prices">
            <span class="card-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="card-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <div class="card-stock ${outOfStock ? 'out' : 'in'}">
            ${outOfStock ? '○ Нет в наличии' : `● В наличии: ${p.count}`}
          </div>
        </div>
      </a>
      <div class="card-btn-wrap">${cartBtnHTML}</div>
    </div>`;
}

// Targeted card update
function updateCardInPlace(id) {
  const cardEl = document.querySelector(`.card[data-id="${id}"]`);
  if (!cardEl) return false;
  const p = Store.getProduct(id);
  if (!p) return false;
  const inCart = Store.isInCart(id);
  const inWish = Store.isInWishlist(id);
  const inComp = Store.isInCompare(id);
  const outOfStock = p.count <= 0;

  const wishBtn = cardEl.querySelector('.card-action-btn:first-child');
  if (wishBtn) {
    wishBtn.className = `card-action-btn ${inWish ? 'active-wish' : ''}`;
    wishBtn.innerHTML = inWish ? Icons.heartFill : Icons.heart;
  }
  const compBtn = cardEl.querySelector('.card-action-btn:last-child');
  if (compBtn) compBtn.className = `card-action-btn ${inComp ? 'active-comp' : ''}`;

  const btnWrap = cardEl.querySelector('.card-btn-wrap');
  if (btnWrap && !outOfStock) {
    btnWrap.innerHTML = `<button class="btn ${inCart ? 'btn-secondary' : 'btn-primary'} btn-sm btn-full" onclick="event.preventDefault();event.stopPropagation();addToCartClick('${id}')">
      ${inCart ? `${Icons.check} В корзине` : `${Icons.cart} В корзину`}
    </button>`;
  }
  return true;
}

function addToCartClick(id) {
  if (Store.isInCart(id)) { openCart(); return; }
  Store.addToCart(id);
  showToast('🛒 Товар добавлен в корзину');
  updateBadges();
  if (!updateCardInPlace(id)) renderPage();
  updateDetailCartBtn(id);
}

function toggleWish(id) {
  const was = Store.isInWishlist(id);
  Store.toggleWishlist(id);
  showToast(was ? '💔 Убрано из избранного' : '❤️ Добавлено в избранное');
  updateBadges();
  if (!updateCardInPlace(id)) renderPage();
}

function toggleComp(id) {
  if (!Store.isInCompare(id) && Store.compare.length >= 4) {
    showToast('⚠️ Максимум 4 товара для сравнения', 'warning'); return;
  }
  const was = Store.isInCompare(id);
  Store.toggleCompare(id);
  showToast(was ? '⚖️ Убрано из сравнения' : '⚖️ Добавлено к сравнению');
  updateBadges();
  if (!updateCardInPlace(id)) renderPage();
}

function updateDetailCartBtn(id) {
  const btn = document.querySelector('.detail-cart-btn');
  if (!btn || btn.dataset.id !== id) return;
  const inCart = Store.isInCart(id);
  const p = Store.getProduct(id);
  if (!p || p.count <= 0) return;
  btn.className = `btn ${inCart ? 'btn-secondary' : 'btn-primary'} btn-md detail-cart-btn`;
  btn.innerHTML = inCart ? `${Icons.check} В корзине` : `${Icons.cart} Добавить в корзину`;
}

// ========== Skeleton ==========
function renderSkeleton(count = 4) {
  return Array.from({ length: count }).map(() => `
    <div class="card">
      <div class="skeleton" style="aspect-ratio:4/3;border-radius:var(--radius) var(--radius) 0 0"></div>
      <div style="padding:1rem">
        <div class="skeleton" style="height:1rem;width:75%;margin-bottom:0.75rem"></div>
        <div class="skeleton" style="height:0.75rem;width:50%;margin-bottom:0.75rem"></div>
        <div class="skeleton" style="height:1.5rem;width:33%"></div>
      </div>
    </div>`).join('');
}

// ========== Home ==========
function renderHome() {
  const top = [...Store.products]
    .sort((a, b) => (b.count > 0 ? 1 : 0) - (a.count > 0 ? 1 : 0) || b.count - a.count)
    .slice(0, 4);
  const categories = [
    { name: 'Ноутбуки', icon: Icons.laptop, active: true },
    { name: 'Смартфоны', icon: Icons.smartphone, active: false },
    { name: 'Мониторы', icon: Icons.monitorIcon, active: false },
    { name: 'Аксессуары', icon: Icons.headphones, active: false },
  ];

  return `
    <div class="container" style="padding-top:1.5rem">${renderHero()}</div>
    <section class="container section">
      <div class="section-header animate-in"><h2 class="section-title">Категории</h2></div>
      <div class="grid grid-2">
        ${categories.map((c, i) => `
          <div class="cat-card ${c.active ? 'active' : 'disabled'} animate-in animate-in-${i + 1}">
            ${c.active ? `<a href="#/catalog">` : '<div>'}
              <div class="cat-icon">${c.icon}</div>
              <p class="cat-name">${c.name}</p>
              ${c.active ? `<p class="cat-count">${Store.products.length} моделей</p>` : '<span class="cat-soon">Скоро</span>'}
            ${c.active ? '</a>' : '</div>'}
          </div>`).join('')}
      </div>
    </section>
    <section class="container section" style="padding-bottom:4rem">
      <div class="section-header animate-in">
        <h2 class="section-title">Хиты продаж</h2>
        <a href="#/catalog" class="section-link">Все товары ${Icons.arrowRight}</a>
      </div>
      <div class="grid grid-4">
        ${Store.isLoading ? renderSkeleton(4) : top.map((p, i) => renderProductCard(p, i * 0.06)).join('')}
      </div>
    </section>`;
}

// ========== DYNAMIC FILTERS from data ==========
// Build filter groups dynamically based on what's actually in the products
function buildDynamicFilters(products) {
  // Always include: brand, cpuBrand, ram, price
  // Also scan extraSpecs for boolean-ish or small-set fields
  const filters = {};

  // Brand
  filters.brand = { label: 'Бренд', type: 'checkbox', values: [...new Set(products.map(p => p.brand))].sort(), key: 'brand' };
  // CPU brand
  filters.cpuBrand = { label: 'Процессор', type: 'checkbox', values: [...new Set(products.map(p => p.cpuBrand))].sort(), key: 'cpuBrand' };
  // RAM
  filters.ram = { label: 'Объём RAM', type: 'checkbox', values: [...new Set(products.map(p => p.ram))].sort((a,b) => a - b), key: 'ram', suffix: ' ГБ' };

  // Scan extraSpecs: collect fields that appear in at least 30% of products and have ≤10 unique values
  const extraKeys = {};
  products.forEach(p => {
    if (p.extraSpecs) {
      Object.keys(p.extraSpecs).forEach(k => {
        if (!extraKeys[k]) extraKeys[k] = new Set();
        extraKeys[k].add(p.extraSpecs[k]);
      });
    }
  });
  Object.entries(extraKeys).forEach(([key, vals]) => {
    const coverage = products.filter(p => p.extraSpecs && p.extraSpecs[key]).length / products.length;
    if (vals.size >= 2 && vals.size <= 10 && coverage >= 0.3) {
      filters['extra_' + key] = {
        label: key.charAt(0).toUpperCase() + key.slice(1),
        type: 'checkbox',
        values: [...vals].sort(),
        key: 'extra_' + key,
        isExtra: true,
        extraKey: key,
      };
    }
  });

  return filters;
}

// ========== Catalog State ==========
let catalogFilters = {
  brand: [], cpuBrand: [], ram: [],
  priceMin: null, priceMax: null,
  inStock: false,
  sort: 'default',
  extra: {}, // dynamic extra spec filters
};

function renderCatalog(searchQuery = '') {
  const products = Store.products;
  const prices = products.map(p => p.price);
  const minP = prices.length ? Math.min(...prices) : 0;
  const maxP = prices.length ? Math.max(...prices) : 500000;

  if (catalogFilters.priceMin === null) catalogFilters.priceMin = minP;
  if (catalogFilters.priceMax === null) catalogFilters.priceMax = maxP;

  // Filter
  let filtered = products.filter(p => {
    if (catalogFilters.inStock && p.count <= 0) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (!`${p.brand} ${p.name} ${p.cpu}`.toLowerCase().includes(q)) return false;
    }
    if (catalogFilters.brand.length && !catalogFilters.brand.includes(p.brand)) return false;
    if (catalogFilters.cpuBrand.length && !catalogFilters.cpuBrand.includes(p.cpuBrand)) return false;
    if (catalogFilters.ram.length && !catalogFilters.ram.includes(p.ram)) return false;
    if (p.price < catalogFilters.priceMin || p.price > catalogFilters.priceMax) return false;
    // Dynamic extra filters
    for (const [key, vals] of Object.entries(catalogFilters.extra)) {
      if (vals.length && p.extraSpecs) {
        if (!vals.includes(p.extraSpecs[key])) return false;
      }
    }
    return true;
  });

  // Sort: always put in-stock first, then apply chosen sort
  filtered.sort((a, b) => {
    const aInStock = a.count > 0 ? 1 : 0;
    const bInStock = b.count > 0 ? 1 : 0;
    if (bInStock !== aInStock) return bInStock - aInStock;
    switch (catalogFilters.sort) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  // Build dynamic filter groups
  const dynFilters = buildDynamicFilters(products);

  const filtersHTML = `
    <div class="filter-group">
      <label class="filter-option filter-instock">
        <input type="checkbox" ${catalogFilters.inStock ? 'checked' : ''} onchange="catalogFilters.inStock=this.checked;renderPage()"/>
        <span class="instock-label">Только в наличии</span>
      </label>
    </div>
    ${Object.entries(dynFilters).map(([fkey, f]) => `
      <div class="filter-group">
        <h4 class="filter-title">${f.label}</h4>
        ${f.values.map(v => {
          const isChecked = f.isExtra
            ? (catalogFilters.extra[f.extraKey] || []).includes(v)
            : (catalogFilters[f.key] || []).includes(v);
          const count = f.isExtra
            ? products.filter(p => p.extraSpecs && p.extraSpecs[f.extraKey] === v).length
            : products.filter(p => {
                if (f.key === 'brand') return p.brand === v;
                if (f.key === 'cpuBrand') return p.cpuBrand === v;
                if (f.key === 'ram') return p.ram === v;
                return false;
              }).length;
          const val = typeof v === 'number' ? v : JSON.stringify(v);
          const onchange = f.isExtra
            ? `toggleExtraFilter('${f.extraKey}',${val})`
            : `toggleCatalogFilter('${f.key}',${val})`;
          return `<label class="filter-option">
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="${onchange}"/>
            <span>${v}${f.suffix || ''}</span>
            <span class="count">${count}</span>
          </label>`;
        }).join('')}
      </div>`).join('')}
    <div class="filter-group">
      <h4 class="filter-title">Цена</h4>
      <div class="price-range-labels">
        <span>${formatPrice(catalogFilters.priceMin)}</span>
        <span>${formatPrice(catalogFilters.priceMax)}</span>
      </div>
      <input type="range" class="price-slider" min="${minP}" max="${maxP}" step="1000" value="${catalogFilters.priceMin}" oninput="updatePriceMin(this.value)"/>
      <input type="range" class="price-slider" min="${minP}" max="${maxP}" step="1000" value="${catalogFilters.priceMax}" oninput="updatePriceMax(this.value)"/>
    </div>
    <button class="btn btn-outline btn-reset-filters" onclick="resetCatalogFilters()">
      ${Icons.x} Сбросить
    </button>`;

  const safeQuery = esc(searchQuery);

  return `
    <div class="container" style="padding:1.5rem 1rem">
      <div class="catalog-topbar animate-in">
        <div class="catalog-info">
          <h1>Каталог ноутбуков</h1>
          <p>Найдено: <strong>${filtered.length}</strong> ${pluralize(filtered.length)}${safeQuery ? ` по запросу «${safeQuery}»` : ''}</p>
        </div>
        <div class="catalog-controls">
          <div class="select-wrap">
            <select class="select-native" onchange="catalogFilters.sort=this.value;renderPage()">
              <option value="default" ${catalogFilters.sort === 'default' ? 'selected' : ''}>По умолчанию</option>
              <option value="price-asc" ${catalogFilters.sort === 'price-asc' ? 'selected' : ''}>Сначала дешёвые</option>
              <option value="price-desc" ${catalogFilters.sort === 'price-desc' ? 'selected' : ''}>Сначала дорогие</option>
              <option value="name" ${catalogFilters.sort === 'name' ? 'selected' : ''}>По названию</option>
            </select>
          </div>
          <button class="btn btn-outline btn-sm filter-mobile-btn" onclick="openMobileFilters()">
            ${Icons.sliders} Фильтры
          </button>
        </div>
      </div>
      <div class="catalog-layout">
        <aside class="catalog-sidebar">
          <div class="filters-card">${filtersHTML}</div>
        </aside>
        <div class="catalog-main">
          ${Store.isLoading ? `<div class="grid grid-3">${renderSkeleton(6)}</div>` :
            filtered.length === 0 ? `
              <div class="empty-state animate-in">
                <p class="emoji">🔍</p>
                <p class="title">Ничего не найдено</p>
                <p class="subtitle">Попробуйте изменить параметры фильтрации</p>
                <button class="btn btn-outline" style="margin-top:1rem" onclick="resetCatalogFilters()">Сбросить фильтры</button>
              </div>` :
            `<div class="grid grid-3">${filtered.map((p, i) => renderProductCard(p, i * 0.06)).join('')}</div>`}
        </div>
      </div>
    </div>`;
}

function toggleCatalogFilter(type, value) {
  const arr = catalogFilters[type];
  const idx = arr.indexOf(value);
  if (idx >= 0) arr.splice(idx, 1); else arr.push(value);
  renderPage();
}

function toggleExtraFilter(extraKey, value) {
  if (!catalogFilters.extra[extraKey]) catalogFilters.extra[extraKey] = [];
  const arr = catalogFilters.extra[extraKey];
  const idx = arr.indexOf(value);
  if (idx >= 0) arr.splice(idx, 1); else arr.push(value);
  renderPage();
}

function updatePriceMin(val) {
  const v = parseInt(val);
  if (v <= catalogFilters.priceMax) { catalogFilters.priceMin = v; renderPage(); }
}
function updatePriceMax(val) {
  const v = parseInt(val);
  if (v >= catalogFilters.priceMin) { catalogFilters.priceMax = v; renderPage(); }
}
function resetCatalogFilters() {
  catalogFilters = { brand: [], cpuBrand: [], ram: [], priceMin: null, priceMax: null, inStock: false, sort: 'default', extra: {} };
  renderPage();
}

// ========== Mobile Filters ==========
let mobileFiltersOpen = false;
function openMobileFilters() { mobileFiltersOpen = true; renderMobileFilters(); }
function closeMobileFilters() {
  mobileFiltersOpen = false;
  document.getElementById('mobileFiltersOv')?.remove();
  document.getElementById('mobileFiltersPanel')?.remove();
}
function renderMobileFilters() {
  closeMobileFilters();
  if (!mobileFiltersOpen) return;
  const products = Store.products;
  const prices = products.map(p => p.price);
  const minP = prices.length ? Math.min(...prices) : 0;
  const maxP = prices.length ? Math.max(...prices) : 500000;
  const dynFilters = buildDynamicFilters(products);

  const ov = document.createElement('div');
  ov.id = 'mobileFiltersOv';
  ov.className = 'mobile-filters-overlay';
  ov.onclick = closeMobileFilters;

  const panel = document.createElement('div');
  panel.id = 'mobileFiltersPanel';
  panel.className = 'mobile-filters-panel';
  panel.onclick = e => e.stopPropagation();
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
      <h3 style="font-weight:600;font-size:1.125rem">Фильтры</h3>
      <button class="close-btn" onclick="closeMobileFilters()">&times;</button>
    </div>
    <div class="filter-group">
      <label class="filter-option filter-instock">
        <input type="checkbox" ${catalogFilters.inStock ? 'checked' : ''} onchange="catalogFilters.inStock=this.checked;renderPage();renderMobileFilters()"/>
        <span class="instock-label">Только в наличии</span>
      </label>
    </div>
    ${Object.entries(dynFilters).map(([fkey, f]) => `
      <div class="filter-group">
        <h4 class="filter-title">${f.label}</h4>
        ${f.values.map(v => {
          const isChecked = f.isExtra
            ? (catalogFilters.extra[f.extraKey] || []).includes(v)
            : (catalogFilters[f.key] || []).includes(v);
          const val = typeof v === 'number' ? v : JSON.stringify(v);
          const onchange = f.isExtra
            ? `toggleExtraFilter('${f.extraKey}',${val});renderMobileFilters()`
            : `toggleCatalogFilter('${f.key}',${val});renderMobileFilters()`;
          return `<label class="filter-option"><input type="checkbox" ${isChecked ? 'checked' : ''} onchange="${onchange}"/><span>${v}${f.suffix||''}</span></label>`;
        }).join('')}
      </div>`).join('')}
    <div class="filter-group">
      <h4 class="filter-title">Цена</h4>
      <div class="price-range-labels"><span>${formatPrice(catalogFilters.priceMin??minP)}</span><span>${formatPrice(catalogFilters.priceMax??maxP)}</span></div>
      <input type="range" class="price-slider" min="${minP}" max="${maxP}" step="1000" value="${catalogFilters.priceMin??minP}" oninput="updatePriceMin(this.value);renderMobileFilters()"/>
      <input type="range" class="price-slider" min="${minP}" max="${maxP}" step="1000" value="${catalogFilters.priceMax??maxP}" oninput="updatePriceMax(this.value);renderMobileFilters()"/>
    </div>
    <div style="display:flex;gap:0.5rem;margin-top:1rem">
      <button class="btn btn-outline btn-sm" style="flex:1" onclick="resetCatalogFilters();closeMobileFilters()">Сбросить</button>
      <button class="btn btn-primary btn-sm" style="flex:1" onclick="closeMobileFilters()">Применить</button>
    </div>`;

  document.body.appendChild(ov);
  document.body.appendChild(panel);
}

// ========== Product Detail ==========
const detailImageMap = {};

function renderProductDetail(id) {
  const p = Store.getProduct(id);
  if (!p) return `
    <div class="container" style="padding:4rem 1rem;text-align:center">
      <p style="color:var(--muted-fg);font-size:1.125rem">Товар не найден</p>
      <a href="#/catalog" class="btn btn-outline" style="margin-top:1rem">${Icons.arrowLeft} Вернуться в каталог</a>
    </div>`;

  const inCart = Store.isInCart(p.id);
  const outOfStock = p.count <= 0;
  const images = p.images.length > 0 ? p.images : p.image ? [p.image] : [];
  const selImg = Math.min(detailImageMap[id] ?? 0, Math.max(images.length - 1, 0));
  const discountPct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  // Base specs
  const baseSpecs = [
    { icon: Icons.cpu,     label: 'Процессор',         value: p.cpu },
    { icon: Icons.ram,     label: 'Оперативная память', value: `${p.ram} ГБ` },
    { icon: Icons.hdd,     label: 'Накопитель',         value: `${p.ssd} ГБ SSD` },
    { icon: Icons.monitor, label: 'Экран',              value: p.screen },
    { icon: Icons.gpu,     label: 'Видеокарта',         value: p.gpu },
  ];

  // Dynamic extra specs — all keys from extraSpecs
  const extraSpecRows = p.extraSpecs ? Object.entries(p.extraSpecs).map(([key, val]) => `
    <div class="spec-row">
      <span class="spec-label" style="margin-left:24px">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
      <span class="spec-value">${val}</span>
    </div>`).join('') : '';

  const cartBtn = outOfStock
    ? `<div class="btn-out-of-stock btn-out-of-stock-lg">Нет в наличии</div>`
    : `<button class="btn ${inCart ? 'btn-secondary' : 'btn-primary'} btn-md detail-cart-btn" data-id="${p.id}" onclick="addToCartClick('${p.id}')">
        ${inCart ? `${Icons.check} В корзине` : `${Icons.cart} Добавить в корзину`}
       </button>`;

  return `
    <div class="container" style="padding:1.5rem 1rem">
      <a href="#/catalog" class="back-link">${Icons.arrowLeft} Назад в каталог</a>
      <div class="detail-grid">
        <div class="animate-in">
          <div class="detail-gallery">
            <div class="detail-main-image">
              ${images.length > 0
                ? `<img src="${images[selImg]}" alt="${p.brand} ${p.name}" id="detailMainImg"/>`
                : `<span style="font-size:2.5rem;font-weight:700;color:var(--muted-fg)">${p.brand}</span>`}
              ${images.length > 1 ? `
                <button class="detail-arrow left" onclick="detailImgNav('${p.id}',-1)">${Icons.chevronLeft}</button>
                <button class="detail-arrow right" onclick="detailImgNav('${p.id}',1)">${Icons.chevronRight}</button>
                <div class="detail-dots">
                  ${images.map((_,i) => `<button class="detail-dot ${i===selImg?'active':''}" onclick="setDetailImage('${p.id}',${i})"></button>`).join('')}
                </div>` : ''}
            </div>
          </div>
          ${images.length > 1 ? `
            <div class="detail-thumbs">
              ${images.map((img, i) => `
                <button class="detail-thumb ${i === selImg ? 'active' : ''}" onclick="setDetailImage('${p.id}',${i})">
                  <img src="${img}" alt="Фото ${i + 1}"/>
                </button>`).join('')}
            </div>` : ''}
        </div>
        <div class="detail-info animate-in" style="animation-delay:0.1s">
          <h1>${p.brand} ${p.name}</h1>
          <div class="detail-stock" style="color:${outOfStock ? 'var(--destructive)' : 'var(--success)'}">
            ${outOfStock ? '○ Нет в наличии' : `● В наличии: ${p.count} шт.`}
          </div>
          <div class="detail-price-row">
            <span class="detail-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="detail-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
            ${discountPct > 0 ? `<span class="discount-badge">−${discountPct}%</span>` : ''}
          </div>
          <div class="detail-actions">
            ${cartBtn}
            <button class="btn btn-outline btn-md btn-icon" onclick="shareProduct('${p.id}')" title="Поделиться" aria-label="Поделиться товаром">${Icons.share}</button>
          </div>
          <div class="specs-table">
            <h3>Характеристики</h3>
            ${baseSpecs.map(s => `
              <div class="spec-row">
                ${s.icon}
                <span class="spec-label">${s.label}</span>
                <span class="spec-value">${s.value}</span>
              </div>`).join('')}
            <div class="spec-row">
              <span class="spec-label" style="margin-left:24px">Бренд</span>
              <span class="spec-value">${p.brand}</span>
            </div>
            ${extraSpecRows}
          </div>
        </div>
      </div>
    </div>`;
}

function detailImgNav(id, dir) {
  const p = Store.getProduct(id);
  if (!p) return;
  const cur = detailImageMap[id] ?? 0;
  setDetailImage(id, (cur + dir + p.images.length) % p.images.length);
}

function setDetailImage(id, index) {
  detailImageMap[id] = index;
  const mainImg = document.getElementById('detailMainImg');
  const p = Store.getProduct(id);
  if (mainImg && p) {
    mainImg.src = p.images[index];
    document.querySelectorAll('.detail-thumb').forEach((btn, i) => btn.classList.toggle('active', i === index));
    document.querySelectorAll('.detail-dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
  } else {
    renderPage();
  }
}

function shareProduct(id) {
  const p = Store.getProduct(id);
  if (!p) return;
  const url = window.location.href.split('#')[0] + '#/product/' + id;
  if (navigator.share) {
    navigator.share({ title: `${p.brand} ${p.name}`, text: formatPrice(p.price), url }).catch(() => copyToClipboard(url));
  } else {
    copyToClipboard(url);
  }
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('🔗 Ссылка скопирована'))
    .catch(() => showToast('Не удалось скопировать', 'warning'));
}

// ========== Checkout ==========
let checkoutSubmitted = false;
let checkoutForm = { name: '', phone: '', email: '', address: '' };
let checkoutErrors = {};

function renderCheckout() {
  if (checkoutSubmitted) return `
    <div class="success-page animate-in">
      ${Icons.checkCircle}
      <h1>Заказ оформлен!</h1>
      <p>Мы свяжемся с вами для подтверждения заказа.</p>
      <a href="#/" class="btn btn-primary">На главную</a>
    </div>`;

  const cartProducts = Store.cart.map(c => { const p = Store.getProduct(c.id); return p ? { ...p, qty: c.qty } : null; }).filter(Boolean);
  if (cartProducts.length === 0) return `
    <div class="container" style="padding:4rem 1rem;text-align:center">
      <p style="color:var(--muted-fg);font-size:1.125rem;margin-bottom:1rem">Корзина пуста</p>
      <a href="#/catalog" class="btn btn-outline">${Icons.arrowLeft} Перейти в каталог</a>
    </div>`;

  const total = cartProducts.reduce((s, p) => s + p.price * p.qty, 0);

  return `
    <div class="container" style="padding:1.5rem 1rem">
      <a href="#/catalog" class="back-link">${Icons.arrowLeft} Назад в каталог</a>
      <h1 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Оформление заказа</h1>
      <div class="checkout-grid">
        <form onsubmit="submitCheckout(event)">
          <div class="form-card">
            <h3>Контактные данные</h3>
            <div class="form-row double">
              <div class="form-group">
                <label for="f_name">Имя *</label>
                <input id="f_name" value="${esc(checkoutForm.name)}" oninput="checkoutForm.name=this.value" placeholder="Иван Иванов" maxlength="100" autocomplete="name"/>
                ${checkoutErrors.name ? `<p class="form-error">${checkoutErrors.name}</p>` : ''}
              </div>
              <div class="form-group">
                <label for="f_phone">Телефон *</label>
                <input id="f_phone" type="tel" value="${esc(checkoutForm.phone)}" oninput="checkoutForm.phone=this.value" placeholder="+7 (999) 123-45-67" maxlength="20" autocomplete="tel"/>
                ${checkoutErrors.phone ? `<p class="form-error">${checkoutErrors.phone}</p>` : ''}
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="f_email">Email *</label>
                <input id="f_email" type="email" value="${esc(checkoutForm.email)}" oninput="checkoutForm.email=this.value" placeholder="email@example.com" maxlength="255" autocomplete="email"/>
                ${checkoutErrors.email ? `<p class="form-error">${checkoutErrors.email}</p>` : ''}
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="f_address">Адрес доставки *</label>
                <input id="f_address" value="${esc(checkoutForm.address)}" oninput="checkoutForm.address=this.value" placeholder="Город, улица, дом, квартира" maxlength="500" autocomplete="street-address"/>
                ${checkoutErrors.address ? `<p class="form-error">${checkoutErrors.address}</p>` : ''}
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-md" style="margin-top:1rem">Подтвердить заказ</button>
        </form>
        <div class="order-summary">
          <h3>Ваш заказ</h3>
          ${cartProducts.map(p => `
            <div class="order-item">
              <span class="name">${p.brand} ${p.name} × ${p.qty}</span>
              <span class="price">${formatPrice(p.price * p.qty)}</span>
            </div>`).join('')}
          <div class="order-total">
            <span>Итого:</span>
            <span class="price">${formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>`;
}

function submitCheckout(e) {
  e.preventDefault();
  checkoutErrors = {};
  if (!checkoutForm.name.trim()) checkoutErrors.name = 'Введите имя';
  if (!checkoutForm.phone.trim()) checkoutErrors.phone = 'Введите телефон';
  else if (!/^\+?[\d\s()-]{7,}$/.test(checkoutForm.phone.trim())) checkoutErrors.phone = 'Неверный формат';
  if (!checkoutForm.email.trim()) checkoutErrors.email = 'Введите email';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutForm.email.trim())) checkoutErrors.email = 'Неверный формат';
  if (!checkoutForm.address.trim()) checkoutErrors.address = 'Введите адрес';

  if (Object.keys(checkoutErrors).length > 0) { renderPage(); return; }
  checkoutSubmitted = true;
  Store.clearCart();
  updateBadges();
  showToast('✅ Заказ успешно оформлен!');
  renderPage();
}

// ========== Cart Drawer ==========
function openCart() {
  document.getElementById('cartOverlay').classList.remove('hidden');
  document.getElementById('cartDrawer').classList.remove('hidden');
  renderCartDrawer();
}
function closeCart() {
  document.getElementById('cartOverlay').classList.add('hidden');
  document.getElementById('cartDrawer').classList.add('hidden');
}
function renderCartDrawer() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const cartProducts = Store.cart.map(c => { const p = Store.getProduct(c.id); return p ? { ...p, qty: c.qty } : null; }).filter(Boolean);

  if (cartProducts.length === 0) {
    body.innerHTML = `<div class="cart-empty">${Icons.bag}<p>Корзина пуста</p></div>`;
    footer.classList.add('hidden');
    return;
  }
  const total = cartProducts.reduce((s, p) => s + p.price * p.qty, 0);
  body.innerHTML = cartProducts.map(p => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${p.image ? `<img src="${p.image}" alt="${p.name}"/>` : `<span style="font-size:0.75rem;color:var(--muted-fg)">${p.brand}</span>`}
      </div>
      <div class="cart-item-info">
        <h4>${p.brand} ${p.name}</h4>
        <div class="price">${formatPrice(p.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeCartQty('${p.id}',-1)">${Icons.minus}</button>
          <span class="qty-value">${p.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${p.id}',1)">${Icons.plus}</button>
          <button class="remove-btn" onclick="removeCartItem('${p.id}')">${Icons.trash}</button>
        </div>
      </div>
    </div>`).join('');
  footer.classList.remove('hidden');
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function changeCartQty(id, delta) {
  Store.changeQty(id, delta);
  updateBadges();
  renderCartDrawer();
  updateCardInPlace(id);
}
function removeCartItem(id) {
  Store.removeFromCart(id);
  updateBadges();
  renderCartDrawer();
  updateCardInPlace(id);
  updateDetailCartBtn(id);
}

// ========== Wishlist ==========
function openWishlist() { document.getElementById('wishlistOverlay').classList.remove('hidden'); renderWishlistModal(); }
function closeWishlist() { document.getElementById('wishlistOverlay').classList.add('hidden'); }
function renderWishlistModal() {
  const items = Store.wishlist.map(id => Store.getProduct(id)).filter(Boolean);
  document.getElementById('wishlistCount').textContent = items.length;
  const body = document.getElementById('wishlistBody');
  if (!items.length) { body.innerHTML = '<p style="text-align:center;color:var(--muted-fg);padding:2rem">Список избранного пуст</p>'; return; }
  body.innerHTML = items.map(p => `
    <div class="wish-item">
      <div class="wish-item-img">${p.image ? `<img src="${p.image}" alt="${p.name}"/>` : `<span style="font-size:0.75rem">${p.brand}</span>`}</div>
      <div class="wish-item-info">
        <a href="#/product/${p.id}" onclick="closeWishlist()"><h4>${p.brand} ${p.name}</h4></a>
        <div class="price">${formatPrice(p.price)}</div>
      </div>
      <div class="wish-item-actions">
        ${!Store.isInCart(p.id) && p.count > 0 ? `<button class="btn-icon btn-ghost" onclick="Store.addToCart('${p.id}');showToast('🛒 Добавлено в корзину');updateBadges();updateCardInPlace('${p.id}');renderWishlistModal()">${Icons.cart}</button>` : ''}
        <button class="btn-icon btn-ghost" style="color:var(--destructive)" onclick="Store.toggleWishlist('${p.id}');updateBadges();updateCardInPlace('${p.id}');renderWishlistModal()">${Icons.trash}</button>
      </div>
    </div>`).join('');
}

// ========== Compare ==========
function openCompare() { document.getElementById('compareOverlay').classList.remove('hidden'); renderCompareModal(); }
function closeCompare() { document.getElementById('compareOverlay').classList.add('hidden'); }
function renderCompareModal() {
  const items = Store.compare.map(id => Store.getProduct(id)).filter(Boolean);
  document.getElementById('compareCount').textContent = items.length;
  const body = document.getElementById('compareBody');
  if (!items.length) { body.innerHTML = '<p style="text-align:center;color:var(--muted-fg);padding:2rem">Добавьте товары для сравнения</p>'; return; }

  // Build unified spec rows from all products (including dynamic)
  const allSpecKeys = new Set();
  items.forEach(p => { if (p.extraSpecs) Object.keys(p.extraSpecs).forEach(k => allSpecKeys.add(k)); });

  const fixedSpecs = [
    { label: 'Бренд', get: p => p.brand },
    { label: 'Процессор', get: p => p.cpu },
    { label: 'RAM', get: p => p.ram + ' ГБ' },
    { label: 'SSD', get: p => p.ssd + ' ГБ' },
    { label: 'Экран', get: p => p.screen },
    { label: 'Видеокарта', get: p => p.gpu },
    { label: 'Цена', get: p => formatPrice(p.price), numGet: p => p.price, isBestMin: true },
  ];
  const extraSpecDefs = [...allSpecKeys].map(k => ({ label: k, get: p => p.extraSpecs?.[k] || '—' }));
  const allSpecs = [...fixedSpecs, ...extraSpecDefs];

  body.innerHTML = `
    <div style="overflow-x:auto">
      <table class="compare-table">
        <thead><tr>
          <th></th>
          ${items.map(p => `
            <th>
              <div class="compare-product">
                <button class="compare-remove" onclick="Store.toggleCompare('${p.id}');updateBadges();updateCardInPlace('${p.id}');renderCompareModal()">&times;</button>
                <div class="compare-thumb">${p.image ? `<img src="${p.image}" alt="${p.name}"/>` : `<span style="font-size:0.75rem">${p.brand}</span>`}</div>
                <p style="font-weight:500;font-size:0.75rem">${p.brand} ${p.name}</p>
                <p style="font-size:0.875rem;font-weight:700;color:var(--primary)">${formatPrice(p.price)}</p>
              </div>
            </th>`).join('')}
        </tr></thead>
        <tbody>
          ${allSpecs.map(s => {
            const vals = items.map(p => s.numGet ? s.numGet(p) : null);
            const numVals = vals.filter(v => v !== null);
            const bestVal = numVals.length > 1 ? (s.isBestMin ? Math.min(...numVals) : Math.max(...numVals)) : null;
            return `<tr>
              <td>${s.label}</td>
              ${items.map(p => {
                const val = s.numGet ? s.numGet(p) : null;
                const isBest = bestVal !== null && val === bestVal;
                return `<td class="${isBest ? 'compare-best' : ''}">${s.get(p)}</td>`;
              }).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

// ========== Badges & Theme ==========
function updateBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishBadge = document.getElementById('wishlistBadge');
  const compBadge = document.getElementById('compareBadge');
  const cc = Store.cartCount();
  cartBadge.textContent = cc; cartBadge.dataset.count = cc;
  wishBadge.textContent = Store.wishlist.length; wishBadge.dataset.count = Store.wishlist.length;
  compBadge.textContent = Store.compare.length; compBadge.dataset.count = Store.compare.length;
}

function initTheme() {
  const saved = localStorage.getItem('techshop_theme') || 'light';
  if (saved === 'dark') document.documentElement.classList.add('dark');
  updateThemeIcons();
}
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('techshop_theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcons();
}
function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.getElementById('iconSun').classList.toggle('hidden', !isDark);
  document.getElementById('iconMoon').classList.toggle('hidden', isDark);
}

// ========== Main Render ==========
function renderPage() {
  const route = getRoute();
  const parsed = parseRoute(route);
  const app = document.getElementById('app');

  if (parsed.page !== 'home') stopHeroTimer();

  switch (parsed.page) {
    case 'home':    app.innerHTML = renderHome(); startHeroTimer(); break;
    case 'catalog': app.innerHTML = renderCatalog(parsed.search); break;
    case 'product': app.innerHTML = renderProductDetail(parsed.id); break;
    case 'checkout': app.innerHTML = renderCheckout(); break;
    default:
      app.innerHTML = `<div class="container" style="padding:4rem 1rem;text-align:center">
        <h1 style="font-size:2rem;font-weight:700;margin-bottom:0.5rem">404</h1>
        <p style="color:var(--muted-fg);margin-bottom:1rem">Страница не найдена</p>
        <a href="#/" class="btn btn-primary">На главную</a>
      </div>`;
  }

  _isFirstRender = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ========== Init ==========
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  document.getElementById('btnCart').onclick = openCart;
  document.getElementById('btnWishlist').onclick = openWishlist;
  document.getElementById('btnCompare').onclick = openCompare;
  document.getElementById('btnTheme').onclick = toggleTheme;
  document.getElementById('cartOverlay').onclick = closeCart;
  document.getElementById('cartClose').onclick = closeCart;
  document.getElementById('wishlistClose').onclick = closeWishlist;
  document.getElementById('wishlistOverlay').onclick = e => { if (e.target === e.currentTarget) closeWishlist(); };
  document.getElementById('compareClose').onclick = closeCompare;
  document.getElementById('compareOverlay').onclick = e => { if (e.target === e.currentTarget) closeCompare(); };
  document.getElementById('cartCheckout').onclick = () => { closeCart(); navigate('/checkout'); };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeWishlist(); closeCompare(); closeMobileFilters(); }
  });

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.oninput = () => searchClear.classList.toggle('hidden', !searchInput.value);
  searchClear.onclick = () => { searchInput.value = ''; searchClear.classList.add('hidden'); searchInput.focus(); };
  document.getElementById('searchForm').onsubmit = e => {
    e.preventDefault();
    if (searchInput.value.trim()) { navigate(`/catalog?search=${encodeURIComponent(searchInput.value.trim())}`); searchInput.value = ''; searchClear.classList.add('hidden'); }
  };
  document.getElementById('mobileSearchForm').onsubmit = e => {
    e.preventDefault();
    const v = document.getElementById('mobileSearchInput').value.trim();
    if (v) { navigate(`/catalog?search=${encodeURIComponent(v)}`); document.getElementById('mobileSearchInput').value = ''; document.getElementById('mobileMenu').classList.add('hidden'); }
  };

  document.getElementById('btnMobileMenu').onclick = () => document.getElementById('mobileMenu').classList.toggle('hidden');
  document.querySelectorAll('.mobile-nav-link').forEach(a => a.onclick = () => document.getElementById('mobileMenu').classList.add('hidden'));

  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => scrollBtn.classList.toggle('hidden', window.scrollY <= 400), { passive: true });
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  window.addEventListener('hashchange', () => {
    checkoutSubmitted = false;
    checkoutForm = { name: '', phone: '', email: '', address: '' };
    checkoutErrors = {};
    renderPage();
  });

  updateBadges();
  renderPage();

  const products = await fetchProducts();
  Store.setProducts(products);
  updateBadges();
  _isFirstRender = true;
  renderPage();
  _isFirstRender = false;
});
