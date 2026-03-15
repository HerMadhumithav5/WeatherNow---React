// components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
      {/* City and Condition */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{weather.city}</h2>
          <p className="text-gray-600 capitalize">{weather.description}</p>
          <p className="text-sm text-gray-500 mt-1">Feels like {weather.feelsLike}°C</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt={weather.condition}
            className="w-20 h-20"
          />
          <div className="text-right">
            <span className="text-5xl md:text-6xl font-bold text-yellow-600">
              {weather.temp}°
            </span>
            <span className="text-gray-500 ml-1">C</span>
          </div>
        </div>
      </div>

      {/* Temperature Range */}
      <div className="flex justify-center gap-8 mb-8 p-4 bg-gray-50 rounded-xl">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-1">High</p>
          <p className="text-2xl font-bold text-yellow-600">{weather.high}°C</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-1">Low</p>
          <p className="text-2xl font-bold text-blue-600">{weather.low}°C</p>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">💧</div>
          <p className="text-gray-500 text-sm mb-1">Humidity</p>
          <p className="text-2xl font-bold text-gray-800">{weather.humidity}%</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">💨</div>
          <p className="text-gray-500 text-sm mb-1">Wind Speed</p>
          <p className="text-2xl font-bold text-gray-800">{weather.wind} m/s</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">🌡️</div>
          <p className="text-gray-500 text-sm mb-1">Pressure</p>
          <p className="text-2xl font-bold text-gray-800">{weather.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;