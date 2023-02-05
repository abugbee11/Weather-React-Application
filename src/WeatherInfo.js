import react from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated: <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="current-image"
            />
            <strong>{Math.round(props.data.temperature)}</strong>
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
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
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
