import React from 'react';
import '../App.css';
import BrandImg1 from '../images/brandImg1.png';
import BrandImg2 from '../images/brandImg2.png';
import BrandImg3 from '../images/brandImg3.png';
import BrandImg4 from '../images/brandImg4.png';


const Brand = () => {
  return (
    <section className="section brand">
      <div className="brand-container container">
        <h4 className="section-subtitle"><i>Our Trusted Brand</i></h4>
        <div className="brand-images">
          <div className="brand-image">
            <img src={BrandImg1} alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src={BrandImg2} alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src={BrandImg3} alt="" className="brand-img" />
          </div>
          <div className="brand-image">
            <img src={BrandImg4} alt="" className="brand-img" />
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