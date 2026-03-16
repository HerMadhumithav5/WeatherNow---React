// pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherDashboard from '../components/WeatherDashboard';
import homeImg from '../assets/Home-img1.webp'; // Make sure the path is correct

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with inline background image */}
      <section 
        className="h-screen bg-cover bg-center relative pt-20"
        style={{ 
          backgroundImage: `url(${homeImg})`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative max-w-[500px] mx-4 md:mx-20 lg:mx-24 my-10 md:my-20 p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl">
          {/* Removed AI POWERED FORECAST text */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Weather Intelligence
            <span className="text-yellow-400"> for the Future</span>
          </h1>
          <p className="text-gray-300 mb-5">
            Hyper-local, real-time forecasts powered by machine learning.
            Stay ahead of the storm.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/search')}
              className="bg-yellow-400 border-none px-4 py-2 rounded-full font-bold cursor-pointer hover:scale-105 transition-transform text-gray-900"
            >
              Search Weather Now
            </button>
          </div>
        </div>
      </section>

      {/* Weather Dashboard - Modified version without Today's Pulse, Cities Covered, Users */}
      <WeatherDashboard />

      {/* CTA Section */}
      <section className="bg-[#080d1a] py-20 md:py-28 px-4 md:px-6 relative overflow-hidden text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.14)_0%,_rgba(245,197,24,0.06)_40%,_transparent_70%)] pointer-events-none animate-pulse"></div>
        
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-yellow-500/50 animate-float-particle"
              style={{
                width: `${[4,3,5,3,4,2][i]}px`,
                height: `${[4,3,5,3,4,2][i]}px`,
                left: `${[12,28,50,65,80,90][i]}%`,
                bottom: '-10px',
                animationDelay: `${[0,1.5,3,0.8,2,4][i]}s`,
                animationDuration: `${[9,12,8,11,7,13][i]}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
          {/* Gold rule */}
          <div className="w-20 h-0.5 rounded-full bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-9 shadow-[0_0_12px_rgba(212,160,23,0.6)] animate-pulse-width"></div>

          <h2 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Ready for the <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">future of weather?</span>
          </h2>

          <p className="text-slate-400 max-w-[560px] leading-relaxed mb-10 text-base md:text-lg">
            Join thousands of professionals using WeatherNow for mission-critical decision making.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/forecast')}
              className="px-8 md:px-11 py-4 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-[#0a0600] font-bold border-none cursor-pointer relative overflow-hidden transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_40px_rgba(212,160,23,0.6)]"
            >
              Launch Forecast
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;