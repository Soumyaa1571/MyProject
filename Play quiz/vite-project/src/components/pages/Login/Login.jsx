import React from "react";
// import Form from "../../components/login/Form";

import Form from "../../login/Form.jsx";

import "./Login.css";
export default function Login({ setTokenState }) {
  return (
    <div className="loginPage">
      <div className="loginDivs">
        <Form setTokenState={setTokenState} />
      </div>
      <div className="loginDivs">
        <img
          src="https://websitedepot.com/wp-content/uploads/2017/04/Reasons-to-Invest-in-Professional-Website-Development.jpg"
          alt="space-img"
        />
      </div>
    </div>
  );
}
