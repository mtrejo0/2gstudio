import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

import "./App.css"
import PropertyList from './components/PropertyList';
import Metrics from './components/Metrics';
import StreetViewSlideshow from './components/StreetViewSlideshow';
import ContactForm from './components/Contact';

function App() {
  return (
    <div style={{backgroundColor: "#000"}} className='app'>
      <Header />
      <Title/>
      <PropertyList/>
      <Metrics/>
      <StreetViewSlideshow/>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;
