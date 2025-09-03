import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  const contactData = [
    {
      city: "Islamabad Office",
      address: "No. 76, Street 55, MPCHS, E-11/3, Islamabad",
      phones: ["051-843-1474 / 051-843-1465", "0317-7900148"],
      emails: ["admin@baryalay.law", "haroon@baryalay.law"],
    },
    {
      city: "Lahore Office",
      address: "No. 10C, Upper Mall Scheme, Lahore",
      phones: ["0317-5099555"],
      emails: ["haroon@baryalay.law"],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Heading */}
      <section className="bg-black text-white py-20 px-6 text-center mt-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get in touch with our offices. We’re here to help.
        </motion.p>
      </section>

      {/* Contact Cards */}
      <section className="bg-white text-black py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {contactData.map((office, idx) => (
            <motion.div
              key={idx}
              className="relative bg-black text-white border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-gray-600 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">{office.city}</h2>

              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-1" />
                  {office.address}
                </p>

                {office.phones.map((phone, i) => (
                  <p key={i} className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white" />
                    {phone}
                  </p>
                ))}

                {office.emails.map((email, i) => (
                  <p
                    key={i}
                    className="flex items-center gap-3 hover:text-white transition"
                  >
                    <Mail className="w-5 h-5 text-white" />
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
