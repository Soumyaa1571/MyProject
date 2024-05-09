import React, { Fragment } from "react";
import "./Test2.css";

import { Link } from "react-router-dom";


export default function Test() {
  return (
    <Fragment>
     
      <div className="questions">{/* <h1>All The Best</h1> */}</div>
      <h3>What is your name?</h3>
      <div className="options-container">
        <p className="option">Shreya</p>
        <p className="option">Khushi</p>
      </div>
      <div className="options-container">
        <p className="option">Shivam</p>
        <p className="option">Srishti</p>
      </div>
      <div className="button-container">
        <Link to={"/test"}>
          <button>Previous</button>
        </Link>
        <Link to={"/test3"}>
          <button>Next</button>
        </Link>
        <Link to={"/Finish"}>
          <button>Quit</button>
        </Link>
      </div>
    </Fragment>
  );
}
