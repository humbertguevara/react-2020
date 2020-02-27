import React, { useState } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import TestButton from './TestButton';
import TestDisplay from './TestDisplay';

function App() {
  
  const[counter, setCounter] = useState(0) // use of JS array destructuring functionality
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <TestButton onClickFunction={incrementCounter}/>
        <TestDisplay message={counter}/>        
        
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
