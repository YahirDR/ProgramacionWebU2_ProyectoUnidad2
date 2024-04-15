import React from 'react';
import ParteSuperior from "./ParteSuperior";
import ListaVehiculos from "./ListaVehiculos";
import '../hojasDeEstilos/inicio.css';

function Inicio(){
    


    return  (
    <div className="inicio">
        <div className='ParteSuperior'>
          <ParteSuperior    />
        </div>
        <div className='contenedorVehiculos'>
          <ListaVehiculos   />
        </div>
    </div>
    );
}

export default Inicio;
