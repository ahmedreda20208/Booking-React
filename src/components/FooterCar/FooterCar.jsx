import React from 'react';
import './footerCar.css';

const FooterCar = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#privacy">Privacy Statement</a>
        <a href="#cookies">Cookies</a>
        <a href="#terms">Terms of service</a>
        <a href="#content">Content standards and guidelines</a>
        <a href="#contact">Contact Us</a>
        <a href="#slavery">Modern Slavery Statement</a>
        <a href="#how">How we Work</a>
        <a href="#supply">Supply Partner Enquiry and Marketplace</a>
        <a href="#affiliate">Affiliate Programme</a>
        <a href="#careers">Careers</a>
      </div>
      <div className="footer-info">
        <p>
          Copyright © 2023 Travelmania.com Transport Limited. All rights reserved.
          Travelmania.com Transport Limited registered in England and Wales (Number: 05179829) whose registered address is at 6 Goods Yard Street, Manchester, M3 3BG, United Kingdom. VAT number: GB 855349007.
        </p>
        <p>
        Travelmania.com Transport Limited is part of Travelmania Holdings Inc., the world leader in online travel & related services.
        </p>
      </div>
      <div className="footer-logos">
        <img src="https://s3.eu-west-1.amazonaws.com/temp-logo2life.algo.design.vpsvc.com/hzg7lhmjwvnvrcztvocq1gs0jqb95d.png" alt="Travelmania.com" />
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.92.0/images-brand/PricelineLogo.svg" alt="priceline" />
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.92.0/images-brand/KayakLogo.svg" alt="KAYAK" />
        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.92.0/images-brand/AgodaLogo.svg" alt="agoda" />
      </div>
    </div>
  );
};

export default FooterCar;
