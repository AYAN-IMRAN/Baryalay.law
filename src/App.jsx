import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Practice from "./pages/Practice";
import News from "./pages/News";
import PartnerProfile from "./pages/PartnerPofile";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Practice" element={<Practice />} />
      <Route path="/news" element={<News />} />
      <Route path="/people" element={<PartnerProfile /> } />
      <Route path="/clients" element={<Clients /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
  );
}

export default App;
