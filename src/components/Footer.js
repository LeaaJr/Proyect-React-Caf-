import React from 'react';

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="footer-container container">
        <div className="footer-content">
          <a href="#" className="logo-content flex">
            <i className='bx bx-coffee logo-icon'></i>
            <span className="logo-text">Coffee.</span>
          </a>
          <p className="content-description">
            Coffee is a cafe that serves many variants of coffee and other dishes with a very comfortable place.
          </p>
          <div className="footer-location flex">
            <i className='bx bx-map map-icon'></i>
            <div className="location-text">
              USA Californa 65 South Fifth St.Sicklerville, NJ 08081
            </div>
          </div>
        </div>
        <div className="footer-linkContent">
          <ul className="footer-links">
            <h4 className="footerLinks-title">Branches</h4>
            <li><a href="#" className="footer-link">India</a></li>
            <li><a href="#" className="footer-link">USA</a></li>
            <li><a href="#" className="footer-link">France</a></li>
            <li><a href="#" className="footer-link">Africa</a></li>
            <li><a href="#" className="footer-link">Japan</a></li>
          </ul>
          <ul className="footer-links">
            <h4 className="footerLinks-title">Contact Us</h4>
            <li><a href="#" className="footer-link">Email Us</a></li>
            <li><a href="#" className="footer-link">Community</a></li>
            <li><a href="#" className="footer-link">Call Us</a></li>
            <li><a href="#" className="footer-link">Ads info</a></li>
            <li><a href="#" className="footer-link">Social M</a></li>
          </ul>
          <ul className="footer-links">
            <h4 className="footerLinks-title">Support</h4>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">FAQs</a></li>
            <li><a href="#" className="footer-link">Private Policy</a></li>
            <li><a href="#" className="footer-link">Help Us</a></li>
            <li><a href="#" className="footer-link">Review Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyRight">&#169; coffee. All rights reserved</div>
    </footer>
  );
}

export default Footer;
