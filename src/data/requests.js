import { formatWeatherData, formatForecastData } from "./helpers";

const BASE_URL = "http://api.openweathermap.org/data/2.5";

export function getWeather(lat, long) {
  return fetch(`${BASE_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(weather => {
      return formatWeatherData(weather);
    });
}

export function getForecast(lat, long) {
  return fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(forecastData => {
      if (Object.entries(forecastData).length) {
        return forecastData.list.filter(forecast => forecast.dt_txt.match(/09:00:00/)).map(formatForecastData);
      }
    });
}

export function getCityWeather(city) {
  return fetch(`${BASE_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(weather => {
      return formatWeatherData(weather);
    });
}

export function getCityForecast(city) {
  return fetch(`${BASE_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(forecastData => {
      if (Object.entries(forecastData).length) {
        return forecastData.list.filter(forecast => forecast.dt_txt.match(/09:00:00/)).map(formatForecastData);
      }
    });
}
