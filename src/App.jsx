import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import './App.css';

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
  );
}

export default App;
