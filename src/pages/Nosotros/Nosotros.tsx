// ============================================================
// Nosotros.tsx — Página "Sobre Nosotros"
// Estado: En Desarrollo (placeholder premium)
// ============================================================

import type { TabName } from '../../types';
import './Nosotros.css';

interface NosotrosProps {
  onNavigate: (tab: TabName) => void;
}

const FEATURES = [
  {
    icon: '🧪',
    title: 'Formulación Limpia',
    text: 'Módulos de información de ingredientes en desarrollo.',
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad',
    text: 'Reporte de impacto ambiental por publicar.',
  },
];

export default function Nosotros({ onNavigate }: NosotrosProps) {
  return (
    <main className="nosotros__page">
      <div className="nosotros__card">
        {/* Ícono */}
        <div className="nosotros__icon_wrapper" aria-hidden="true">🔧</div>

        {/* Badge de estado */}
        <span className="nosotros__status_tag">⏱ Sección en Desarrollo</span>

        {/* Título */}
        <h1 className="nosotros__title">Conoce Nuestra Historia &amp; Filosofía</h1>

        {/* Descripción */}
        <p className="nosotros__desc">
          Estamos preparando la historia completa de Luxe Glow Cosmetics, nuestra misión
          con la cosmética consciente y nuestros laboratorios asociados.
        </p>

        {/* Features grid */}
        <div className="nosotros__features_grid">
          {FEATURES.map(({ icon, title, text }) => (
            <div key={title} className="nosotros__feature_card">
              <span className="nosotros__feature_icon" aria-hidden="true">
                {icon}
              </span>
              <h3 className="nosotros__feature_title">{title}</h3>
              <p className="nosotros__feature_text">{text}</p>
            </div>
          ))}
        </div>

        {/* Botón retorno */}
        <button
          className="nosotros__back_btn"
          onClick={() => onNavigate('home')}
          id="btn-nosotros-back"
        >
          ← Volver a la Tienda
        </button>
      </div>
    </main>
  );
}
