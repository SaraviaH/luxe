// ============================================================
// Favoritos.tsx — Página de Lista de Favoritos / Wishlist
// Estado: Por hacer (En Desarrollo)
// ============================================================

import type { TabName } from '../../types';
import './Favoritos.css';

interface FavoritosProps {
  onNavigate: (tab: TabName) => void;
}

const FEATURES = [
  { icon: '❤️', title: 'Guardar productos', text: 'Lista personal de deseos' },
  { icon: '🔔', title: 'Alertas de precio', text: 'Notificación de rebajas' },
];

export default function Favoritos({ onNavigate }: FavoritosProps) {
  return (
    <main className="favoritos__page">
      <div className="favoritos__card">
        <div className="favoritos__icon_wrapper" aria-hidden="true">❤️</div>

        <span className="favoritos__status_tag">⏱ Sección por hacer (En Desarrollo)</span>

        <h1 className="favoritos__title">Mis Favoritos &amp; Wishlist</h1>

        <p className="favoritos__desc">
          Estamos desarrollando tu lista personal de productos favoritos con
          alertas de precio y sincronización de cuenta para no perder nada que te encante.
        </p>

        <div className="favoritos__features_grid">
          {FEATURES.map(({ icon, title, text }) => (
            <div key={title} className="favoritos__feature_card">
              <span className="favoritos__feature_icon" aria-hidden="true">{icon}</span>
              <p className="favoritos__feature_title">{title}</p>
              <p className="favoritos__feature_text">{text}</p>
            </div>
          ))}
        </div>

        <button
          className="favoritos__back_btn"
          onClick={() => onNavigate('home')}
          id="btn-favoritos-back"
        >
          ← Volver a la Tienda
        </button>
      </div>
    </main>
  );
}
