import Navbar from "../components/Navbar";
import LogoLoop from "../components/LogoLoop";
import { motion } from "framer-motion";
import Footer from "../components/Footer";


import finvolutionLogo from "../assets/Images/Finvolution.png"; 
import Opay from "../assets/Images/Opay.png"; 

function Clients() {
  const clientLogos = [
    { src: "https://baryalay.law/assets/company1-DU8v6FtG.png", alt: "JCM Power" },
    { src: "https://baryalay.law/assets/company2-BLaXItDa.png", alt: "Gharo Solar" },
    { src: "https://baryalay.law/assets/company4-DHK0EaGB.png", alt: "ICHNP" },
    { src: "https://baryalay.law/assets/company5-gYnaUCy4.jpeg", alt: "TN" },
    { src: "https://baryalay.law/assets/company6-BvdYqSko.jpeg", alt: "LadiesFund Energy" },
    { src: "https://baryalay.law/assets/company7-DhSOJ043.webp", alt: "Chakor Ventures" },
    { src: "https://baryalay.law/assets/company8-Dl2K_e8a.png", alt: "PakChina Investment" },
    { src: "https://baryalay.law/assets/company9-B8POQ28J.png", alt: "Askari Bank" },
    { src: "https://baryalay.law/assets/company10-DSPbGfNj.png", alt: "Himmah Capital" },
    { src: "https://baryalay.law/assets/company11-_d_4ty72.png", alt: "Bykea" },
    { src: finvolutionLogo, alt: "FinVolution" },
    { src: "https://baryalay.law/assets/company13-Ch5_JEYZ.avif", alt: "Cicada Capital" },
    { src: Opay, alt: "Opay" },
    { src: "https://baryalay.law/assets/company15-B-jFZ7ju.jpeg", alt: "Kansai Paint" },
    { src: "https://baryalay.law/assets/company16-D70Ezbbg.jpg", alt: "Study World" },
    { src: "https://baryalay.law/assets/company17-KbnypsKs.png", alt: "Phans Group" },
    { src: "https://baryalay.law/assets/company20-22MVryug.jfif", alt: "Asma Capital" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center overflow-hidden mt-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Some of our representative clients include (past and present)
        </motion.p>
      </section>

      {/* Logo Loop Animation */}
      <section className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <LogoLoop
            logos={clientLogos}
            speed={140}
            direction="left"
            logoHeight={70}
            gap={80}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            scaleOnHover={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 py-20 px-6 sm:px-12 text-center">
        <motion.h2
          className="text-3xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Coming soon...
        </motion.p>
      </section>

      <Footer />
    </>
  );
}

export default Clients;
