import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-6 mt-16 relative">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      {/* Content */}
      <div className="text-center text-sm tracking-wide px-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Baryalay.law</span>, Advocates & Consultants.{" "}
        <span className="text-gray-400">All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
