import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Item from './Item';
import { getCart } from './cartHelpers';

const updateCart = () => {
  const xquantity = document.querySelector('#quantity').value;
  const xprice = document.querySelector('#price').innerHTML;
  const name = document.querySelector('#name').innerHTML;
  const email = document.querySelector('#email').innerHTML;
  const address = document.querySelector('#address').innerHTML;

  var existing = localStorage.getItem('cart');
  existing = existing ? JSON.parse(existing) : {};

  existing['price'] = '';
  existing['price'] = xprice;
  existing['quantity'] = '';
  existing['quantity'] = xquantity;
  existing['name'] = name;
  existing['email'] = email;
  existing['address'] = address;

  localStorage.setItem('cart', JSON.stringify(existing));
};

const Cart = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <h1>Shopping Cart </h1>
          <div className='col-md-8'>
            <Item
              frame={getCart().frame}
              image={getCart().image}
              price={getCart().price}
            />
          </div>

          <div class='card' style={{}}>
            <div class='card-header'>
              <center>Your Card Summary</center>
            </div>
            <ul class='list-group list-group-flush'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                class='list-group-item'
                style={{ width: '100%' }}></input>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your Email'
                class='list-group-item'
                style={{ width: '100%' }}></input>
              <input
                type='text'
                name='address'
                id='address'
                placeholder='Delivery Address'
                class='list-group-item'
                style={{ width: '100%' }}></input>
            </ul>
            <button
              onClick={updateCart}
              className='btn btn-primary btn-block'
              type='submit'>
              checkout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
