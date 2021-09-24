import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { addFavorite, removeFavorite } from "./../../redux/actions";
import { getWeather, getForecast, getCityWeather, getCityForecast } from "../../data/requests";
import { Card } from "./../../components/Card/Card";
import { SearchBar } from "./../../components/SearchBar/SearchBar";
import { INVALID_INPUT, FETCH_ERROR, DEFAULT_LOCATION, NO_LOCATION_FOUND } from "../../utils/messagesKeys";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecast] = useState();

  const [firstLoading, setFirstLoading] = useState(true);
  const [inputStatusError, setInputStatusError] = useState(false);
  const [inputMessageError, setInputMessageError] = useState("");

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error(NO_LOCATION_FOUND);
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setLat("38.6979");
          setLong("-9.42146");
          lat && long && toast.error(DEFAULT_LOCATION);
        }
      );
    }

    if (lat && long) {
      getWeather(lat, long)
        .then(weather => {
          setWeatherData(weather);
          setFirstLoading(false);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });

      getForecast(lat, long)
        .then(data => {
          setForecast(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });
    }
  }, [lat, long]);

  const searchSubmit = searchValue => {
    if (!searchValue) {
      setInputStatusError(true);
      setInputMessageError(INVALID_INPUT);
    } else {
      getCityWeather(searchValue)
        .then(data => {
          setFirstLoading(true);
          setInputStatusError(false);
          setWeatherData(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });

      getCityForecast(searchValue)
        .then(data => {
          setInputStatusError(false);
          setForecast(data);
        })
        .catch(() => {
          setInputStatusError(true);
          setInputMessageError(FETCH_ERROR);
        });
    }
  };

  const addFavoriteCb = card => {
    dispatch(addFavorite(card));
  };

  const removeFavoriteCb = id => {
    dispatch(removeFavorite(id));
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <div className="home">
        <h1>Weather App</h1>
        <SearchBar
          searchSubmit={searchSubmit}
          inputStatusError={inputStatusError}
          inputMessageError={inputMessageError}
        />
        {firstLoading && !weatherData && <span className="searchLocation">Searching current location ...</span>}
        {!firstLoading && weatherData && (
          <div className="currentLocation">
            <span role="img">📌 </span>
            <span>Current location: {weatherData.name}</span>
          </div>
        )}
        {weatherData && forecastData && (
          <div className="cardCollection">
            <Card
              weatherData={weatherData}
              forecastData={forecastData}
              addFavoriteCb={addFavoriteCb}
              isFavorite={false}
            />
          </div>
        )}
        {favorites.length > 0 && (
          <>
            <hr className="separator" />
            <h3>My favorites</h3>
            <div className="cardCollection">
              {favorites.map(fav => (
                <Card
                  key={fav.id}
                  weatherData={fav.weather}
                  forecastData={fav.forecast}
                  isFavorite={fav.isFavorite}
                  removeFavoriteCb={removeFavoriteCb}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
