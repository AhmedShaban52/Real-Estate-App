import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

import { Routes,Route } from "react-router-dom";
import Gallary from "./Components/Gallary";

import About from "./Components/About";


import Products from "./Components/Products";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<> <Hero /><Properties/><Contactus/> </>} /> 
      <Route  path="properties" element={ <Properties/> } />
      <Route path="properties/:propertiesId" element={<Products/>} />
      <Route path="gallary" element={<Gallary/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contactus/>} />

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
