import React from 'react'
import Header from './Comp/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Footer from './Comp/Footer';
import ContactUs from './Pages/ContactUs';
import FloorPlan from './Pages/FloorPlan';
import Interior from './Pages/Interior';
import ConstructionUnderway from './Pages/ConstructionUnderway';
import Renovation from './Pages/Renovation';
import InteriorConstruction from './Pages/InteriorConstruction';
import Rcc from './Pages/Rcc';
import RenovationDetails from './Pages/RenovationDetails';
import Exterior from './Pages/Exterior';
import BasnetNiwas from './Pages/BasnetNiwas';
import TokhaB from './Pages/TokhaB';
import Pharping from './Pages/Pharping';
import OurWork from './Pages/OurWork';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/fp" element={<FloorPlan />} />
      <Route path="/id" element={<Interior />} />
      <Route path="/CU" element={<ConstructionUnderway />} />
      <Route path="/Renovation" element={<Renovation />} />
      <Route path="/IC" element={<InteriorConstruction />} />
      <Route path="/rcc" element={<Rcc />} />
      <Route path="/rd" element={<RenovationDetails />} />
      <Route path="/exterior" element={<Exterior />} />
      <Route path="/BN" element={<BasnetNiwas />} />
      <Route path="/TB" element={<TokhaB />} />
      <Route path="/P" element={<Pharping />} />
      <Route path="/OW" element={<OurWork />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
