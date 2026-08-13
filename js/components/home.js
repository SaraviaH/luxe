/**
 * Componente: Home (Inicio / Tienda)
 * Contiene la vista principal de la tienda de cosméticos, catálogo de productos e interactividad
 */

const HomeComponent = {
  // Catálogo de productos con imágenes generadas por IA
  products: [
    {
      id: 101,
      name: "Sérum Facial Rose Radiance",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 49.99,
      rating: 5.0,
      reviews: 124,
      badge: "Más Vendido",
      image: "assets/images/serum_rose.png",
      description: "Sérum concentrado con extractos puros de rosas botánicas y ácido hialurónico para una piel luminosa e hidratada."
    },
    {
      id: 102,
      name: "Labial Velvet Gold Matte",
      category: "maquillaje",
      categoryName: "Maquillaje",
      price: 29.50,
      rating: 4.8,
      reviews: 89,
      badge: "Edición Lujo",
      image: "assets/images/lipstick_velvet.png",
      description: "Labial mate de textura sedosa de larga duración en estuche dorado bañado con pigmentos intensos."
    },
    {
      id: 103,
      name: "Crema Hidratante Hydra Glow",
      category: "facial",
      categoryName: "Cuidado Facial",
      price: 58.00,
      rating: 4.9,
      reviews: 96,
      badge: "Orgánico",
      image: "assets/images/cream_hydra.png",
      description: "Crema nutritiva ultra ligera que restaura la barrera cutánea con péptidos naturales y acabado sedoso."
    },
    {
      id: 104,
      name: "Perfume Éclat D'Or Luxury",
      category: "fragancias",
      categoryName: "Fragancias",
      price: 85.00,
      rating: 5.0,
      reviews: 67,
      badge: "Exclusivo",
      image: "assets/images/perfume_luxe.png",
      description: "Fragancia envolvente con notas de jazmín real, ambar cálido y flor de azahar en frasco de cristal tallado."
    }
  ],

  currentCategory: 'all',

  render: function() {
    const filteredProducts = this.currentCategory === 'all' 
      ? this.products 
      : this.products.filter(p => p.category === this.currentCategory);

    return `
      <!-- Hero Banner -->
      <section class="hero-banner d-flex align-items-center">
        <div class="hero-overlay">
          <span class="hero-tag"><i class="fas fa-sparkles me-1"></i> Colección Primavera 2026</span>
          <h1 class="hero-title">El Arte de la Nutrición & El Brillo Natural</h1>
          <p class="hero-subtitle">
            Descubre nuestra línea de cosmética de alta gama formulada para rejuvenecer, proteger y realzar tu piel cada día.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <a href="#catalogo" class="btn btn-luxe-primary">
              <i class="fas fa-shopping-bag me-2"></i> Ver Catálogo
            </a>
            <button class="btn btn-luxe-outline" onclick="App.navigateTo('nosotros')">
              Saber Más
            </button>
          </div>
        </div>
      </section>

      <!-- Seccion de Catalogo de Productos -->
      <section id="catalogo" class="py-4 mb-5">
        <div class="text-center mb-4">
          <span class="text-uppercase text-gold fw-bold tracking-wider fs-7">Nuestra Selección Elegante</span>
          <h2 class="font-serif display-6 fw-bold text-burgundy">Productos Destacados</h2>
          <div class="mx-auto" style="width: 60px; height: 3px; background: var(--color-gold); margin-top: 10px; margin-bottom: 20px;"></div>
        </div>

        <!-- Filtros de Categorías -->
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button class="filter-pill ${this.currentCategory === 'all' ? 'active' : ''}" onclick="HomeComponent.setCategory('all')">
            Todos los Productos
          </button>
          <button class="filter-pill ${this.currentCategory === 'facial' ? 'active' : ''}" onclick="HomeComponent.setCategory('facial')">
            Cuidado Facial
          </button>
          <button class="filter-pill ${this.currentCategory === 'maquillaje' ? 'active' : ''}" onclick="HomeComponent.setCategory('maquillaje')">
            Maquillaje
          </button>
          <button class="filter-pill ${this.currentCategory === 'fragancias' ? 'active' : ''}" onclick="HomeComponent.setCategory('fragancias')">
            Fragancias
          </button>
        </div>

        <!-- Grid de Productos -->
        <div class="row g-4">
          ${filteredProducts.map(product => `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="product-card">
                <div class="product-img-wrapper">
                  <span class="product-badge">${product.badge}</span>
                  <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-body">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="product-category">${product.categoryName}</span>
                    <div class="product-rating">
                      <i class="fas fa-star text-gold"></i>
                      <span>${product.rating}</span>
                      <small class="text-muted">(${product.reviews})</small>
                    </div>
                  </div>
                  <h3 class="product-title">${product.name}</h3>
                  <p class="product-desc">${product.description}</p>
                  <div class="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn btn-luxe-primary btn-sm px-3" onclick="App.addToCart(${product.id})">
                      <i class="fas fa-plus me-1"></i> Añadir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Banner Informativo de Envíos & Garantía -->
      <section class="row g-4 text-center my-5 py-4 bg-white rounded-4 shadow-sm border border-light">
        <div class="col-md-4">
          <div class="p-3">
            <i class="fas fa-shipping-fast text-gold fs-1 mb-3"></i>
            <h5 class="fw-bold text-burgundy">Envío Express Gratis</h5>
            <p class="small text-muted mb-0">En compras superiores a $50 en todo el país.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3">
            <i class="fas fa-award text-gold fs-1 mb-3"></i>
            <h5 class="fw-bold text-burgundy">100% Dermatológico</h5>
            <p class="small text-muted mb-0">Formulados clínicamente sin parabenos ni crueldad animal.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3">
            <i class="fas fa-undo text-gold fs-1 mb-3"></i>
            <h5 class="fw-bold text-burgundy">Garantía de Satisfacción</h5>
            <p class="small text-muted mb-0">Devolución flexible hasta 30 días posteriores.</p>
          </div>
        </div>
      </section>
    `;
  },

  setCategory: function(category) {
    this.currentCategory = category;
    App.refreshView();
  }
};
