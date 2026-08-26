// ============================================================
// InfoBanner.tsx — Banner de beneficios y servicios
// 3 columnas: envío, dermatológico, garantía
// ============================================================

import './InfoBanner.css';

const BENEFITS = [
  {
    icon: '🚚',
    title: 'Envío Express Gratis',
    text: 'En compras superiores a $50 en todo el país.',
  },
  {
    icon: '🏆',
    title: '100% Dermatológico',
    text: 'Formulados clínicamente sin parabenos ni crueldad animal.',
  },
  {
    icon: '↩',
    title: 'Garantía de Satisfacción',
    text: 'Devolución flexible hasta 30 días posteriores.',
  },
];

export default function InfoBanner() {
  return (
    <section className="info_banner__section" aria-label="Beneficios y servicios">
      {BENEFITS.map(({ icon, title, text }) => (
        <div key={title} className="info_banner__item">
          <span className="info_banner__icon" aria-hidden="true">
            {icon}
          </span>
          <h3 className="info_banner__title">{title}</h3>
          <p className="info_banner__text">{text}</p>
        </div>
      ))}
    </section>
  );
}
