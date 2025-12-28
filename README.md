# Portfolio de Diseñador Gráfico

## Descripción del proyecto
Este proyecto consiste en el desarrollo de un portfolio personal de diseñador gráfico utilizando tecnologías web básicas: HTML, CSS y JavaScript. El objetivo no es solo obtener un resultado visual, sino documentar de forma académica el proceso de aprendizaje, los errores cometidos y las soluciones aplicadas.

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
