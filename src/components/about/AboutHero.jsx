// components/AboutHero.jsx
import React from 'react';

const AboutHero = ({ bgImage }) => {
  return (
    <section className="relative pt-28 pb-40 text-white overflow-hidden">
      {/* Background Image with Dark Overlay - Same as Home/Search */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Cloud background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div> {/* Same overlay as Home/Search */}
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <span className="bg-yellow-400 text-gray-900 text-xs px-3 py-1 rounded-full inline-block mb-4 font-semibold">
          SINCE 2024
        </span>
        <h1 className="text-5xl font-light tracking-tight mb-2">
          About —
        </h1>
        <h2 className="text-6xl font-bold text-yellow-400 mb-4">
          WeatherNow Unique
        </h2>
        <p className="text-gray-300 text-xl max-w-2xl">
          Redefining how you experience the elements through precision science and avant-garde design.
        </p>
      </div>

    </section>
  );
};

export default AboutHero;