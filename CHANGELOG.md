# Changelog

Todos los cambios notables de **Luxe Glow Cosmetics** se documentan en este archivo.

El formato sigue la convención de [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y adopta **Versionado Semántico (`SemVer`)** (`MAJOR.MINOR.PATCH`).

## [Unreleased]

### Added
- Documentación inicial del repositorio (`README.md`), registro de cambios (`CHANGELOG.md`) y reglas de exclusión en `.gitignore`.
- Plantillas de reporte de incidentes y Pull Requests en `.github/`, junto con flujo de validación automática en GitHub Actions.

## [1.0.0] - 2026-11-19

### Added
- Arquitectura modular en HTML5, CSS3 y JavaScript nativo con carga dinámica de componentes (`header`, `footer`, `carousel`, `product-card`).
- Página principal (`index.html`), catálogo en `pages/tienda.html` con filtrado y carrito de compras persistente, y vistas informativas (`nosotros`, `ritual`, `ingredientes`, `diario`, `faq`, `envios`, `contacto`).
- Datos estructurados en JSON (`data/products.json`, `data/articles.json`, `data/carousel.json`) y estabilización inicial de producción en `main`.
