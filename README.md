# LUXE GLOW COSMETICS

Sistema web de ventas de cosméticos desarrollado con React, TypeScript y Vite.

## Descripción

LUXE GLOW COSMETICS es una tienda virtual de productos cosméticos que permite a los usuarios explorar productos, consultar promociones, gestionar favoritos, agregar productos al carrito y realizar un proceso de compra simulado.

El sistema también incluye contenido informativo de la marca, blog, formulario de contacto y una interfaz responsive para dispositivos de escritorio y móviles.

## Tecnologías

* React
* TypeScript
* TSX
* Vite
* CSS
* React Context API
* Git / GitHub

## Instalación

Clonar el repositorio:

```bash
git clone [URL-DEL-REPO]
```

Ingresar al proyecto:

```bash
cd luxe
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en desarrollo:

```bash
npm run dev
```

El proyecto estará disponible normalmente en:

```text
http://localhost:5173
```

## Funcionalidades

### Inicio

* Hero principal de la tienda.
* Banners promocionales.
* Catálogo de productos.
* Tarjetas de productos.
* Filtros y ordenamiento.
* Vista de cuadrícula y lista.
* Diseño responsive.

### Productos

Cada producto puede mostrar:

* Imagen.
* Nombre.
* Categoría.
* Precio.
* Valoración.
* Botón para agregar al carrito.
* Botón para agregar a favoritos.

### Carrito

* Visualización de productos agregados.
* Cantidad de productos.
* Subtotal.
* Costo de envío.
* Total.
* Cupón de descuento.
* Resumen del pedido.
* Proceso de compra simulado.

### Promociones

* Banner promocional.
* Cuenta regresiva.
* Productos en oferta.
* Precio anterior y precio actual.
* Porcentaje de descuento.
* Códigos promocionales.
* Badges de productos.

### Favoritos

* Agregar productos a favoritos.
* Eliminar productos de favoritos.
* Visualizar productos guardados.
* Agregar productos favoritos al carrito.
* Estado vacío cuando no existen favoritos.

### Blog

* Artículos sobre cosmética y bienestar.
* Imagen de portada.
* Título.
* Fecha.
* Categoría.
* Extracto.
* Filtros por categoría.

Categorías:

* Skincare
* Maquillaje
* Bienestar

### Nosotros

* Nuestra historia.
* Misión y visión.
* Información del equipo.
* Certificaciones.
* Información de la marca.

### Contacto

Formulario con:

* Nombre.
* Email.
* Teléfono.
* Asunto.
* Mensaje.

También incluye:

* Validación de campos.
* Mensaje de confirmación.
* Información de contacto.
* Dirección.
* Horarios.
* Preguntas frecuentes.

### Footer

* Información de la tienda.
* Newsletter.
* Métodos de pago.
* Enlaces de navegación.
* Blog.
* Promociones.
* Favoritos.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Cart/
│   ├── Footer/
│   └── Navbar/
│
├── context/
│   └── CartContext.tsx
│
├── data/
│   └── products.ts
│
├── pages/
│   ├── Home/
│   ├── Nosotros/
│   ├── Blog/
│   ├── Promociones/
│   ├── Favoritos/
│   └── Contacto/
│
├── types/
│   └── index.ts
│
└── styles/
    └── global.css
```

## Validación TypeScript

Antes de realizar un commit se debe comprobar que el proyecto no tenga errores de TypeScript:

```bash
npx tsc --noEmit
```

El comando debe ejecutarse sin errores.

## Flujo de trabajo Git

Actualizar la rama principal:

```bash
git checkout main
git pull origin main
```

Crear una rama para la funcionalidad:

```bash
git checkout -b feature/nombre-de-la-funcionalidad
```

Agregar los cambios:

```bash
git add .
```

Crear el commit:

```bash
git commit -m "feat: descripción del cambio"
```

Subir la rama:

```bash
git push origin feature/nombre-de-la-funcionalidad
```

Después se debe crear un Pull Request hacia `main`.

## Ramas del proyecto

| Rama                              | Funcionalidad            |
| --------------------------------- | ------------------------ |
| `feature/nosotros-y-blog`         | Nosotros + Blog          |
| `feature/promociones-y-favoritos` | Promociones + Favoritos  |
| `feature/contacto-y-footer`       | Contacto + Footer        |
| `feature/carrito-y-checkout`      | Carrito + Checkout       |
| `feature/home-y-ux`               | Home + Navbar + catálogo |

## Reglas de desarrollo

* Cada integrante debe trabajar únicamente en los archivos asignados.
* No modificar `src/types/index.ts` sin coordinación con el equipo.
* No modificar `src/styles/global.css` sin coordinación con el equipo.
* Las nuevas clases CSS deben utilizar el prefijo correspondiente al componente.
* Ejecutar `npx tsc --noEmit` antes de cada commit.
* Utilizar mensajes de commit siguiendo la convención del proyecto.

### Convención de commits

```text
feat: nueva funcionalidad
fix: corrección de bug
style: cambios de CSS
refactor: reestructuración sin cambio de función
```

## Estado del proyecto

Proyecto en desarrollo.

Actualmente la base está construida con React + TypeScript + Vite, con navegación, componentes y estilos aislados funcionando. Las funcionalidades restantes se desarrollan mediante ramas independientes para cada integrante del equipo.
