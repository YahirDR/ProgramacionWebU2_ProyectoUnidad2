import React, { useState } from 'react';
import Vehiculo from "./Vehiculo";
import '../hojasDeEstilos/ListaVehiculos.css';


function ListaVehiculos(){

    const [vehiculos, setListaVehiculos] = useState([
        { id: 1, nombre: 'Tren', imagen: 'PrimerTren',ultimoModelo:'UltimoTren'
        ,modelos:'Alco DL500. GE U23C. GE C30-7. GE ES44AC. Bombardier TRAXX.'
        ,combustible:'Las locomotoras en México son del tipo diésel-eléctricas.'
        ,fechaInvencion: 'Locomotora de vapor, construida por el ingeniero inglés Richard Trevithick en 1803.', 
        descripcion: 'Son vehículos ferroviarios utilizados para remolcar trenes de carga y pasajeros a lo largo de la red ferroviaria del país. Pueden ser diésel, eléctricas.' },
        
        { id: 2, nombre: 'Autobús', imagen: 'PrimerAutobus',ultimoModelo:'UltimaAutobus'
        ,modelos:'Mercedes-Benz Sprinter. Volvo 9700. MAN Lions Coach. Scania Irizar. Marcopolo Paradiso. DINA Linner. Ayco Magno.'
        ,combustible:'Puede usar gas narutal, ser electricos y híbridos.'
        ,fechaInvencion: 'El primer autobús de la historia data de 1829, cuando el inglés Walter Hancock construyó un vehículo de diez plazas propulsado con un motor de vapor. ', 
        descripcion: 'Un autobús es un vehículo de transporte terrestre diseñado para transportar a numerosas personas de un lugar a otro, pueden ser propulsados por motores diésel, eléctricos o incluso híbridos, existen diferentes tipos de autobuses, como los urbanos, los de larga distancia y los turísticos.' },
        
        { id: 3, nombre: 'Carro', imagen: 'PrimerCarro',ultimoModelo:'UltimoCarro'
        ,modelos:'Ford. Toyota. Volkswagen. Honda. Chevrolet. BMW. Mercedes-Benz. Audi.'
        ,combustible:'Pueden utilizar gas natural comprimido, gas natural licuado, ser electricos, hidrógenos y Híbridos.'
        ,fechaInvencion: 'El primer automóvil propulsado por un motor de combustión interna fue construido por Karl Benz en 1885-1886. Este vehículo, conocido como el Benz Patent-Motorwagen, es considerado el primer automóvil del mundo. ', 
        descripcion: 'Un automóvil es un vehículo de transporte personal diseñado para transportar pasajeros y carga a través de carreteras y vías públicas. puede variar en tamaño, forma y diseño, con diferentes estilos como sedanes, SUVs, camionetas, coupés y hatchbacks.' },
        
        { id: 4, nombre: 'Motocicleta', imagen: 'PrimerMoto',ultimoModelo:'UltimaMoto'
        ,modelos:'Honda. Yamaha. Kawasaki. Suzuki. BMW. Ducati. Harley-Davidson. KTM.'
        ,combustible:'Utiliza gasolina, pueden ser eléctricas y hibrídas.'
        ,fechaInvencion: 'El ingeniero alemán Daimler fabricó en 1885 la primera motocicleta de la historia con motor.', 
        descripcion: 'Vehículo automóvil de dos ruedas impulsado por un motor, diseñado para el transporte de una o dos personas, funcionan con combustible, aunque también hay motores alimentados con energía eléctrica.' },
        
        { id: 5, nombre: 'Bicicleta', imagen: 'PrimerBici',ultimoModelo:'UltimaBici'
        ,modelos:'Bicicletas de montaña (MTB). Bicicletas de carretera. Bicicletas híbridas. Bicicletas de paseo. Bicicletas eléctricas (e-bikes). Bicicletas de carrera (BMX). Bicicletas de turismo. Bicicletas de carga.'
        ,combustible:'Las bicicletas tradicionales no utilizan combustible, sino que son propulsadas por el esfuerzo humano.'
        ,fechaInvencion: 'Fue inventada el 14 de Junio de 1817 un tipo llamado Barón Karl von Drais en Alemania.', 
        descripcion: 'Vehículo de dos ruedas, normalmente de igual tamaño, impulsados por la fuerza humana cuyos pedales transmiten el movimiento a la rueda trasera por medio de un plato, un piñón y una cadena. En el caso de las bicicletas eléctricas, por un motor eléctrico asistido por pedaleo. Son utilizadas para transporte, recreación, ejercicio físico y deportes.' }
        
        
    ]);
    

    return (
        <div className="listaVehiculos">
            {
                vehiculos.map((vehiculo)=>(
                        <Vehiculo
                            key={vehiculo.id}
                            id={vehiculo.id}
                            imagen={vehiculo.imagen}
                            nombre={vehiculo.nombre}
                            fechaDeInvencion={vehiculo.fechaInvencion}
                            tipoCombustible={vehiculo.combustible}
                            Modelos={vehiculo.modelos}
                            imagenUltimoModelo={vehiculo.ultimoModelo}
                            descripcion={vehiculo.descripcion}
                        />
                    )
                )
            }
        </div>
    );
}

export default ListaVehiculos;