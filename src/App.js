import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  function showWeather(response) {
    alert(response.data.name);
  }
  let key = `ca5af28648d86b7925348bb9fb85cd3a`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`;
  axios.get(url).then(showWeather);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
