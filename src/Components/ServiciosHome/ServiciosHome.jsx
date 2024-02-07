import React from 'react'
import './serviciosHome.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import servicio1 from '../../assets/servicio1.webp'
import servicio2 from '../../assets/servicio2.webp'
import servicio3 from '../../assets/servicio3.webp'
import servicio4 from '../../assets/servicio4.webp'
import handshake from '../../assets/handshakeIcon.png'

function ServiciosHome() {
    return (
    <LazyLoadComponent>
        <div className='contenedorServiciosHome'>
            <div className='contenidoServiciosHome'>
                <h2>CONSTRUYENDO SOLUCIONES A LA MEDIDA</h2>
                <h5>Explora nuestra amplia gama de servicios para superar tus expectativas en cada proyecto.</h5>
                <div className='contenedorCardsServiciosHome'>
                    <div className='cardServiciosHome'>
                        <h4>OBRAS CIVILES</h4>
                        <h5>Materializamos tus ideas</h5>
                        <div className='imagenCardServiciosHome'>
                            <LazyLoadImage
                                alt="Obras Civiles Arcos Construcción"
                                src={servicio1}
                                draggable={false}
                            />
                        </div>
                        <p>Garantizamos la excelencia en cada paso. Nuestro enfoque se adapta a tus necesidades únicas y te proporcionamos atención personalizada. Si buscas una planificación profesional de la construcción, estamos aquí para asesorarte.</p>
                        <div className='leerMasCardServiciosHome'>
                            <a href="/Servicios/Obras-civiles" draggable={false}>
                                Descubre más
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='cardServiciosHome'>
                        <h4>SERVICIOS</h4>
                        <h5>Creciendo juntos, construyendo para la comunidad</h5>
                        <div className='imagenCardServiciosHome'>
                            <LazyLoadImage
                                alt="Servicios Arcos Construcción"
                                src={servicio2}
                                draggable={false}
                            />
                        </div>
                        <p>La implementación de servicios es nuestra especialidad. Desde redes de distribución de luz, agua potable y electricidad hasta gasoductos de baja, media y alta presión, hemos demostrado nuestra competencia en diversos escenarios: barrios privados, áreas públicas e industrias. Tu seguridad y eficiencia son nuestra prioridad.</p>
                        <div className='leerMasCardServiciosHome'>
                            <a href="/Servicios/Servicios" draggable={false}>
                                Descubre más
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='cardServiciosHome'>
                        <h4>DESARROLLOS</h4>
                        <h5>Creamos tu espacio, a tu medida</h5>
                        <div className='imagenCardServiciosHome'>
                            <LazyLoadImage
                                alt="Desarrollos Arcos Construcción"
                                src={servicio3}
                                draggable={false}
                            />
                        </div>
                        <p>Desde barrios privados hasta parques industriales y proyectos de infraestructura. Creamos soluciones personalizadas para construir confianza. La experiencia en el rubro nos permite materializar ideas desafiantes sin comprometer la calidad. Nuestros clientes son el núcleo de lo que hacemos, y trabajamos incansablemente para lograr su satisfacción con un servicio a su medida.</p>
                        <div className='leerMasCardServiciosHome'>
                            <a href="/Servicios/Desarrollos" draggable={false}>
                                Descubre más
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='cardServiciosHome'>
                        <h4>ALQUILER DE EQUIPOS</h4>
                        <h5>Nuestras manos a tu servicio</h5>
                        <div className='imagenCardServiciosHome'>
                            <LazyLoadImage
                                alt="Alquiler de Equipos Arcos Construcción"
                                src={servicio4}
                                draggable={false}
                            />
                        </div>
                        <p>La excelencia abarca hasta los más pequeños detalles, incluyendo la maquinaria que utilizamos. Nuestra flota de equipos, que incluye Retroexcavadoras, Minicargadoras, Aplanadoras, Motocompresores, Motosoldadores, Camiones, Acoplados y equipos menores, asegura que cumplamos nuestras obligaciones con garantía. Ademas, te brindamos la oportunidad de potenciar tus proyectos con nuestra amplia gama de equipos. Ofrecemos alquiler a terceros, respaldando con nuestra experiencia y recursos. </p>
                        <div className='leerMasCardServiciosHome'>
                            <a href="/Servicios/Alquiler-de-equipos" draggable={false}>
                                Descubre más
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='confianzaServiciosHome'>
                    <h3>En Arcos Construcción, no solo construimos estructuras, sino también relaciones sólidas basadas en confianza y resultados inigualables.</h3>
                    <LazyLoadImage
                        alt="Confianza en Arcos Construcción"
                        src={handshake}
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    </LazyLoadComponent>
    )
}

export default ServiciosHome