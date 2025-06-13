const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city = "Colombo") => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
  console.log("Fetching from:", url); // Debug log
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.text();
    console.error("Error response:", error); // Debug log
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};
