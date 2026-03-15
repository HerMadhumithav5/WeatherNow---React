// components/forecast/SunMoonCard.jsx
import React from 'react';

const SunMoonCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h3 className="text-gray-800 font-semibold mb-4">Sun & Moon</h3>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <div className="text-2xl mb-1">🌅</div>
          <div className="text-gray-800 font-bold">06:24</div>
          <div className="text-gray-500 text-xs">Sunrise</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-1">🌇</div>
          <div className="text-gray-800 font-bold">18:36</div>
          <div className="text-gray-500 text-xs">Sunset</div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="text-center">
          <div className="text-2xl mb-1">🌙</div>
          <div className="text-gray-800 font-bold">Waxing</div>
          <div className="text-gray-500 text-xs">68%</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-1">⏰</div>
          <div className="text-gray-800 font-bold">14h 12m</div>
          <div className="text-gray-500 text-xs">Daylight</div>
        </div>
      </div>
    </div>
  );
};

export default SunMoonCard;