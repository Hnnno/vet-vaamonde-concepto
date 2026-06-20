# Veterinaria Andrés Vaamonde — Landing Page

> Proyecto de práctica personal de desarrollo frontend.

## Vista general

Landing page responsiva para una clínica veterinaria, desarrollada como ejercicio de maquetación y diseño web. Incluye secciones de servicios, testimonios con carrusel, ubicación con mapa embebido, FAQ interactivo y un botón flotante de WhatsApp.

## ⚠️ Aclaración importante

Este proyecto es un **rediseño conceptual no oficial** basado en un negocio existente.

- No existe afiliación con la empresa original
- No fue solicitado ni encargado por dicha empresa
- No representa un trabajo comercial real
- Todo el contenido fue utilizado únicamente con fines educativos y de práctica

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura y accesibilidad |
| CSS3 personalizado | Animaciones, patrones y componentes |
| Tailwind CSS (CDN) | Sistema de diseño y utilidades |
| JavaScript vanilla | Carrusel, navbar scroll, menú mobile |
| Google Fonts | Montserrat + Open Sans |
| Material Symbols | Iconografía |
| Google Maps Embed | Mapa de ubicación |

## Estructura del proyecto

```
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados (complementan Tailwind)
│   ├── img/
│   │   ├── favicon.png     # Logo / favicon
│   │   ├── hero.jpg        # Imagen principal del hero
│   │   ├── clinica-moderna.jpg
│   │   └── tecnologia-diagnostica.jpg
│   └── fonts/              # Carpeta reservada para fuentes locales
├── js/
│   └── main.js             # Lógica del carrusel, navbar y menú mobile
└── README.md
```

## Funcionalidades

- **Navegación sticky** con sombra dinámica al hacer scroll
- **Menú responsive** con hamburguesa para mobile
- **Carrusel de testimonios** con autoplay, indicadores y pausa si el usuario prefiere movimiento reducido (`prefers-reduced-motion`)
- **FAQ acordeón** con CSS puro (sin JS)
- **Mapa de Google** integrado con efecto grayscale → color al hover
- **Botón flotante de WhatsApp**
- **SEO básico**: meta description, Open Graph, favicon
- **Accesibilidad**: `aria-label` en botones interactivos, `alt` en imágenes, contraste de color

## Objetivos de aprendizaje

- Maquetación de landing pages con Tailwind CSS
- Organización limpia de proyectos frontend
- Principios de diseño web (tipografía, color, espaciado)
- SEO on-page básico
- Buenas prácticas de JavaScript vanilla

## Autor

Desarrollado por **Ambar Juarez** como parte de su aprendizaje en desarrollo web frontend.
