import React from 'react';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Hometest from './Hometest.js';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

fontawesome.library.add(brands, faAngleDown, faAngleRight)

function App() {
  return (
    <div>
      <Nav/>
      <Hometest/>
      <Footer/>
    </div>
  );
}

export default App;
