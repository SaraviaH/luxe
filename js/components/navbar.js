/**
 * Componente: Navbar (Navegación Superior)
 * Renderiza el menú de navegación elegante y botón de carrito
 */
const NavbarComponent = {
  render: function(activeTab = 'home', cartCount = 0) {
    return `
      <nav class="navbar navbar-expand-lg navbar-luxe sticky-top">
        <div class="container">
          <a class="navbar-brand navbar-brand-luxe" href="#" onclick="App.navigateTo('home'); return false;">
            Luxe <span>Glow</span>
          </a>
          
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLuxeContent" aria-controls="navbarLuxeContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-burgundy fs-4"></i>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarLuxeContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <a class="nav-link nav-link-luxe ${activeTab === 'home' ? 'active' : ''}" href="#" onclick="App.navigateTo('home'); return false;">
                  <i class="fas fa-store me-1"></i> Inicio / Tienda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-luxe ${activeTab === 'nosotros' ? 'active' : ''}" href="#" onclick="App.navigateTo('nosotros'); return false;">
                  <i class="fas fa-leaf me-1"></i> Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-luxe ${activeTab === 'contacto' ? 'active' : ''}" href="#" onclick="App.navigateTo('contacto'); return false;">
                  <i class="fas fa-envelope me-1"></i> Contacto
                </a>
              </li>
            </ul>
            
            <div class="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
              <button class="btn cart-icon-btn d-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                <i class="fas fa-shopping-bag fs-5 me-2"></i>
                <span>Mi Carrito</span>
                <span class="cart-badge" id="navbar-cart-count">${cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
};
