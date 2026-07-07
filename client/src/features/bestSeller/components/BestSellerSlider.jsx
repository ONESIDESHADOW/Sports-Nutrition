import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BestSellerCard from "./BestSellerCard";

const BestSellerSlider = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <BestSellerCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestSellerSlider;