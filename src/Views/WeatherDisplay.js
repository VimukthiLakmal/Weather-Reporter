import React from 'react';

const WeatherDisplay = ({ data }) => {
  const weatherItems = [
    { label: 'Temperature', value: `${data.current.temp_c} °C` },
    { label: 'Humidity', value: `${data.current.humidity} %` },
    { label: 'Wind Speed', value: `${data.current.wind_kph} kph` },
    { label: 'UV Index', value: data.current.uv },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Heading */}
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
        {data.current.condition.text}
      </h2>

      {/* ✅ Condition Image */}
      <img
        src={`https:${data.current.condition.icon}`}
        alt={data.current.condition.text}
        style={{ width: '80px', height: '80px', marginBottom: '20px' }}
      />

      {/* Weather Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // ✅ Two per row
          gap: '90px',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '30px 0',
        }}
      >
        {weatherItems.map((item, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '18px',
              padding: '30px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: '600',
              transition: 'transform 0.2s ease',
              minWidth: '350px',
              width: '100%',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <div style={{ marginBottom: '12px', color: '#1a237e' }}>{item.label}</div>
            <div style={{ fontSize: '1.8rem', color: '#0d47a1' }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
