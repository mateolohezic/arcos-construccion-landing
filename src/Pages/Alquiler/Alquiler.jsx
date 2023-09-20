import React, { useEffect, useState } from 'react'
import './alquiler.css'
import DescargarCarpeta from '../../Components/DescargarCarpeta/DescargarCarpeta'
import CarouselServicio from '../../Components/CarouselServicio/CarouselServicio'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import foto1 from '../../assets/alquiler/alquiler1.webp'
import foto2 from '../../assets/alquiler/alquiler2.webp'
import foto3 from '../../assets/alquiler/alquiler3.webp'
import foto4 from '../../assets/alquiler/alquiler4.webp'
import foto5 from '../../assets/alquiler/alquiler5.webp'
import foto6 from '../../assets/alquiler/alquiler6.webp'
import foto7 from '../../assets/alquiler/alquiler7.webp'
import foto8 from '../../assets/alquiler/alquiler8.webp'
import foto9 from '../../assets/alquiler/alquiler9.webp'
import foto10 from '../../assets/alquiler/alquiler10.webp'
import foto11 from '../../assets/alquiler/alquiler11.webp'

function Alquiler() {
            
    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    const fotos = [ foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11 ]

    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="En Arcos Construcción, entendemos que tener acceso a equipos de calidad marca la diferencia en la eficiencia y el éxito de cualquier proyecto. Por eso, ponemos a tu disposición nuestra flota de equipos de vanguardia para garantizar una ejecución rápida, cómoda y segura en una amplia variedad de obras." />
                <meta name="subject" content="Alquiler de equipos - Arcos Construcción" />
                <title>Alquiler de equipos | Arcos Construcción</title>
            </Helmet>
        </HelmetProvider>
        <div className='contenedorPrincipalObrasCiviles'>
            <div className={ isIphone ? 'portadaIphoneAlquiler' : 'portadaAlquiler' }>
                <h1>ALQUILER</h1>
            </div>
            <div className='introduccionObrasCiviles'>
                <h2>NUESTRA FLOTA A TU DISPOSICIÓN</h2>
                <h3>Equipos de Vanguardia para todos tus proyectos</h3>
                <p>En Arcos Construcción, entendemos que tener acceso a equipos de calidad marca la diferencia en la eficiencia y el éxito de cualquier proyecto. Por eso, ponemos a tu disposición nuestra flota de equipos de vanguardia para garantizar una ejecución rápida, cómoda y segura en una amplia variedad de obras.</p>
                <p>Nuestra flota de equipos de alquiler es una extensión de nuestra dedicación a la excelencia en la construcción. Cada máquina está meticulosamente mantenida y lista para enfrentar los desafíos más exigentes. Sabemos que el tiempo es esencial en la construcción, y nuestros equipos están diseñados para optimizar cada aspecto de tu obra.</p>
                <p>Ofrecemos servicios de alquiler especializados para excavaciones, movimientos de tierra y cualquier tarea que requiera la potencia y versatilidad de nuestras máquinas. Desde grandes proyectos de infraestructura hasta trabajos de construcción más pequeños, nuestro equipo de expertos está dispuesto a brindarte soluciones de alquiler que se adapten perfectamente a tus necesidades.</p>
                <p>En Arcos, no solo construimos estructuras, construimos un futuro mejor. Si estás buscando un socio confiable y experimentado para tu próximo proyecto de construcción, no dudes en contactarnos. Estamos aquí para hacer tus sueños realidad y para ofrecerte las herramientas y la experiencia necesarias para lograrlo.</p>
                <p>Desde excavadoras de última generación hasta equipos de movimiento de tierra de alta precisión, nuestra flota de alquiler cuenta con una variedad de opciones para satisfacer tus necesidades específicas. Confía en nosotros para proporcionarte la maquinaria adecuada, el soporte técnico necesario y el compromiso de hacer que tu proyecto sea un éxito.</p>
                <p>En Arcos Construcción, estamos comprometidos con tu éxito. Contáctanos hoy mismo y descubre cómo podemos hacer que tus proyectos se vuelvan realidad de manera más eficiente y efectiva que nunca.</p>
            </div>
            <CarouselServicio fotos={fotos} servicio='Alquiler de equipos'/>
            <DescargarCarpeta/>
        </div>
    </>
    )
}

export default Alquiler