// components/AboutCTA.jsx
import React from 'react';

const AboutCTA = () => {
  return (
    <section className="py-20 text-center bg-[#fcfcfc] border-t border-white/10">
      <h2 className="text-3xl font-bold mb-8 text-black">
        Ready to see the sky differently?
      </h2>

      <div className="flex justify-center gap-6">
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-transform shadow-lg">
          🍎 App Store
        </button>
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-transform shadow-lg">
          <span>▶</span> Play Store
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;