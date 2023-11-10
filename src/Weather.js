import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 21,
    date: "Friday 12:00",
    description: "Shower Rain",
    icons: "https://openweathermap.org/img/wn/09d@2x.png",
    humidity: 18,
    wind: 15,
  };

  return (
    <div className="weather">
      <form className="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city name"
              className="form-input"
            />
          </div>
          <div className="col-3 p-0">
            <input
              type="submit"
              value="Search"
              id="btn"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="content">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-7">
          <div className="weather-temperature">
            <img
              src={weatherData.icons}
              alt={weatherData.description}
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
