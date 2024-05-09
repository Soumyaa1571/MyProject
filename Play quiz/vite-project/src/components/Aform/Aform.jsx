import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Aform.css";

function Aform() {
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getSheet");
        setAnnouncement(response.data.announcement);
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
      <div className="anc">Announcements</div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : announcement.length > 0 ? (
          <>
            {announcement.map((announcement, i) => {
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
                    <p>{announcement.heading}</p>

                    <div style={{ float: "right" }}></div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1>No Announcement available</h1>
        )}
      </div>
    </div>
  );
}

export default Aform;
