import React, { useState, useEffect } from 'react';
import Heady from './components/Heady'
import Herosection from './components/Herosection';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Work from './components/Work'
import Footer from './components/Footer'
import Years from './components/Years';

function App() {
  return (
    <div className='scroll-smooth'>
      <Heady/>
      <Herosection />
      <Technologies />
      <Years />
      <Projects />
      <Aboutme />
      <Work />
      <Footer />
    </div>
  );
}

export default App;