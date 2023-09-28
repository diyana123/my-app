import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import circles from './assets/circles.png';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="container">
      {/* <img src={circles}/> */}
      <NavBar/>
      <Hero/>
 
    </div>
  );
}

export default App;
