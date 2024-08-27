import React from 'react';
import HomeImg1 from '../images/homeImg1.jpg';
import HomeImg2 from '../images/homeImg2.jpg';
import HomeImg3 from '../images/homeImg3.jpg';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={HomeImg1} alt="" className="home-img" />
              <div className="home-details">
                <div className="home-text">
                  <h4 className="homeSubtitle">U'll really like what we do</h4>
                  <h2 className="homeTitle">Fresh Coffee In The <br />Morning ☕</h2>
                </div>
                <button className="button">Buy One Now</button>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={HomeImg2} alt="" className="home-img" />
              <div className="home-details">
                <div className="home-text">
                  <h4 className="homeSubtitle">Enjoy the finest coffee drinks.</h4>
                  <h2 className="homeTitle">Enjoy Our Exclusive <br /> Coffee and Cocktails</h2>
                </div>
                <button className="button">Explore</button>
              </div>
            </div>
            <div className="swiper-slide">
              <img src={HomeImg3} alt="" className="home-img" />
              <div className="home-details">
                <div className="home-text">
                  <h4 className="homeSubtitle">Making Our coffee with lover.</h4>
                  <h2 className="homeTitle">Alluring and Fragrant <br /> Coffee Aroma</h2>
                </div>
                <button className="button">Explore</button>
              </div>
            </div>
          </div>
          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;