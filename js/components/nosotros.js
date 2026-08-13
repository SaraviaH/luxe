/**
 * Componente: Nosotros (Apartado sobre la marca)
 * Estado: Marcado como "Por hacer / En desarrollo" según requerimientos
 */

const NosotrosComponent = {
  render: function() {
    return `
      <div class="container py-4">
        <div class="placeholder-card">
          <div class="placeholder-icon-wrapper">
            <i class="fas fa-tools"></i>
          </div>
          <span class="status-tag">
            <i class="fas fa-clock me-1"></i> Sección por hacer (En Desarrollo)
          </span>
          <h2 class="font-serif display-6 fw-bold text-burgundy mb-3">Conoce Nuestra Historia & Filosofía</h2>
          <p class="lead text-muted mx-auto mb-4" style="max-width: 650px;">
            Estamos preparando la historia completa de Luxe Glow Cosmetics, nuestra misión con la cosmética consciente y nuestros laboratorios asociados.
          </p>

          <div class="row g-4 justify-content-center text-start my-4">
            <div class="col-md-5">
              <div class="p-3 rounded-3 bg-light border border-dashed text-center">
                <i class="fas fa-flask text-gold fs-3 mb-2"></i>
                <h6 class="fw-bold text-burgundy">Formulación Limpia</h6>
                <small class="text-muted d-block">Módulos de información de ingredientes en desarrollo.</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="p-3 rounded-3 bg-light border border-dashed text-center">
                <i class="fas fa-seedling text-gold fs-3 mb-2"></i>
                <h6 class="fw-bold text-burgundy">Sostenibilidad</h6>
                <small class="text-muted d-block">Reporte de impacto ambiental por publicar.</small>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-luxe-primary" onclick="App.navigateTo('home')">
              <i class="fas fa-arrow-left me-2"></i> Volver a la Tienda
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
