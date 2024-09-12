import React, { useEffect, useState } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../App.css'
import ScrollReveal from 'react-scroll-reveal';

SwiperCore.use([Pagination, Navigation]);

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [scrollUpBtnActive, setScrollUpBtnActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setHeaderActive(scrollY > 5);
      setScrollUpBtnActive(scrollY > 250);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navId.classList.add("active-navlink");
        } else {
          navId.classList.remove("active-navlink");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavToggle = () => {
    setNavOpen(prev => !prev);
    document.body.style.overflowY = navOpen ? 'scroll' : 'hidden';
  };

  const handleScrollUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <header className={headerActive ? 'header-active' : ''}>
        <button className="navOpen-btn" onClick={handleNavToggle}>Open Menu</button>
        <nav className={`menu-content ${navOpen ? 'open' : ''}`}>
          <button className="navClose-btn" onClick={handleNavToggle}>Close Menu</button>
          {/* Aquí van los enlaces de navegación */}
        </nav>
      </header>

      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        {/* Aquí van los SwiperSlides */}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>

      {scrollUpBtnActive && (
        <button className="scrollUp-btn" onClick={handleScrollUpClick}>
          Scroll Up
        </button>
      )}

      <ScrollReveal
        origin="top"
        distance="60px"
        duration={2500}
        delay={400}
        interval={100}
      >
        {/* Aquí van los elementos a revelar */}
      </ScrollReveal>
    </div>
  );
};

export default App;
