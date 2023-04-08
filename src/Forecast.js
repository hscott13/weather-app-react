import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="container pb-4">
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            <div className="main">
              <h2 className="p-0" id="main-city">
                Glasgow
              </h2>
              <p id="current-date" className="fs-5">
                12:55 16/12/2022
              </p>
            </div>
            <span className="icon m-0" role="img" aria-label="weather emoji">
              ⛅<span>12</span>°
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
                      Mostly Cloudy
                    </li>
                    <li className="list-group-item py-3 fs-5 border-secondary">
                      {" "}
                      Clouds: <span id="clouds">90</span>%
                    </li>
                    <li className="list-group-item py-3 fs-5 ">
                      Wind: <span id="wind-speed">13</span>m/s
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
}
