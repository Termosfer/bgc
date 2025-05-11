import { Swiper, SwiperSlide } from "swiper/react";
import law from "../../assets/smart-law-legal-advi.jpg.webp";
import book from "../../assets/380727.jpg.webp";
import judge from "../../assets/judge-gavel-with-jus.jpg.webp";
import justice from "../../assets/justice-law-conceptm.jpg.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slide.css";
// import required modules
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div
      onMouseEnter={() => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
      }}
      onMouseLeave={() => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
      }}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img src={law} alt="law" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={justice} alt="justice" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={judge} alt="judge" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book} alt="book" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
