import React from 'react'
import './mapsHome.css'
import arrow from '../../assets/arrowDownAzul.png'

function MapsHome() {
    return (
    <>
        <div className='tituloMapsHome'>
            <h2>Encuéntranos aquí</h2>
            <img src={arrow} alt="Ubicación Arcos Construcción" draggable={false} loading="lazy"/>
        </div>
        <div className='contenedorMapsHome'>
            <iframe
                title='Ubicación Arcos Construcción'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.0760221404272!2d-65.22570014847992!3d-26.83027878730773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d5fd1f33e23%3A0xab8f42229fb69357!2sARCOS%20Construccion!5e0!3m2!1ses!2sar!4v1693524350872!5m2!1ses!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">                    
            </iframe>
        </div>
    </>
    )
}

export default MapsHome