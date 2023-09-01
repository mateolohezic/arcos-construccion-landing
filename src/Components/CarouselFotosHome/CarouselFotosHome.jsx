import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carouselFotosHome.css'
import foto1 from '../../assets/carouselFotosHome/carousel1.jpg'
import foto2 from '../../assets/carouselFotosHome/carousel2.jpg'
import foto3 from '../../assets/carouselFotosHome/carousel3.jpg'
import foto4 from '../../assets/carouselFotosHome/carousel4.jpg'
import foto5 from '../../assets/carouselFotosHome/carousel5.jpg'
import foto6 from '../../assets/carouselFotosHome/carousel6.jpg'

function CarouselFotosHome() {

    const responsiveCarousel = {
        superLargeDesktop: {
          breakpoint: { max: 10000, min: 1200 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        }
    };

    const fotos = [ foto1, foto2, foto3, foto4, foto5, foto6 ]

    return (
    <>
        <Carousel infinite autoPlay pauseOnHover centerMode arrows={false} containerClass='carouselFotosHome' responsive={responsiveCarousel}>
            {
            fotos.map( foto => (
                <div className='itemCarouselFotosHome' key={foto}>
                    <img src={foto} alt="Arcos Construcción en acción" draggable={false}/>
                </div>
            ))
            }
        </Carousel>
    </>
    )
}

export default CarouselFotosHome