import React from "react";
import "../index.css";

function Updates() {
  return (
    <div className="relative w-11/12 md:w-4/5 mx-auto bg-black/95 backdrop-blur-md text-white py-4 overflow-hidden rounded-2xl shadow-2xl border border-white/10">
      {/* Gradient Overlays (left + right fade) */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee Wrapper */}
      <div className="marquee">
        <div className="marquee__content">
          <span className="mx-12 text-lg tracking-wide">
            🚀 Baryalay.law successfully advises <strong className="text-white">FinVolution Group</strong>, China’s largest NYSE-listed fintech, in setting up and licensing a lending NBFC in Pakistan which will operate its digital nano-lending app <em className="italic text-gray-200">"Daira"</em>.
          </span>
          <span className="mx-12 text-lg tracking-wide">
            ⚖️ Expert advisory across <span className="font-semibold text-white">Pakistan, UK, Europe & Middle East</span> via Abasin Consult network.
          </span>
          <span className="mx-12 text-lg tracking-wide">
            📢 Stay tuned for more updates on <span className="font-semibold text-white">corporate & legal advisory</span> services.
          </span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="marquee__content">
          <span className="mx-12 text-lg tracking-wide">
            🚀 Baryalay.law successfully advises <strong className="text-white">FinVolution Group</strong>, China’s largest NYSE-listed fintech, in setting up and licensing a lending NBFC in Pakistan which will operate its digital nano-lending app <em className="italic text-gray-200">"Daira"</em>.
          </span>
          <span className="mx-12 text-lg tracking-wide">
            ⚖️ Expert advisory across <span className="font-semibold text-white">Pakistan, UK, Europe & Middle East</span> via Abasin Consult network.
          </span>
          <span className="mx-12 text-lg tracking-wide">
            📢 Stay tuned for more updates on <span className="font-semibold text-white">corporate & legal advisory</span> services.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Updates;
