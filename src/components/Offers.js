import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import account from '../images/acoount.png';

export default function Offers() {
  return (
    <Fragment>
      <div className='row ' style={ { margin: '0px', backgroundColor: '#3399DD'}}>
        <div
          className='col-sm-6 col-md-3 pro'
          style={{ textAlign: 'center', padding: '0.7rem' }}>
          <span className='left-top'>Sign up &amp; get gift voucher worth `1000</span>
        </div>
        <div className=' col-md-6'></div>
        <div className='col-sm-6 col-md-3 pro' style={{ paddingTop: '10px' }}>
          <Link className='login' href>
            <img src={account} alt='' />
            <span>Login | Register</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
