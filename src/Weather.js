import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in Tokyo is ${Math.round(response.data.main.temp)}°C`);
  }
  let apiKey = `cdd1f5b4dd99e4adb623b7909b4163f3`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="App">
      <header className="app-header">
        <h2>This is the weather</h2>
      </header>
    </div>
  );
}
