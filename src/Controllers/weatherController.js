import { fetchWeather } from '../Models/weatherModel';

export const getWeatherData = async (setWeather, setError, setLoading, city) => {
  try {
    setLoading(true);
    const data = await fetchWeather(city);
    setWeather(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
