import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './GlobalStyles';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        
        <Navbar/>
        <Hero sliders={SliderData}/>
      </Router>
     
    </div>
  );
}

export default App;
