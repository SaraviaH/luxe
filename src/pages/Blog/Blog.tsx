// ============================================================
// Blog.tsx — Página de Blog / Artículos de Belleza
// Estado: Por hacer (En Desarrollo)
// ============================================================

import type { TabName } from '../../types';
import './Blog.css';

interface BlogProps {
  onNavigate: (tab: TabName) => void;
}

const PREVIEW_POSTS = [
  { icon: '💆', title: 'Rutina de noche para piel sensible' },
  { icon: '☀️', title: 'Protección solar todo el año' },
  { icon: '🌹', title: 'Ingredientes botánicos estrella' },
];

export default function Blog({ onNavigate }: BlogProps) {
  return (
    <main className="blog__page">
      <div className="blog__card">
        <div className="blog__icon_wrapper" aria-hidden="true">📝</div>

        <span className="blog__status_tag">⏱ Sección por hacer (En Desarrollo)</span>

        <h1 className="blog__title">Blog de Belleza &amp; Skincare</h1>

        <p className="blog__desc">
          Estamos preparando artículos, tutoriales y consejos de expertos sobre
          cuidado facial, tendencias de maquillaje y bienestar natural.
        </p>

        <div className="blog__preview_grid">
          {PREVIEW_POSTS.map(({ icon, title }) => (
            <div key={title} className="blog__preview_card">
              <span className="blog__preview_icon" aria-hidden="true">{icon}</span>
              <p className="blog__preview_title">{title}</p>
            </div>
          ))}
        </div>

        <button
          className="blog__back_btn"
          onClick={() => onNavigate('home')}
          id="btn-blog-back"
        >
          ← Volver a la Tienda
        </button>
      </div>
    </main>
  );
}
