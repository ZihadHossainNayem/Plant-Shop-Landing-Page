import CommentCard from "./CommentCard";
import { CommentsData } from "../Data/Comments";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper/modules";

const CustomerComments = () => {
  return (
    <div className="xl:px-48 lg:px-16 md:px-12 px-4 py-12 pb-20 ">
      <h1 className="pb-8 text-2xl font-steppe text-[#004f44] font-medium">
        What customers say about Plantify?
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        keyboard={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        {CommentsData.map((item) => (
          <SwiperSlide key={item.id}>
            <CommentCard commentData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerComments;
