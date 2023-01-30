import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  let weatherData = {
    imgUrl:
      "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-16.png",
    description: "Cloudy",
  };

  return (
    <div className="row justify-content-center">
      <div className="col-2">
        <div className="weather-forecast-date">
          Mon
          <div className="forcast-image">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-image"
            />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="">34 </span>
            <span className="weather-forecast-temperature-min">23</span>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">
          Tue
          <div className="forcast-image">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-image"
            />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="">34 </span>
            <span className="weather-forecast-temperature-min">23</span>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">
          Wed
          <div className="forcast-image">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-image"
            />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="">34 </span>
            <span className="weather-forecast-temperature-min">23</span>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">
          Thu
          <div className="forcast-image">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-image"
            />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="">34 </span>
            <span className="weather-forecast-temperature-min">23</span>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="weather-forecast-date">
          Fri
          <div className="forcast-image">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-image"
            />
          </div>
          <div className="weather-forecast-temperatures">
            <span className="">34 </span>
            <span className="weather-forecast-temperature-min">23</span>
          </div>
        </div>
      </div>
    </div>
  );
}
