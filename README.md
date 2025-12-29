# Portfolio de Diseñador Gráfico

## Descripción del proyecto
Este proyecto consiste en el desarrollo de un portfolio personal para mi padre, David Love, fotógrafo, utilizando tecnologías web básicas: HTML, CSS y JavaScript. El objetivo no es solo obtener un resultado visual, sino documentar de forma académica el proceso de aprendizaje, los errores cometidos y las soluciones aplicadas.

## Objetivo académico
- Aplicar buenas prácticas de desarrollo web desde cero
- Comprender la importancia de la estructura semántica
- Documentar decisiones técnicas y conceptuales
- Desarrollar un proyecto escalable y mantenible

## Tecnologías utilizadas
- HTML5 (estructura semántica)
- CSS3 (estilos y layout)
- JavaScript (interactividad)
- Git (control de versiones)
- Visual Studio Code (entorno de desarrollo)

## Estructura del proyecto
portfolio-template/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── img/
│   └── fonts/
│
├── README.md
└── .gitignore

## Proceso de desarrollo

### Fase 1: Preparación del proyecto
**Decisiones tomadas**
- Se creó una estructura de carpetas clara para separar responsabilidades.
- Se inicializó Git desde el primer momento.

**Errores comunes evitados**
- Comenzar a diseñar sin una estructura definida.
- No usar control de versiones.

**Aprendizajes**
- La organización inicial facilita el mantenimiento y la escalabilidad del proyecto.

---

### Fase 2: Estructura HTML semántica
**Decisiones tomadas**
- Uso de etiquetas semánticas como `<header>`, `<main>`, `<section>` y `<footer>`.
- Definición previa de las secciones del portfolio antes de aplicar estilos.

**Problemas detectados**
- Tendencia inicial a usar contenedores genéricos (`div`) sin semántica.

**Soluciones**
- Análisis del propósito de cada sección y selección de etiquetas adecuadas.

**Aprendizajes**
- La semántica mejora la accesibilidad, la legibilidad del código y la escalabilidad.

---

### Fase 3: Base de estilos CSS

**Decisiones tomadas**  
Se implementó una base de estilos CSS antes de comenzar con el diseño visual del portfolio. Esta base incluye un reset básico y la definición de estilos globales para asegurar consistencia visual y facilitar la escalabilidad del proyecto.

**Motivación**  
El objetivo de esta fase fue establecer una base sólida que permitiera desarrollar el diseño de forma ordenada, evitando decisiones visuales aisladas y reduciendo la posibilidad de inconsistencias en etapas posteriores.

**Problemas identificados**  
Durante el inicio del desarrollo surgió la tendencia a comenzar directamente con el diseño sin una estructura de estilos previa, lo que podía derivar en repetición de valores y dificultades de mantenimiento.

**Soluciones aplicadas**  
Se centralizaron los estilos base en un único archivo CSS, definiendo tipografías, comportamiento general del documento y reglas comunes que servirán como punto de partida para los estilos específicos.

**Aprendizajes**  
Definir una base de estilos desde el inicio facilita la organización del código, mejora la mantenibilidad y reduce errores durante el desarrollo del diseño final.

---

### Fase 4: Adaptación de un template CSS externo (W3Schools)

**Decisiones tomadas**  
Se utilizó un template educativo de W3Schools como referencia inicial para la estructura visual del sitio, específicamente para la navegación superior, el área de contenido y el footer. El código fue adaptado para integrarse correctamente en la estructura semántica del proyecto.

**Problemas detectados**  
El template original presentaba varias limitaciones desde un enfoque académico y profesional, como el uso excesivo de elementos `div`, la mezcla de HTML y CSS en un mismo archivo, el uso de `float` para el layout y la inclusión de valores rígidos con fines demostrativos.

**Soluciones aplicadas**  
Se separó completamente la estructura del contenido (HTML) de los estilos (CSS), se sustituyó el uso de `float` por Flexbox, se eliminaron alturas fijas y se integró el diseño dentro de una arquitectura de proyecto organizada y escalable.

**Aprendizajes**  
El uso de código externo requiere análisis y adaptación para cumplir con buenas prácticas. Comprender y modificar un template existente aporta mayor valor formativo que su uso directo sin criterio ni documentación.

## Fase 5 – Integración de CDN y galería fotográfica optimizada

### Objetivo
Implementar una galería de fotografías profesional utilizando un CDN externo para mejorar el rendimiento, la escalabilidad y las buenas prácticas web.

### Decisiones técnicas
- Se utilizó **ImageKit.io** como CDN para la gestión y optimización de imágenes.
- Las imágenes se cargan en diferentes resoluciones según su contexto:
  - Tamaño reducido para la galería.
  - Tamaño ampliado para la visualización en modal.
- Se emplearon atributos `data-*` para separar la imagen de vista previa de la imagen en alta resolución.

### Aprendizajes
- Uso de CDN para optimización automática de imágenes.
- Implementación de cargas eficientes según el contexto visual.
- Separación clara entre estructura (HTML), estilos (CSS) y comportamiento (JavaScript).
- Uso responsable de código inspirado en recursos educativos (W3Schools), adaptándolo a una solución propia.

### Problemas encontrados
- Dependencia de URLs externas para las imágenes.
- Necesidad de entender la estructura de transformación de ImageKit.

### Soluciones aplicadas
- Uso de placeholders claros para facilitar la configuración futura.
- Documentación explícita del origen y propósito del CDN.
- Código modular y reutilizable para la galería y el modal.

### Créditos
Parte de la estructura base y conceptos visuales están inspirados en ejemplos educativos de **W3Schools**, adaptados y reimplementados con clases, estructura y lógica propias.

---

## Fase 6 – Corrección de layout, sidebar y navegación principal

### Objetivo
Optimizar la presentación del portfolio corrigiendo los problemas de espacio en blanco, glitches de la sidebar y asegurar la correcta visualización de todos los apartados de navegación: Collections, About y Contact.

### Decisiones técnicas
- Se reestructuró el layout principal usando Flexbox con un contenedor `.layout` que agrupa la sidebar y el contenido principal.
- La sidebar se definió con `height: 100vh` y `position: sticky` para que ocupe toda la altura de la ventana y permanezca visible durante el scroll.
- Se ajustó el `z-index` y se aplicó un `box-shadow` para evitar glitches de superposición sobre la galería.
- La navegación interna se reorganizó en apartados claros:
  - **Collections**: Galería de imágenes.
  - **About**: Información del fotógrafo.
  - **Contact**: Formulario de contacto.
- Se implementó `scroll-margin-top` en las secciones para asegurar que los anclajes al hacer click en los links de la sidebar se alineen correctamente con la parte superior de la ventana.

### Problemas detectados
- Espacio en blanco enorme al cargar la galería, obligando a scrollear hacia abajo.
- Sidebar visible solo parcialmente y glitches al superponerse sobre imágenes.
- Apartados de navegación no alineados ni funcionales.

### Soluciones aplicadas
- Reemplazo del `margin-left` artificial en el contenido por un layout Flexbox, permitiendo que la galería se muestre inmediatamente sin espacios innecesarios.
- Sidebar rediseñada para ocupar toda la altura (`height: 100vh`) y mantener sticky con top: 0.
- Ajuste de z-index y sombra para resolver glitches de opacidad.
- Organización de los enlaces de navegación y ajuste de scroll automático con `scroll-margin-top`.

### Aprendizajes
- Comprender cómo interactúan `flex`, `sticky` y `height: 100vh` en layouts de múltiples columnas.
- La importancia de un layout flexible y semántico para evitar espacios vacíos no deseados.
- Control de la superposición de elementos y navegación interna eficiente.
- Mantener la sidebar y la galería como columnas independientes dentro del contenedor Flexbox mejora la experiencia de usuario y la consistencia visual.

### Créditos
Parte de la teoría y estructura base se inspiró en ejemplos educativos de **W3Schools**, adaptados y reimplementados con clases, estructura y lógica propias para mantener un diseño original y profesional.

---

## Fase 7 – Implementación de responsividad y sidebar móvil

### Objetivo
Hacer que el portfolio sea completamente responsive, asegurando que el sidebar y la galería funcionen correctamente en diferentes tamaños de pantalla, especialmente en dispositivos móviles y tablets.

### Decisiones técnicas
- Se mantuvo el sidebar **sticky** en escritorio y se convirtió en **sidebar deslizable** en pantallas pequeñas.
- Se agregó un **header móvil** con botón tipo “hamburger” para abrir/cerrar el sidebar.
- Se añadió un **overlay** semi-transparente al abrir el sidebar en móvil, mejorando la usabilidad.
- La galería de imágenes ahora es **flexible** y se adapta automáticamente a diferentes resoluciones de pantalla.
- Se actualizaron los estilos CSS para eliminar cualquier margen o espacio en blanco innecesario al cargar la página.
- Se usaron **media queries** para diferenciar comportamiento entre desktop y mobile.

### Problemas detectados
- En pantallas pequeñas, el sidebar no se mostraba correctamente y la galería podía quedar desalineada.
- Existía un espacio en blanco superior en la galería, que obligaba a hacer scroll innecesario.
- El sidebar no era completamente visible en pantallas de menor altura y se cortaba.

### Soluciones aplicadas
- Se implementó un **sidebar fijo lateral** en escritorio y **deslizable** en mobile con transición suave.
- Se corrigieron los márgenes y paddings para que el contenido se muestre desde la parte superior de la ventana.
- Se aplicaron reglas de **flex-wrap** y tamaños mínimos a las columnas de la galería para que se ajusten a pantallas estrechas.
- Se agregó JavaScript para manejar la apertura/cierre del sidebar en móvil de manera intuitiva y accesible.

### Aprendizajes
- La **responsividad** no solo implica cambiar tamaños, sino también reorganizar la interacción y visibilidad de elementos.
- Las soluciones híbridas (sticky en desktop, deslizable en móvil) mejoran la usabilidad sin comprometer la estética.
- Las media queries permiten mantener un mismo código base y adaptar el diseño según el dispositivo.
- Separar claramente estructura (HTML), estilos (CSS) y comportamiento (JS) facilita ajustes futuros y escalabilidad.

### Créditos
El diseño original del sidebar y la galería está inspirado en ejemplos educativos de **W3Schools**, pero ha sido completamente adaptado, renombrado y reorganizado para cumplir con buenas prácticas y requerimientos profesionales.
