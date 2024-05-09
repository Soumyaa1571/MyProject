import React from "react";
// import Form from "../../components/signup/Form";
import "./SignUp.css";



import Form from "../../signup/Form.jsx";


export default function SignUp() {
  return (
    <div className="signUpPage">
      {/* <div className="signUpDivs"> */}
      {/* <img src={image} alt="space-img" /> */}
      {/* </div> */}
      <div className="signUpDivs">
        <Form />
      </div>
    </div>
  );
}
