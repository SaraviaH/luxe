/**
 * Componente: Footer (Pie de Página)
 * Renderiza la sección inferior de derechos, marca y enlaces rápidos
 */
const FooterComponent = {
  render: function() {
    return `
      <footer class="footer-luxe">
        <div class="container">
          <div class="row g-4 mb-4">
            <div class="col-lg-4 col-md-6">
              <h3 class="footer-brand">Luxe <span>Glow</span></h3>
              <p class="small text-white-50 mb-3">
                Cosmética de lujo formulada con ingredientes naturales de alta eficacia para realzar tu belleza intrínseca.
              </p>
              <div>
                <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
                <a href="#" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <h6 class="text-uppercase text-gold fw-bold mb-3 tracking-wider">Navegación</h6>
              <ul class="list-unstyled">
                <li><a href="#" onclick="App.navigateTo('home'); return false;" class="footer-link">Inicio</a></li>
                <li><a href="#" onclick="App.navigateTo('nosotros'); return false;" class="footer-link">Nosotros</a></li>
                <li><a href="#" onclick="App.navigateTo('contacto'); return false;" class="footer-link">Contacto</a></li>
              </ul>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <h6 class="text-uppercase text-gold fw-bold mb-3 tracking-wider">Categorías</h6>
              <ul class="list-unstyled">
                <li><a href="#" onclick="App.filterProducts('facial'); return false;" class="footer-link">Cuidado Facial</a></li>
                <li><a href="#" onclick="App.filterProducts('maquillaje'); return false;" class="footer-link">Maquillaje Velvet</a></li>
                <li><a href="#" onclick="App.filterProducts('fragancias'); return false;" class="footer-link">Fragancias Exclusivas</a></li>
              </ul>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <h6 class="text-uppercase text-gold fw-bold mb-3 tracking-wider">Atención al Cliente</h6>
              <p class="small text-white-50 mb-2"><i class="fas fa-map-marker-alt text-gold me-2"></i> Av. Luxe Beauty 102, Spa District</p>
              <p class="small text-white-50 mb-2"><i class="fas fa-phone text-gold me-2"></i> +52 (55) 8900-3456</p>
              <p class="small text-white-50 mb-0"><i class="fas fa-envelope text-gold me-2"></i> contacto@luxeglow.com</p>
            </div>
          </div>
          
          <hr style="border-color: rgba(255, 255, 255, 0.1);">
          
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-2">
            <p class="small text-white-50 mb-2 mb-md-0">
              &copy; ${new Date().getFullYear()} Luxe Glow Cosmetics. Todos los derechos reservados.
            </p>
            <p class="small text-white-50 mb-0">
              Diseñado con Bootstrap 5 & Vanilla JS
            </p>
          </div>
        </div>
      </footer>
    `;
  }
};
