import React, { useState } from "react";
import axios from "axios";
import Cities from "./Cities";
import Forecast from "./Forecast";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let key = `ca5af28648d86b7925348bb9fb85cd3a`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  function searchCity(event) {
    event.preventDefault();

    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showForecast(response) {
    console.log(response);
    setWeather({
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      clouds: response.data.clouds.all,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  return (
    <div className="title">
      <div className="contianer px-5 py-3">
        <div className="row">
          <div className="col">
            <h1>What's the weather like in...</h1>
          </div>
          <div className="col pt-3 text-center ">
            <form className="search text-center" onSubmit={searchCity}>
              <input
                className="input text-center py-1 border border-dark border-2 fs-5 rounded-pill"
                type="text"
                autoFocus="on"
                id="city-input"
                onChange={updateCity}
              />
              <button
                className="button-form m-1 py-1 border border-dark border-2 fs-5 rounded-pill"
                type="submit"
              >
                <span role="img" aria-label="magnifying-glass-emoji">
                  🔍
                </span>
              </button>
            </form>
            <button
              className="text-center text-decoration-underline"
              id="current-location-button"
            >
              Current Location
            </button>
          </div>
        </div>
      </div>
      <Cities />

      <Forecast weather={weather} />
    </div>
  );
}
