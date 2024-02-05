import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../assets/logoNombreBlanco.png'
import email from '../../assets/emailIcon.png'
import phone from '../../assets/phoneIcon.png'
import gps from '../../assets/gpsIcon.png'
import whatsapp from '../../assets/whatsappIconAzul.png'
import linkedin from '../../assets/linkedinIconAzul.png'
import instagram from '../../assets/instagramIconAzul.png'
import './footer.css'

function Footer() {
    return (
    <>
        <footer>
            <div className="columna1Footer">
                <LazyLoadImage
                alt="Arcos Construcción Logo"
                src={logo}
                draggable={false}
                />
            </div>
            <div className="columna2Footer">
                <h4>Arcos Construcción</h4>
                <h5>Tu empresa constructora de confianza.</h5>
            </div>
            <div className="columna3Footer">
                <h4>CONTACTO</h4>
                <h5>
                    <a href="mailto: arcostuc@gmail.com" target='_blank' draggable={false}>
                        <LazyLoadImage
                            alt="Correo electrónico Arcos Construcción"
                            src={email}
                            draggable={false}
                        />
                        arcostuc@gmail.com
                    </a>
                </h5>
                <h5>
                    <a href="https://api.whatsapp.com/send/?phone=543815116660&text&type=phone_number&app_absent=0" target='_blank' draggable={false}>
                        <LazyLoadImage
                            alt="Teléfono Arcos Construcción"
                            src={phone}
                            draggable={false}
                        />
                        +54 9 3815116660
                    </a>
                </h5>
                <h5>
                    <LazyLoadImage
                        alt="Ubicación Arcos Construcción"
                        src={gps}
                        draggable={false}
                    />
                    Frías Silva 258, San Miguel de Tucumán.
                </h5>
                <div className='redesSocialesFooter'>
                    <a href="https://api.whatsapp.com/send/?phone=543815116660&text&type=phone_number&app_absent=0" target='_blank' draggable={false}>
                        <LazyLoadImage
                            alt="Whatsapp Arcos Construcción"
                            src={whatsapp}
                            draggable={false}
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/arcos-construccion/" target='_blank' draggable={false}>
                        <LazyLoadImage
                            alt="LinkedIn Arcos Construcción"
                            src={linkedin}
                            draggable={false}
                        />
                    </a>
                    <a href="https://www.instagram.com/arcostuc/" target='_blank' draggable={false}>
                        <LazyLoadImage
                            alt="Instagram Arcos Construcción"
                            src={instagram}
                            draggable={false}
                        />
                    </a>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer