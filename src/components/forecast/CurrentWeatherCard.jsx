// components/forecast/CurrentWeatherCard.jsx
import React from 'react';

const CurrentWeatherCard = ({ weather }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-3xl p-8 mb-8 shadow-lg">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left side - Temperature */}
        <div className="flex items-center gap-6 mb-6 lg:mb-0">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt={weather.condition}
            className="w-24 h-24"
          />
          <div>
            <div className="text-6xl font-bold text-white">
              {weather.temp}°C
            </div>
            <div className="text-white/90 text-xl mt-1 capitalize">
              {weather.description}
            </div>
            <div className="text-white/80 text-sm mt-1">
              Feels like {weather.feelsLike}°C
            </div>
          </div>
        </div>

        {/* Right side - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-white/70 text-sm">Humidity</div>
            <div className="text-white font-bold text-lg">{weather.humidity}%</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-white/70 text-sm">Wind</div>
            <div className="text-white font-bold text-lg">{weather.wind} m/s</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-white/70 text-sm">UV Index</div>
            <div className="text-white font-bold text-lg">{weather.uvIndex}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-white/70 text-sm">Pressure</div>
            <div className="text-white font-bold text-lg">{weather.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;