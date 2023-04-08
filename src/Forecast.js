import React from "react";

export default function Forecast(props) {
  if (props.weather) {
    return (
      <div className="forecast">
        <hr />
        <div className="container pb-4">
          <div className="row d-flex align-items-center">
            <div className="col text-center">
              <div className="main">
                <h2 className="p-0">{props.weather.name}</h2>
                <p id="current-date" className="fs-5">
                  12:55 16/12/2022
                </p>
              </div>
              <span className="icon">
                <img
                  src={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
                  width="150"
                  alt="Weather-Icon"
                />
                {Math.round(props.weather.temp)}°
              </span>
              <div className="fs-4">
                <button className="temp-buttons" id="celcius">
                  °C
                </button>
                <button className="temp-buttons" id="fahrenheit">
                  °F
                </button>
              </div>
            </div>
            <div className="col">
              <div className="description">
                <div>
                  <div className="text-center">
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item py-3 fs-5 border-secondary fw-bold"
                        id="weather-description"
                      >
                        {props.weather.description}
                      </li>
                      <li className="list-group-item py-3 fs-5 border-secondary">
                        Clouds: {props.weather.clouds}%
                      </li>
                      <li className="list-group-item py-3 fs-5 ">
                        Wind: {props.weather.wind}m/s
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
