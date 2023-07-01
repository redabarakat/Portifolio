import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

import member1 from "../../assests/member-1.png";
import member2 from "../../assests/member-2.png";
import member3 from "../../assests/member-3.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2 className="animation-title ">Testimonials</h2>

      <Swiper
        className="container testimonial-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client-image">
            <img src={member1} alt="client" />
          </div>
          <h5 className="client-name">Ahemed Hedia</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            officiis illo voluptates reiciendis, nam praesentium minus dolore
            modi perferendis dolor eveniet veritatis eum, iusto accusantium
            vitae hic, quis ad cumque!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-image">
            <img src={member2} alt="client" />
          </div>
          <h5 className="client-name">Ahemed Hedia</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            officiis illo voluptates reiciendis, nam praesentium minus dolore
            modi perferendis dolor eveniet veritatis eum, iusto accusantium
            vitae hic, quis ad cumque!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-image">
            <img src={member3} alt="client" />
          </div>
          <h5 className="client-name">Ahemed Hedia</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            officiis illo voluptates reiciendis, nam praesentium minus dolore
            modi perferendis dolor eveniet veritatis eum, iusto accusantium
            vitae hic, quis ad cumque!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
