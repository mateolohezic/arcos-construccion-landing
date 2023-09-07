import React, { useEffect, useState } from 'react'
import './servicios.css'
import foto1 from '../../assets/servicio1.webp'

function Servicios() {
    
    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    return (
    <>
        <div className='contenedorPrincipalServicios'>
            <div className={ isIphone ? 'portadaIphoneServicios' : 'portadaServicios' }>
                <h1>SERVICIOS</h1>
            </div>
            <div className='introduccionServicios'>
                <h2>DESCUBRE EL MUNDO ARCOS</h2>
                <h3>Donde la construcción se encuentra con la excelencia</h3>
                <p>Desde nuestros humildes comienzos, en Arcos Construcción hemos comprendido que nuestro éxito y crecimiento están intrínsecamente ligados a los altos estándares de servicio que ofrecemos a nuestros clientes. Este principio fundamental ha sido la fuerza impulsora detrás de nuestro crecimiento y prestigio a lo largo de los años.</p>
                <p>En Arcos Construcción, cada miembro de nuestro equipo comparte una convicción profunda: el mayor esfuerzo en brindar un servicio excepcional establece relaciones sólidas y a largo plazo con nuestros clientes, tanto a nivel nacional como internacional.</p>
                <p>En los últimos años, hemos tenido el privilegio de participar en proyectos en colaboración con empresas extranjeras que operan en el sur de Sudamérica. Durante este tiempo, hemos descubierto que nuestra vocación de servicio, combinada con nuestra capacidad para ofrecer soluciones a una amplia gama de necesidades en construcción y más allá, nos coloca en una posición única en Argentina.</p>
                <p>Estamos comprometidos con la excelencia en todos los aspectos de nuestros servicios, desde la ingeniería hasta la construcción, pasando por la planificación y el seguimiento de proyectos. Nos enorgullecemos de utilizar las últimas tecnologías y contar con un equipo comprometido que trabaja incansablemente para cumplir con los más altos estándares de calidad.</p>
                <p>Para obtener más información sobre los servicios y soluciones que ofrecemos en Arcos Construcción, te invitamos a explorar nuestras áreas de especialización y proyectos destacados.</p>
            </div>
            <div className='tituloFotosServicios'>
                <h2>NUESTROS SERVICIOS</h2>
                <h3>Descubre a detalles cada servicio del mundo de Arcos</h3>
            </div>
            <div className='contenedorFotosServicios'>
                <a href="/Servicios/Obras-civiles">
                </a>
                <a href="/Servicios/Servicios">
                </a>
                <a href="/Servicios/Desarrollos">
                </a>
                <a href="/Servicios/Alquileres">
                </a>
            </div>
        </div>
    </>
    )
}

export default Servicios