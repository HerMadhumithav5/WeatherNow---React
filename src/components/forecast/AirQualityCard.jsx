// components/forecast/AirQualityCard.jsx
import React from 'react';

const AirQualityCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h3 className="text-gray-800 font-semibold mb-4">Air Quality</h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>AQI</span>
          <span>Moderate</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-3/5 h-full bg-yellow-500 rounded-full"></div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">PM2.5</span>
          <span className="text-gray-800">35 µg/m³</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">PM10</span>
          <span className="text-gray-800">65 µg/m³</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">O₃</span>
          <span className="text-gray-800">24 ppb</span>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;