/**
 * Luxe Glow Cosmetics — tienda.js
 * Control interactivo de la tienda: filtrado en vivo, buscador, ordenamiento y modal de vista rápida
 */

const Tienda = {
  currentCategory: 'all',
  searchQuery: '',
  currentSort: 'featured',
  modalCurrentProduct: null,
  modalQty: 1,

  init() {
    this.renderProducts();
    this.bindEvents();
    this.updateCounter();
  },

  getFilteredProducts() {
    let list = [...(window.Cart ? Cart.products : [])];

    // Filtro por categoría
    if (this.currentCategory !== 'all') {
      list = list.filter(p => p.category === this.currentCategory);
    }

    // Filtro por búsqueda de texto
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        (p.ingredients && p.ingredients.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q))
      );
    }

    // Ordenamiento
    switch (this.currentSort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Mantener orden predeterminado
        break;
    }

    return list;
  },

  renderProducts() {
    const grid = document.getElementById('tienda-product-grid');
    const emptyState = document.getElementById('tienda-empty-state');
    if (!grid) return;

    const products = this.getFilteredProducts();

    if (products.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      this.updateCounter(0);
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');

    grid.innerHTML = products.map(product => `
      <div class="col-12 col-md-6 col-lg-3 d-flex">
        <div class="store-product-card w-100">
          <div class="store-img-wrapper">
            ${product.badge ? `<span class="store-product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="store-img" loading="lazy">
            <button class="btn quick-view-overlay-btn" onclick="Tienda.openQuickView(${product.id})">
              <i class="fas fa-eye me-1"></i> Vista Rápida
            </button>
          </div>
          <div class="store-product-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="store-category-tag">${product.categoryName}</span>
              <div class="store-rating">
                <i class="fas fa-star text-gold"></i>
                <span class="fw-bold text-dark">${product.rating.toFixed(1)}</span>
                <small class="text-muted">(${product.reviews})</small>
              </div>
            </div>
            <h3 class="store-title" role="button" onclick="Tienda.openQuickView(${product.id})">${product.name}</h3>
            <p class="store-desc">${product.description}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
              <div class="store-price-container">
                <span class="store-current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="store-old-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
              </div>
              <button class="btn btn-luxe-primary btn-sm px-3" onclick="Cart.add(${product.id})" aria-label="Añadir ${product.name} al carrito">
                <i class="fas fa-plus me-1"></i> Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    this.updateCounter(products.length);
  },

  updateCounter(count) {
    const badge = document.getElementById('products-count-badge');
    if (!badge) return;
    const total = typeof count === 'number' ? count : this.getFilteredProducts().length;
    badge.textContent = `${total} ${total === 1 ? 'producto' : 'productos'}`;
  },

  openQuickView(productId) {
    const product = (window.Cart ? Cart.products : []).find(p => p.id === productId);
    if (!product) return;

    this.modalCurrentProduct = product;
    this.modalQty = 1;

    // Poblar elementos del modal
    document.getElementById('qv-img').src = product.image;
    document.getElementById('qv-img').alt = product.name;
    document.getElementById('qv-badge').textContent = product.badge || 'Luxe Glow';
    document.getElementById('qv-category').textContent = product.categoryName;
    document.getElementById('qv-title').textContent = product.name;
    document.getElementById('qv-price').textContent = `$${product.price.toFixed(2)}`;
    
    const oldPriceEl = document.getElementById('qv-old-price');
    if (product.originalPrice) {
      oldPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
      oldPriceEl.classList.remove('d-none');
    } else {
      oldPriceEl.classList.add('d-none');
    }

    document.getElementById('qv-rating').innerHTML = `
      <i class="fas fa-star text-gold"></i>
      <span class="fw-bold ms-1">${product.rating.toFixed(1)}</span>
      <span class="text-muted ms-1">(${product.reviews} valoraciones verificadas)</span>
    `;

    document.getElementById('qv-volume').textContent = product.volume || 'Formato estándar';
    document.getElementById('qv-skintype').textContent = product.skinType || 'Todo tipo de piel';
    document.getElementById('qv-desc').textContent = product.description;

    // Beneficios
    const benefitsList = document.getElementById('qv-benefits');
    if (product.benefits && product.benefits.length > 0) {
      benefitsList.innerHTML = product.benefits.map(b => `
        <div class="benefit-bullet">
          <i class="fas fa-check-circle"></i>
          <span>${b}</span>
        </div>
      `).join('');
    } else {
      benefitsList.innerHTML = '';
    }

    // INCI e instrucciones
    document.getElementById('qv-ingredients').textContent = product.ingredients || 'Extractos botánicos certificados.';
    document.getElementById('qv-howtouse').textContent = product.howToUse || 'Aplicar según rutina diaria recomendada.';

    // Resetear contador de cantidad
    this.updateModalQtyDisplay();

    // Abrir modal con Bootstrap
    const modalEl = document.getElementById('quickViewModal');
    if (modalEl && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  },

  updateModalQty(delta) {
    this.modalQty = Math.max(1, this.modalQty + delta);
    this.updateModalQtyDisplay();
  },

  updateModalQtyDisplay() {
    const qtyEl = document.getElementById('qv-qty-display');
    if (qtyEl) qtyEl.textContent = this.modalQty;
  },

  addCurrentFromModal() {
    if (!this.modalCurrentProduct || !window.Cart) return;

    for (let i = 0; i < this.modalQty; i++) {
      const idx = Cart.cart.findIndex(item => item.id === this.modalCurrentProduct.id);
      if (idx > -1) {
        Cart.cart[idx].qty += 1;
      } else {
        Cart.cart.push({ id: this.modalCurrentProduct.id, product: this.modalCurrentProduct, qty: 1 });
      }
    }

    Cart._save();
    Cart.updateBadge();
    Cart.renderOffcanvas();
    Cart.showToast(`¡<b>${this.modalQty}x ${this.modalCurrentProduct.name}</b> añadido al carrito!`);

    // Cerrar modal
    const modalEl = document.getElementById('quickViewModal');
    if (modalEl && window.bootstrap) {
      bootstrap.Modal.getInstance(modalEl)?.hide();
    }
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentSort = 'featured';

    const searchInput = document.getElementById('tienda-search');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('tienda-sort');
    if (sortSelect) sortSelect.value = 'featured';

    document.querySelectorAll('.store-filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
    });

    this.renderProducts();
  },

  bindEvents() {
    // Filtros de categoría
    const pills = document.querySelectorAll('.store-filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentCategory = pill.getAttribute('data-filter') || 'all';
        this.renderProducts();
      });
    });

    // Buscador en vivo
    const searchInput = document.getElementById('tienda-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        this.searchQuery = e.target.value;
        this.renderProducts();
      });
    }

    // Selector de orden
    const sortSelect = document.getElementById('tienda-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        this.currentSort = e.target.value;
        this.renderProducts();
      });
    }

    // Botón de reset en empty state
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetFilters());
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Tienda.init();
});
