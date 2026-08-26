// ============================================================
// ProductGrid.tsx — Catálogo de productos con filtros
// Filter pills por categoría + grid responsivo de tarjetas
// ============================================================

import { useState } from 'react';
import type { ProductCategory } from '../../../types';
import { products } from '../../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
  initialCategory?: ProductCategory;
}

const FILTER_OPTIONS: { label: string; value: ProductCategory }[] = [
  { label: 'Todos los Productos', value: 'all' },
  { label: 'Cuidado Facial', value: 'facial' },
  { label: 'Maquillaje', value: 'maquillaje' },
  { label: 'Fragancias', value: 'fragancias' },
];

export default function ProductGrid({ initialCategory = 'all' }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory);

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="product_grid__section" id="catalogo" aria-labelledby="catalogo-title">
      {/* Encabezado */}
      <div className="product_grid__header">
        <span className="product_grid__eyebrow">Nuestra Selección Elegante</span>
        <h2 className="product_grid__title" id="catalogo-title">
          Productos Destacados
        </h2>
        <div className="product_grid__divider" aria-hidden="true" />
      </div>

      {/* Filtros */}
      <div
        className="product_grid__filters"
        role="group"
        aria-label="Filtrar productos por categoría"
      >
        {FILTER_OPTIONS.map(({ label, value }) => (
          <button
            key={value}
            className={`product_grid__filter_pill${
              activeCategory === value ? ' product_grid__filter_pill_active' : ''
            }`}
            onClick={() => setActiveCategory(value)}
            aria-pressed={activeCategory === value}
            id={`filter-${value}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="product_grid__grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="product_grid__empty">No hay productos en esta categoría.</p>
        )}
      </div>
    </section>
  );
}
