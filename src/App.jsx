import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Navbar from "./components/navbar";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");
  const [isCelsius, setIsCelsius] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (city) => {
    setError("");
    setWeatherData(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=${unit}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex flex-col items-center justify-center flex-grow p-6">
          <button
            onClick={() => {
              const newUnit = isCelsius ? "imperial" : "metric";
              setUnit(newUnit);
              setIsCelsius(!isCelsius);
              weatherData && handleSearch(weatherData.name);
            }}
            className="mb-6 bg-white/10 text-white border border-white/30 px-4 py-2 rounded-lg hover:bg-white/20 transition"
          >
            Switch to {isCelsius ? "°F" : "°C"}
          </button>

          <SearchBar onSearch={handleSearch} />

          {error && (
            <div className="mt-4 bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <div className="mt-10">
            <WeatherCard data={weatherData} unit={unit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
