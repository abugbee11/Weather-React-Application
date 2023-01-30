import React from "react";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday 23:00",
    description: "Cloudy",
    imgUrl:
      "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-16.png",
    temperature: 30,
    humidity: 55,
    wind: 10,
  };

  return (
    <div className="weather-app">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="current-image"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/" className="active">
                °F
              </a>{" "}
              | <a href="/">°C</a>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="weather-details">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast">
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}
