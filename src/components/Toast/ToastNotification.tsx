// ============================================================
// ToastNotification.tsx — Notificaciones temporales tipo toast
// Auto-dismiss a los 4s, botón de cierre manual
// ============================================================

import { useCart } from '../../context/CartContext';
import './ToastNotification.css';

export default function ToastNotification() {
  const { toasts, dismissToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div
      className="toast_notification__container"
      role="region"
      aria-label="Notificaciones"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="toast_notification__item" role="alert">
          <span className="toast_notification__icon">✓</span>
          <span
            className="toast_notification__message"
            dangerouslySetInnerHTML={{ __html: toast.message }}
          />
          <button
            className="toast_notification__close"
            onClick={() => dismissToast(toast.id)}
            aria-label="Cerrar notificación"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
