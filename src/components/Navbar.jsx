import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); 

  const navLinks = [
    { name: "Home", path: "/", icon: <House className="w-4 h-4" /> },
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice" },
    { name: "News & Insights", path: "/news" },
    { name: "Our People", path: "/people" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="w-full bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://baryalay.law/assets/logo-BRWaeSod.png"
              alt="Baryalay Law"
              className="h-14 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 transition-colors ${
                    isActive ? "text-black font-semibold" : "hover:text-black"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>

                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 bottom-[-4px] h-[2px] bg-black"
                  initial={{ width: isActive ? "100%" : "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.03 }} className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-black text-white font-semibold shadow-sm hover: transition"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden bg-white shadow-lg border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col space-y-4 p-6 text-gray-900 font-medium">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 ${
                      isActive
                        ? "text-black font-semibold"
                        : "hover:text-black"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              );
            })}
            <li>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
