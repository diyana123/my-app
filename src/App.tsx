import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import circles from './assets/circles.png';
import Hero from './Components/Hero';
// import CardItems from './Components/Cards/CardItems';
import Card from './Components/Cards/Cards';
import cardData from './Components/Cards/CardData';

function App() {
  return (
    <div>
      {/* <img src={circles}/> */}
      <NavBar/>
      <Hero/>
      <Card data={cardData} />
 
    </div>
  );
}

export default App;
