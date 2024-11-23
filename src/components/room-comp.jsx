import React from 'react'
import { useNavigate } from "react-router-dom";
import UnderConstruction from "../assets/under-construction.jpg";

const RoomComp = () => {
    const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "fit-content",
          textAlign: "center",
          backgroundColor: "#fff",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          padding: "10px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#8C071B" }}>
          Room Page Under Construction
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            marginBottom: "20px",
          }}
        >
          We’re working hard to bring you a fantastic experience! This page is
          currently under construction. Please check back soon for updates.
        </p>
        <img
          src={UnderConstruction}
          alt="Under Construction"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#8C071B",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#fff",
              backgroundColor: "#8C071B",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default RoomComp
