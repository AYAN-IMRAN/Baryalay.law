import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PartnerProfile() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center flex items-center justify-center mt-8
      ">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Partner Profile
        </motion.h1>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 flex justify-center"
          >
            <img
              src="https://baryalay.law/assets/haroonjan-FM32BUVt.jpeg" 
              alt="Haroon Jan Baryalay"
              className="rounded-2xl shadow-lg border border-neutral-200 object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-black">
              Haroon Jan Baryalay
            </h2>
            <p className="text-lg text-neutral-700 font-medium mb-6">
              Managing & Founding Partner
            </p>

            <div className="space-y-5 text-neutral-800 leading-relaxed">
              <p>
                Haroon is an advocate of the High Courts of Pakistan with over 18 years
                of experience advising clients on corporate transactional matters. 
                He has over 11 years’ experience working in Pakistan and 7 years at
                regional and international law firms in Dubai, UAE.
              </p>

              <p>
                Haroon specializes in corporate transactional advisory including general
                corporate, mergers & acquisitions, private equity, and banking & finance
                including project finance & Islamic finance. He has advised clients on
                energy & power sector project financings, negotiating documentation, 
                off-take contracts, power purchase agreements, and EPC contracts.
              </p>

              <p>
                He has acted for lenders and borrowers in large and mid-sized financings 
                involving conventional and Islamic facilities, including LMA-based 
                syndicated documentation and Shariah-compliant structures.
              </p>

              <p>
                His expertise also includes cross-border M&A, private equity, fund 
                structuring, share purchase agreements, shareholder agreements, 
                and real estate transactions. He has sectoral expertise in 
                energy, oil & gas, telecom, financial institutions, and real estate.
              </p>

              <p>
                Haroon has served on the boards of NTDC, Taurus Securities Limited, 
                and Bykea Technologies (Private) Limited.
              </p>

              <p>
                He is a graduate of LUMS (B.Sc. Hons Economics, 2001), 
                the University of London (LL.B. Hons, 2004), 
                and Harvard Law School (LL.M., 2005).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      
    <Footer />
    </>
  );
}

export default PartnerProfile;
