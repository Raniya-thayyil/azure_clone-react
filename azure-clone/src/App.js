import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Invent from './components/invent/Invent';
import FirstCards from './components/firstcards/FirstCards';
import Features from './components/Features/Features';
import Partners from './components/partners/Partners';
import HomeAccelerate from './components/homeaccelerate/HomeAccelerate';
import Discover from './components/discover/Discover';
import DeveloperStory from './components/developerstory/DeveloperStory';
import Advertisement from './components/advertisement/Advertisement';
import Footer from './components/footer/Footer';

import { useState, useEffect } from 'react';
import AzureHomePage from './AzureHomePage';

function App() {  
  return (
    <div className="App">
     <AzureHomePage/>
    </div>
  );
}

export default App;
