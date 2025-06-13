import React from 'react';

const WeatherDisplay = ({ data }) => {
  const weatherItems = [
    { label: 'Temperature', value: `${data.current.temp_c} °C` },
    { label: 'Feels Like', value: `${data.current.feelslike_c} °C` },
    { label: 'Humidity', value: `${data.current.humidity} %` },
    { label: 'Wind Speed', value: `${data.current.wind_kph} kph` },
    { label: 'Visibility', value: `${data.current.vis_km} km` },
    { label: 'UV Index', value: data.current.uv },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/your-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <style>
        {`
          .weather-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .weather-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 18px;
            padding: 20px;
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
            text-align: center;
            font-size: 1.1rem;
            font-weight: 600;
            transition: transform 0.2s ease;
            width: 100%; /* Full width on mobile */
            box-sizing: border-box;
          }

          @media (min-width: 768px) {
            .weather-cards {
              grid-template-columns: repeat(3, 1fr);
            }

            .weather-card {
              min-width: 300px; /* Increase card width on desktop */
              max-width: 350px; /* Optional max width */
              margin: 0 auto;
            }
          }
        `}
      </style>

      <div style={{ textAlign: 'center', color: '#fff' }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '10px',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          {data.current.condition.text}
        </h2>

        <img
          src={`https:${data.current.condition.icon}`}
          alt={data.current.condition.text}
          style={{
            width: '60px',
            height: '60px',
            marginBottom: '20px',
          }}
        />
      </div>

      <div className="weather-cards">
        {weatherItems.map((item, index) => (
          <div
            key={index}
            className="weather-card"
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <div style={{ marginBottom: '10px', color: '#1a237e' }}>{item.label}</div>
            <div style={{ fontSize: '1.6rem', color: '#0d47a1' }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
