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

  {/*Ejercicio 5 */}
  const [elemento, setElemento] = useState('');
  const [lista, setLista] = useState([]);

  const agregarElemento = () => {
    if (elemento.trim() !== '') {
      setLista([...lista, elemento]);
      setElemento(''); // Limpiar el input después de agregar
    }
  };
  {/*Notas
  El metodo .trim() elimina los espacios en blanco al principio y al final de la cadena. Esto asegura que no se puedan agregar elementos vacios o que solo contengan espacios en blanco.
  (...) es el operador "spread", que permite copiar los elementos de un array o objeto y crear un nuevo array con ellos (elemento). En detalle, ...lista copia los elementos actuales de la lista. ...lista, elemento agrega el nuevo elemento al final del array copiado. Ejemplo: Si lista = [1, 2, 3], entonces [...lista, 4] resulta en [1, 2, 3, 4].  
  */}
  const eliminarElemento = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };
  {/*Notas
  1.index es el indice del elemento que se va a eliminar 
  2.lista.filter() crea un nuevo arreglo que contiene solo los elementos que cumplen con la condicion que se define dentro, en este caso: (_, i) => i !== index. 
  2.1 _ (subrayado) representa el elemento actual (no lo usamos aqui, asi que lo omitimos)
  2.2 i es el indice del elemento actual.
  2.3 i !== index es una condicion que verifica si el indice actual (i) es diferente al indice que queremos eliminar (index).
  Ejemplo: si Lista = ['A', 'B', 'C'] y queremos eliminar el elemento 'B', entonces lista.filter((_, i) => i !== 1) resulta en ['A', 'C']
  */}

  {/*Ejercicio 6 */}
  const [texto1, setTexto1] = useState('Texto 1 inicial');
  const [texto2, setTexto2] = useState('Texto 2 inicial');
  const [texto3, setTexto3] = useState('Texto 3 inicial'); 

  const cambiarTexto1 = () => setTexto1('Eres un Crack! 😎');
  const cambiarTexto2 = () => setTexto2('Muy bien, asi se hace! 🤩');
  const cambiarTexto3 = () => setTexto3('Sigue asi y pronto seras un experto! 🤓');

  {/*Ejercicio 7 */}
  const [colorCaja1, setColorCaja1] = useState('red');
  const [colorCaja2, setColorCaja2] = useState('blue');
  const [colorCaja3, setColorCaja3] = useState('green');

  const cambiarColor1 = () => setColorCaja1(colorCaja1 === 'red' ? 'orange' : 'red');
  const cambiarColor2 = () => setColorCaja2(colorCaja2 === 'blue' ? 'purple' : 'blue');
  const cambiarColor3 = () => setColorCaja3(colorCaja3 === 'green' ? 'yellow' : 'green');

  {/*Ejercicio 8 */}

  {/* Estado para controlar la visibilidad del texto 
  Inicialmente es false, por lo que no aparece.*/}
  const [mostrarTexto, setMostrarTexto] = useState(false);
  
  {/* Funcion para alternar entre mostrar y ocultar el texto */}
  const toggleTexto = () => setMostrarTexto(!mostrarTexto) //cambia 'mostrarTexto' a el valor opuesto

  {/*Ejercicio 9 */}
  {/* Estado para guardar la opción seleccionada */}
  const [opcion, setOpcion] = useState('');

  /* Función para cambiar la opción actual */
  const cambiarOpcion = (nuevaOpcion) => {
    setOpcion(nuevaOpcion); // Actualiza `opcion` con el valor del botón presionado
  };
  {/*Ejercicio 10*/}

  {/*Existe un boton que deberia de Mostrar / Ocultar una seccion*/}

  // Estado del boton para alternar entre mostray ocultar
  const [mostrar, setMostrar] = useState(false);

  // Funcion para alternar entre mostrar y ocultar
  const alternarContenido = () => {
    setMostrar(!mostrar);
  }
 
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
            "password" : Oculta los caracteres ingresados.
            "search" : Se utiliza para la barra de búsqueda.
            "checkbox" : Entrada tipo casilla de verificacion.
    
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

          <div className="Ejercicio5">
          <h2>Ejercicio 5: Manejo de listas dinámicas</h2>
          <input 
            type="text" 
            placeholder="Añadir a la lista..." 
            value={elemento}
            onChange={(e) => setElemento(e.target.value)}
          />
          <button onClick={agregarElemento}>Agregar</button>
          <ul>
            {lista.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => eliminarElemento(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          {/*Notas:
          1. .map recorre cada elemento de la lista y genera una nueva lista con los elementos modificados. Aqui lo usamos para generar los elementos de la lista.
          2. Argumento (item, index) de la función flecha es una desestructuración de los elementos de la lista. item representa el elemento en si, mientras que index representa su posición en la lista.
          3. La propiedad key es una clave unica que React utiliza para identificar cada elemento de la lista y mantener su estado adecuado. En este caso, la clave key es el index de la lista.
          */}
        </div>

        <div className='Ejercicio6'>
          <h2>Ejercicio 6: Cambiar multiples textos</h2>
          <p>{texto1}</p>
          <button onClick={cambiarTexto1}>Cambiar Texto 1</button>

          <p>{texto2}</p>
          <button onClick={cambiarTexto2}>Cambiar Texto 2</button>

          <p>{texto3}</p>
          <button onClick={cambiarTexto3}>Cambiar Texto 3</button>
        </div>

        <div className='Ejercicio7'>
          <h2>Ejercicio 7: Cambiar colores de cajas</h2>
          <div style={{ backgroundColor: colorCaja1, width: '100px', height: '100px', margin: '10px'}}></div>
          <button onClick={cambiarColor1}> Cambiar Color Caja 1 </button>

          <div style={{ backgroundColor: colorCaja2, width: '100px', height: '100px', margin: '10px'}}></div>
          <button onClick={cambiarColor2}>Cambiar Color Caja 2 </button>

          <div style={{ backgroundColor: colorCaja3, width: '100px', height: '100px', margin: '10px'}}></div>
          <button onClick={cambiarColor3}>Cambiar Color Caja 3 </button>
        </div>

        <div className='Ejercicio8'>
          <h2>Ejercicio 8: Mostrar/Ocultar texto</h2>
          <p>Este ejercicio será simple y funcional para entender cómo funciona la renderización condicional con &&</p>
          <button onClick={toggleTexto}>{mostrarTexto ? 'Ocultar Texto' : 'Mostar Texto'}</button>
          {/* la etiqueta boton cambia dinamicamente entre Ocultar Texto y Mostar Texto usando operador ternario */}

          {mostrarTexto && <p>¡Este es el texto que aparece y desaparece!</p>}
          {/* si mostrarTexto es true, entonces: ... */}

        </div>

        <div className='Ejercicio9'>
          <h2>Ejericicio 9: Alternar contenido con múltiples opciones</h2>
            <button onClick={() => cambiarOpcion ('A')}> Opcion </button>
            <button onClick={() => cambiarOpcion ('B')}>Opcion </button>
            <button onClick={() => cambiarOpcion ('C')}>Opcion </button>
              {/* Mensaje predeterminado o contenido basado en la opción seleccionada */}
          <p>{opcion || 'Selecciona una opción para mostrar contenido.'}</p>

        {opcion === 'A' && <p>Aqui podria ampliar el contenido A</p>}
        {opcion === 'B' && <p>o decirte que eres un crack y es B</p>}
        {opcion === 'C' && <p>Simplemente, Contenido de la Opción C</p>}
        </div>

        <div className='Ejercicio10'>
          
        <h2>Ejercicio 10: Boton que Muestre / Oculte seccion</h2>
        <button onClick={alternarContenido}> {mostrar ? 'Ocultar' : 'Mostrar'} </button>

        {mostrar && (
          <div>
            <p>Este es el contenido que se muestra y se oculta</p>
          </div>
        )}

        </div>

  
        </div> {/*cierre de Practica*/}
      </div> {/*cierre del container 3*/}
    </div>
  );
}

export default App;
