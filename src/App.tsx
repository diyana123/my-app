import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import circles from './assets/circles.png';
import Hero from './Components/Hero';
// import CardItems from './Components/Cards/CardItems';
import Card from './Components/Cards/Cards';
import cardData from './Components/Cards/CardData';
import AboutSection from './Components/AboutSecton';
import Reveiws from './Components/Reveiws/Reveiws';
import ReveiwData from './Components/Reveiws/ReveiwData';

function App() {
  return (
    <div>
      {/* <img src={circles}/> */}
      <NavBar/>
      <Hero/>
      <Card data={cardData} />
      <AboutSection/>
      <Reveiws data={ReveiwData}/>
 
    </div>
  );
}

export default App;
