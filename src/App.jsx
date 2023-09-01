import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import BarraDeNavegacion from './Components/BarraDeNavegacion/BarraDeNavegacion';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <BarraDeNavegacion />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App