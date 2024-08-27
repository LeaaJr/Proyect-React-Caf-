import React from 'react';
import Aboutimg from '../images/aboutImg.jpg';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about-content container">
        <div className="about-imageContent">
          <img src={Aboutimg} alt="" className="about-img" />
          <div className="aboutImg-textBox">
            <i className='bx bx-heart heart-icon flex'></i>
            <p className="content-description">I really love the Cappucino. The coffee was very smooth.</p>
          </div>
        </div>
        <div className="about-details">
          <div className="about-text">
            <h4 className="content-subtitle"><i>Why Choose Us</i></h4>
            <h2 className="content-title">What makes our coffee special!</h2>
            <p className="content-description">
              The company itself is a very successful company. Or she criticizes the laborious nature of things,
              and repels them with hatred, to gain pleasure, to be assumed by necessity. Here, is this older? I will
              be saved by that pain, the resilience that because
            </p>
            <ul className="about-lists flex">
              <li className="about-list">Quality</li>
              <li className="about-list dot">.</li>
              <li className="about-list">Branches</li>
              <li className="about-list dot">.</li>
              <li className="about-list">Delivery</li>
            </ul>
          </div>
          <div className="about-buttons flex">
            <button className="button">About Us</button>
            <a href="#" className="about-link flex">
              <span className="link-text">read more</span>
              <i className='bx bx-right-arrow-alt about-arrowIcon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;