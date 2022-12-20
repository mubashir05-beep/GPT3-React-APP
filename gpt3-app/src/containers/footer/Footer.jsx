import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gpt3__footer-container section__margin ">
      <div className="gpt3__footer-container__content section__padding ">
        <h1 className="gradient__text">
          Do you want to step in to the
          <br /> future before others
        </h1>
        <button className="section__margin">Request Early Access</button>
      </div>
      <div className="gpt3__footer-container__footer">
        <div className="logo__text">
          <img src={logo} alt="" srcset="" />
          <p>
            Crechterwoord K12 182 DK
            <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-container__footer__details">
          <div className="details">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="details">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="details">
            <h4>Get in touch</h4>
            <p>
              Crechterwoord K12 <br />
              182 DK Alknjkcb
            </p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-container__footer__copyright section__padding">
        &#169; 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
}

export default Footer