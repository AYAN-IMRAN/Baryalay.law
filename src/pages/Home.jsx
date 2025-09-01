import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Affiliations from "../components/Affiliations";
import Updates from "../components/Updates";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Affiliations />
      <Updates />
      <Footer />
    </div>
  );
}

export default Home;
