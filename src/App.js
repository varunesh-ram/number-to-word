import React from 'react';
import WordGeneratorFromNumber from './component/wordgeneratorfromnumber';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number to Word</h1>
        <WordGeneratorFromNumber/>
      </header>
    </div>
  );
}

export default App;
