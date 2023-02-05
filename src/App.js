import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Open source code by{" "}
          <a href="https://www.linkedin.com/in/abugbee/" target="_blank">
            Adrienne Bugbee
          </a>{" "}
          available on{" "}
          <a
            href="https://github.com/abugbee11/Weather-React-Application"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted by Netlify
        </footer>
      </div>
    </div>
  );
}
