import React from "react";
import "../hojasDeEstilos/VehiculoInfo.css";
import { AiOutlineCloseCircle  } from 'react-icons/ai';

function VehiculoInfo({id, 
    nombre,
    fechaDeInvencion, 
    Modelos, 
    descripcion, 
    tipoCombustible,  
    imagenUltimoModelo, 
    imagen, primerModelo, 
    ultimoModelo,
    onBack 
}
){
    
    primerModelo = "Primer Modelo ffdsfs sfdfd fdfdf dfdfd fdfd dsdsad ad sadsa dsa asd ad as dsa";
    ultimoModelo = "Ultimo Modelo";
    
    
    const modelos = Modelos.split('. ');
    return (
        <div className="VehiculoInfo">
            {/*Parte superior*/}
            <div className="vehiculoInfoSuperior">
                <img    
                    className="imagenMuestra"
                    src={require(`../imagenes/vehiculo-${imagenUltimoModelo}.jpeg`)}
                    alt="Imagen ultimo modelo"
                />
                <h1 className="tituloVehiculo">Vehiculo: <b>{nombre}</b></h1>
                <p className="cuadoSeInvento">
                    {fechaDeInvencion}
                </p>
            </div>
            {/*Cuerpo de los datos*/}
            <div className="vehiculoInfoBody">
                <p className="Descripcion">
                    {descripcion}
                </p>
                <p><b>Combustible</b>:</p>
                <p className="combustible">
                     {tipoCombustible}
                </p>
                <div className="tiposModelos">
                    <h2><b>Modelos:</b></h2>
                    {modelos.map((modelo, index) => (
                        <p key={index}># {modelo}</p>
                    ))}
                </div>
            </div>
            <div className="vehiculoDatosImagenes">
                <div className="vehiculoPrimerModelo">
                    <img
                        className="imagenPrimerModelo"
                        src={require(`../imagenes/vehiculo-${imagen}.jpeg`)}
                    />
                    <p>{primerModelo}</p>
                </div>
                <div className="vehiculoUltimoModelo">
                    <img
                        className="imagenUltimoModelo"
                        src={require(`../imagenes/vehiculo-${imagenUltimoModelo}.jpeg`)}
                    />
                    <p>{ultimoModelo}</p>
                </div>
            </div>
            
            <div 
            className="iconoEliminar"
            onClick={onBack}
            >
                <AiOutlineCloseCircle className='tarea-icono'/>  
            </div>
        </div>
    );
}

export default VehiculoInfo;