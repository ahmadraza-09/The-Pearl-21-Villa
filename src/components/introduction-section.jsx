import React from "react";
import "../css/introduction-section.css";
import IntroductionImg from "../assets/introduction.avif";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-section-right swipe">
        <h1 className="after">
          Welcome To <br />
          <h1>The Pearl 21 Villa</h1>
        </h1>
        <p>
        The Pearl 21 Villa is Nestled in the heart of Udaipur, the city of lakes, The Pearl 21 Villa offers a perfect blend of luxury, comfort, and scenic beauty. Designed to provide an unforgettable experience, our villa is a sanctuary of peace and elegance, ideal for family vacations, romantic getaways, and special celebrations.

At The Pearl 21 Villa, every corner reflects sophistication and warmth, ensuring our guests feel right at home while enjoying the charm of Udaipur. With spacious rooms, modern amenities, and personalized services, we are committed to making your stay truly memorable.

Whether you're soaking in the breathtaking views of the Aravalli hills, enjoying a relaxing swim, or exploring the rich heritage of Udaipur, The Pearl 21 Villa is your perfect retreat.

Experience unparalleled hospitality and create timeless memories at The Pearl 21 Villa – your home away from home in the City of Lakes.
        </p>
      </div>
      <div className="introduction-section-left swipe">
        <img
          src={IntroductionImg}
          alt="The Pearl 21 Villa Image"
          loading="eager"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
