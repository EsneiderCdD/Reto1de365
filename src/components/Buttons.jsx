// Importamos las herramientas necesarias desde React y Framer Motion.
import React, { useState } from 'react'; // React para crear componentes, useState para manejar el estado.
import { motion } from 'framer-motion'; // motion nos permite añadir animaciones a nuestros elementos.
import '../styles/Buttons.css'; // Importamos los estilos específicos para este componente.

/**
 * Este componente representa un grupo de botones interactivos.
 * Cada botón muestra un mensaje diferente cuando se hace clic en él.
 */
const Buttons = () => {
  // **Paso 1:** Creamos un estado para manejar el mensaje que se mostrará al hacer clic en los botones.
  // - Inicialmente, no hay ningún mensaje, por eso usamos una cadena vacía como valor inicial.
  const [message, setMessage] = useState('');

  /**
   * **Paso 2:** Definimos una función que se encargará de actualizar el mensaje.
   * - Recibe como argumento el mensaje que queremos mostrar.
   * - Llamamos a `setMessage` para actualizar el estado con el nuevo mensaje.
   */
  const handleClick = (msg) => {
    setMessage(msg); // Actualizamos el estado con el mensaje recibido.
  };

  /**
   * **Paso 3:** Ahora definimos la estructura de la interfaz de usuario.
   * - Usamos un contenedor principal para organizar los botones y el mensaje.
   * - Cada botón tiene animaciones y ejecuta la función `handleClick` con un mensaje diferente.
   * - Finalmente, mostramos el mensaje en un párrafo solo si el estado `message` no está vacío.
   */
  return (
    <div className="buttons-container">
      {/* **Botón 1:** Al hacer clic, muestra el primer mensaje */}
      <motion.button
        // Animación al pasar el mouse sobre el botón (hover).
        whileHover={{ scale: 1.1 }}
        // Animación al hacer clic en el botón (tap).
        whileTap={{ scale: 0.9 }}
        // Manejador de eventos: actualiza el mensaje al hacer clic.
        onClick={() => handleClick('¡Hola! Este es el primer mensaje.')}
      >
        Botón 1
      </motion.button>

      {/* **Botón 2:** Al hacer clic, muestra el segundo mensaje */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        
        whileTap={{ scale: 0.9 }}

        onClick={() => handleClick('¡Bienvenido! Este es el segundo mensaje.')}
      >
        Botón 2
      </motion.button>

      {/* **Botón 3:** Al hacer clic, muestra el tercer mensaje */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleClick('¡Felicidades! Este es el tercer mensaje.')}
      >
        Botón 3
      </motion.button>

      {/* **Mensaje Dinámico:** Este párrafo solo se muestra si hay un mensaje definido */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

// Exportamos el componente para que pueda ser usado en otros archivos, como en App.jsx.
export default Buttons;




{/*NOTAS EXTRAS
    
1.La expresión message && ...
Esto es una forma abreviada de escribir una condición en React. Se basa en un operador lógico llamado AND (&&), que evalúa dos expresiones y retorna el valor de la segunda solo si la primera es verdadera.

message: Es el estado que contiene el mensaje dinámico.
Si message tiene un valor (por ejemplo, "¡Hola!"), JavaScript lo considera "verdadero".
Si message está vacío (''), JavaScript lo considera "falso".
Si message es verdadero:
El operador && evalúa lo que sigue, que en este caso es el JSX: <p className="message">{message}</p>.

<p className="message">{message}</p>:
Esto crea un elemento <p> con una clase CSS llamada message.
Lo que aparece entre las llaves {message} es el contenido dinámico del estado message. Si message vale "¡Hola!", el párrafo mostrará "¡Hola!".
Si message es falso:
El operador && no evalúa la parte derecha, por lo que no se renderiza nada en la interfaz.  
    
    */}