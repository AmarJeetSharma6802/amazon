"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style/home.module.css";
import Home from "./home/page.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <div className={style.homeContent}></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg"
                className={style.swiper_img}
              />
              <Image
                src="https://m.media-amazon.com/images/I/61bDTjNXzIL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg"
                className={style.swiper_img}
              />
              <Image
                src="https://m.media-amazon.com/images/I/61+FczH9UmL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/2025/MayART25/GW/ATF/Unrec/PC/13._CB794850845_.jpg"
                className={style.swiper_img}
              />
              <Image
                src="https://m.media-amazon.com/images/I/61STkgfEnFL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/dharshini/PC_Hero_Asin_3000x1200_LA_2x-Day1._CB794828883_.jpg"
                className={style.swiper_img}
              />

              <Image
                src="https://m.media-amazon.com/images/I/61WaFifFmkL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
                className={style.swiper_img}
              />

              
              <Image
                src="https://m.media-amazon.com/images/I/61C-nrnxzRL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/2025/MayART25/SSH/GW/PC/Unrec/30._CB794839941_.jpg"
                className={style.swiper_img}
              />

             
              <Image
                src="https://m.media-amazon.com/images/I/51XGML4eY1L._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                className={style.swiper_img}
              />

             
              <Image
                src="https://m.media-amazon.com/images/I/51GHfxRL9aL._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <div className={style.swiper__item}>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"
                className={style.swiper_img}
              />
              <Image
                src="https://m.media-amazon.com/images/I/613wq4Yvu7L._SR1236,1080_.jpg"
                alt="mobile"
                width={500}
                height={500}
                className={style.mobile_view_img}
              />
            </div>
            <div className={style.bg_img}></div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Home />
    </>
  );
}


