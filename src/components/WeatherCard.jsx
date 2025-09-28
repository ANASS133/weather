import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaWind, FaCloud, FaArrowUp, FaArrowDown } from "react-icons/fa";

const WeatherCard = ({ data, unit }) => {
  if (!data) return null;

  const { name, main, weather, wind, sys, coord, clouds } = data;

  const toTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const unitSymbol = unit === "metric" ? "°C" : "°F";
  const windSpeedUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-2xl rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/20 text-white space-y-4"
    >
      {/* Ambient animated floating clouds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 blur-3xl animate-pulse rounded-full" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 blur-2xl animate-ping rounded-full" />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold drop-shadow">{name}</h2>
        <p className="text-xs text-white/70">{coord.lat.toFixed(2)}°, {coord.lon.toFixed(2)}°</p>

        <motion.img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className="w-24 h-24 mx-auto animate-fade-in"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        />

        <p className="capitalize text-xl tracking-wide text-white/90">{weather[0].description}</p>

        <p className="text-5xl font-bold text-white drop-shadow-glow">
          {Math.round(main.temp)}{unitSymbol}
        </p>
        <p className="text-sm text-white/70">Feels like {Math.round(main.feels_like)}{unitSymbol}</p>

        <div className="grid grid-cols-2 gap-4 text-sm mt-6">
          <p><FaCloud className="inline mr-1" />Humidity: <span className="font-semibold">{main.humidity}%</span></p>
          <p><FaArrowDown className="inline mr-1" />Pressure: <span className="font-semibold">{main.pressure} hPa</span></p>
          <p><FaWind className="inline mr-1" />Wind: <span className="font-semibold">{wind.speed} {windSpeedUnit}</span></p>
          <p>Direction: <span className="font-semibold">{wind.deg}°</span></p>
          <p><FaCloud className="inline mr-1" />Clouds: <span className="font-semibold">{clouds.all}%</span></p>
          <p><FaSun className="inline mr-1" />Sunrise: <span className="font-semibold">{toTime(sys.sunrise)}</span></p>
          <p><FaMoon className="inline mr-1" />Sunset: <span className="font-semibold">{toTime(sys.sunset)}</span></p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
