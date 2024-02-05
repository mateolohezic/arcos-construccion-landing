import React from 'react'
import './descargarCarpeta.css'
import downloadIcon from '../../assets/downloadIcon.png'
import carpetaComercial from '../../assets/CarpetaComercialArcosConstruccion.pdf'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function DescargarCarpeta() {
    return (
    <>
        <div className='descargarCarpetaComercial'>
            <h2>Conoce algunos de nuestros proyectos descargando nuestra carpeta comercial.</h2>
            <LazyLoadImage
            alt="Descargar carpeta comercial"
            src={downloadIcon}
            draggable={false}
            />
            <a href={carpetaComercial} download>
                <button type='button'>
                    Descargar
                </button>
            </a>
        </div>
    </>
    )
}

export default DescargarCarpeta
