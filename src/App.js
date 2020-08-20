import React from 'react';
import logo from './logo.svg';
import './App.css';

function displayGreen() {

  if (navigator.connection.type === 'cellular'){
    return <p>logo</p>
  }

  console.log(navigator)
  console.log(navigator.connection)
  console.log(navigator.connection.type)

  return <img src={logo} className="App-logo" alt="logo" />
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          displayGreen()
        }
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
