import React from 'react';

const WeatherDisplay = ({ data }) => {
  return (
    <div>
      <h2>Weather in {data.location.name}</h2>
      <p><strong>Temperature:</strong> {data.current.temp_c} °C</p>
      <p><strong>Humidity:</strong> {data.current.humidity} %</p>
      <p><strong>Wind Speed:</strong> {data.current.wind_kph} kph</p>
      <p><strong>UV Index:</strong> {data.current.uv}</p>
    </div>
  );
};

export default WeatherDisplay;
