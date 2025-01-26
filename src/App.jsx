import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Card from './components/Card';

function App() {

  const [message, setMessage] = useState('');
  const [section, setSection] = useState('basic');
  const handleClick = (newMessage) => {
    setMessage(newMessage);
  };
  

  {/*Respuestas Container-3 */}
  {/*Ejercicio 1 */}
  const [texto, setTexto] = useState('Texto inicial');
  {/*Ejercicio 2 */}
  const [contador, setContador] = useState(0); 
  {/*Ejercicio 3 */} 
  const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlyyyfBQwXzLJtp4azsYe5izFOlKvMO2GGQ&s';
  const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQca_RxyM-MaegC6eChGXlMW-Oul2aja79Kcg&s';
  const [imagenActual, setImagenActual] = useState(img1);

  const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeHJRQTC9RumjNYF76DFcT5Hw2862THnQYQ&s';

  {/*Ejercicio 4 */}
  const [textoInput, setTextoInput] = useState('');

  return (
    
    <div className="App">

      <div className='Title'>
        <h1>Ejercicio de Botones en React</h1>
      </div>

      <div className='Container-1'>
        {/* Botones para alternar entre la sección básica y la animada */}
        <div className="navigation">
          <motion.button className='Button-Navigation'
            whileHover={{ scale: 1.1 }}
            onClick={() => setSection('basic')}>Versión Básica
          </motion.button>
          <motion.button className='Button-Navigation'
            whileHover={{ scale: 1.1 }}
            onClick={() => setSection('animated')}>Versión Animada</motion.button>
        </div>
        {/* Sección 1: Botones básicos */}
        {section === 'basic' && (
          <div className="basic-section">

            <div className='Subtitle'>
              <h2>Sección Básica</h2>
              <p>
                En esta sección se presentan los botones básicos sin animaciones.
                Esta fue la primera etapa del ejercicio.
              </p>
            </div>
            <div className="button-container">
              <button onClick={() => handleClick('¡Botón 1 clicado!')}>Botón 1</button>
              <button onClick={() => handleClick('¡Botón 2 clicado!')}>Botón 2</button>
              <button onClick={() => handleClick('¡Botón 3 clicado!')}>Botón 3</button>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        )}
        {/* Sección 2: Botones animados */}
        {section === 'animated' && (
          <div className="animated-section">
            <div className='Subtitle'>
              <h2>Sección Animada</h2>
              <p>
                En esta sección, los botones incluyen animaciones usando Framer Motion.
              </p>
            </div>
            <div className="button-container">
              {/* Botón Animado 1 */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
                onClick={() => handleClick('¡Has hecho clic en el Botón 1 Animado!')}
              >
                Botón 1 Animado
              </motion.button>
              {/* Botón Animado 2 */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                onClick={() => handleClick('¡Botón 2 Animado activado!')}
              >
                Botón 2 Animado
              </motion.button>
              {/* Botón Animado 3 */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#ff4081', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
                onClick={() => handleClick('¡Botón 3 Animado en acción!')}
              >
                Botón 3 Animado
              </motion.button>
            </div>
            {message && <p className="message">{message}</p>}
          </div>
        )}
      </div>


      
      {/*Nueva Seccion*/}
      <div className='Container-2'>
      <div className='Cards'>
        <Card
          title="Rotación"
          description="Esta animación rota un elemento en 360 grados."
          animationCode={`animate={{ rotate: 360 }} transition={{ duration: 2 }}`}
        >
          <motion.div
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Card>
        <Card
          title="Opacidad"
          description="Esta animación hace que el elemento aparezca/desaparezca."
          animationCode={`animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}`}
        >
          <motion.div
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'green',
            }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </Card>
        <Card
          title="Escala"
          description="Esta animación cambia el tamaño del elemento."
          animationCode={`animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1 }}`}
        >
          <motion.div
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'red',
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </Card>

        <Card
        title="Traslación Horizontal"
        description="Esta animación mueve el elemento de izquierda a derecha."
        animationCode={`animate={{ x: [0, 100, 0] }} transition={{ duration: 2 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange',
          }}
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Traslación Vertical"
        description="Esta animación mueve el elemento hacia arriba y abajo."
        animationCode={`animate={{ y: [0, -50, 0] }} transition={{ duration: 1.5 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'purple',
          }}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Color Cambiante"
        description="El elemento cambia de color de forma cíclica."
        animationCode={`animate={{ backgroundColor: ['#FF0000', '#00FF00', '#0000FF'] }} transition={{ duration: 2 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
          }}
          animate={{
            backgroundColor: ['#FF0000', '#00FF00', '#0000FF'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Rotación en Bucle"
        description="El elemento gira en ambas direcciones sin detenerse."
        animationCode={`animate={{ rotate: [-360, 360] }} transition={{ duration: 3 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'yellow',
            
          }}
          animate={{ rotate: [-360, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Escalado Condicional"
        description="El elemento aumenta y disminuye de tamaño condicionalmente."
        animationCode={`animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'pink',
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Rebote"
        description="El elemento simula un efecto de rebote en su movimiento."
        animationCode={`animate={{ y: [0, -20, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'teal',
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Card>

      <Card
        title="Movimiento Aleatorio"
        description="El elemento se mueve a posiciones aleatorias."
        animationCode={`animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }} transition={{ duration: 3 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'cyan',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Zoom In"
        description="El elemento crece desde un tamaño pequeño."
        animationCode={`animate={{ scale: [0.5, 1] }} transition={{ duration: 1.5 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
          }}
          animate={{ scale: [0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Zoom Out"
        description="El elemento se encoge hacia un tamaño pequeño."
        animationCode={`animate={{ scale: [1, 0.5] }} transition={{ duration: 1.5 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
          }}
          animate={{ scale: [1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Rotación y Escala"
        description="El elemento rota mientras cambia de tamaño."
        animationCode={`animate={{ rotate: [0, 360], scale: [1, 1.5, 1] }} transition={{ duration: 2 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Vibración"
        description="El elemento se mueve rápidamente simulando un temblor."
        animationCode={`animate={{ x: [0, -10, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'purple',
          }}
          animate={{ x: [0, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Pulso"
        description="El elemento simula un latido con cambios de escala."
        animationCode={`animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'yellow',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Desplazamiento en X Continuo"
        description="El elemento se mueve horizontalmente de forma continua."
        animationCode={`animate={{ x: [-50, 50, -50] }} transition={{ duration: 3, repeat: Infinity }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'pink',
          }}
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Aparición con Desplazamiento"
        description="El elemento entra desde fuera de la pantalla."
        animationCode={`initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'cyan',
          }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </Card>

      <Card
        title="Oscilación en Rotación"
        description="El elemento realiza un balanceo continuo."
        animationCode={`animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 1.2, repeat: Infinity }}`}
      >
        <motion.div
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#123456',
          }}
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </Card>
      </div> {/*cierre de Cards*/}
      
      </div> {/*cierre del container 2*/}

      <div className='Container-3' >
        <div className='Practica'>

          <div className='Ejercicio1'>
            <h2>Ejercicio 1: Cambiar texto con un botón</h2>
            <p>Texto actual: {texto}</p>
            <button onClick={() => setTexto('¡Texto cambiado!')}>Cambiar Texto</button>
            {/*Solucion: Declarar el estado antes del return
            const [text, setTexto] = useState('Texto inicial');*/}
          </div>

          <div className='Tarea1'>
            {/*Tarea:
            Crea otro botón que cambie el texto a "Texto alternativo" y verifica cómo se comporta.*/}
            <button onClick={() => setTexto('Felicidades. has cambiado el texto a "Texto alternativo"')} >Cambiar a texto alternativo</button>
          </div>

          <div className='Ejercicio2'>
            <h2>Ejercico 2: Contador</h2>
            <p>Contador actual: {contador}</p>
            <button onClick={() => setContador(contador + 1)} >Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            {/*Solucion: Declarar el estado antes del return
            const [contador, setContador] = useState(0);*/}
          </div>

          <div className='Tarea2'>
            {/*Tarea:
            Crea un tercer botón que reinicie el contador a 0.*/}
            <button onClick={() => setContador(0)}>Reiniciar </button>
          </div>

          <div className='Ejercicio3'>
            <h2>Ejercicio 3: Alternar Imagenes</h2>
            <img src={imagenActual} alt="Imagen Dinamica" style={{ width: '200px'}}/>
            <button onClick={() => setImagenActual (imagenActual === img1 ? img2 : img1)}>Cambiar imagen</button>
            {/*Solucion: Declarar el estado antes del return
            const img1 = 'https://via.placeholder.com/200/FF0000';
            const img2 = 'https://via.placeholder.com/200/00FF00';
            const [imagenActual, setImagenActual] = useState(img1);
            
            Nota: El condicional ternario (imagenActual === img1 ? img2 : img1) comprueba si la imagen actual es la primera imagen (img1) y cambia a la segunda imagen (img2) en caso contrario. Es una forma compacta de escribir un condicional if-else.
            Si imagenActual = img1, entonces:
            img1 === img1 es true -> Cambia a img2
            Si imagenActual = img2, entonces:
            img2 === img1 es false -> Cambia a img1
            */}
          </div>

          <div className='Tarea3'>
            {/*Tarea:
            Crea un segundo botón que siempre muestre una tercera imagen estática al hacer clic.*/}
            <button onClick={() => setImagenActual(img3)}>Mostrar Imagen Estatica</button>
          </div>

          <div className='Ejercicio4'>
            <h2>Ejercicio 4: Captura de texto en tiempo real</h2>
            <input type="text"
              placeholder= "Escribe algo..."
              value={textoInput}
              onChange={(e) => setTextoInput(e.target.value)}
            />
            {/*Notas:
            1. <input/> es un componente de entrada de texto que permite al usuario ingresar texto.
            2. La propiedad type define el tipo de entrada, en este caso "text". Pero tambien podemos usar:
            "number" : para capturar un valor numérico.
            "email" : para capturar una dirección de correo electrónica.
            "password" : Oculta los caracteres ingresados.
            "search" : Se utiliza para la barra de búsqueda.
            "checkbox" : Entrada tipo casilla de verificacion.
            "radio" : Entrada tipo botón de radio.
            "file" : Entrada para subir archivos.
            "color" : Entrada para seleccionar un color.
            "range" : Entrada para seleccionar un rango de valores.
            3. onChange es un evento que se dispara cuando el valor del input cambia.
            3.1 "e" es un evento que contiene información sobre el cambio del input, incluyendo el nuevo valor. Es un objeto especial de React conocido como SyntheticEvent. No necesita declararlo con "const" ya que React lo pasa automaticamente al usar la función onChange, onClick, etc.
            3.2 "e.target.value" es el nuevo valor ingresado en el input. Dentro del evento "e", la propiedad "target" se refiere al elemento HTML que activo el evento (en este caso, el input), y la propiedad "value" contiene el valor actual del input.

             */}
            <p>Texto ingresado: {textoInput}</p>
          </div>

          <div className='Tarea4'>
            {/*Tarea:
            Agrega un botón que borre el texto ingresado en el input.*/}
            <button onClick={() => setTextoInput('') } >Borrar Texto</button>
          </div>

          <div className='Ejercicio5'>
            

          </div>




        </div> {/*cierre de Practica*/}

        
      </div> {/*cierre del container 3*/}
    </div>
  );
}

export default App;
