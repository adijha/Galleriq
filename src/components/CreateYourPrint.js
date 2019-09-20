import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import canvas from '../images/canvasOption.jpg';
import acrylic from '../images/acrylic.jpg';
import HDmetal from '../images/HDmetal.jpg';
import CanvasPrint from '../pages/canvasPrint';

export default function CreateYourPrint() {
  return (
    <Fragment>
      <div className='container'>
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Canavs</h2>
              <hr size='30'></hr>
              <h3 style={{ color: '#666666' }}>Select Suitable Material</h3>
            </div>
            <div className='card-deck'>
              <div className='card'>
                <Link to='CanvasPrint'>
                  <img className='card-img-top' src={canvas} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to='CanvasPrint'>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      Canvas
                    </h5>
                  </Link>
                  <p className='card-text text-centre'>
                    This is a longer card It's a broader card with text below as a natural
                    lead-in to extra content. This content is a little longer. This
                    content is a little bit longer.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <Link to=''>
                  <img className='card-img-top' src={HDmetal} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to=''>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      HD Metal
                    </h5>
                  </Link>
                  <p className='card-text'>
                    This card has supporting text below as a natural lead-in to additional
                    content. This content is a little longer. This content is a little bit
                    longer.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <Link to=''>
                  <img className='card-img-top' src={acrylic} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to=''>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      Acrylic
                    </h5>
                  </Link>
                  <p className='card-text'>
                    It's a broader card with text below as a natural lead-in to extra
                    content. This content is a little longer.This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
