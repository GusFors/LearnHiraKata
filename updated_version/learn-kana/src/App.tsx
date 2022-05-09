import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import InputField from './features/inputField/InputField';
import LearnKana from './features/learnKana/LearnKana';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="wrapper">
          <LearnKana></LearnKana>
        </div>
      </header>
    </div>
  );
}

export default App;
