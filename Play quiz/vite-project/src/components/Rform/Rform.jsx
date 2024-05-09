import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Rform.css";

function Rform() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getresult");
        setResult(response.data.result);
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
    <div className="Rformcontainer">
      <div className="res">Result</div>
      <div className="abc">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : result.length > 0 ? (
          <table className="tables">
            <thead>
              <tr>
                <th>Email</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {result.map((result, i) => (
                <tr key={i}>
                  <td>{result.email}</td>
                  <td>{result.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>No Result available</h1>
        )}
      </div>
    </div>
  );
}

export default Rform;
