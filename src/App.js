import "./App.css";

import Search from "./Search";
import Forecast from "./Forecast";

function App() {
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
