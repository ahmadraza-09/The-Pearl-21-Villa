import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import SuperDeluxeRoomWithBalcony from "../assets/rooms/1.jpg"; // Add more images if needed
import SuperDeluxeRoomWithPrivatePool from "../assets/rooms/2.jpg"; // Add more images if needed
import SuperDeluxeRoomWithJaccuziTub from "../assets/rooms/6.jpg"; // Add more images if needed

const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: SuperDeluxeRoomWithBalcony,
      title: "SUPER DELUXE ROOM WITH BALCONY",
      description:
        "The Super Deluxe Room with Balcony offers a perfect blend of luxury and comfort. With elegant interiors, sleek furnishings, and a private balcony, it provides a serene and sophisticated space to relax. Designed for ultimate comfort and security, this room ensures a memorable stay.",
      price: 3958,
    },
    {
      id: 2,
      image: SuperDeluxeRoomWithPrivatePool,
      title: "SUPER DELUXE WITH PRIVATE POOL",
      description:
        "The Super Deluxe Room with Private Pool offers a luxurious stay with elegant interiors and a private pool for ultimate relaxation. Designed for comfort and exclusivity, it provides a serene and opulent experience. Perfect for guests seeking privacy and indulgence.",
      price: 4225,
    },
    {
      id: 3,
      image: SuperDeluxeRoomWithJaccuziTub,
      title: "SUPER DELUXE ROOM WITH JACCUZI TUB",
      description:
        "The Super Deluxe Room with Jacuzzi Tub offers a luxurious and relaxing experience with elegant interiors and a private Jacuzzi tub. Designed for ultimate comfort, it combines modern amenities with a touch of opulence. Perfect for guests seeking relaxation and indulgence in a serene setting.",
      price: 4670,
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
