const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city = "Colombo") => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return response.json();
};


// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// export const fetchWeather = async (city = "Colombo") => {
//   console.log("Fetching weather for:", city);
//   console.log("Using API key:", API_KEY); // 👈 debug this (optional)

//   const response = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
//   );

//   if (!response.ok) {
//     console.error("Response not OK:", response.status);
//     throw new Error("Failed to fetch weather data");
//   }

//   return response.json();
// };
