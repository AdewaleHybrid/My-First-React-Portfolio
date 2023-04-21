import React from "react";
import "./testimonial.css";
import myself from "../../assets/myself.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonialData = [
    {
      avatar: myself,
      name: "Ejimadu Godwin",
      review: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      avatar: myself,
      name: "Ejimadu Godwin",
      review: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      avatar: myself,
      name: "Ejimadu Godwin",
      review: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      avatar: myself,
      name: "Ejimadu Godwin",
      review: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      avatar: myself,
      name: "Ejimadu Godwin",
      review: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Reviews from clients</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimonial__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
