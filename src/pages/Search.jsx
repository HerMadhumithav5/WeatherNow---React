// pages/Search.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homeImg from '../assets/Home-img1.webp';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';

export default function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorType, setErrorType] = useState("");

  const API_KEY = "ff70e014fd5bf8db435999978d1143bc";

  useEffect(() => {
    fetchWeather("Chennai");
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      setErrorType("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) {
        if (res.status === 404) {
          setErrorType("not-found");
          throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
        } else {
          setErrorType("server");
          throw new Error("Server error. Please try again later.");
        }
      }

      const data = await res.json();

      setWeather({
        city: data.name,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      });
      
      setInput(cityName);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityName) => {
    fetchWeather(cityName);
  };

  const handleViewFullForecast = () => {
    if (weather) {
      localStorage.setItem('lastSearchedCity', weather.city);
      navigate(`/forecast?city=${encodeURIComponent(weather.city)}`);
    }
  };

  const handleRetry = () => {
    fetchWeather(input);
  };

  return (
    <div className="relative min-h-full bg-[#020617]">
      {/* Background Image - Only behind content area */}
      <div 
        className="absolute inset-x-0 top-0 h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with back button */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <svg 
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>

          {/* Main Content - White Box Area */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            {/* Search Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                <span className="text-yellow-400">Weather</span> Search
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Enter any city name to get real-time weather information
              </p>
            </div>

            {/* Search Bar */}
            <SearchBar 
              onSearch={handleSearch}
              initialValue={input}
              isLoading={loading}
            />

            {/* Error Display */}
            {error && (
              <div className="mt-8">
                <ErrorDisplay 
                  message={error} 
                  onRetry={errorType === "rate-limit" ? handleRetry : null}
                />
              </div>
            )}

            {/* Loading State */}
            {loading && !weather && !error && (
              <div className="mt-8">
                <LoadingSpinner />
              </div>
            )}

            {/* Weather Display */}
            {weather && !loading && !error && (
              <>
                <div className="mt-8">
                  <WeatherCard weather={weather} />
                </div>
                
                {/* View Full Forecast Button */}
                <div className="mt-6 text-center">
                  <button
                    onClick={handleViewFullForecast}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                  >
                    View Full 5-Day Forecast →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Spacer to push footer down */}
      <div className="h-12"></div>
    </div>
  );
}