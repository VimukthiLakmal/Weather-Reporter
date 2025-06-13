const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

export const fetchWeather = async (city = "Colombo") => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${city}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return await response.json();
  } catch (err) {
    console.error("API ERROR:", err);
    throw err;
  }
};
