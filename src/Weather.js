import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed * 0.62137119,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
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
            <li>
              Last updated: <FormattedDate date={weatherData.date} />
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="current-image"
              />
              <strong>{Math.round(weatherData.temperature)}</strong>
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
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <WeatherForecast />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5e473a47031564c5f9eebba301f1dd8c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
