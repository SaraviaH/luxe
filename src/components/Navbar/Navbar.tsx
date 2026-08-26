// ============================================================
// Navbar.tsx — Componente de Navegación Superior
// Glassmorphism, sticky, responsive con hamburger menu
// ============================================================

import { useState } from 'react';
import type { TabName } from '../../types';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

interface NavbarProps {
  activeTab: TabName;
  onNavigate: (tab: TabName) => void;
  onOpenCart: () => void;
}

const NAV_LINKS: { label: string; tab: TabName; icon: string }[] = [
  { label: 'Inicio / Tienda', tab: 'home', icon: '🛍' },
  { label: 'Nosotros', tab: 'nosotros', icon: '🌿' },
  { label: 'Blog', tab: 'blog', icon: '📝' },
  { label: 'Promociones', tab: 'promociones', icon: '🏷️' },
  { label: 'Favoritos', tab: 'favoritos', icon: '❤️' },
  { label: 'Contacto', tab: 'contacto', icon: '✉️' },
];

export default function Navbar({ activeTab, onNavigate, onOpenCart }: NavbarProps) {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(tab: TabName) {
    onNavigate(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="navbar__wrapper">
      <div className="navbar__container">
        {/* Logo */}
        <button
          className="navbar__brand"
          onClick={() => handleNavigate('home')}
          aria-label="Ir al inicio"
        >
          Luxe <span className="navbar__brand_span">Glow</span>
        </button>

        {/* Links Desktop */}
        <nav className="navbar__links" aria-label="Navegación principal">
          {NAV_LINKS.map(({ label, tab }) => (
            <button
              key={tab}
              className={`navbar__link${activeTab === tab ? ' navbar__link_active' : ''}`}
              onClick={() => handleNavigate(tab)}
              aria-current={activeTab === tab ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Carrito + Hamburguesa */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            className="navbar__cart_button"
            onClick={onOpenCart}
            aria-label={`Carrito de compras, ${cartCount} items`}
            id="btn-open-cart"
          >
            <span className="navbar__cart_icon">🛍</span>
            <span>Mi Carrito</span>
            <span className="navbar__cart_badge" aria-live="polite">
              {cartCount}
            </span>
          </button>

          <button
            className={`navbar__toggle${menuOpen ? ' navbar__toggle_open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
          >
            <span className="navbar__toggle_bar" />
            <span className="navbar__toggle_bar" />
            <span className="navbar__toggle_bar" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="navbar__mobile_menu" aria-label="Menú móvil">
          {NAV_LINKS.map(({ label, tab }) => (
            <button
              key={tab}
              className={`navbar__mobile_link${activeTab === tab ? ' navbar__mobile_link_active' : ''}`}
              onClick={() => handleNavigate(tab)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
