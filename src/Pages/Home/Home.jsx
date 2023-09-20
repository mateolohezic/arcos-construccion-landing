import React from 'react'
import './home.css'
import 'animate.css';
import PortadaHome from '../../Components/PortadaHome/PortadaHome';
import CaracteristicaPrincipalHome from '../../Components/CaracteristicaPrincipalHome/CaracteristicaPrincipalHome';
import CarouselFotosHome from '../../Components/CarouselFotosHome/CarouselFotosHome';
import InspiradosHome from '../../Components/InspiradosHome/InspiradosHome';
import EmpresasClientesHome from '../../Components/EmpresasClientesHome/EmpresasClientesHome';
import ServiciosHome from '../../Components/ServiciosHome/ServiciosHome';
import BarraImagenHome from '../../Components/BarraImagenHome/BarraImagenHome';
import ContactoHome from '../../Components/ContactoHome/ContactoHome';
import MapsHome from '../../Components/MapsHome/MapsHome';
import DescargarCarpeta from '../../Components/DescargarCarpeta/DescargarCarpeta';
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Somos Arcos Construcción, donde la experiencia trasciende el tiempo y la versatilidad define nuestro enfoque. Con medio siglo de experiencia en la industria, hemos forjado un camino de excelencia que se refleja en cada proyecto." />
          <meta name="subject" content="Inicio - Arcos Construcción" />
          <title>Inicio | Arcos Construcción</title>
        </Helmet>
      </HelmetProvider>
      <PortadaHome />
      <CaracteristicaPrincipalHome />
      <CarouselFotosHome />
      <InspiradosHome />
      <EmpresasClientesHome />
      <ServiciosHome />
      <BarraImagenHome />
      <DescargarCarpeta/>
      <ContactoHome />
      <MapsHome />
    </>
  )
}

export default Home