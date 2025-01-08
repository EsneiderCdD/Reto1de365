# Ejercicio de Botones en React: Básico y Animado

Este proyecto es una actividad educativa diseñada para aprender los fundamentos de **React** y la integración de animaciones básicas utilizando **Framer Motion**. A través de dos secciones (una básica y otra animada), exploramos conceptos clave, desde el manejo de estados hasta la implementación de animaciones interactivas.

---

## **Contenido del Proyecto**

### **1. Objetivo**
- Crear una página interactiva en React que permita alternar entre una versión básica de botones y otra versión con animaciones usando Framer Motion.
- Aprender y practicar:
  - Manejo de estados con `useState`.
  - Componentes dinámicos y reactivos.
  - Introducción a las animaciones con Framer Motion.
  - Buenas prácticas en React para escalabilidad y modularidad.

---

### **2. Estructura del Proyecto**
```
📂 src
 ┣ 📜 App.jsx          # Componente principal de la aplicación.
 ┣ 📜 App.css          # Estilos básicos para la página.
 ┣ 📜 index.css        # Estilos globales.
 ┗ 📜 main.jsx         # Punto de entrada de la aplicación.
```

---

### **3. Guía de Uso**

#### **Requisitos Previos**
- Node.js instalado (versión 14 o superior recomendada).
- Editor de texto como Visual Studio Code.
- Familiaridad básica con React y ES6.

#### **Pasos para Ejecutar**
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <CARPETA_DEL_PROYECTO>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre el navegador en `http://localhost:5173/` para ver la aplicación.

---

### **4. Características**

#### **Sección Básica**
- Tres botones simples que actualizan un mensaje dinámico al hacer clic.
- Ideal para aprender los fundamentos del manejo de eventos y estados en React.

#### **Sección Animada**
- Tres botones con animaciones creadas mediante Framer Motion.
  - Animaciones al aparecer (`initial`, `animate`).
  - Interacciones al pasar el mouse (`whileHover`) y hacer clic (`whileTap`).
  - Transiciones configurables con propiedades como `type`, `stiffness` y `delay`.

#### **Navegación**
- Alterna entre las secciones básica y animada mediante un estado controlado (`section`).

---

### **5. Preguntas Frecuentes**

#### **¿Por qué usamos `useState`?**
`useState` permite gestionar estados en componentes funcionales de React, como el mensaje dinámico o la sección activa.

#### **¿Qué es Framer Motion y por qué lo usamos?**
Framer Motion es una librería de animaciones para React que facilita la creación de interacciones ricas y fluidas. Usamos `motion.button` para extender la funcionalidad de botones HTML con animaciones personalizables.

#### **¿Cómo se manejan las animaciones en Framer Motion?**
Se definen mediante propiedades como:
- `initial`: Estado inicial antes de la animación.
- `animate`: Estado final al que se anima.
- `whileHover` y `whileTap`: Animaciones para eventos de interacción.

#### **¿Cómo garantizamos la escalabilidad del código?**
- Separando las secciones con un estado controlado (`section`).
- Modularizando los estilos en `App.css`.
- Comentando el código para mayor claridad.

---

### **6. Temáticas Relacionadas**
- **React**:
  - Componentes funcionales.
  - Manejo de estados y eventos.
- **Framer Motion**:
  - Introducción a animaciones con `motion`.
  - Propiedades clave: `initial`, `animate`, `whileHover`, `transition`.
- **Buenas Prácticas**:
  - Reutilización de componentes.
  - Escalabilidad en el diseño.

---

### **7. Recursos y Referencias**
- [Documentación Oficial de React](https://reactjs.org/docs/getting-started.html)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Guía de CSS para principiantes](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

### **8. Contribuciones**
Si tienes sugerencias o mejoras, no dudes en abrir un issue o hacer un pull request. ¡Tu retroalimentación es bienvenida!

---

## **Notas Finales**
Este ejercicio fue diseñado como una actividad introductoria y escalable. Puede servir como base para proyectos más complejos en React y Framer Motion. Siéntete libre de adaptarlo y experimentar con nuevas animaciones o funcionalidades.

---

## **Preguntas Extras**
### **¿Cuántos repositorios puedo tener en GitHub?**
No hay un límite técnico para la cantidad de repositorios que puedes crear en GitHub, tanto privados como públicos. Sin embargo, considera mantener organizados tus proyectos y eliminar aquellos que ya no utilices para facilitar la gestión.

---

¡Gracias por explorar este proyecto! 🎉

NOTAS EXTRAS:

1. instalar React DOM
2. instalar Framer-Emotion





