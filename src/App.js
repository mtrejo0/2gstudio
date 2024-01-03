import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body1 from './components/Body1';

import "./App.css"
import PropertyList from './components/PropertyList';
import Metrics from './components/Metrics';

function App() {
  return (
    <div style={{backgroundColor: "#000"}} className='app'>
      <Header />
      <Body1/>
      <PropertyList/>
      <Metrics/>
      <Footer />
    </div>
  );
}

export default App;
