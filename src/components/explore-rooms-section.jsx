import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import PremiumRoom from "../assets/rooms/1.jpg"; // Add more images if needed
import SuperDeluxeRoom from "../assets/rooms/2.jpg"; // Add more images if needed
import FamilyRoom from "../assets/rooms/6.jpg"; // Add more images if needed

const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: PremiumRoom,
      title: "Premium Room",
      description:
        "Designed specially to pamper its guests, the premium rooms showcase a perfect blend of luxury in its accommodation with utmost security. The rooms bestow an elegant design combined with refined elegance and luxuriously sleek accommodation.",
      price: 4000,
    },
    {
      id: 2,
      image: SuperDeluxeRoom,
      title: "Super Deluxe Room",
      description:
        "A haven of indulgence, the spacious super deluxe rooms is facilitated by a range of state-of-the-art amenities accompanied by warm and efficient services. Wi-Fi enabled with ample broadband and the exclusive perks in the form of flat TVs .",
      price: 5000,
    },
    {
      id: 3,
      image: FamilyRoom,
      title: "Family Room",
      description:
        "A haven of indulgence, the spacious family rooms is facilitated by a range of state-of-the-art amenities accompanied by warm and efficient services. Wi-Fi enabled with ample broadband and the exclusive perks in the form of flat TVs",
      price: 7000,
    },
  ];

  return (
    <section className="explore-rooms-section">
      <div className="explore-rooms-header">
        <div className="explore-rooms-header-left swipe-left">
          <h2>Explore Our Rooms</h2>
          <h4>Choose a room according to your budget</h4>
        </div>
        <div className="explore-rooms-header-right swipe-right">
          <button
            onClick={() => {
              navigate("/rooms");
            }}
          >
            View All Rooms <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="explore-rooms-cards swipe">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreRoomsSection;
