import React from 'react';
import { Link } from 'react-router-dom';
import { itemTotal } from '../pages/cartHelpers';

import '../styles/navbar.css'

import logo from '../images/logo.png'
import account from '../images/acoount.png';
import search from '../images/search.png';
import cart from '../images/cart.png';


export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
  <div className="navbar-header">
    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
    <Link to="/" className="navbar-brand"><img className="logo" src={logo} alt="Galleriq" /></Link>
  </div>
  <div id="navbarCollapse" className="collapse navbar-collapse">
    <ul className="nav navbar-nav nav-center">
      <li><Link to="#">Canvas Prints</Link></li>
      <li><Link to="#">Wall Art</Link></li>
      <li><Link to="#">Premium Prints</Link></li>
      <li><Link to="#">Canvas Ideas</Link></li>
      <li><Link to="#">Offers</Link></li>
      <li><Link to="#">Blog</Link></li>
      <li><Link className="btn btn-warning nav-btn" to="/CanvasPrint">Create a Canvas</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="#"><img src={search} alt="" /></Link></li>
          <li><Link to="/cart"><img src={ cart } alt="" /><sup><small className="cart-badge">{itemTotal()}</small></sup></Link></li>
      <li><Link className="login-nav" to><img src={account} alt="" /></Link></li>
    </ul>
  </div>
</nav>

  );
}
