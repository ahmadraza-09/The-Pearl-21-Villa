import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
          <div class="footer-col">
            <div className="footer-col-logo">
              {/* <img src={Logo} alt="" /> */}
              <h2>
              THE PEARL 21 VILLA</h2>
            </div>
            {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-location-dot"></i>
                <p>
                Ambali Vihar Khokhawat, Plot no. 49-50, Tiger Hills, Lai Ka Gudda, Shilpgram, Udaipur, Rajasthan 313001
                </p>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a
                  href="tel:+919971834141"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 9971834141
                </a>
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>
                <a
                  href="mailto:booking@rchronline.com"
                  target="_blank"
                  aria-label="mail us for hotel booking"
                >
                  booking@rchronline.com
                </a>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-regular fa-clock"></i>
                <p>Mon – Sat: 10:00 am – 06:00 pm</p>
              </p>
            </div>
          </div>
          <div class="footer-col">
            <h4>menu</h4>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </span>
            <span
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </span>
            <span
              onClick={() => {
                navigate("/rooms");
              }}
            >
              Rooms
            </span>
            <span
              onClick={() => {
                navigate("/payment");
              }}
            >
              Payment
            </span>

            <span
              onClick={() => {
                navigate("/places-to-visit");
              }}
            >
              Places To Visit
            </span>

            <span
              onClick={() => {
                navigate("/gallery");
              }}
            >
              Gallery
            </span>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <span
              onClick={() => {
                navigate("/faq");
              }}
            >
              FAQ
            </span>
            <span
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </span>
            <span
              onClick={() => {
                navigate("");
              }}
            >
              Privacy Policy
            </span>
            {/* <span
              onClick={() => {
                navigate("/");
              }}
            >
              Payment Options
            </span> */}
            <span
              onClick={() => {
                navigate("");
              }}
            >
              Cancellation & Refund Policy
            </span>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <span>Room Service</span>
            <span>Lunch</span>
            <span>Breakfast</span>
            <span>Dinner</span>
          </div>
          <div class="footer-col">
            <h4>Connect With Us</h4>
            <div class="social-links">
              <a
                href="https://www.instagram.com/royalcollectionhotelsindia/"
                target="_blank"
                aria-label="follow us on instagram"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/RoyalCollectionhotels"
                target="_blank"
                aria-label="follow us on facebook"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/@royalcollectionhotel"
                target="_blank"
                aria-label="follow us on Youtube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            {/* <div className="news-letter">
              <input type="text" placeholder="Enter your E-Mail" />
              <button>Subscribe</button>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright">
          <div className="footer-copyright-left">
            <p>
              Managed by{" "}
              <a href="https://www.royalcollectionhotels.com/" target="_blank">
                Royal Collection Hotels
              </a>
            </p>{" "}
            <img src="" alt="" loading="lazy" />
          </div>

          <div className="footer-copyright-right">
            All Rights Reserved -{" "}
            <a href="https://www.thepearl21villa.com/" target="_blank">
              The Pearl 21 Villa
            </a>{" "}
            © 2024
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
