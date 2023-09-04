import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import BarraDeNavegacion from './Components/BarraDeNavegacion/BarraDeNavegacion';
import Footer from './Components/Footer/Footer';
import Nosotros from './Pages/Nosotros/Nosotros';

function App() {

  return (
    <>
    <BarraDeNavegacion />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Nosotros" element={<Nosotros/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App