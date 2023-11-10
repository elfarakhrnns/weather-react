import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Weather />
        </div>
      </div>
      <footer>
        <p>
          Open-sourced code in Github by{" "}
          <a
            href="https://github.com/elfarakhrnns/weather-react"
            target="_blank"
          >
            Elfara K.
          </a>
        </p>
      </footer>
    </div>
  );
}
