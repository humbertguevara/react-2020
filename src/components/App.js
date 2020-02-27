import React, { useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import TestButton from './TestButton';
import TestDisplay from './TestDisplay';

function App() {
  
  const[counter, setCounter] = useState(0) // use of JS array destructuring functionality
  const incrementCounter = (incValue) => setCounter(counter + incValue);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TestButton onClickFunction={incrementCounter} increment={1}/>
          <TestButton onClickFunction={incrementCounter} increment={5}/>
          <TestButton onClickFunction={incrementCounter} increment={10}/>
          <TestButton onClickFunction={incrementCounter} increment={100}/>
          <TestDisplay message={counter}/>
        </div>

        
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
