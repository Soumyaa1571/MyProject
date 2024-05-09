import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import "./Aform.css";

function Fform() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getfeedback"
        );
        setFeedback(response.data.feedback);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Bformcontainer">
      <div className="anc">Feedbacks</div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : feedback.length > 0 ? (
          <>
            {feedback.map((feedback, i) => {
              return (
                <div
                  className="col-md-9 mt-2"
                  key={i}
                  style={{
                    marginBottom: "40px",
                  }}
                >
                  <div className="col-md-7">
                    {/* <h1>Announcement</h1> */}
                    <p>Name:{feedback.name}</p>
                    <p>Email id:{feedback.email}</p>
                    <p>Message:{feedback.message}</p>

                    <div style={{ float: "right" }}></div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1>No Feedback available</h1>
        )}
      </div>
    </div>
  );
}

export default Fform;
