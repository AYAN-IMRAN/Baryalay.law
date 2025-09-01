import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Affiliations from "./components/Affiliations";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
// import Home from "./pages/Home";   
// import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Affiliations />
      <Updates />
      <Footer />

      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
