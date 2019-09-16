import React, { Fragment } from 'react';
import NewsLetter from './NewsLetter';

import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';


export default function Footer() {
  return (
    <Fragment>
    <div>
    <div className="row footer">
      <div className="col-sm-1" />
      <div className="col-sm-2">
        <h4>Company</h4>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">CONTACT &amp; HELP</a>
          </li>
          <li>
            <a href="#">HOW IT WORKS</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h4 style={{ color: "#fff" }}>Important</h4>
        <ul>
          <li>
            <a href="#">SHIPPING INFO</a>
          </li>
          <li>
            <a href="#">RETURN POLICY</a>
          </li>
          <li>
            <a href="#">QUICK LINKS</a>
          </li>
        </ul>
      </div>
      <div className="col-sm-2">
        <h4>Be Social</h4>
        <ul>
          <li>
            <div style={{ display: "flex" }}>
              <div style={{ paddingRight: 30 }}>
                <img src={facebook} alt />
              </div>
              <div style={{ paddingRight: 30 }}>
                <img src={instagram} alt />
              </div>
              <div style={{ paddingRight: 30 }}>
                <img src={twitter} alt />
              </div>
            </div>
          </li>
          <li>
            <img src={phone} alt />
            <span>+91-9810512915</span>
          </li>
          <li>
            <img src={mail} alt />
            <span>info@easywallprints.com</span>
          </li>
        </ul>
      </div>
     
          
      <NewsLetter/>    


          
          
      <div className="col-sm-1" />
    </div>
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8" style={{ background: "#424242" }}>
        <div style={{ float: "left", color: "#fff" }}>
          Copyright ©2019 Galleriq. All rights reserved.
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
  </div>;
  
      
    </Fragment>
  )
}
