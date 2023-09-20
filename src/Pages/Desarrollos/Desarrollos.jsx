import React, { useEffect, useState } from 'react'
import './desarrollos.css'
import DescargarCarpeta from '../../Components/DescargarCarpeta/DescargarCarpeta'
import CarouselServicio from '../../Components/CarouselServicio/CarouselServicio'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import foto1 from '../../assets/desarrollos/desarrollos1.webp'
import foto2 from '../../assets/desarrollos/desarrollos2.webp'
import foto3 from '../../assets/desarrollos/desarrollos3.webp'
import foto4 from '../../assets/desarrollos/desarrollos4.webp'
import foto5 from '../../assets/desarrollos/desarrollos5.webp'
import foto6 from '../../assets/desarrollos/desarrollos6.webp'
import foto7 from '../../assets/desarrollos/desarrollos7.webp'
import foto8 from '../../assets/desarrollos/desarrollos8.webp'
import foto9 from '../../assets/desarrollos/desarrollos9.webp'
import foto10 from '../../assets/desarrollos/desarrollos10.webp'
import foto11 from '../../assets/desarrollos/desarrollos11.webp'
import foto12 from '../../assets/desarrollos/desarrollos12.webp'

function Desarrollos() {
        
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
                <meta name="description" content="En Arcos Construcción, desempeñamos un papel activo y fundamental en el impulso del desarrollo industrial y urbano en toda la región del Noroeste argentino (NOA). Nuestra participación abarca una amplia variedad con un compromiso inquebrantable tanto en el ámbito privado como en el público." />
                <meta name="subject" content="Desarrollos - Arcos Construcción" />
                <title>Desarrollos | Arcos Construcción</title>
            </Helmet>
        </HelmetProvider>
        <div className='contenedorPrincipalObrasCiviles'>
            <div className={ isIphone ? 'portadaIphoneDesarrollos' : 'portadaDesarrollos' }>
                <h1>DESARROLLOS</h1>
            </div>
            <div className='introduccionObrasCiviles'>
                <h2>FOMENTANDO EL CRECIMIENTO INDUSTRIAL Y URBANO</h2>
                <h3>Contribuyendo al desarrollo de nuestro país</h3>
                <p>En Arcos Construcción, desempeñamos un papel activo y fundamental en el impulso del desarrollo industrial y urbano en toda la región del Noroeste argentino (NOA). Nuestra participación abarca una amplia variedad con un compromiso inquebrantable tanto en el ámbito privado como en el público.</p>
                <p>Nuestra pasión por contribuir al crecimiento de nuestro país nos ha llevado a emprender proyectos de desarrollo propios. Estos proyectos son nuestra manera de invertir en el futuro y generar oportunidades para todos los sectores. Desde el inicio, hemos enfocado nuestro conocimiento y recursos en la creación de parques industriales de vanguardia que no solo impulsan la economía local, sino que también brindan empleo y promueven la innovación.</p>
                <p>Además de nuestros proyectos de desarrollo, hemos sido un catalizador en la creación de barrios privados y públicos que definen nuevos estándares de calidad de vida. Estamos comprometidos con la construcción de comunidades sostenibles que ofrecen un entorno seguro y confortable para las familias.</p>
                <p>Nuestra experiencia no se limita a un solo sector; hemos contribuido en diversos campos industriales. Ya sea en la construcción de instalaciones para la industria manufacturera, la expansión de infraestructuras para la producción de energía o la creación de espacios de oficinas de vanguardia, hemos demostrado una versatilidad excepcional y un compromiso inflexible con la excelencia en cada proyecto.</p>
                <p>Estamos orgullosos de ser un motor impulsor del progreso en nuestra región y en todo el país. Cada proyecto en el que participamos es una oportunidad para hacer una diferencia positiva. Nos enorgullece poner nuestro conocimiento y experiencia a disposición de la comunidad y contribuir al crecimiento sostenible en Argentina.</p>
                <p>En Arcos Construcción, no solo construimos estructuras; construimos un futuro más brillante y próspero para todos.</p>
            </div>
            <CarouselServicio fotos={fotos} servicio='Servicios'/>
            <DescargarCarpeta/>
        </div>
    </>
    )
}

export default Desarrollos
