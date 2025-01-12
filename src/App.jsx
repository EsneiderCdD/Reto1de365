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
      </div>
      
      </div>
    </div>
  );
}

export default App;
