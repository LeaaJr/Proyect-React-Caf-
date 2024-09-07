// src/components/MySwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default MySwiper;
