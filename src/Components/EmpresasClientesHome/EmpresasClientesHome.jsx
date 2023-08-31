import React from 'react'
import './empresasClientesHome.css'
import Carousel from 'react-multi-carousel';
import foto1 from '../../assets/empresasClientes/azucarbermejoBolivia.webp'
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

function EmpresasClientesHome() {

    const responsiveCarousel = {
        superLargeDesktop: {
          breakpoint: { max: 10000, min: 1200 },
          items: 10,
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 6,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 4,
        }
    };

    return (
    <>
        <div className='contenedorEmpresasClientesHome'>
            <h2>EMPRESAS QUE FORMAN EL MUNDO DE ARCOS</h2>
            <p>Estas empresas ya confiaron en nosotros, consiguiendo un servicio de excelencia y calidad en cada paso.</p>
            <div className='contenedorCarouselEmpresasClientesHome'>
                <Carousel infinite autoPlay pauseOnHover centerMode arrows={false} containerClass='carouselEmpresasClientesHome' showDots={true} renderDotsOutside={true} dotListClass="dotsCarouselAnuncios" responsive={responsiveCarousel}>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto1} alt="Azúcar Bermejo Bolivia Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto2} alt="Calsa Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto3} alt="Cencosud Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto4} alt="Citrusvil Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto5} alt="Scania Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto6} alt="Coca Cola Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto7} alt="Pepsi Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto8} alt="Covemat Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto9} alt="Di Bacco Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto10} alt="Tensolite Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto11} alt="Grupo Estisol Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto12} alt="Industria del Trigo Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto13} alt="Ingenio La Corona Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto14} alt="Ingenio La Esperanza Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto15} alt="Ingenio Leales Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto16} alt="Ingenio San Juan Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto17} alt="Ingenio Santa Barbara Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto18} alt="Ingenio Santa Rosa Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto19} alt="Jockey Tucumán Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto20} alt="La Panerita Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto21} alt="Libertad Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto22} alt="Litoral Citrus Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto23} alt="Conecta Ingeniería Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto24} alt="Pramarco Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto25} alt="Produnoa Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto26} alt="Rivoli Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto27} alt="San Miguel Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto28} alt="Santiago Del Estero Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto29} alt="Club Universitario Tucumán Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto30} alt="El Liberal Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto31} alt="UNSE Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto32} alt="UNSTA Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto33} alt="Universidad Nacional Tucumán Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto34} alt="VHA Empresa Constructora S.A. Arcos Construcción" />
                    </div>
                    <div className='itemCarouselEmpresasClientesHome'>
                        <img src={foto35} alt="Viluco Arcos Construcción" />
                    </div>
                </Carousel>
            </div>
        </div>
    </>
    )
}

export default EmpresasClientesHome