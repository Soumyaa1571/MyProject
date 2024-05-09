import React, { useState } from "react";
import "./Sheet.css";

export default function Sheet() {
  const [announcementData, setAnnouncementData] = useState({
    heading: "",
  });

  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState("");

  const announcements = async () => {
    if (announcementData.heading !== "") {
      console.table(announcementData);

      // Save the response to the server or state as needed
      const res = await fetch("http://localhost:5000/api/Sheet", {
        method: "POST",
        body: JSON.stringify(announcementData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        console.log("Response saved successfully!");
      } else {
        setErrorName("Failed to save the response. Please try again.");
        setError(true);
      }
    } else {
      setErrorName("Please make the Announcement");
      setError(true);
    }
  };

  return (
    <div className="forms">
      <h3>Make an Announcement</h3>

      <div className="inputSignUp">
        <input
          type="text"
          id="formques"
          value={announcementData.heading}
          placeholder="Share it with people"
          onChange={(e) =>
            setAnnouncementData({
              ...announcementData,
              heading: e.target.value,
            })
          }
        />
      </div>
      {/* Corrected the function name here */}
      <button className="submit" onClick={announcements}>
        Submit
      </button>
    </div>
  );
}
