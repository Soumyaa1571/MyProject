import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quizes.css";

const Quizes = ({ tokenState }) => {
  console.log(tokenState);
  return (
    // <div>
    //   <h1>Create new quiz</h1>
    //   <div className="card">
    //     <h2>Start</h2>
    //     <div className="btn">Delete</div>
    //   </div>
    // // </div>
    // <div className="box">QUIZES</div>

    <div className="main">
      {tokenState?.role == "Member" ? (
        <div className="card">
          <h2>Create a quiz</h2>
          <div className="actions">
            <Link to={"/Questions"}>
              <button className="btn">Lets Proceed</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* <div className="card">
        <h2>Attempt Quiz now</h2>
        <div className="actions">
          <Link to={"/Test"}>
            <button className="btn">Start</button>
          </Link>
        </div>
      </div> */}
      <div className="card">
        <h2>Start now</h2>
        <div className="actions">
          <Link to={"/exam"}>
            <button className="btn">click</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quizes;
