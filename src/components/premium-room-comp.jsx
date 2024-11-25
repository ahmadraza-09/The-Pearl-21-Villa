import React from "react";
import "../css/why-choose.css";
import "../css/premium-room-comp.css";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../assets/rooms/1.jpg";
import image2 from "../assets/rooms/2.jpg";
import image3 from "../assets/rooms/3.jpg";
import image4 from "../assets/rooms/4.jpg";

import icon1 from "../assets/icons/double-bed.png";
import icon2 from "../assets/icons/wi-fi.png";
import icon3 from "../assets/icons/laundry-machine.png";
import icon4 from "../assets/icons/tv-monitor.png";
import icon5 from "../assets/icons/parked-car.png";

const PremiumRoomComp = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-section">
      <h1 className="swipe">Premium Room</h1>
      <div className="why-choose-slider">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          spaceBetween={30}
          slidesPerView={1}
          style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
          pagination={{ clickable: true }}
          navigation={true}
          // breakpoints={{
          //   320: {
          //     navigation: false,
          //   },
          //   480: {
          //     navigation: false,
          //   },
          //   628: {
          //     navigation: false,
          //   },
          // }}
          className="swipe"
        >
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card-testimonial testimonial-content why-choose-slider-image">
              <img src={image4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="why-choose-contents room-services">
        <h2>Room Services</h2>
        <div className="flex">
          <div className="why-choose-contents-box">
            <img src={icon1} alt="" />
            <h2>Double Bed</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon2} alt="" />
            <h2>Free Wifi</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon3} alt="" />
            <h2>Laundry Service</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon4} alt="" />
            <h2>LCD TV</h2>
          </div>
          <div className="why-choose-contents-box">
            <img src={icon5} alt="" />
            <h2>Parking</h2>
          </div>
        </div>
      </div>
      <div className="premium-room-comp-content room-card-price-left ">
        <h2>Premium Room</h2>
        <br />
        <h2>
          Rs. 6000 <span>/ Night</span> <span>Season Only</span>
        </h2>
        <h2>
          Rs. 4000 <span>/ Night</span> <span>Off Season Only</span>
        </h2>
        <p>
          Designed specially to pamper its guests, the premium rooms showcase a
          perfect blend of luxury in its accommodation with utmost security. The
          rooms bestow an elegant design combined with refined elegance and
          luxuriously appointed sleek accommodation. Tailor-made to meet the
          specific needs of the guests, the Deluxe Rooms offer accommodation
          that is more than just comfortable. From glorious touches in the room,
          with state- of -the art amenities and services to enhanced top-notch
          privacy – suite rooms ensure that the travelers feel pampered and
          secure.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default PremiumRoomComp;
