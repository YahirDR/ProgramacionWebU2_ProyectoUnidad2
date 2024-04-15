import './App.css';
import React, {useState} from 'react';
import Inicio from './componentes/Inicio';
import Comentarios from './componentes/Comentarios';

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  const renderizarPagina = () =>{
    switch(paginaActual){
      case 'inicio':
        return <Inicio/>
      case 'comentarios':
        return <Comentarios/>
      default:
        return <Inicio/>
    }
  }

  return (
   <div className='App'>
      <div className='BarraLateral'>
        <nav className='navNavegacion'>
          <button
            onClick={ () => setPaginaActual('inicio')}
          >
            Inicio
          </button>
          <button 
          onClick={ ()  => setPaginaActual('comentarios')} 
          >
            Seccion de Comentarios
          </button>
        </nav>
      </div>
      {renderizarPagina()}
   </div> 
    
  );
}

export default App;

