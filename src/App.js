import React from 'react';
import nail from './nail.svg';
import caption from './main_caption.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="temp">
        <img src={caption} alt="Paznoktki"></img>
        <img src={nail} className="nail" alt="nail"></img>
      </div>
    </div>
  );
}

export default App;
