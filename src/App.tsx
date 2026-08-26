// ============================================================
// App.tsx — Orquestador principal de la aplicación
// Router simple con estado de tab, CartProvider global
// ============================================================

import { useState } from 'react';
import type { TabName } from './types';
import { CartProvider } from './context/CartContext';

// Componentes de layout
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/Cart/CartDrawer';
import ToastNotification from './components/Toast/ToastNotification';

// Páginas
import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import Blog from './pages/Blog/Blog';
import Promociones from './pages/Promociones/Promociones';
import Favoritos from './pages/Favoritos/Favoritos';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('home');
  const [cartOpen, setCartOpen] = useState(false);

  function handleNavigate(tab: TabName) {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPage() {
    switch (activeTab) {
      case 'nosotros':
        return <Nosotros onNavigate={handleNavigate} />;
      case 'contacto':
        return <Contacto onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'promociones':
        return <Promociones onNavigate={handleNavigate} />;
      case 'favoritos':
        return <Favoritos onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  }

  return (
    <CartProvider>
      {/* Navbar fijo arriba */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Contenido de la página activa */}
      {renderPage()}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Carrito lateral */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Notificaciones Toast */}
      <ToastNotification />
    </CartProvider>
  );
}
