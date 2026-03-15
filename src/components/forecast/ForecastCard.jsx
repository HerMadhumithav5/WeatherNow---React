// components/forecast/ForecastCard.jsx
import React from 'react';

const ForecastCard = ({ day }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:scale-105 transition-all hover:border-yellow-400/30 group">
      <div className="text-center">
        <p className="text-white font-semibold mb-1">{day.day}</p>
        <p className="text-black text-xs mb-3">{day.date}</p>
        
        {/* Weather Icon */}
        <div className="flex justify-center mb-2">
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
            alt={day.condition}
            className="w-16 h-16 group-hover:scale-110 transition-transform"
          />
        </div>
        
        {/* Temperature */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="text-white font-bold text-lg">{day.high}°</span>
          <span className="text-black text-sm">{day.low}°</span>
        </div>
        
        {/* Condition */}
        <p className="text-black text-xs capitalize mb-3">
          {day.condition}
        </p>
        
        {/* Additional Info - Humidity & Wind */}
        <div className="flex justify-between text-xs pt-3 border-t border-white/10">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">💧</span>
            <span className="text-black">{day.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">💨</span>
            <span className="text-black">{day.wind} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;