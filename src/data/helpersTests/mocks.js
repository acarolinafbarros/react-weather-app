export const weatherDataMock = {
  coord: {
    lon: -8.6119,
    lat: 41.1687,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 293.49,
    feels_like: 293.41,
    temp_min: 292.38,
    temp_max: 294.74,
    pressure: 1012,
    humidity: 70,
  },
  visibility: 10000,
  wind: {
    speed: 0.89,
    deg: 129,
    gust: 2.68,
  },
  clouds: {
    all: 20,
  },
  dt: 1632475771,
  sys: {
    type: 2,
    id: 2020703,
    country: "PT",
    sunrise: 1632464637,
    sunset: 1632508136,
  },
  timezone: 3600,
  id: 2742951,
  name: "Ameal",
  cod: 200,
};

export const forecastDataMock = {
  dt: 1632906000,
  main: {
    temp: 290.71,
    feels_like: 289.8,
    temp_min: 290.71,
    temp_max: 290.71,
    pressure: 1025,
    sea_level: 1025,
    grnd_level: 1010,
    humidity: 49,
    temp_kf: 0,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  clouds: {
    all: 9,
  },
  wind: {
    speed: 3.16,
    deg: 28,
    gust: 4.84,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d",
  },
  dt_txt: "2021-09-29 09:00:00",
};
