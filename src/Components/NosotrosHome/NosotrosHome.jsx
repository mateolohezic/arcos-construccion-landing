import React from 'react'
import './nosotrosHome.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../assets/logoGris.png'

function NosotrosHome() {

    return (
    <>
        <div className='contenedorNosotrosHome'>
            <div className='contenidoNosotrosHome'>
                <h2>NOSOTROS</h2>
                <div className='textoNosotrosHome'>
                    <p>Somos una empresa constructora especializada en la ejecución de Obras Públicas y Privadas, desplegando nuestras capacidades en diversas áreas. Abarcamos desde Obras Civiles, Infraestructura e Industria, hasta áreas vitales como Gas, Electricidad, Prevención de Incendios, Agua, y Saneamiento, así como también en el ámbito de los Desarrollos.</p>
                    <p>Con una trayectoria de dos décadas, iniciamos nuestras operaciones hace 20 años, fusionando la experiencia y las habilidades adquiridas durante más de 30 años en el seno de la empresa familiar fundada por nuestros padres en la década de 1970. Durante todo este tiempo, nos hemos enfocado en tareas relacionadas con Obras Civiles, así como en la manufactura y montaje de Instalaciones para Gas Natural, siendo estos nuestros pilares fundamentales.</p>
                    <LazyLoadImage
                        alt="Logo Arcos Construcción"
                        src={logo}
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    </>
    )
}

export default NosotrosHome