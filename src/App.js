import React from 'react';
import Header from './components/Header';
import ButtonsWatchs from './components/ButtonsWatchs';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ButtonsWatchs></ButtonsWatchs>
      <Timer></Timer>
    </div>
  );
}

export default App;
