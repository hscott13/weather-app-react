import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  let key = `ca5af28648d86b7925348bb9fb85cd3a`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`;

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <hr />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
