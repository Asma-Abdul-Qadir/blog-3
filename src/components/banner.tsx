'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImgOne from "../../public/images/bannerImgOne.jpg";
import bannerImgTwo from "../../public/images/bannerImgTwo.jpg";
import bannerImgThree from "../../public/images/bannerImgThree.jpg";
import bannerImgFour from "../../public/images/bannerImgFour.jpg";

const Banner = () => {
  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgOne}
            alt="bannerImgOne"
            loading="eager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgTwo}
            alt="bannerImgTwo"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgThree}
            alt="bannerImgThree"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            alt="bannerImgFour"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute bottom-32 z-30 left-10 flex items-center justify-center w-10 h-10 bg-black/50 text-gray-300 rounded-full cursor-pointer hover:bg-black">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next absolute bottom-32 z-30 right-10 flex items-center justify-center w-10 h-10 bg-black/50 text-gray-300 rounded-full cursor-pointer hover:bg-black">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Banner;
