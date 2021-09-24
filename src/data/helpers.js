/**
 * Format weather data into a object with a specific structure
 * @param {data} object
 *
 * @returns {object}
 */
export function formatWeatherData(data) {
  return {
    cityId: data.id,
    country: data.sys.country,
    name: data.name,
    date: new Date(data.dt * 1000).toDateString(),
    temperature: (data.main.temp / 10).toFixed(1),
    temperatureMax: (data.main.temp_max / 10).toFixed(1),
    temperatureMin: (data.main.temp_min / 10).toFixed(1),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}

/**
 * Format forecast data into a object with a specific structure
 * @param {data} object
 *
 * @returns {object}
 */
export function formatForecastData(data) {
  return {
    id: data.dt,
    date: new Date(data.dt * 1000).toDateString(),
    temperature: (data.main.temp / 10).toFixed(1),
  };
}
