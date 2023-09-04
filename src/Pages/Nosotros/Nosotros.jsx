import React, { useEffect, useState } from 'react'
import './nosotros.css'

function Nosotros() {

    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    return (
    <>
        <div className='contenedorPrincipalNosotros'>
            <div className={ isIphone ? 'portadaIphoneNosotros' : 'portadaNosotros' }>
                <h1>NOSOTROS</h1>
            </div>
            <div className='introduccionNosotros'>
                <h4>FORJANDO EL ÉXITO DESDE 1976</h4>
                <div className='lineaDivisoraNosotros'></div>
                <p>Somos una empresa constructora especializada en proyectos de Obras Públicas y Privadas, con una destacada presencia en diversas áreas que abarcan desde Obras Civiles, Infraestructura e Industria, Gas, Electricidad, Incendio, Agua y Saneamiento.</p>
                <p>Con un legado de más de 30 años de experiencia, nuestras raíces se remontan a la década de los 70, cuando nuestros padres fundaron una empresa familiar. Hace dos décadas, decidimos continuar su legado, fusionando su conocimiento y virtudes con una visión actualizada y una amplia gama de servicios. Nos centramos principalmente en proyectos de Obras Civiles y en la fabricación y montaje de Instalaciones para Gas Natural.</p>
                <p>Esta fusión de tradición y modernidad nos ha permitido destacar en la industria de la construcción, brindando soluciones de alta calidad y contribuyendo al desarrollo de nuestra comunidad. Estamos comprometidos en superar las expectativas de nuestros clientes y en seguir construyendo un futuro sólido y sostenible para todos.</p>
            </div>
            <div className={ isIphone ? 'imagenHistoriaIphoneNosotros' : 'imagenHistoriaNosotros' }>
            </div>
            <div className='textoHistoriaNosotros'>
                <div>
                    <h2>Nuestra historia</h2>
                    <p>Arcos Construcción tiene sus raíces en 1976, cuando Jaime Cuadrado fundó la empresa. Comenzamos nuestras operaciones en las redes de distribución de gas, desempeñando un papel fundamental en el crecimiento de las industrias tabacaleras en todo el norte del país.</p>
                    <p>En la década de los 80, Marcelo Cuadrado se unió a la empresa, ampliando nuestra cartera de servicios para abarcar una variedad de sectores, incluyendo desarrollos de barrios privados, obras civiles, infraestructura y más.</p>
                    <p>El año 2000 marcó un hito significativo en nuestra historia, el arquitecto Gustavo Cuadrado materializo la globalización de nuestros servicios bajo el nombre &quot;Arcos&quot;. Desde entonces, nos hemos convertido en líderes de la construcción en el norte de Argentina.</p>
                    <p>Hoy contamos con un equipo de profesionales altamente calificados, capaces de llevar a cabo proyectos de cualquier envergadura. Nuestro compromiso con la excelencia y la completa satisfacción de nuestros clientes es lo que nos impulsa a seguir creciendo y prosperando en la industria de la construcción.</p>
                </div>
            </div>
            <div className='misionVisionNosotros'>
                <div className='cardMisionVisionNosotros'>
                    <div className='textoCardMisionVisionNosotros'>
                        <h2>MISIÓN</h2>
                        <p>Somos una empresa que brinda soluciones de obras civiles, infraestructuras e industriales en el norte del país hace más de 50 años. Caracterizados por la confiabilidad y cumplimiento de las obligaciones. Liderados por el corazón y el compromiso de nuestra gente que siempre agrega valor a nuestros proyectos.</p>
                    </div>
                    <div className='imagenCardMisionVisionNosotros'></div>
                </div>
                <div className='cardMisionVisionNosotros'>
                    <div className='imagenCardMisionVisionNosotros'></div>
                    <div className='textoCardMisionVisionNosotros'>
                        <h2>VISIÓN</h2>
                        <p>Ser una empresa líder en los desarrollos y ejecuciones de obras civiles, infraestructura e industriales.</p>
                    </div>
                </div>
            </div>
            <div className='valoresNosotros'>
                <h2>VALORES</h2>
                <div>
                    <button type='button' disabled={true}>Confiabilidad</button>
                    <button type='button' disabled={true}>Compromiso</button>
                    <button type='button' disabled={true}>Trabajo en equipo</button>
                    <button type='button' disabled={true}>Responsabilidad Social</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Nosotros