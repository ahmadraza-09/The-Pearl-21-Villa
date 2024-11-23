import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/payment.css";
// import UPI from "../assets/royal-collection-hotels-scanner.jpg";
import UnderConstruction from "../assets/under-construction.jpg";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="payment-section">
      {/* <div className="payment-section-right swipe">
        <h2>Bank Account Deatils</h2>

        <div className="bank-details">
          <p className="payment-note">
            <span>IMPORTANT NOTICE:</span> Payments should only be made using
            the official account number and scanner provided above. We do not
            accept cash deposits or physical payments in any form. The company
            is not responsible for any payments made to other accounts, other
            scanners, or any cash given to individuals. Please ensure all
            payments are directed through the official account and scanner only.
          </p>
          <div className="bank-details-left">
            <h3>HDFC Bank Account Details</h3>

            <ul>
              <li>
                <span>Account Holder Name:</span>
                Royal Collection Hotels & Resorts Pvt. Ltd.
              </li>
              <li>
                <span>Bank Details:</span>
                HDFC ( Dwarka Sec-5 New Delhi )
              </li>
              <li>
                <span>Account No. :</span>
                02498140000032
              </li>
              <li>
                <span>RTGS Code:</span>
                HDFC0000249
              </li>
              <li>
                <span>Branch Code:</span>
                0249
              </li>
              <li></li>
            </ul>
          </div>
          <div className="bank-details-right">
            <h3>ICICI Bank Account Details</h3>
            <ul>
              <li>
                <span>Account Holder Name:</span>
                Royal Collection Hotels & Resorts Pvt. Ltd.
              </li>
              <li>
                <span>Bank Details:</span>
                ICICI (Dwarka Chowk), Plot No – 5A-6A, Jai Bharat Enclave, New
                Delhi
              </li>
              <li>
                <span>Account No. :</span>
                235505000018
              </li>
              <li>
                <span>RTGS Code:</span>
                ICIC0002355
              </li>
              <li>
                <span>Branch Code:</span>
                2355
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="payment-section-left swipe-left">
        <img src={UPI} alt="" />
      </div> */}
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
          Payment Page Under Construction
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
    </div>
  );
};

export default Payment;
