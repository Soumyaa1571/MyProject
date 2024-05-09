import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem("userData");
    setIsLoggedIn(!!userData);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Remove userData from localStorage
    localStorage.removeItem("userData");
    // Update the isLoggedIn state to false
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <Link to="/" className="title">
        KRS Quizzes
      </Link>
      <div className="menu">
        {/* <span></span>
        <span></span>
        <span> </span> */}
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Announcements">Announcements</NavLink>
        </li>
        <li>
          <NavLink to="/quizes">Quizzes</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        {/* Conditionally render login/logout button based on isLoggedIn state */}
        {!isLoggedIn ? (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
    // <div className="quizbg"></div>
  );
};
