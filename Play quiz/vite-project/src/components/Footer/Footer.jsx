import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h1>KIIT ROBOTICS SOCIETY</h1>
          {/* <p>
            Thee more that you read,the more things you will know.The more that
            you learn,the more places you'll go.
          </p> */}
        </div>
        <div className="col">
          <h3>Location</h3>
          <p>KRS ROOM</p>
          <p>Campus-12,KIIT University</p>
          <p>Patia,Bhubaneshwar</p>
          <p class="email-id">KIIT ROBOTICS SOCIETY</p>

          <h4>
            <i class="fa-solid fa-envelope"></i> krs.kiit.ac.in{" "}
          </h4>
        </div>
        <div className="col">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/announcements">Announcements</a>
            </li>
            <li>
              <a href="/quizes">Quizes</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>FEEDBACK</h3>
          <form>
            <input type="text" placeholder="Your opinion our priority"></input>
            <button type="submit" class="button">
              Submit
            </button>
          </form>
          <div className="social-icons">
            {/* <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i> */}
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      {/* <hr>
        <p class="copyright">Easy Tutorial @ - All Rights Reserved</p>
      </hr> */}
    </footer>
  );
};

export default Footer;
