import "./App.css";

import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App pt-3">
      <div className="body">
        <header className="App-header">
          <Search />
          <hr />
          <Forecast />
        </header>
      </div>
      <div>
        <a href="https://github.com/hscott13/weather-app-react">
          Open-source code
        </a>
        , Written by{" "}
        <a href="https://celebrated-arithmetic-8e4959.netlify.app/">
          Heather Scott
        </a>
      </div>
    </div>
  );
}

export default App;
