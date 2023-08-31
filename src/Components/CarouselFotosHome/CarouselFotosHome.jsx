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

    return (
    <>
        <Carousel infinite autoPlay pauseOnHover centerMode arrows={false} containerClass='carouselFotosHome' responsive={responsiveCarousel}>
            <div className='itemCarouselFotosHome'>
                <img src={foto1} alt="Arcos Construcción en acción" />
            </div>
            <div className='itemCarouselFotosHome'>
                <img src={foto2} alt="Arcos Construcción en acción" />
            </div>
            <div className='itemCarouselFotosHome'>
                <img src={foto3} alt="Arcos Construcción en acción" />
            </div>
            <div className='itemCarouselFotosHome'>
                <img src={foto4} alt="Arcos Construcción en acción" />
            </div>
            <div className='itemCarouselFotosHome'>
                <img src={foto5} alt="Arcos Construcción en acción" />
            </div>
            <div className='itemCarouselFotosHome'>
                <img src={foto6} alt="Arcos Construcción en acción" />
            </div>
        </Carousel>
    </>
    )
}

export default CarouselFotosHome