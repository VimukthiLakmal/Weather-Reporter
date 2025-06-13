import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="weather-card">
        <h3>Temperature</h3>
        <p>{data.current.temp_c} °C</p>
      </div>
      <div className="weather-card">
        <h3>Humidity</h3>
        <p>{data.current.humidity} %</p>
      </div>
      <div className="weather-card">
        <h3>Wind Speed</h3>
        <p>{data.current.wind_kph} kph</p>
      </div>
      <div className="weather-card">
        <h3>UV Index</h3>
        <p>{data.current.uv}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;