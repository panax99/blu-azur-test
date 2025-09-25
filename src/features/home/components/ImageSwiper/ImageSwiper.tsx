import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";

import { CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

export interface ImageSwiperProps {
  images: string[];
  isFirstSection?: boolean;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  isFirstSection = false,
}) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="relative w-full h-auto flex items-end justify-end max-w-4xl mx-auto py-10">
      {/* Next Button */}
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer z-10 rounded-full bg-transparent shadow-md hover:scale-110 transition"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <CircleChevronRight className="w-7 h-7 text-white" />
      </button>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1.5}
        centeredSlides={false}
        loop
        initialSlide={0}
        spaceBetween={5}
        className="w-full" // 👈 push slides to the right
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1.5, spaceBetween: 10 },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="pl-5"
            style={{ width: "calc(100% / 1.5)" }}
          >
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 rounded-2xl overflow-hidden ${
                  isActive
                    ? "scale-100 md:scale-105 py-3"
                    : "scale-90 opacity-80"
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className={`${
                    isFirstSection ? "h-[75dvh]" : "h-48"
                  } w-full rounded-3xl object-cover`}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
