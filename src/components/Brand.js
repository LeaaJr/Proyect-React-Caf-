import React from 'react';

const Brand = () => {
  return (
    <section className="section brand">
      <div className="brand-container container">
        <h4 className="section-subtitle"><i>Our Trusted Brand</i></h4>
        <div className="brand-images">
          <div className="brand-image">
            <img src="images/brandImg1.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/brandImg2.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/brandImg3.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/brandImg4.png" alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src="images/brandImg5.png" alt="" className="brand-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;