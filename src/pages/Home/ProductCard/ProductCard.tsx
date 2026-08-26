// ============================================================
// ProductCard.tsx — Tarjeta individual de producto
// Con animaciones hover, badge, rating, precio y botón agregar
// ============================================================

import type { Product } from '../../../types';
import { useCart } from '../../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <article className="product_card__wrapper">
      {/* Imagen */}
      <div className="product_card__img_area">
        <span className="product_card__badge">{product.badge}</span>
        <img
          src={product.image}
          alt={product.name}
          className="product_card__img"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="product_card__body">
        <div className="product_card__meta_row">
          <span className="product_card__category">{product.categoryName}</span>
          <div className="product_card__rating" aria-label={`Rating: ${product.rating} estrellas`}>
            <span className="product_card__rating_star">★</span>
            <span>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
        </div>

        <h2 className="product_card__title">{product.name}</h2>
        <p className="product_card__desc">{product.description}</p>

        <div className="product_card__footer">
          <span className="product_card__price">${product.price.toFixed(2)}</span>
          <button
            className="product_card__add_btn"
            onClick={() => addToCart(product)}
            aria-label={`Añadir ${product.name} al carrito`}
            id={`btn-add-${product.id}`}
          >
            + Añadir
          </button>
        </div>
      </div>
    </article>
  );
}
