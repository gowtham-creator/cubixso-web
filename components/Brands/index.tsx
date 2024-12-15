"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="px-4 mx-auto max-w-c-1390 md:px-8 2xl:px-0">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {brandData.map((brand) => (
              <SwiperSlide key={brand?.id}>
                <SingleBrand brand={brand} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div> */}
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
