// ============================================================
// HeroBanner.tsx — Sección Hero principal de la tienda
// Imagen de fondo, overlay degradado, CTA buttons
// ============================================================

import type { TabName } from '../../../types';
import './HeroBanner.css';

interface HeroBannerProps {
  onNavigate: (tab: TabName) => void;
}

export default function HeroBanner({ onNavigate }: HeroBannerProps) {
  return (
    <section className="hero_banner__section" aria-label="Banner principal">
      <div className="hero_banner__overlay">
        <span className="hero_banner__tag">✨ Colección Primavera 2026</span>

        <h1 className="hero_banner__title">
          El Arte de la Nutrición &amp; El Brillo Natural
        </h1>

        <p className="hero_banner__subtitle">
          Descubre nuestra línea de cosmética de alta gama formulada para rejuvenecer,
          proteger y realzar tu piel cada día.
        </p>

        <div className="hero_banner__actions">
          <a href="#catalogo" className="hero_banner__btn_primary">
            🛍 Ver Catálogo
          </a>
          <button
            className="hero_banner__btn_outline"
            onClick={() => onNavigate('nosotros')}
          >
            Saber Más
          </button>
        </div>
      </div>

      {/* Círculo decorativo */}
      <div className="hero_banner__deco_circle" aria-hidden="true" />
    </section>
  );
}
