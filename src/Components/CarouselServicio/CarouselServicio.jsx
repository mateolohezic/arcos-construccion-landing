import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CarouselServicio(props) {

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

    const fotos = props.fotos

    return (
    <>
        <Carousel infinite autoPlay pauseOnHover centerMode arrows={false} containerClass='carouselFotosHome' responsive={responsiveCarousel}>
            {
            fotos.map( foto => (
                <div className='itemCarouselFotosHome' key={foto}>
                  <LazyLoadImage
                    alt={`${props.servicio} Arcos Construcción`}
                    src={foto}
                    draggable={false}
                  />
                </div>
            ))
            }
        </Carousel>
    </>
    )
}

export default CarouselServicio