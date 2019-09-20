import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Footer from './components/Footer';
import CanvasPrint from './pages/canvasPrint';
import Cart from './pages/Cart';

import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Offers />
      <Navbar />

      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/CanvasPrint' component={CanvasPrint} />
        <Route exact path='/Cart' component={Cart} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
