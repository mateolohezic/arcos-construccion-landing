import React from 'react'
import './clientes.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import foto1 from '../../assets/empresasClientes/azucarBermejoBolivia.webp'
import foto2 from '../../assets/empresasClientes/calsa.webp'
import foto3 from '../../assets/empresasClientes/cencosud.webp'
import foto4 from '../../assets/empresasClientes/citrusvil.webp'
import foto5 from '../../assets/empresasClientes/scania.webp'
import foto6 from '../../assets/empresasClientes/cocaCola.webp'
import foto7 from '../../assets/empresasClientes/pepsi.webp'
import foto8 from '../../assets/empresasClientes/covemat.webp'
import foto9 from '../../assets/empresasClientes/diBacco.webp'
import foto10 from '../../assets/empresasClientes/tensolite.webp'
import foto11 from '../../assets/empresasClientes/grupoEstisol.webp'
import foto12 from '../../assets/empresasClientes/industriaDelTrigo.webp'
import foto13 from '../../assets/empresasClientes/ingenioLaCorona.webp'
import foto14 from '../../assets/empresasClientes/ingenioLaEsperanza.webp'
import foto15 from '../../assets/empresasClientes/ingenioLeales.webp'
import foto16 from '../../assets/empresasClientes/ingenioSanJuan.webp'
import foto17 from '../../assets/empresasClientes/ingenioSantaBarbara.webp'
import foto18 from '../../assets/empresasClientes/ingenioSantaRosa.webp'
import foto19 from '../../assets/empresasClientes/jockeyTucuman.webp'
import foto20 from '../../assets/empresasClientes/laPanerita.webp'
import foto21 from '../../assets/empresasClientes/libertad.webp'
import foto22 from '../../assets/empresasClientes/litoralCitrus.webp'
import foto23 from '../../assets/empresasClientes/conectaIngenieria.webp'
import foto24 from '../../assets/empresasClientes/pramarco.webp'
import foto25 from '../../assets/empresasClientes/produnoa.webp'
import foto26 from '../../assets/empresasClientes/rivoli.webp'
import foto27 from '../../assets/empresasClientes/sanMiguel.webp'
import foto28 from '../../assets/empresasClientes/santiagoDelEstero.webp'
import foto29 from '../../assets/empresasClientes/clubUniversitarioTucuman.webp'
import foto30 from '../../assets/empresasClientes/elLiberal.webp'
import foto31 from '../../assets/empresasClientes/unse.webp'
import foto32 from '../../assets/empresasClientes/unsta.webp'
import foto33 from '../../assets/empresasClientes/unt.webp'
import foto34 from '../../assets/empresasClientes/VHA.webp'
import foto35 from '../../assets/empresasClientes/viluco.webp'

function Clientes() {

    const logos = [
        { src: foto1, alt: 'Azúcar Bermejo Bolivia' },
        { src: foto2, alt: 'Calsa' },
        { src: foto3, alt: 'Cencosud' },
        { src: foto4, alt: 'Citrusvil' },
        { src: foto5, alt: 'Scania' },
        { src: foto6, alt: 'Coca Cola' },
        { src: foto7, alt: 'Pepsi' },
        { src: foto8, alt: 'Covemat' },
        { src: foto9, alt: 'Di Bacco' },
        { src: foto10, alt: 'Tensolite' },
        { src: foto11, alt: 'Grupo Estisol' },
        { src: foto12, alt: 'Industria del Trigo' },
        { src: foto13, alt: 'Ingenio La Corona' },
        { src: foto14, alt: 'Ingenio La Esperanza' },
        { src: foto15, alt: 'Ingenio Leales' },
        { src: foto16, alt: 'Ingenio San Juan' },
        { src: foto17, alt: 'Ingenio Santa Barbara' },
        { src: foto18, alt: 'Ingenio Santa Rosa' },
        { src: foto19, alt: 'Jockey Tucumán' },
        { src: foto20, alt: 'La Panerita' },
        { src: foto21, alt: 'Libertad' },
        { src: foto22, alt: 'Litoral Citrus' },
        { src: foto23, alt: 'Conecta Ingeniería' },
        { src: foto24, alt: 'Pramarco' },
        { src: foto25, alt: 'Produnoa' },
        { src: foto26, alt: 'Rivoli' },
        { src: foto27, alt: 'San Miguel' },
        { src: foto28, alt: 'Santiago Del Estero' },
        { src: foto29, alt: 'Club Universitario Tucumán' },
        { src: foto30, alt: 'El Liberal' },
        { src: foto31, alt: 'UNSE' },
        { src: foto32, alt: 'UNSTA' },
        { src: foto33, alt: 'Universidad Nacional Tucumán' },
        { src: foto34, alt: 'VHA Empresa Constructora S.A.' },
        { src: foto35, alt: 'Viluco' },
    ];

    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="Desde 1970, hemos estado ofreciendo una amplia gama de servicios profesionales y aprovechando nuestra rica experiencia para guiar a cada cliente a lo largo de todo el proceso de sus proyectos. Nos esforzamos constantemente por comprender las necesidades de nuestros clientes y entregar resultados excepcionales. A lo largo de los años, hemos tenido el privilegio de colaborar con destacadas empresas, algunas de las cuales incluyen:" />
                <meta name="subject" content="Clientes - Arcos Construcción" />
                <title>Clientes | Arcos Construcción</title>
            </Helmet>
        </HelmetProvider>
        <div className="contenedorPrincipalClientes">
            <div className='contenidoClientes'>
                <h1>NUESTROS CLIENTES</h1>
                <h2>Éxitos Compartidos</h2>
                <p>Desde 1970, hemos estado ofreciendo una amplia gama de servicios profesionales y aprovechando nuestra rica experiencia para guiar a cada cliente a lo largo de todo el proceso de sus proyectos. Nos esforzamos constantemente por comprender las necesidades de nuestros clientes y entregar resultados excepcionales. A lo largo de los años, hemos tenido el privilegio de colaborar con destacadas empresas, algunas de las cuales incluyen:</p>
                <div className='contenedorLogosClientes'>
                    {
                        logos.map( logo => (
                            <div className='itemLogoClientes' key={logo.alt}>
                                <img src={logo.src} alt={`${logo.alt} Arcos Construcción`} draggable={false} loading="lazy"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default Clientes