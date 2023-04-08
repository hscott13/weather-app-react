import React from "react";
import Cities from "./Cities";

export default function Search() {
  return (
    <div className="title">
      <div className="contianer px-5 py-3">
        <div className="row">
          <div className="col">
            <h1>What's the weather like in...</h1>
          </div>
          <div className="col pt-3 text-center ">
            <form className="search text-center" id="city-search">
              <input
                className="input py-1 border border-dark border-2 fs-5 rounded-pill"
                type="text"
                autoFocus="on"
                id="city-input"
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
    </div>
  );
}
