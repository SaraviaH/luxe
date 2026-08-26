// ============================================================
// Luxe Glow Cosmetics — Catálogo de Productos
// Datos tipados con TypeScript
// ============================================================

import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 101,
    name: 'Sérum Facial Rose Radiance',
    category: 'facial',
    categoryName: 'Cuidado Facial',
    price: 49.99,
    rating: 5.0,
    reviews: 124,
    badge: 'Más Vendido',
    image: '/assets/images/serum_rose.png',
    description:
      'Sérum concentrado con extractos puros de rosas botánicas y ácido hialurónico para una piel luminosa e hidratada.',
  },
  {
    id: 102,
    name: 'Labial Velvet Gold Matte',
    category: 'maquillaje',
    categoryName: 'Maquillaje',
    price: 29.5,
    rating: 4.8,
    reviews: 89,
    badge: 'Edición Lujo',
    image: '/assets/images/lipstick_velvet.png',
    description:
      'Labial mate de textura sedosa de larga duración en estuche dorado bañado con pigmentos intensos.',
  },
  {
    id: 103,
    name: 'Crema Hidratante Hydra Glow',
    category: 'facial',
    categoryName: 'Cuidado Facial',
    price: 58.0,
    rating: 4.9,
    reviews: 96,
    badge: 'Orgánico',
    image: '/assets/images/cream_hydra.png',
    description:
      'Crema nutritiva ultra ligera que restaura la barrera cutánea con péptidos naturales y acabado sedoso.',
  },
  {
    id: 104,
    name: "Perfume Éclat D'Or Luxury",
    category: 'fragancias',
    categoryName: 'Fragancias',
    price: 85.0,
    rating: 5.0,
    reviews: 67,
    badge: 'Exclusivo',
    image: '/assets/images/perfume_luxe.png',
    description:
      'Fragancia envolvente con notas de jazmín real, ámbar cálido y flor de azahar en frasco de cristal tallado.',
  },
];
