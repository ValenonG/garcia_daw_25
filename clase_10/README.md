# VERSION 1.1
# Portada de Diario - Actividad Clase_09

Este proyecto es un sitio web del diario Futura+, compuesto por una portada de noticias y un formulario de suscripción. Está desarrollado con HTML, CSS y JavaScript, aplicando principios de diseño responsivo (Mobile First) y validaciones personalizadas en el formulario.

## 📁 Estructura de Carpetas

/clase_09
├── index.html
├── subscription.html
├── css/
│   ├── normalize.css
│   ├── style.css
│   └── subscription.css
├── img/
│   ├── inflacion.jpg
│   ├── vacuna.jpg
│   ├── tren.jpg
│   ├── elecciones.jpg
│   ├── messi.jpg
│   ├── becas.png
│   ├── aerolineas.jpg
│   └── letra-f.jpg
├── scripts/
│   └── subscription.js


## 📄 Archivos

- **index.html** Página de inicio del diario con noticias, navegación y diseño responsivo.

- **subscription.html** Formulario de suscripción con validaciones en tiempo real y feedback visual.

- **style.css** Estilos generales para la portada del diario.

- **subscription.css** Estilos específicos para el formulario.

- **normalize.css** Normalización de estilos entre navegadores.

- **subscription.js** Script que valida campos del formulario con mensajes personalizados y cambio dinámico del título.

## 🧱 Componentes Destacados

- **Header** con nombre del diario y slogan.
- **Nav** superior con enlaces principales.
- **Aside izquierdo**: Últimas noticias con imágenes.
- **Main Article**: Titular destacado con imagen y resumen.
- **Aside derecho**: Noticias sugeridas.
- **Footer** con enlaces legales y derechos reservados.

📝 Formulario de Suscripción (subscription.html)
Campos: Nombre completo, Email, Contraseña y confirmación, Edad, Teléfono, Dirección, Ciudad, Código Postal, DNI.
Validaciones en tiempo real por campo.
Cambios de color según validez.
Título dinámico que muestra el nombre ingresado.
Feedback por alert() con resumen de datos ingresados o errores.

## 💡 Tecnologías Usadas

- HTML5
- CSS3 (con Flexbox y Media Queries)
- Normalize.css v8.0.1

## 📱 Responsive Design

El sitio adapta su diseño según el ancho de pantalla:
- En dispositivos móviles: navegación vertical, bloques apilados.
- En pantallas grandes (a partir de 480px): navegación horizontal y disposición tipo grid con `aside`-`main`-`aside`.
- 🖥️ Formulario (≥ 768px): Campos distribuidos en dos columnas.

## Vista previa
![alt text](image.png)

## 🚀 Cómo usarlo

1. Cloná o descargá el repositorio.
2. Abrí el archivo `index.html` en tu navegador.
3. Asegurate de tener los recursos (CSS e imágenes) en las rutas correctas.

## Repositorio
- https://github.com/ValenonG/garcia_daw_25

## Github Pages
- https://valenong.github.io/garcia_daw_25