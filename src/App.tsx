import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const clickHandler = () => {
    window.alert("Hello world!");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={clickHandler}>Open alert</button>
        <a
          className="App-link"
          href="https://github.com/HubertTruszewski/daftacademy_frontend4beginners"
        >
          Github repo
        </a>
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
