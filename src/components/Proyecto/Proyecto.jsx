import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Proyecto.css"

const Proyecto = ({ proyecto }) => {

    const imagenes = proyecto.imagenes;

    return (
        <div>
           <div className="proyecto_name_container">
            <h1 className="proyecto_name">{proyecto.name}</h1>
            </div>

            <div className="detalle_proyecto_container">
                <div className="imagenes_proyecto_container">
                    <div className="galeria">
                        {imagenes.map((imagen, index) => (
                            <img key={index} src={imagen} alt={`Imagen ${index}`} className="imagen_pr" />
                        ))}
                    </div>
                </div>
                <div className="detalles_proyecto_container">
                    <h2 className="descripcion_proyecto_h2">Descripción</h2>
                    <p className="descripcion_proyecto">{proyecto.descripcion}</p>

                    <h2 className="descripcion_proyecto_h2">Detalles</h2>
                    {proyecto.ubicacion?.trim() && (
                        <div className="ubicacion_container">
                            <h3 className="detalle_proyecto_h3">Ubicación</h3>
                            <p className="descripcion_proyecto">{proyecto.ubicacion}</p>
                        </div>
                    )}

                    {proyecto.ano?.trim() && (
                        <div className="ano_container">
                            <h3 className="detalle_proyecto_h3">Año</h3>
                            <p className="descripcion_proyecto">{proyecto.ano}</p>
                        </div>
                    )}

                    {proyecto.cliente?.trim() && (
                        <div className="cliente_container">
                            <h3 className="detalle_proyecto_h3">Cliente</h3>
                            <p className="descripcion_proyecto">{proyecto.cliente}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Proyecto