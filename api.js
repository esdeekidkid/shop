// api.js — Data fetching with caching
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcycPxj7U1H1cppWIEJT619b5pjFgp5oGLDEDebFWFgfvN5xYy_3BVdsSXs118R8Uxxg/exec';
const CACHE_KEY = 'techshop_products_cache';
const CACHE_TIME_KEY = 'techshop_products_cache_time';
const CACHE_MINUTES = 5;

// XSS protection
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// DYNAMIC SPEC SYSTEM: known fields that get special treatment
const KNOWN_FIELDS = ['id', 'id ', 'model', 'brand', 'cpu', 'ram', 'ssd', 'screen', 'gpu', 'price', 'oldPrice', 'old_price', 'count', 'image', 'images'];

// Spec display config: field key → { label, unit, filterType }
// filterType: 'checkbox', 'range', or null (no filter)
const SPEC_CONFIG = {
  cpu:     { label: 'Процессор',         unit: '',    filterType: 'checkbox', filterKey: 'cpuBrand' },
  ram:     { label: 'Оперативная память', unit: ' ГБ', filterType: 'checkbox', filterKey: 'ram' },
  ssd:     { label: 'Накопитель',         unit: ' ГБ SSD', filterType: null },
  screen:  { label: 'Экран',              unit: '',    filterType: null },
  gpu:     { label: 'Видеокарта',         unit: '',    filterType: null },
  brand:   { label: 'Бренд',              unit: '',    filterType: 'checkbox', filterKey: 'brand' },
};

function normalizeProducts(rawData) {
  return rawData
    .map(p => {
      const id = String(p['id'] ?? p['id '] ?? '').trim();
      const imagesRaw = p.image || '';
      const imagesArr = imagesRaw.split(',').map(s => s.trim()).filter(Boolean);
      const mainImage = imagesArr.length > 0 ? imagesArr[0] : null;
      const price = parseFloat(p.price) || 0;
      const count = parseInt(p.count) || 0;

      const rawOldPrice = parseFloat(p.oldPrice || p.old_price || 0);
      const oldPrice = rawOldPrice > price ? rawOldPrice : null;

      let badge = null;
      if (count > 10) badge = 'hit';
      else if (oldPrice) badge = 'sale';

      // DYNAMIC SPECS: collect ALL extra fields beyond known ones
      const extraSpecs = {};
      Object.keys(p).forEach(key => {
        const cleanKey = key.trim();
        if (!KNOWN_FIELDS.includes(cleanKey) && p[key] !== '' && p[key] != null) {
          extraSpecs[cleanKey] = escapeHtml(String(p[key]));
        }
      });

      return {
        id,
        name: escapeHtml(p.model || 'Unknown Model'),
        brand: escapeHtml(p.brand || 'Unknown'),
        cpu: escapeHtml(p.cpu || 'Unknown CPU'),
        cpuBrand: p.cpu ? escapeHtml(p.cpu.split(' ')[0]) : 'Unknown',
        ram: parseInt(p.ram) || 0,
        ssd: parseInt(p.ssd) || 512,
        screen: escapeHtml(p.screen || '15.6" FHD'),
        gpu: escapeHtml(p.gpu || 'Integrated GPU'),
        price,
        oldPrice,
        count,
        image: mainImage,
        images: imagesArr,
        badge,
        extraSpecs, // dynamic fields from spreadsheet
      };
    })
    .filter(p => p.id !== '');
}

async function fetchProducts() {
  const cached = localStorage.getItem(CACHE_KEY);
  const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

  if (cached && cacheTime && Date.now() - parseInt(cacheTime) < CACHE_MINUTES * 60 * 1000) {
    try {
      const products = normalizeProducts(JSON.parse(cached));
      fetch(APPS_SCRIPT_URL, { redirect: 'follow' })
        .then(r => r.json())
        .then(data => {
          if (Array.isArray(data)) {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
            localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
          }
        })
        .catch(() => {});
      return products;
    } catch (e) {}
  }

  try {
    const res = await fetch(APPS_SCRIPT_URL, { redirect: 'follow' });
    const data = await res.json();
    const finalData = Array.isArray(data) ? data : [];
    localStorage.setItem(CACHE_KEY, JSON.stringify(finalData));
    localStorage.setItem(CACHE_TIME_KEY, String(Date.now()));
    return normalizeProducts(finalData);
  } catch (e) {
    console.error('Ошибка загрузки данных:', e);
    if (cached) {
      try { return normalizeProducts(JSON.parse(cached)); } catch(_) {}
    }
    return [];
  }
}

function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽';
}
