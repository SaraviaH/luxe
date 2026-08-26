// ============================================================
// CartDrawer.tsx — Panel lateral del carrito de compras
// Slide-in desde la derecha, gestión de items, checkout
// ============================================================

import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, cartSubtotal, removeFromCart, updateQty, clearCart, showToast } =
    useCart();

  if (!isOpen) return null;

  function handleCheckout() {
    showToast('¡Pedido simulado con éxito! Gracias por tu preferencia en Luxe Glow. 🎉');
    clearCart();
    onClose();
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="cart_drawer__overlay"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className="cart_drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="cart_drawer__header">
          <h2 className="cart_drawer__title">
            <span className="cart_drawer__title_icon">🛍</span>
            Bolsa de Compras
          </h2>
          <button
            className="cart_drawer__close_btn"
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart_drawer__body">
          {cartItems.length === 0 ? (
            <div className="cart_drawer__empty">
              <span className="cart_drawer__empty_icon">🛒</span>
              <p className="cart_drawer__empty_text">
                Tu carrito está vacío actualmente.
              </p>
              <button className="cart_drawer__empty_btn" onClick={onClose}>
                Explorar Cosméticos
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart_drawer__item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cart_drawer__item_img"
                />
                <div className="cart_drawer__item_info">
                  <p className="cart_drawer__item_name">{item.product.name}</p>
                  <p className="cart_drawer__item_price">
                    ${item.product.price.toFixed(2)} c/u
                  </p>
                  <div className="cart_drawer__item_qty_controls">
                    <button
                      className="cart_drawer__qty_btn"
                      onClick={() => updateQty(item.id, -1)}
                      aria-label="Reducir cantidad"
                    >
                      −
                    </button>
                    <span className="cart_drawer__qty_value">{item.qty}</span>
                    <button
                      className="cart_drawer__qty_btn"
                      onClick={() => updateQty(item.id, 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart_drawer__item_right">
                  <span className="cart_drawer__item_total">
                    ${(item.product.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    className="cart_drawer__item_remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Eliminar ${item.product.name}`}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart_drawer__footer">
            <div className="cart_drawer__subtotal_row">
              <span className="cart_drawer__subtotal_label">Subtotal:</span>
              <span className="cart_drawer__subtotal_value">
                ${cartSubtotal.toFixed(2)}
              </span>
            </div>
            <button
              className="cart_drawer__checkout_btn"
              onClick={handleCheckout}
              id="btn-checkout"
            >
              Procesar Compra →
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
