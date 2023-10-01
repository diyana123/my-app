import React from 'react';
import '../src/Components/styles/main.scss'
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
      <div className='circle-background'>
      <NavBar/>
      <Hero/>
      </div>
     
      <Card data={cardData} />
      <div className='circle-background-left'>
      <AboutSection/>
      <Reveiws data={ReveiwData}/>
      </div>
 
    </div>
  );
}

export default App;
