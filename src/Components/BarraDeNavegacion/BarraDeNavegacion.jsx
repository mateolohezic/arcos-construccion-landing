import React from 'react'
import './barraDeNavegacion.css'
import logo from '../../assets/logo.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import emailIcon from '../../assets/emailIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'

function BarraDeNavegacion() {
  return (
    <>
        <nav className="navbar navbar-expand-lg animate__animated animate__fadeInDown">
            <div className="container-fluid">
                <a className="navbar-brand navbarBrandResponsive" href="/" draggable={false}>
                    <img src={logo} alt="Logo Barra de Navegación" draggable={false}/>
                </a>
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir">
                    <label className="burger" htmlFor="burgerButton">
                        <input type="checkbox" id="burgerButton"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </button>
                <div className="collapse navbar-collapse" id="navbarPrincipal">
                    <ul className="navbar-nav navbarSection1">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/" draggable={false}>Inicio</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Nosotros" draggable={false}>Nosotros</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Servicios" draggable={false}>Servicios</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Clientes" draggable={false}>Clientes</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                    <a className="navbar-brand navbarSection2" href="/" draggable={false}>
                        <img src={logo} alt="Logo Barra de Navegación" draggable={false}/>
                    </a>
                    <ul className="navbar-nav navbarSection3">
                        <li className="nav-item">
                            <a className="nav-link" href="/#contactForm" draggable={false}>Contacto</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                </div>
            </div>
            <header className='headerRedesSociales sticky-top animate__animated animate__fadeInDown'>
                <a href='https://api.whatsapp.com/send/?phone=543815116660&text&type=phone_number&app_absent=0' target='_blank' className="headerLink" draggable={false}>                
                    <img src={whatsappIcon} alt="Whatsapp Arcos Construccion" draggable={false}/>
                    <span>+54 9 3815116660</span>
                </a>
                <a href='mailto: arcostuc@gmail.com' target='_blank' className="headerLink" draggable={false}>
                    <img src={emailIcon} alt="Email Arcos Construccion" draggable={false}/>
                    <span>arcostuc@gmail.com</span>
                </a>
                <a href='https://www.linkedin.com/company/arcos-construccion/' target='_blank' className="headerLink" draggable={false}>
                    <img src={linkedinIcon} alt="LinkedIn Arcos Construccion" draggable={false}/>
                    <span>Arcos Construcción</span>
                </a>
                <a href='https://www.instagram.com/arcostuc/' target='_blank' className="headerLink" draggable={false}>
                    <img src={instagramIcon} alt="Instagram Arcos Construccion" draggable={false}/>
                    <span>@arcostuc</span>
                </a>
            </header>
        </nav>
    </>
  )
}

export default BarraDeNavegacion