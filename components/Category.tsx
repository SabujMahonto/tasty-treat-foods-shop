"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import { data } from "@/Data/categoryImages";
import CategorySliderItem from "./CategorySliderItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Category() {
  return (
    <section className="py-20">
      {/* {category goes here} */}
      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          speed={750}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
