import React, { useState, useEffect } from 'react';
import '../hojasDeEstilos/Comentarios.css';

const Comentarios = () => {
  // Definición de estados usando el hook useState
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre
  const [comentario, setComentario] = useState(''); // Estado para almacenar el comentario actual
  const [comentarios, setComentarios] = useState([]); // Estado para almacenar todos los comentarios

  // useEffect se utiliza para realizar efectos secundarios en componentes funcionales, similar a componentDidMount y componentDidUpdate en componentes de clase
  useEffect(() => {
    // Recuperar los comentarios guardados en el localStorage cuando el componente se monta por primera vez
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    // Establecer los comentarios recuperados en el estado
    setComentarios(comentariosGuardados);
  }, []); // El array vacío como segundo argumento significa que este efecto se ejecutará solo una vez, después de que el componente se monte

  // Función para manejar el cambio en el input del nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value); // Actualizar el estado del nombre con el valor del input
  };

  // Función para manejar el cambio en el textarea del comentario
  const handleComentarioChange = (e) => {
    setComentario(e.target.value); // Actualizar el estado del comentario con el valor del textarea
  };

  // Función para manejar el envío del formulario de comentario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario (recargar la página)
    // Verificar si tanto el nombre como el comentario tienen contenido
    if (nombre.trim() !== '' && comentario.trim() !== '') {
      const nuevoComentario = { nombre, comentario }; // Crear un nuevo comentario con el nombre y el comentario
      const nuevosComentarios = [...comentarios, nuevoComentario]; // Crear un nuevo arreglo de comentarios que incluya el comentario actual
      setComentarios(nuevosComentarios); // Actualizar el estado de comentarios con el nuevo arreglo
      localStorage.setItem('comentarios', JSON.stringify(nuevosComentarios)); // Guardar los comentarios en el localStorage como una cadena JSON
      setNombre(''); // Restablecer el estado del nombre a una cadena vacía para limpiar el input
      setComentario(''); // Restablecer el estado del comentario a una cadena vacía para limpiar el textarea
    } else {
      alert('Por favor, ingresa tu nombre y tu comentario.');
    }
  };

  return (
    <div className='Comentarios'>
      <h2>Sección de comentarios</h2>
      {/* Formulario para agregar un nuevo comentario */}
      <form onSubmit={handleSubmit} className='formComentarios'>
        {/* Input para escribir el nombre */}
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
          className='nombreInput'
        />
        {/* Textarea para escribir el comentario */}
        <textarea
          value={comentario}
          onChange={handleComentarioChange}
          placeholder="Escribe tu comentario..."
          className='agregarComentarios'
        />
        {/* Botón para enviar el comentario */}
        <button type="submit">Agregar comentario</button>
      </form>
      <div className='listaComentarios'>
        <h2>COMENTARIOS:</h2>
        {/* Renderizar todos los comentarios */}
        {comentarios.map((comentario, index) => (
          <div key={index}>
            <p><strong>{comentario.nombre}:</strong> {comentario.comentario}</p>
          </div>
        ))}
      </div>
      {/* Botón para limpiar el localStorage */}
      <button onClick={() => localStorage.clear()}>Limpiar localStorage</button>
    </div>
  );
};

export default Comentarios;
