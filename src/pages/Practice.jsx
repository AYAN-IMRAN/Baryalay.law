import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const practiceAreas = [
  "Corporate and Commercial Law",
  "Mergers and Acquisitions",
  "Private Equity and Venture Capital",
  "Banking and Finance",
  "Power Sector and Renewable Energy",
  "Regulatory Compliance and Policy",
  "Advocacy and Dispute Resolution",
  "General Corporate Advisory Services",
  "Labor & Employment",
  "Project Finance and Infrastructure Development",
  "Inward & Outward Foreign Investment",
];

const industries = [
  {
    name: "Real Estate and Construction",
    img: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Financial Institutions and Banking",
    img: "https://images.pexels.com/photos/17977103/pexels-photo-17977103/free-photo-of-bitcoin-and-dollars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Energy & Power",
    img: "https://cdn.pixabay.com/photo/2023/09/10/11/16/solar-8244680_960_720.jpg",
  },
  {
    name: "Infrastructure and Transportation",
    img: "https://images.pexels.com/photos/28865962/pexels-photo-28865962/free-photo-of-bustling-urban-traffic-on-a-busy-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Technology & Fintech",
    img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg",
  },
];

function Practice() {
  return (
    <>
      <Navbar />

      {/* Practice Areas */}
      <section className="bg-white mt-6 py-20 px-6 sm:px-12">
        <motion.h2
          className="text-3xl font-bold text-center text-black mb-12 uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Team is Equipped to Advise On:
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {practiceAreas.map((area, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
              <span className="text-lg text-neutral-800 font-medium">
                {area}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-black py-20 px-6 sm:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12 uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise Spans Industries:
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg group bg-neutral-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-radial from-white/20 via-transparent to-transparent" />
              <img
                src={industry.img}
                alt={industry.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Practice;
