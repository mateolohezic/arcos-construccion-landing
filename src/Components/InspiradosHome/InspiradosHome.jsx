import React from 'react'
import './inspiradosHome.css'
import logo from '../../assets/logoNombre.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function InspiradosHome() {
  return (
    <>
    <div className='contenedorInspiradosHome'>
        <div className='cardInspiradosHome'>
            <div className='textoInspiradosHome'>
                <h2>INSPIRADOS</h2>
                <p>...en el <b>Arco de la Défense</b> situado en París, Francia nuestra empresa desea volver a materializar la excelencia y esplendor del icono Parisino. Globalizando todo tipo de proyectos, agregando valor y ofreciendo:</p>
                <h5>ARQUITECTURA, CONSTRUCCIÓN Y SERVICIOS</h5>
            </div>
            <div className='logoInspiradosHome'>
              <LazyLoadImage
                alt="Inspirados Logo Arcos Construcción"
                src={logo}
                draggable={false}
              />
            </div>
        </div>
    </div>
    </>
  )
}

export default InspiradosHome