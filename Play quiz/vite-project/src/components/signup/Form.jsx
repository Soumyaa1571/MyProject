import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    domain: "",
    role: "",
    dob: "",
  });
  const [rePass, setRePass] = useState("");
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState("");

  const signup = async () => {
    if (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.password !== "" &&
      rePass !== "" &&
      userData.phone !== "" &&
      userData.domain !== "" &&
      userData.role !== "" &&
      userData.dob !== ""
    ) {
      if (userData.password === rePass) {
        if (userData.password.length >= 8) {
          if (
            userData.email.includes("@") &&
            userData.email.includes(".") &&
            userData.email.indexOf("@") &&
            userData.email.lastIndexOf(".") !== userData.email.length - 1
          ) {
            if (userData.phone.length === 10) {
              setError(false);

              const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                  "content-type": "application/json",
                },
              });
              if (res.ok) {
                console.log("Response saved successfully!");
                const obj = await res.json();
                localStorage.setItem("token", obj.token);
                localStorage.setItem("email", obj.email);
                // Navigate to "/" after successful signup
                navigate("/");
              }
            } else {
              setErrorName("Phone no. is not correct");
              setError(true);
            }
          } else {
            setErrorName("Email not correct");
            setError(true);
          }
        } else {
          setErrorName("Password length should be minimum 8");
        }
      } else {
        setErrorName("Both the password don't match");
        setError(true);
      }
    } else {
      setErrorName("Please fill all the fields");
      setError(true);
    }
  };

  return (
    <div className="fullbg">
      <div className="signUpForm">
        <div className="formHeading">
          <div className="formMainHeading">Welcome to KRS</div>
          <div className="formSubHeading">
            Signup with us to test and enhance your skills.
          </div>
        </div>
        <div className="form">
          <div className="inputSignUp">
            <label htmlFor="formName">Name</label>
            <input
              type="email"
              id="formName"
              value={userData.name}
              placeholder="Full Name"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formEmail">Email</label>
            <input
              type="email"
              id="formEmail"
              value={userData.email}
              placeholder="Eg: example@gmail.com"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formPass">Enter Password</label>
            <input
              type="password"
              id="formPass"
              value={userData.password}
              placeholder="At least 8 characters"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formRePass">Re-enter Password</label>
            <input
              type="password"
              id="formRePass"
              value={rePass}
              placeholder="At least 8 characters"
              onChange={(e) => {
                setRePass(e.target.value);
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formDomain">Your Domain</label>
            <input
              type="text"
              id="formDomain"
              value={userData.domain}
              placeholder="Web Development/Machine learning/Embeded System"
              onChange={(e) => {
                setUserData({ ...userData, domain: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formRole">Role</label>
            <input
              type="text"
              id="formRole"
              value={userData.role}
              placeholder="KRS Members/Students"
              onChange={(e) => {
                setUserData({ ...userData, role: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp">
            <label htmlFor="formPhone">Phone</label>
            <input
              type="number"
              id="formPhone"
              value={userData.phone}
              placeholder="Eg: 1234567890"
              onChange={(e) => {
                setUserData({ ...userData, phone: e.target.value });
              }}
            />
          </div>
          <div className="inputSignUp" id="date">
            <label htmlFor="formDOB">Birth Date</label>
            <input
              type="date"
              id="formDOB"
              value={userData.dob}
              onChange={(e) => {
                setUserData({ ...userData, dob: e.target.value });
              }}
            />
          </div>
          {error && <div className="error">{errorName}</div>}
          <button className="signUp" onClick={signup}>
            Sign up
          </button>
        </div>
        <div className="existing">
          Already have an account?
          <Link to="/login">
            <span className="highlighted"> Sign in</span>
          </Link>
        </div>
        <div className="copyright">© 2023 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
