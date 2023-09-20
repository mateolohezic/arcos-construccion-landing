import React from 'react'
import './inspiradosHome.css'
import logo from '../../assets/logoNombre.png'

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
                <img src={logo} alt="Inspirados Logo Arcos Construcción" draggable={false} loading="lazy"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default InspiradosHome