import logo from "./logo.svg";
import "./App.css";
import Spinner from "./Spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>🥳React is really fun!🤩</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Spinner />
      </header>
    </div>
  );
}

export default App;
