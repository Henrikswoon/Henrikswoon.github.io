import React from 'react';
import logoReact from './logo_React.svg';
import logoTS from './logo_TS.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoReact} className="App-logo react" alt="logo" />
        <img src={logoTS} className="App-logo ts" alt="logo" />
        <h1>Portfolio Melker Henriksson</h1>
      </header>
    </div>
  );
}

export default App;
