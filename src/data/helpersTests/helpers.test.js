import { formatWeatherData, formatForecastData } from "../helpers";
import { weatherDataMock, forecastDataMock } from "./mocks";

const expectedFormatWeatherData = {
  cityId: 2742951,
  country: "PT",
  date: "Fri Sep 24 2021",
  description: "few clouds",
  icon: "02d",
  name: "Ameal",
  temperature: "29.3",
  temperatureMax: "29.5",
  temperatureMin: "29.2",
};

const expectedFormatForecastData = {
  date: "Wed Sep 29 2021",
  id: 1632906000,
  temperature: "29.1",
};

describe("formatWeatherData", () => {
  it("should return an object with the weather information filtered", () => {
    const result = formatWeatherData(weatherDataMock);
    expect(result).toEqual(expectedFormatWeatherData);
  });
});

describe("formatForecastData", () => {
  it("should return an object with the forecast information filtered", () => {
    const result = formatForecastData(forecastDataMock);
    expect(result).toEqual(expectedFormatForecastData);
  });
});
