import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import BarraDeNavegacion from './Components/BarraDeNavegacion/BarraDeNavegacion';
import Footer from './Components/Footer/Footer';
import Nosotros from './Pages/Nosotros/Nosotros';
import Servicios from './Pages/Servicios/Servicios';
import Clientes from './Pages/Clientes/Clientes';
import ObrasCiviles from './Pages/ObrasCiviles/ObrasCiviles';
import ServiciosDetalles from './Pages/ServiciosDetalles/ServiciosDetalles';
import Desarrollos from './Pages/Desarrollos/Desarrollos';
import Alquiler from './Pages/Alquiler/Alquiler';

function App() {

  return (
    <>
    <BarraDeNavegacion />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Nosotros" element={<Nosotros/>} />
      <Route path="/Servicios" element={<Servicios/>} />
      <Route path="/Clientes" element={<Clientes/>} />
      <Route path="/Servicios/Obras-civiles" element={<ObrasCiviles/>} />
      <Route path="/Servicios/Servicios" element={<ServiciosDetalles/>} />
      <Route path="/Servicios/Desarrollos" element={<Desarrollos/>} />
      <Route path="/Servicios/Alquiler-de-equipos" element={<Alquiler/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App