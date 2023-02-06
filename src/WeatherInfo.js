import react from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      <div className="row weather-temperature">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <strong>
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </strong>
        </div>
        <div className="col-6">
          <div className="weather-details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-forecast">
        <WeatherForecast />
      </div>
    </div>
  );
}
