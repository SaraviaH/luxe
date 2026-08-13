/**
 * Componente: Contacto (Apartado de atención al cliente y formulario)
 * Estado: Marcado como "Por completar / En construcción" según requerimientos
 */

const ContactoComponent = {
  render: function() {
    return `
      <div class="container py-4">
        <div class="placeholder-card">
          <div class="placeholder-icon-wrapper">
            <i class="fas fa-hammer"></i>
          </div>
          <span class="status-tag">
            <i class="fas fa-exclamation-triangle me-1"></i> Sección por completar (En Construcción)
          </span>
          <h2 class="font-serif display-6 fw-bold text-burgundy mb-3">Atención al Cliente & Asesoría</h2>
          <p class="lead text-muted mx-auto mb-4" style="max-width: 650px;">
            El módulo interactivo de soporte directo, agendamiento de citas de skincare y formulario de contacto detallado está por completar.
          </p>

          <div class="card bg-rose-soft border-0 p-4 mx-auto mb-4" style="max-width: 550px;">
            <h6 class="fw-bold text-burgundy mb-3"><i class="fas fa-bell text-gold me-2"></i>¿Deseas recibir una notificación cuando esté listo?</h6>
            <div class="input-group">
              <input type="email" class="form-control rounded-pill-start border-gold" placeholder="Ingresa tu correo electrónico...">
              <button class="btn btn-luxe-primary rounded-pill-end px-4" onclick="App.showToast('¡Gracias! Te avisaremos apenas el módulo esté completo.')">
                Suscribirme
              </button>
            </div>
          </div>

          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-luxe-primary" onclick="App.navigateTo('home')">
              <i class="fas fa-shopping-bag me-2"></i> Explorar Catálogo
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
