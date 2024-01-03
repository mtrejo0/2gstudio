import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body1 from './components/Body1';

import "./App.css"
import PropertyList from './components/PropertyList';
import Metrics from './components/Metrics';
import StreetViewSlideshow from './components/StreetViewSlideshow';

function App() {
  return (
    <div style={{backgroundColor: "#000"}} className='app'>
      <Header />
      <Body1/>
      <PropertyList/>
      <Metrics/>
      {/* <StreetViewSlideshow/> */}
      <Footer />
    </div>
  );
}

export default App;
