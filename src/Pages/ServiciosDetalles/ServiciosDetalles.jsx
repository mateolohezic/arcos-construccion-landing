import React, { useEffect, useState } from 'react'
import './serviciosDetalles.css'
import DescargarCarpeta from '../../Components/DescargarCarpeta/DescargarCarpeta'
import CarouselServicio from '../../Components/CarouselServicio/CarouselServicio'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import foto1 from '../../assets/servicios/servicios1.webp'
import foto2 from '../../assets/servicios/servicios2.webp'
import foto3 from '../../assets/servicios/servicios3.webp'
import foto4 from '../../assets/servicios/servicios4.webp'
import foto5 from '../../assets/servicios/servicios5.webp'
import foto6 from '../../assets/servicios/servicios6.webp'
import foto7 from '../../assets/servicios/servicios7.webp'
import foto8 from '../../assets/servicios/servicios8.webp'
import foto9 from '../../assets/servicios/servicios9.webp'
import foto10 from '../../assets/servicios/servicios10.webp'
import foto11 from '../../assets/servicios/servicios11.webp'
import foto12 from '../../assets/servicios/servicios12.webp'

function ServiciosDetalles() {
    
    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    const fotos = [ foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12 ]

    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="En Arcos Construcción, nos enorgullece ser líderes en la especialización de obras de gasoductos. Desde nuestros comienzos en la década de 1970, hemos desempeñado un papel fundamental en el desarrollo productivo de nuestro país. Durante más de cuatro décadas, hemos aplicado nuestro profundo conocimiento y dedicación incansable para llevar a cabo proyectos de gasoductos complejos y exigentes que son esenciales para el crecimiento y la prosperidad de nuestra nación." />
                <meta name="subject" content="Servicios Básicos - Arcos Construcción" />
                <title>Servicios | Arcos Construcción</title>
            </Helmet>
        </HelmetProvider>
        <div className='contenedorPrincipalObrasCiviles'>
            <div className={ isIphone ? 'portadaIphoneServiciosDetalles' : 'portadaServiciosDetalles' }>
                <h1>SERVICIOS</h1>
            </div>
            <div className='introduccionObrasCiviles'>
                <h2>SERVICIOS ESENCIALES PARA EL DESARROLLO Y EL PROGRESO</h2>
                <h3>Gasoductos y soluciones integrales</h3>
                <p>En Arcos Construcción, nos enorgullece ser líderes en la especialización de obras de gasoductos. Desde nuestros comienzos en la década de 1970, hemos desempeñado un papel fundamental en el desarrollo productivo de nuestro país. Durante más de cuatro décadas, hemos aplicado nuestro profundo conocimiento y dedicación incansable para llevar a cabo proyectos de gasoductos complejos y exigentes que son esenciales para el crecimiento y la prosperidad de nuestra nación.</p>
                <p>Dejamos una huella indeleble al instalar cientos de kilómetros de cañerías destinadas al transporte fluido. Nuestra atención a los detalles y el compromiso con la calidad nos han llevado a cumplir rigurosamente con todas las normativas y estándares exigidos por las autoridades regulatorias. Esto no solo garantiza la seguridad y eficiencia de nuestras instalaciones, sino que también demuestra nuestro compromiso con la integridad y el cumplimiento en cada proyecto.</p>
                <p>Pero nuestra experiencia no se detiene en los gasoductos. Estamos involucrados en servicios esenciales que son vitales para la comunidad, desde la implementación de sistemas de agua potable hasta la gestión eficiente de aguas residuales y la construcción de conductos para servicios tributarios, hemos diversificado nuestro alcance para satisfacer una amplia gama de necesidades. Además, contribuimos a la distribución de servicios modernos, como internet, telefonía y electricidad, fundamentales para la vida cotidiana.</p>
                <p>Nuestra dedicación a la excelencia y la pasión por contribuir al desarrollo sostenible nos han convertido en una empresa que ofrece soluciones integrales. En Arcos Construcción, cada proyecto es único y merece una atención y un compromiso excepcionales.</p>
                <p>Con nosotros, puedes confiar en que tu visión se hará realidad, respaldada por décadas de experiencia y un equipo apasionado. Nos enorgullece ser parte integral de proyectos que impulsan el progreso y la prosperidad de la comunidad. En cada paso del camino, estamos aquí para superar tus expectativas y ofrecer resultados sobresalientes.</p>
            </div>
            <CarouselServicio fotos={fotos} servicio='Servicios'/>
            <DescargarCarpeta/>
        </div>
    </>
    )
}

export default ServiciosDetalles
