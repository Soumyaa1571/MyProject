import React, { Fragment } from "react";
import "./Test.css";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <Fragment>
      <div className="questions">{/* <h1>All The Best</h1> */}</div>
      <h3>What is CSS?</h3>
      <div className="options-container">
        <p className="option">Cascading Style Sheets</p>
        <p className="option">Coloured Special Sheets</p>
      </div>
      <div className="options-container">
        <p className="option">Colour and Style Sheets</p>
        <p className="option">None of the Above</p>
      </div>
      <div className="button-container">
        <button>Previous</button>
        <Link to={"/test2"}>
          <button>Next</button>
        </Link>
        <Link to={"/Finish"}>
          <button>Quit</button>
        </Link>
      </div>
    </Fragment>
  );
}
