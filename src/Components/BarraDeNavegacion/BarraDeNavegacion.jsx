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
        <nav className="navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown">
            <div className="container-fluid">
                <a className="navbar-brand navbarBrandResponsive" href="/">
                    <img src={logo} alt="Logo Barra de Navegación" />
                </a>
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir" onClick={() => setOpen(!open)}>
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
                            <a className="nav-link" aria-current="page" href="#Inicio">Inicio</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#Servicios">Servicios</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#LaEmpresa">Nosotros</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                    <a className="navbar-brand navbarSection2" href="/">
                        <img src={logo} alt="Logo Barra de Navegación" />
                    </a>
                    <ul className="navbar-nav navbarSection3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#Inicio">Contacto</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                </div>
            </div>
            <header className='headerRedesSociales sticky-top animate__animated animate__fadeInDown'>
                <a href='https://api.whatsapp.com/send/?phone=543815116660&text&type=phone_number&app_absent=0' target='_blank' className="headerLink">                
                    <img src={whatsappIcon} alt="Whatsapp Arcos Construccion" />
                    <span>+54 9 3815116660</span>
                </a>
                <a href='mailto: arcostuc@gmail.com' target='_blank' className="headerLink">
                    <img src={emailIcon} alt="Email Arcos Construccion" />
                    <span>arcostuc@gmail.com</span>
                </a>
                <a href='https://www.linkedin.com/company/arcos-construccion/' target='_blank' className="headerLink">
                    <img src={linkedinIcon} alt="LinkedIn Arcos Construccion" />
                    <span>Arcos Construcción</span>
                </a>
                <a href='https://www.instagram.com/arcostuc/' target='_blank' className="headerLink">
                    <img src={instagramIcon} alt="Instagram Arcos Construccion" />
                    <span>@arcostuc</span>
                </a>
            </header>
        </nav>
    </>
  )
}

export default BarraDeNavegacion