import React, { useEffect, useState } from 'react'
import './obrasCiviles.css'
import DescargarCarpeta from '../../Components/DescargarCarpeta/DescargarCarpeta'
import CarouselServicio from '../../Components/CarouselServicio/CarouselServicio'
import foto1 from '../../assets/obrasCiviles/obrasCiviles1.jpg'
import foto2 from '../../assets/obrasCiviles/obrasCiviles2.jpg'
import foto3 from '../../assets/obrasCiviles/obrasCiviles3.jpg'
import foto4 from '../../assets/obrasCiviles/obrasCiviles4.jpg'
import foto5 from '../../assets/obrasCiviles/obrasCiviles5.jpg'

function ObrasCiviles() {

    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    const fotos = [ foto1, foto2, foto3, foto4, foto5 ]

    return (
    <>
        <div className='contenedorPrincipalObrasCiviles'>
            <div className={ isIphone ? 'portadaIphoneObrasCiviles' : 'portadaObrasCiviles' }>
                <h1>OBRAS CIVILES</h1>
            </div>
            <div className='introduccionObrasCiviles'>
                <h2>NUESTRA EXPERIENCIA EN ACCIÓN</h2>
                <h3>Experiencia y calidad en cada proyecto</h3>
                <p>En Arcos Construcción, nos apasiona convertir tus proyectos en realidades tangibles. Nos enorgullecemos de ofrecerte una amplia experiencia y conocimiento en el campo, donde la construcción se encuentra con la excelencia. A lo largo de nuestra trayectoria, hemos tenido el privilegio de ser partícipes activos en un amplio espectro de obras, abarcando tanto el sector privado como el público.</p>
                <p>Nuestro compromiso es claro: poner a tu disposición todo nuestro bagaje de experiencia para que tus ideas se materialicen de la mejor manera posible. Sabemos que cada proyecto es único, y eso es lo que nos impulsa a superar expectativas en cada paso del camino.</p>
                <p>Nuestra huella se extiende por toda la región norte del país, donde hemos dejado una marca tangible en el desarrollo de diversas industrias. Desde la construcción de infraestructuras fundamentales hasta la edificación de espacios comerciales y residenciales de calidad excepcional, nuestro enfoque en la excelencia y la atención a los detalles nos distingue.</p>
                <p>Al elegir Arcos Construcción, no solo eliges una empresa constructora, sino un socio comprometido con tu visión. Estamos aquí para transformar tus proyectos en realidades concretas, y lo hacemos con la pasión, la experiencia y el compromiso que nos caracterizan.</p>
                <p>Te invitamos a explorar nuestro portafolio de obras civiles y descubrir cómo hemos contribuido al crecimiento y desarrollo de diversas comunidades. En cada proyecto, nuestra misión es clara: construir con calidad, precisión y dedicación para que nuestros resultados hablen por sí mismos.</p>
                <p>Confía en nosotros para construir tu futuro, porque en Arcos Construcción, cada proyecto es una oportunidad para alcanzar la excelencia.</p>
            </div>
            <CarouselServicio fotos={fotos} servicio='Obras Civiles'/>
            <DescargarCarpeta/>
        </div>
    </>
    )
}

export default ObrasCiviles
