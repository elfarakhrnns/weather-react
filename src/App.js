import React from "react";
import { ThreeDots } from "react-loader-spinner";
import Component from "./Component";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World! 👋🏻</h1>
        <Weather city="Tokyo" />
        <Component />
      </header>
    </div>
  );
}

export default App;
