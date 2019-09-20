import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cart from './Cart';
import { addItem } from './cartHelpers';
import { log } from 'util';

export default function CanvasPrint() {
  const [image, setImage] = useState('https://img.icons8.com/officel/2x/add-image.png');
  const [price, setPrice] = useState('72');
  const [width, setWidth] = useState(18);
  const [height, setHeight] = useState(12);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0].size < 999999) {
      setError(true);
    } else {
      setError('');
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className='text-danger alert alert-danger'>Image size is too small</h3>;
    }
  };

  const calculatePrice = () => {
    const w = parseInt(document.querySelector('#width').value);
    setWidth(w);
    const h = parseInt(document.querySelector('#height').value);
    setHeight(h);
    setPrice((w * h) / 3);
  };

  const addToCart = () => {
    const frame = document.querySelector('#frame').innerHTML;
    addItem(image, price, frame,'1', () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };
  const showAddtoCartButton = () => {
    return (
      <button onClick={addToCart} className='btn btn-outline-warning mt-2 mb-2'>
        <p>Add to cart</p>
      </button>
    );
  };

  return (
    <Fragment>
      <div className='container'>
        {shouldRedirect(redirect)}
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Prints</h2>
              <hr size='30'></hr>
              {showError()}
              <div className='col-md-6'>
                <h3 id='frame' style={{ color: '#666666' }}>
                  Canvas Single Print: 1 Panel,{width}"×{height}"
                </h3>
                <img src={image} className='upload-image' id='upload-image' />
                <input
                  type='file'
                  accept='image/*'
                  className=''
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-6'>
                <h3>Custom Size</h3>
                <input
                  type='number'
                  class='form-control'
                  name='width'
                  id='width'
                  placeholder='18 inch Width'
                  onChange={calculatePrice}
                />{' '}
                <input
                  type='number'
                  class='form-control'
                  name='height'
                  id='height'
                  placeholder='12 inch height'
                  onChange={calculatePrice}
                />
                <h2>Price: {price}</h2>
                {showAddtoCartButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
