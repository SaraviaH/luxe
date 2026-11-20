# Luxe Glow Cosmetics

Aplicación web estática y modular de comercio electrónico orientada a cosmética botánica, cuidado facial, maquillaje y fragancias. Construida con **HTML5**, **CSS3**, **Bootstrap 5.3** y **JavaScript nativo**, cargando componentes reutilizables y catálogos JSON de forma dinámica.

## Estructura del proyecto

```text
luxe/
├── index.html              # Página principal (carrusel y productos destacados)
├── pages/                  # Vistas internas (tienda, contacto, nosotros, envíos, etc.)
├── components/             # Fragmentos HTML reutilizables (header, footer, carousel, product-card)
├── css/                    # Estilos globales, de componentes y específicos por página
├── js/                     # Utilidades (rutas, carrito, datos), cargador y lógica de vistas
├── data/                   # Catálogos y datos en JSON (products.json, articles.json, carousel.json)
└── assets/                 # Fuentes, íconos e imágenes del sitio
```

## Ejecución local

Debido a que el cargador de componentes (`js/core/component-loader.js`) y el servicio de datos (`js/utils/data-service.js`) obtienen fragmentos HTML y archivos JSON mediante `fetch()`, el sitio debe servirse sobre HTTP local (no abrir `index.html` directamente con `file://`):

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Luego abrir en el navegador:

```text
http://127.0.0.1:8000/
```

## Flujo de trabajo y versionado

Este repositorio sigue una organización basada en **Git Flow** y **Versionado Semántico (`SemVer` — `MAJOR.MINOR.PATCH`)**:

- **`main`**: código estable listo para producción y etiquetado con versiones (`v1.0.0`, `v1.1.0`, etc.).
- **`develop`**: rama de integración donde convergen las nuevas funcionalidades antes de un lanzamiento.
- **`feature/*`**: ramas dedicadas para nuevas mejoras o páginas, creadas a partir de `develop`.
- **`release/*`**: ramas de estabilización previa al pase a `main` y actualización de `CHANGELOG.md`.
- **`hotfix/*`**: ramas creadas desde `main` para correcciones urgentes en producción, integradas luego tanto en `main` como en `develop`.

## Cómo contribuir

1. Clonar el repositorio y ubicarse en `develop` actualizada (`git pull origin develop`).
2. Crear una rama descriptiva (`git checkout -b feature/nombre-mejora`).
3. Realizar *commits* pequeños y claros con mensajes descriptivos.
4. Subir la rama (`git push origin feature/nombre-mejora`) y abrir un **Pull Request** completando la plantilla del repositorio.
5. Verificar las validaciones automáticas y resolver cualquier conflicto antes de fusionar.
