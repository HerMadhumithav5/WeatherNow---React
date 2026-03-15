// components/WeatherDashboard.jsx
import { useEffect, useState } from "react";
import earthVideo from '../assets/earth.mp4'; // Make sure to add this video file

export default function WeatherDashboard() {
  const [secondsAgo, setSecondsAgo] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo((prev) => (prev >= 10 ? 2 : prev + 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-6 lg:px-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-30 -right-20 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(212,160,23,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 lg:max-w-[42%]">
          <p className="font-bold text-xs tracking-widest uppercase text-yellow-600 mb-3">
            Current Atmosphere
          </p>
          <h2 className="font-extrabold text-slate-900 text-4xl md:text-5xl leading-tight mb-7">
            Today's Pulse.
          </h2>

          <div className="flex flex-col gap-3 mb-7">
            {/* Temperature Card */}
            <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-2xl p-7 pb-5 relative overflow-hidden shadow-[0_4px_24px_rgba(212,160,23,0.35)]">
              <span className="text-xs font-bold tracking-wider uppercase text-white/75">TEMPERATURE</span>
              <div className="font-extrabold text-white text-5xl md:text-6xl leading-none my-1 drop-shadow-md">
                24°C
              </div>
              <span className="text-sm text-white/70">Feels like 26°</span>
            </div>

            {/* Small Cards Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-[0_4px_20px_rgba(212,160,23,0.12)] hover:-translate-y-0.5 transition-all">
                <span className="text-xs font-bold tracking-wider uppercase text-gray-400">10,000+</span>
                <span className="font-bold text-lg text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]"></span>
                  Cities Covered
                </span>
              </div>
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-[0_4px_20px_rgba(212,160,23,0.12)] hover:-translate-y-0.5 transition-all">
                <span className="text-xs font-bold tracking-wider uppercase text-gray-400">2.4M</span>
                <span className="font-bold text-lg text-slate-800">Users</span>
              </div>
            </div>

            {/* Wide Card */}
            <div className="bg-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between hover:shadow-[0_4px_20px_rgba(212,160,23,0.12)] hover:-translate-y-0.5 transition-all">
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400">98.6%</span>
              <span className="font-bold text-2xl text-slate-800">Accuracy</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-0">
          <div className="bg-[#0b1120] rounded-2xl h-[380px] relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
            {/* Video for satellite view */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={earthVideo} type="video/mp4" />
              {/* Fallback if video doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                <p className="text-white">Satellite view unavailable</p>
              </div>
            </video>
            
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#0b1120] via-[#0b1120]/70 to-transparent pointer-events-none"></div>
            
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg text-white">Live Satellite View</span>
                <span className="text-xs text-slate-400">
                  Cloud movement updated <strong className="text-slate-300">{secondsAgo}s ago</strong>
                </span>
              </div>
              <button className="w-11 h-11 rounded-full bg-white border-none cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-[0_6px_24px_rgba(0,0,0,0.4),_0_0_0_3px_rgba(212,160,23,0.35)] transition-all active:scale-95">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5 3.5l10 5.5-10 5.5V3.5z" fill="#D4A017" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}