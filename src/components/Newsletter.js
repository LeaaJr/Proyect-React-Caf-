import React from 'react';

const Newsletter = () => {
  return (
    <section className="section newsletter">
      <div className="newsletter-container container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h4 className="section-subtitle"><i>Newsletter</i></h4>
            <h2 className="section-title">Get Weekly Coffee Updates</h2>
            <p className="section-description">
              Coffee is a cafe that serves many variants of coffee and other dishes with a very comfortable place.
            </p>
          </div>
          <div className="newsletter-inputContainer flex">
            <input type="email" className="newsletter-input" placeholder="Enter Your Email Address" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;