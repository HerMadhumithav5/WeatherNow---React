// pages/About.jsx
import React from 'react';
import { MapPin, Palette, Zap, Globe, Play } from 'lucide-react';

// Import images
import cloudBg from '../assets/cloud_bg.jpg';
import sunsetWallpaper from '../assets/sunset_wallpaper.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617]">
      {/* AboutHero Section */}
      <section className="relative pt-28 pb-40 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sunsetWallpaper} 
            alt="Sunset background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-light tracking-tight mb-2">
            About —
          </h1>
          <h2 className="text-6xl font-bold text-yellow-400 mb-4">
            WeatherNow 
          </h2>
          <p className="text-gray-200 text-xl max-w-2xl">
            Redefining how you experience the elements through precision science and avant-garde design.
          </p>
        </div>

        {/* Slanted Divider */}
        <div className="absolute -bottom-16 left-0 w-full h-32 bg-[#020617] transform -skew-y-3"></div>
      </section>

      {/* AboutPhilosophy Section */}
      <section className="py-24 bg-[#fdfdfd] relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Left Column - Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[3px] bg-yellow-400"></div>
              <h3 className="text-xl font-bold text-black">Our Philosophy</h3>
            </div>

            <p className="text-black mb-8">
              WeatherNow was born from a simple observation: most weather
              apps are cluttered, clinical, and uninspiring. We believe that
              meteorological data is more than just numbers; it's the backdrop
              of your daily life.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400">
                <MapPin className="text-yellow-400 mb-3" size={24} />
                <h4 className="font-semibold text-black">Hyper-Local</h4>
                <p className="text-sm text-black">
                  Street-level accuracy for every minute of your day.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400">
                <Palette className="text-yellow-400 mb-3" size={24} />
                <h4 className="font-semibold text-black">Artistic UI</h4>
                <p className="text-sm text-black">
                  A sensory experience reflecting current conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Phone */}
          <div className="relative">
            <div className="bg-[#0c063f] rounded-2xl p-12 rotate-2 shadow-lg">
              <div className="w-44 h-80 mx-auto rounded-3xl bg-black p-2 overflow-hidden">
                <img 
                  src={cloudBg} 
                  alt="Phone wallpaper" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute bottom-6 left-0 bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs">FORECAST ACCURACY</p>
            </div>
          </div>
        </div>
      </section>

      {/* AboutCrafting Section */}
      <section className="bg-[#030712] py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Crafting the Future</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            We combine global satellite networks with proprietary AI to predict
            micro-climates that others miss.
          </p>

          {/* Three cards with numbers and icons */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <Zap className="text-yellow-400 mb-3 mx-auto" size={24} />
              <h4 className="font-semibold text-white">Instant Updates</h4>
              <p className="text-gray-400 text-sm">
                Real-time alerts for lightning and sudden weather shifts.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <MapPin className="text-yellow-400 mb-3 mx-auto" size={24} />
              <h4 className="font-semibold text-white">Smart Insights</h4>
              <p className="text-gray-400 text-sm">
                AI analyzes routines and suggests ideal outdoor times.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <Globe className="text-yellow-400 mb-3 mx-auto" size={24} />
              <h4 className="font-semibold text-white">Global Reach</h4>
              <p className="text-gray-400 text-sm">
                Connect with weather stations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AboutCTA Section */}
      <section className="py-20 text-center bg-[#0a0f1f]">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to see the sky differently?
        </h2>

        <div className="flex justify-center gap-6">
          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
            🍎 App Store
          </button>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-all">
            <Play size={16} />
            Play Store
          </button>
        </div>
      </section>
    </div>
  );
}