import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import canvas from '../images/canvasOption.jpg';

export default function CreateYourPrint() {
  return (
    <Fragment>
      <div className='container'>
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Prints</h2>
              <hr size='30'></hr>
              <h3 style={{ color: '#666666' }}>Select Suitable Material</h3>
            </div>
            <div className='card-deck'>
              <div className='card'>
                <img className='card-img-top' src={canvas} alt='Card  cap' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
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
                <img className='card-img-top' src={canvas} alt='Card  cap' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This card has supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <img className='card-img-top' src={canvas} alt='Card  cap' />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
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
