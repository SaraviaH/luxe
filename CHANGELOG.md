# Changelog

Todos los cambios notables de **Luxe Glow Cosmetics** se documentan en este archivo.

El formato sigue la convención de [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y adopta **Versionado Semántico (`SemVer`)** (`MAJOR.MINOR.PATCH`).

## [Unreleased]

## [1.1.0] - 2026-11-20

### Added
- Documentación inicial del repositorio (`README.md`), registro de cambios (`CHANGELOG.md`) y reglas de exclusión en `.gitignore`.
- Plantillas de reporte de incidentes y Pull Requests en `.github/`, junto con flujo de validación automática en GitHub Actions.
- Página completa de política de reembolsos (`pages/rembolso.html`) y vista modular de historial de pedidos (`pages/historial.html`).
- Enlaces directos hacia **Historial de Pedidos** y **Reembolsos** en la subnavegación del componente `footer`.

### Changed
- Barra superior unificada en `components/header/header.html` con información de envío express, seguimiento en tiempo real y garantía de reembolsos de 30 días.

## [1.0.0] - 2026-11-19

### Added
- Arquitectura modular en HTML5, CSS3 y JavaScript nativo con carga dinámica de componentes (`header`, `footer`, `carousel`, `product-card`).
- Página principal (`index.html`), catálogo en `pages/tienda.html` con filtrado y carrito de compras persistente, y vistas informativas (`nosotros`, `ritual`, `ingredientes`, `diario`, `faq`, `envios`, `contacto`).
- Datos estructurados en JSON (`data/products.json`, `data/articles.json`, `data/carousel.json`) y estabilización inicial de producción en `main`.
