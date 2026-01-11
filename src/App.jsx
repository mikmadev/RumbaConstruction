import React from 'react'
import Header from './Comp/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Footer from './Comp/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
