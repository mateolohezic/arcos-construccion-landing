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

function Home() {
  return (
    <>
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