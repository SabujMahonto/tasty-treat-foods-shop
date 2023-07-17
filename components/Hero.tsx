"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import Image from "next/image";
import { data } from "@/Data/sliderImages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Overlay from "./Overlay";

export default function Hero() {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
        parallax={true}
        loop={true}
        speed={1000}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                priority
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute top-1/2 left-1/2 text-center  text-white -translate-x-1/2 -translate-y-1/2 z-[2] space-y-5">
                <h1
                  className="text-8xl font-semibold"
                  data-swiper-parallax="-300%"
                >
                  {item.headline}
                </h1>
                <p className="text-lg font-medium" data-swiper-parallax="-500%">
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-900%">
                  <Link href={"/product"} className="btn btn-accent">
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
