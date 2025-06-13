import React, { useEffect, useState } from 'react';
import { getWeatherData } from './Controllers/weatherController';
import WeatherDisplay from './Views/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeatherData(setWeather, setError, setLoading, "Colombo");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple Weather Reporter</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
}

export default App;
