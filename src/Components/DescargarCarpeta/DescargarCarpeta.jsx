import React from 'react'
import './descargarCarpeta.css'
import downloadIcon from '../../assets/downloadIcon.png'
import carpetaComercial from '../../assets/CarpetaComercialArcosConstruccion.pdf'

function DescargarCarpeta() {
    return (
    <>
        <div className='descargarCarpetaComercial'>
            <h2>Conoce algunos de nuestros proyectos descargando nuestra carpeta comercial.</h2>
            <img src={downloadIcon} alt="Descargar carpeta comercial" />
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
