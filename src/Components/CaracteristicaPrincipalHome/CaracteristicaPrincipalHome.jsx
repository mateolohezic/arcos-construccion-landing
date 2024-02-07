import React from 'react'
import './caracteristicaPrincipalHome.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function CaracteristicaPrincipalHome() {
    return (
    <>
        <LazyLoadComponent>
            <div className='contenedorCaracteristicaHome'>
                <h2>CONSTRUYENDO EXCELENCIA A LO LARGO DEL TIEMPO</h2>
                <h5>Más de 47 años de experiencia y adaptabilidad inigualable</h5>
                <p>Somos Arcos Construcción, donde la experiencia trasciende el tiempo y la versatilidad define nuestro enfoque. Con medio siglo de experiencia en la industria, hemos forjado un camino de excelencia que se refleja en cada proyecto. Nuestra historia rica y diversificada nos ha convertido en líderes incuestionables en gasoductos, obras civiles, infraestructura e industria.</p>
            </div>
        </LazyLoadComponent>
    </>
    )
}

export default CaracteristicaPrincipalHome