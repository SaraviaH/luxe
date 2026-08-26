// ============================================================
// Home.tsx — Página principal de la tienda
// Ensambla HeroBanner + ProductGrid + InfoBanner
// ============================================================

import type { TabName } from '../../types';
import HeroBanner from './HeroBanner/HeroBanner';
import ProductGrid from './ProductGrid/ProductGrid';
import InfoBanner from './InfoBanner/InfoBanner';
import './Home.css';

interface HomeProps {
  onNavigate: (tab: TabName) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main className="home__page">
      <HeroBanner onNavigate={onNavigate} />
      <ProductGrid />
      <InfoBanner />
    </main>
  );
}
