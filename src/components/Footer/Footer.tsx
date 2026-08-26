// ============================================================
// Footer.tsx — Componente de Pie de Página
// 4 columnas responsivas: brand, navegación, categorías, contacto
// ============================================================

import type { TabName, ProductCategory } from '../../types';
import './Footer.css';

interface FooterProps {
  onNavigate: (tab: TabName) => void;
  onFilterCategory?: (cat: ProductCategory) => void;
}

export default function Footer({ onNavigate, onFilterCategory }: FooterProps) {
  const year = new Date().getFullYear();

  function handleCategoryFilter(cat: ProductCategory) {
    onNavigate('home');
    onFilterCategory?.(cat);
  }

  return (
    <footer className="footer__wrapper" role="contentinfo">
      <div className="footer__container">
        <div className="footer__grid">

          {/* Columna 1 — Brand & Sociales */}
          <div>
            <span className="footer__brand">
              Luxe <span className="footer__brand_span">Glow</span>
            </span>
            <p className="footer__brand_desc">
              Cosmética de lujo formulada con ingredientes naturales de alta eficacia
              para realzar tu belleza intrínseca.
            </p>
            <div className="footer__socials">
              <a
                href="https://instagram.com"
                className="footer__social_icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                className="footer__social_icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                f
              </a>
              <a
                href="https://pinterest.com"
                className="footer__social_icon"
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                P
              </a>
              <a
                href="https://tiktok.com"
                className="footer__social_icon"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                ♪
              </a>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h3 className="footer__col_title">Navegación</h3>
            <ul className="footer__links_list">
              <li>
                <button className="footer__link" onClick={() => onNavigate('home')}>
                  Inicio
                </button>
              </li>
              <li>
                <button className="footer__link" onClick={() => onNavigate('nosotros')}>
                  Nosotros
                </button>
              </li>
              <li>
                <button className="footer__link" onClick={() => onNavigate('contacto')}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Categorías */}
          <div>
            <h3 className="footer__col_title">Categorías</h3>
            <ul className="footer__links_list">
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleCategoryFilter('facial')}
                >
                  Cuidado Facial
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleCategoryFilter('maquillaje')}
                >
                  Maquillaje Velvet
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => handleCategoryFilter('fragancias')}
                >
                  Fragancias Exclusivas
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h3 className="footer__col_title">Atención al Cliente</h3>
            <div className="footer__contact_item">
              <span className="footer__contact_icon">📍</span>
              <span>Av. Luxe Beauty 102, Spa District</span>
            </div>
            <div className="footer__contact_item">
              <span className="footer__contact_icon">📞</span>
              <span>+52 (55) 8900-3456</span>
            </div>
            <div className="footer__contact_item">
              <span className="footer__contact_icon">✉</span>
              <span>contacto@luxeglow.com</span>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Luxe Glow Cosmetics. Todos los derechos reservados.
          </p>
          <p className="footer__copy">Diseñado con React + TypeScript &amp; Vite</p>
        </div>
      </div>
    </footer>
  );
}
