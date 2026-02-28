// store.js — Reactive state management
const Store = {
  products: [],
  isLoading: true,

  cart: JSON.parse(localStorage.getItem('techshop_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('techshop_wishlist') || '[]'),
  compare: JSON.parse(localStorage.getItem('techshop_compare') || '[]'),

  _listeners: [],

  subscribe(fn) { this._listeners.push(fn); },

  _notifyTimer: null,
  _notify() {
    clearTimeout(this._notifyTimer);
    this._notifyTimer = setTimeout(() => {
      this._listeners.forEach(fn => fn());
    }, 0);
  },

  setProducts(products) {
    this.products = products;
    this.isLoading = false;
    this._notify();
  },

  addToCart(id) {
    if (this.cart.find(c => c.id === id)) return;
    this.cart.push({ id, qty: 1 });
    this._saveCart();
    this._notify();
  },

  removeFromCart(id) {
    this.cart = this.cart.filter(c => c.id !== id);
    this._saveCart();
    this._notify();
  },

  changeQty(id, delta) {
    this.cart = this.cart
      .map(c => {
        if (c.id !== id) return c;
        const p = this.products.find(x => x.id === id);
        const newQty = c.qty + delta;
        if (p && newQty > p.count) return c;
        return { ...c, qty: newQty };
      })
      .filter(c => c.qty > 0);
    this._saveCart();
    this._notify();
  },

  clearCart() {
    this.cart = [];
    this._saveCart();
    this._notify();
  },

  isInCart(id) { return this.cart.some(c => c.id === id); },
  cartCount() { return this.cart.reduce((s, c) => s + c.qty, 0); },
  _saveCart() { localStorage.setItem('techshop_cart', JSON.stringify(this.cart)); },

  toggleWishlist(id) {
    if (this.wishlist.includes(id)) {
      this.wishlist = this.wishlist.filter(x => x !== id);
    } else {
      this.wishlist.push(id);
    }
    localStorage.setItem('techshop_wishlist', JSON.stringify(this.wishlist));
    this._notify();
  },

  isInWishlist(id) { return this.wishlist.includes(id); },

  toggleCompare(id) {
    if (this.compare.includes(id)) {
      this.compare = this.compare.filter(x => x !== id);
    } else {
      if (this.compare.length >= 4) return false;
      this.compare.push(id);
    }
    localStorage.setItem('techshop_compare', JSON.stringify(this.compare));
    this._notify();
    return true;
  },

  isInCompare(id) { return this.compare.includes(id); },
  getProduct(id) { return this.products.find(p => p.id === id); },
};
