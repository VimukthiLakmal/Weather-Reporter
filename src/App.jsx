import React, { useEffect, useState } from 'react';
import { getWeatherData } from './Controllers/weatherController';
import WeatherDisplay from './Views/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Colombo");
  const [inputCity, setInputCity] = useState("Colombo");

  useEffect(() => {
    getWeatherData(setWeather, setError, setLoading, city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity);
    }
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#1a237e',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Simple Weather Reporter</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            minWidth: '200px',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1e88e5',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
}

export default App;