// ============================================================
// Contacto.tsx — Página de Contacto
// Estado: En construcción — incluye suscripción por email
// ============================================================

import { useState } from 'react';
import type { TabName } from '../../types';
import { useCart } from '../../context/CartContext';
import './Contacto.css';

interface ContactoProps {
  onNavigate: (tab: TabName) => void;
}

export default function Contacto({ onNavigate }: ContactoProps) {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');

  function handleSubscribe() {
    if (!email.trim()) {
      showToast('Por favor ingresa tu correo electrónico.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Por favor ingresa un correo válido.');
      return;
    }
    showToast('¡Gracias! Te avisaremos cuando el módulo esté completo. 📧');
    setEmail('');
  }

  return (
    <main className="contacto__page">
      <div className="contacto__card">
        {/* Ícono */}
        <div className="contacto__icon_wrapper" aria-hidden="true">🔨</div>

        {/* Badge */}
        <span className="contacto__status_tag">⚠ Sección en Construcción</span>

        {/* Título */}
        <h1 className="contacto__title">Atención al Cliente &amp; Asesoría</h1>

        {/* Descripción */}
        <p className="contacto__desc">
          El módulo interactivo de soporte directo, agendamiento de citas de skincare y
          formulario de contacto detallado está por completar.
        </p>

        {/* Suscripción */}
        <div className="contacto__subscribe_card">
          <span className="contacto__subscribe_label">
            🔔 ¿Deseas recibir una notificación cuando esté listo?
          </span>
          <div className="contacto__input_group">
            <input
              type="email"
              className="contacto__email_input"
              placeholder="Ingresa tu correo electrónico..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              aria-label="Correo electrónico para suscripción"
              id="input-email-subscribe"
            />
            <button
              className="contacto__subscribe_btn"
              onClick={handleSubscribe}
              id="btn-subscribe"
            >
              Suscribirme
            </button>
          </div>
        </div>

        {/* Botón retorno */}
        <button
          className="contacto__back_btn"
          onClick={() => onNavigate('home')}
          id="btn-contacto-back"
        >
          🛍 Explorar Catálogo
        </button>
      </div>
    </main>
  );
}
