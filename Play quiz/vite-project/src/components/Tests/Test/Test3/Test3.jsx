import React, { Fragment } from "react";
import "./Test3.css";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <Fragment>
      <div className="questions">{/* <h1>All The Best</h1> */}</div>
      <h3>What is the full form of HTML?</h3>
      <div className="options-container">
        <p className="option">Hypertext mixup language</p>
        <p className="option">Hypertest markup language</p>
      </div>
      <div className="options-container">
        <p className="option">Hyper mix language</p>
        <p className="option">Hypertext markup language</p>
      </div>
      <div className="button-container">
        <Link to={"/test2"}>
          <button>Previous</button>
        </Link>
        {/* <button>Previous</button> */}

        <button>Next</button>

        <Link to={"/Finish"}>
          <button>Quit</button>
        </Link>
      </div>
    </Fragment>
  );
}
