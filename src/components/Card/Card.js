import React from "react";

import { Add } from "../Icons/Add";
import { Remove } from "../Icons/Remove";
import "./Card.css";

export const Card = ({ weatherData, forecastData, isFavorite, addFavoriteCb, removeFavoriteCb }) => {
  return (
    <div className="cardContent">
      {!isFavorite && (
        <button
          className="button"
          onClick={() =>
            addFavoriteCb({
              id: weatherData.cityId,
              weather: weatherData,
              forecast: forecastData,
              isFavorite: true,
            })
          }
        >
          <Add height={"20px"} />
        </button>
      )}
      {isFavorite && (
        <button className="button" onClick={() => removeFavoriteCb({ id: weatherData.cityId })}>
          <Remove height={"20px"} />
        </button>
      )}
      <div className="weatherContent">
        <div className="weatherInfoLeft">
          <div>
            <span>
              {weatherData.name} ({weatherData.country})
            </span>
            <img
              width="25px"
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          </div>
          <span>{weatherData.temperature}ºC</span>
          <span>{weatherData.date}</span>
        </div>
        <div className="weatherInfoRight">
          <span>{weatherData.description}</span>
          <span>Max {weatherData.temperatureMax} ºC</span>
          <span>Min {weatherData.temperatureMin} ºC</span>
        </div>
      </div>
      <div className="forecastContent">
        <span>Forecast</span>
        {forecastData.map(forecast => (
          <div className="forecastItem" key={forecast.id}>
            <span>{forecast.date}</span>
            <span className="forecastItemTemperature">{forecast.temperature} ºC</span>
          </div>
        ))}
      </div>
    </div>
  );
};
