import React from "react";
import "./Announcements.css";
import { Link } from "react-router-dom";

const Announcements = ({ tokenState }) => {
  console.log(tokenState);
  return (
    <div className="main">
      {tokenState?.role == "Member" ? (
        <div className="card">
          <h4>Make an Announcement</h4>
          <div className="actions">
            <Link to={"/Sheet"}>
              <button className="btn">Lets Proceed</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="card">
        <h4>View the Announcements</h4>
        <div className="actions">
          <Link to={"/getSheet"}>
            <button className="btn">Click here!</button>
          </Link>
        </div>
      </div>
      {tokenState?.role == "Member" ? (
        <div className="card">
          <h4>View Feedbacks</h4>
          <div className="actions">
            <Link to={"/getfeedback"}>
              <button className="btn">Click</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      {tokenState?.role == "Member" ? (
        <div className="card">
          <h4>View Result</h4>
          <div className="actions">
            <Link to={"/getresult"}>
              <button className="btn">Click</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Announcements;
