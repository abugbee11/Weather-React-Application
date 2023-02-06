import react, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault(event);
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * 0.55555556;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}