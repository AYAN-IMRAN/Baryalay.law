import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Lightbulb,
  Scale,
  Globe,
  ShieldCheck,
  Users,
  Landmark,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { icon: <Briefcase size={28} />, title: "Strategic Counsel", desc: "Guidance on complex business & legal transactions." },
  { icon: <Lightbulb size={28} />, title: "Business Growth", desc: "Innovative solutions tailored for sustainable growth." },
  { icon: <Scale size={28} />, title: "Dispute Resolution", desc: "Effective legal advocacy & conflict resolution." },
  { icon: <ShieldCheck size={28} />, title: "Regulatory Compliance", desc: "Expert advice for navigating laws & policies." },
  { icon: <Users size={28} />, title: "Foreign Investors", desc: "Tailored legal advice for international clients." },
  { icon: <Landmark size={28} />, title: "Tax Advisory", desc: "Structuring, compliance, and advisory services." },
  { icon: <Globe size={28} />, title: "Global Perspective", desc: "Local insights with international best practices." },
];

const uspPoints = [
  "Personalized service and attention to detail",
  "In-depth industry knowledge and expertise",
  "Global perspective with local insight",
  "Efficient and cost-effective solutions",
];

function About() {
  return (
    <>
      <section className="w-full bg-neutral-50 py-18 px-14">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center mt-8">
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-4xl font-extrabold text-black uppercase tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We are a boutique corporate law firm in Pakistan, delivering world-class legal
            and tax advisory services. With expertise and global perspective, we empower
            businesses, startups, and entrepreneurs to succeed.
          </motion.p>

          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-neutral-200 shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 bg-black text-white p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-neutral-500 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* USP Section */}
          <motion.div
            className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Side - Black */}
            <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white p-12 flex flex-col justify-center rounded-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
                Whether you're a multinational corporation, SME, startup, or individual entrepreneur,
              </h3>
              <p className="text-lg sm:text-xl text-neutral-300">
                <span className="font-bold text-white">
                  Baryalay.law is your trusted partner in Pakistan, providing:
                </span>
              </p>
            </div>

            {/* Right Side - White */}
            <div className="bg-white p-12">
              <ul className="grid sm:grid-cols-1 gap-5">
                {uspPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 bg-neutral-50 p-5 rounded-xl shadow-sm border hover:bg-neutral-100 transition-all duration-300 hover:shadow-md"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <CheckCircle className="text-green-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-neutral-800 text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
