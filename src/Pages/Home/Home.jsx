import React from 'react'
import './home.css'
import 'animate.css';
import PortadaHome from '../../Components/PortadaHome/PortadaHome';
import CaracteristicaPrincipalHome from '../../Components/CaracteristicaPrincipalHome/CaracteristicaPrincipalHome';
import CarouselFotosHome from '../../Components/CarouselFotosHome/CarouselFotosHome';
import InspiradosHome from '../../Components/InspiradosHome/InspiradosHome';
import EmpresasClientesHome from '../../Components/EmpresasClientesHome/EmpresasClientesHome';
import ServiciosHome from '../../Components/ServiciosHome/ServiciosHome';

function Home() {
  return (
    <>
      <PortadaHome />
      <CaracteristicaPrincipalHome />
      <CarouselFotosHome />
      <InspiradosHome />
      <EmpresasClientesHome />
      <ServiciosHome />
    </>
  )
}

export default Home