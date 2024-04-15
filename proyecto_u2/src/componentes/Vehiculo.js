import React, { useState } from 'react';
import '../hojasDeEstilos/Vehiculo.css';
import VehiculoInfo from './VehiculoInfo';

function Vehiculo({ 
    id, 
    imagen, 
    nombre, 
    descripcion,
    fechaDeInvencion,
    tipoCombustible, 
    Modelos,
    imagenUltimoModelo
}){
    const [mostrarVehiculoInfo, setMostrarVehiculoInfo] = useState(false);

    const handleClick = () => {
        // Cambiar el estado para mostrar u ocultar el componente VehiculoInfo
        setMostrarVehiculoInfo(!mostrarVehiculoInfo);
    };
    const handleBack = () => {
        // Cambiar el estado para mostrar el componente Vehiculo anterior
        setMostrarVehiculoInfo(false);
    };
    return (
        <div className="contenedorVehiculo">
            {/* Mostrar el componente VehiculoInfo si mostrarVehiculoInfo es true */}
            {mostrarVehiculoInfo ? (
                <VehiculoInfo
                    id={id}
                    nombre={nombre}
                    descripcion={descripcion}
                    imagen={imagen}
                    tipoCombustible={tipoCombustible}
                    fechaDeInvencion={fechaDeInvencion}
                    Modelos={Modelos}
                    imagenUltimoModelo = {imagenUltimoModelo}
                    onBack={handleBack} 
                />
            ) : (
                // Mostrar la imagen y nombre del vehículo si mostrarVehiculoInfo es false
                <div>
                    <img
                        className="vehiculoImagen"
                        src={require(`../imagenes/vehiculo-${imagenUltimoModelo}.jpeg`)}
                        alt="Imagen Del vehiculo"
                        onClick={handleClick}
                    />
                    <p className="vehiculoNombre">{nombre}</p>
                </div>
            )}
        </div>
    );
}

export default Vehiculo;