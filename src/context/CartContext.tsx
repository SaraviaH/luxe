// ============================================================
// Luxe Glow Cosmetics — CartContext
// Estado global del carrito con useReducer + Toast
// ============================================================

import {
  createContext,
  useContext,
  useReducer,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { CartItem, Product, ToastMessage } from '../types';

// ── Cart State & Actions ────────────────────────────────────

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'UPDATE_QTY'; id: number; delta: number }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex((item) => item.id === action.product.id);
      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          qty: updated[existingIndex].qty + 1,
        };
        return { items: updated };
      }
      return {
        items: [
          ...state.items,
          { id: action.product.id, product: action.product, qty: 1 },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.id) };
    case 'UPDATE_QTY': {
      const updated = state.items
        .map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + action.delta } : item
        )
        .filter((item) => item.qty > 0);
      return { items: updated };
    }
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

// ── Context Interface ───────────────────────────────────────

interface CartContextValue {
  cartItems: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  clearCart: () => void;
  toasts: ToastMessage[];
  showToast: (message: string) => void;
  dismissToast: (id: string) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// ── Provider ────────────────────────────────────────────────

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const cartCount = state.items.reduce((total, item) => total + item.qty, 0);
  const cartSubtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const addToCart = useCallback((product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
    showToast(`<b>${product.name}</b> añadido al carrito`);
  }, []);

  const removeFromCart = useCallback((id: number) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    dispatch({ type: 'UPDATE_QTY', id, delta });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const showToast = useCallback((message: string) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        toasts,
        showToast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ── Custom Hooks ────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
