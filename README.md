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











# Container-2: Guía de Creación y Explicación

Este documento describe en detalle los pasos, conceptos y decisiones implementadas en la sección **Container-2** del proyecto. A continuación, se cubren los temas principales, desde el diseño y uso de componentes reutilizables hasta la implementación de animaciones simples con la librería **Framer Motion**.

## Objetivo del Container-2
El objetivo principal de esta sección es crear un sistema modular y reutilizable que permita representar diversas animaciones de forma didáctica. Cada "Card" dentro del contenedor funciona como una unidad independiente que muestra:

1. **El título de la animación.**
2. **Una representación gráfica del efecto animado.**
3. **El código utilizado para implementar dicha animación.**
4. **Una descripción académica que explique el funcionamiento del efecto.**

La idea es utilizar esta estructura para desarrollar un "mini-manual" que facilite el aprendizaje de animaciones simples y complejas con React y Framer Motion.

---

## Componentes Reutilizables
El diseño se basó en un enfoque de componentes reutilizables para garantizar que las "Cards" puedan adaptarse fácilmente a nuevas animaciones sin modificar la estructura del código principal.

### 1. **Card.jsx**
Este componente es la pieza clave para generar las "Cards". Las props permiten personalizar cada instancia del componente, lo que asegura flexibilidad y reutilización.

#### Props Utilizadas:
- **`title`**: Define el título de la animación.
- **`description`**: Proporciona una explicación académica sobre la animación.
- **`animationCode`**: Muestra el fragmento de código utilizado para implementar el efecto.
- **`children`**: Contiene el elemento animado en sí, que utiliza las propiedades de Framer Motion.


## Animaciones Simples Implementadas
Se desarrolló un conjunto inicial de animaciones básicas para comprender las capacidades de Framer Motion. Las propiedades clave incluyen:

- **`animate`**: Define los valores finales o intermedios de las propiedades animadas.
- **`initial`**: Establece el estado inicial antes de que comience la animación.
- **`transition`**: Controla la duración, los retardos y la repetición de las animaciones.

A continuación, una lista de las animaciones implementadas:

1. **Fade In**: Cambio gradual de opacidad desde 0 a 1.
2. **Slide In**: Movimiento de un elemento desde fuera de la pantalla hasta su posición final.
3. **Rotate**: Rotación del elemento sobre su eje.
4. **Scale**: Cambio en el tamaño del elemento.
5. **Fade In y Out**: Alternancia entre opacidad completa y transparencia.
6. **Zoom In**: Escala progresiva desde un tamaño reducido.
7. **Zoom Out**: Escala inversa hacia un tamaño reducido.
8. **Vibración**: Movimiento rápido y repetitivo que simula un temblor.
9. **Pulso**: Efecto de "latido" con cambios de escala cíclicos.
10. **Rebote en Y**: Movimiento vertical que simula una pelota rebotando.

### Ejemplo de una Animación Simple
#### Fade In y Out:
```jsx
<motion.div
  style={{ width: 50, height: 50, backgroundColor: 'blue' }}
  animate={{ opacity: [0, 1, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```
- **Propiedades:**
  - `opacity: [0, 1, 0]`: El ciclo de opacidad incluye transparencia total, opacidad completa y vuelta a transparencia.
  - `transition: { duration: 2, repeat: Infinity }`: La animación dura 2 segundos y se repite indefinidamente.

---

## Estilos y Adaptabilidad
Para evitar problemas de desplazamiento horizontal y mejorar la experiencia responsiva, se ajustó el contenedor padre `.Cards` utilizando propiedades de CSS:

```css
.Cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  gap: 20px;
}
```

### Cambios Clave:
1. **`flex-wrap: wrap;`**: Permite que las Cards se distribuyan en varias filas.
2. **`gap: 20px;`**: Asegura un espaciado uniforme entre las Cards.
3. **Tamaño de las Cards:** Ajustado con porcentajes y valores mínimos para adaptarse a diferentes tamaños de pantalla.

---

## Explicaciones Académicas

### Sobre Framer Motion
- **Simplicidad:** Framer Motion simplifica la animación en React al proporcionar APIs declarativas.
- **Flexibilidad:** Permite animaciones complejas como rotaciones combinadas con transiciones de escala sin escribir grandes bloques de código.
- **Repetición y Personalización:** Las propiedades como `repeat` y `ease` permiten controlar ciclos y transiciones fluidas.

### Propiedades Principales
1. **`animate`**: Define el estado animado final.
2. **`initial`**: Estado inicial antes de que comience la animación.
3. **`transition`**: Control de tiempo, repetición, suavidad y demoras.

Ejemplo:
```jsx
animate={{ scale: [1, 1.5, 1] }}
transition={{ duration: 1.5, repeat: Infinity }}
```

- `scale: [1, 1.5, 1]`: Cambia el tamaño del elemento de 100% a 150% y regresa a 100%.
- `repeat: Infinity`: Repite el ciclo indefinidamente.

---

## Futuras Extensiones
En futuras iteraciones, se explorarán:
1. **Animaciones Moderadas y Complejas:** Combinación de propiedades y eventos interactivos.
2. **Diseños Personalizados:** Cambios visuales como bordes, sombras e integración de contenido multimedia.
3. **Optimizaciones:** Mejora del rendimiento en dispositivos de bajos recursos.

Este README proporciona una base para entender y ampliar lo realizado hasta ahora. Si tienes dudas o quieres explorar más temas, consulta la documentación oficial de **Framer Motion** o los ejemplos incluidos en este proyecto.







