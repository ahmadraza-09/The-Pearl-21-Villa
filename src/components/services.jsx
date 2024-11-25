import React from "react";
import "../css/services.css";
import SwimmingPool from "../assets/icons/swimming-pool.png";
import SharedKitchen from "../assets/icons/kitchen.png";
import Parking from "../assets/icons/parked-car.png";
import Restaurant from "../assets/icons/restaurant.png";
import Wifi from "../assets/icons/wi-fi-icon.png";
import HouseKeeping from "../assets/icons/vacuum-cleaner.png";
import AirConditioner from "../assets/icons/air-conditioner.png";
import CCTV from "../assets/icons/cctv.png";

const Services = () => {
  return (
    <section className="services-section">
        <h1 className="swipe">OUR SERVICES</h1>
      <div className="services-container">
        <br />
        <div className="services-boxes">
          <div className="service-box swipe">
            <img src={SwimmingPool} alt="" />
            <span>Swimming Pool</span>
          </div>
          <div className="service-box swipe">
            <img src={SharedKitchen} alt="" />
            <span>Shared Kitchen</span>
          </div>
          <div className="service-box swipe">
            <img src={Parking} alt="" />
            <span>Parking Space</span>
          </div>
          <div className="service-box swipe">
            <img src={Restaurant} alt="" />
            <span>Restaurant</span>
          </div>
          <div className="service-box swipe">
            <img src={Wifi} alt="" />
            <span>Free Wifi</span>
          </div>
          <div className="service-box swipe">
            <img src={HouseKeeping} alt="" />
            <span>House Keeping</span>
          </div>
          <div className="service-box swipe">
            <img src={AirConditioner} alt="" />
            <span>Air Conditioner</span>
          </div>
          <div className="service-box swipe">
            <img src={CCTV} alt="" />
            <span>CCTV Security</span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Services;