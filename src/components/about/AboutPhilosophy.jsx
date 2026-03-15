// components/AboutPhilosophy.jsx
import React from 'react';
import { MapPin, Palette } from 'lucide-react';

const AboutPhilosophy = ({ phoneImage }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left Column - Text */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-yellow-400"></div>
            <h3 className="text-xl font-bold text-gray-800">Our Philosophy</h3>
          </div>

          <p className="text-gray-600 mb-8">
            WeatherNow Unique was born from a simple observation: most weather
            apps are cluttered, clinical, and uninspiring. We believe that
            meteorological data is more than just numbers; it's the backdrop
            of your daily life.
          </p>

          {/* Feature Cards - White with shadow */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="text-yellow-500 mb-3" size={24} />
              <h4 className="font-semibold text-gray-800">Hyper-Local</h4>
              <p className="text-sm text-gray-500">
                Street-level accuracy for every minute of your day.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Palette className="text-yellow-500 mb-3" size={24} />
              <h4 className="font-semibold text-gray-800">Artistic UI</h4>
              <p className="text-sm text-gray-500">
                A sensory experience reflecting current conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Phone with Dark Background */}
        <div className="relative">
          {/* Colored background blobs behind phone - Yellow accents */}
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-20 blur-3xl"></div>
          
          {/* Main phone card with dark background - bg-[#020617] */}
          <div className="relative bg-[#020617] rounded-2xl p-12 rotate-2 shadow-xl border border-yellow-400/20">
            <div className="w-44 h-80 mx-auto rounded-3xl bg-black/40 p-2 overflow-hidden backdrop-blur-sm border border-yellow-400/30">
              <img 
                src={phoneImage} 
                alt="Phone wallpaper" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-8 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-8 left-6 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
          </div>

          {/* Badge */}
          <div className="absolute bottom-6 left-0 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-6 py-4 rounded-xl shadow-lg z-10">
            <p className="text-2xl font-bold">99.9%</p>
            <p className="text-xs font-semibold">FORECAST ACCURACY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;