// ============================================================
// Promociones.tsx — Página de Ofertas y Promociones
// Estado: Por hacer (En Desarrollo)
// ============================================================

import type { TabName } from '../../types';
import './Promociones.css';

interface PromocionesProps {
  onNavigate: (tab: TabName) => void;
}

const PREVIEW_DEALS = [
  { icon: '🏷️', title: '2x1 en Serums', text: 'Próximamente' },
  { icon: '🎁', title: 'Pack Regalo Lujo', text: 'Próximamente' },
  { icon: '💸', title: 'Descuento VIP 30%', text: 'Próximamente' },
];

export default function Promociones({ onNavigate }: PromocionesProps) {
  return (
    <main className="promociones__page">
      <div className="promociones__card">
        <div className="promociones__icon_wrapper" aria-hidden="true">🏷️</div>

        <span className="promociones__status_tag">⏱ Sección por hacer (En Desarrollo)</span>

        <h1 className="promociones__title">Ofertas &amp; Promociones Exclusivas</h1>

        <p className="promociones__desc">
          Estamos preparando descuentos especiales, packs de regalo y ofertas
          exclusivas para miembros de la comunidad Luxe Glow.
        </p>

        <div className="promociones__deals_grid">
          {PREVIEW_DEALS.map(({ icon, title, text }) => (
            <div key={title} className="promociones__deal_card">
              <span className="promociones__deal_icon" aria-hidden="true">{icon}</span>
              <p className="promociones__deal_title">{title}</p>
              <p className="promociones__deal_text">{text}</p>
            </div>
          ))}
        </div>

        <button
          className="promociones__back_btn"
          onClick={() => onNavigate('home')}
          id="btn-promociones-back"
        >
          ← Volver a la Tienda
        </button>
      </div>
    </main>
  );
}
