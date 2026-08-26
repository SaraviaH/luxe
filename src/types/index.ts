// ============================================================
// Luxe Glow Cosmetics — TypeScript Interfaces & Types
// ============================================================

export type TabName = 'home' | 'nosotros' | 'contacto' | 'blog' | 'promociones' | 'favoritos';

export type ProductCategory = 'all' | 'facial' | 'maquillaje' | 'fragancias';

export interface Product {
  id: number;
  name: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryName: string;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  description: string;
}

export interface CartItem {
  id: number;
  product: Product;
  qty: number;
}

export interface ToastMessage {
  id: string;
  message: string;
}
