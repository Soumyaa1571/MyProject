// import React from "react";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Question form.css";

// export default function Question() {
//   const [testData, settestData] = useState({
//     ques: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: "",
//     correctans: "",
//   });

//   const [error, setError] = useState(false);
//   const [errorName, setErrorName] = useState("");

//   const questions = async () => {
//     if (
//       testData.ques !== "" &&
//       testData.option1 !== "" &&
//       testData.option2 !== "" &&
//       testData.option3 !== "" &&
//       testData.option4 !== "" &&
//       testData.correctans !== ""
//     ) {
//       // seterror(false);
//       // console.table(testData);
//       console.table(testData);
//       // mongodb connection
//       const res = await fetch("http://localhost:5000/questions", {
//         method: "POST",
//         body: JSON.stringify(testData),
//         headers: {
//           // Accept: "application/json",
//           "content-type": "application/json",
//         },
//       });
//     } else {
//       setErrorName("Please fill all the fields");
//       setError(true);
//     }
//   };

//   return (
//     <div className="forms">
//       <h1>CREATE YOUR QUIZ</h1>

//       <div className="inputSignUp">
//         {/* <label htmlFor="formques">Enter Your question</label> */}
//         {/* <input type="text" id="formques" placeholder="Your question" /> */}
//         <input
//           type="text"
//           id="formques"
//           value={testData.ques}
//           placeholder="Enter Your Question"
//           onChange={(e) => {
//             settestData({ ...testData, ques: e.target.value });
//           }}
//         />
//       </div>
//       <div className="inputSignUp">
//         {/* <label htmlFor="formans">Enter your options</label> */}
//         {/* <input type="text" id="formans" placeholder="Option 1" /> */}
//         <input
//           type="text"
//           id="formans"
//           value={testData.option1}
//           placeholder="Option 1"
//           onChange={(e) => {
//             settestData({ ...testData, option1: e.target.value });
//           }}
//         />

//         {/* <input type="text" id="formans" placeholder="Option 2" /> */}
//         <input
//           type="text"
//           id="formans"
//           value={testData.option2}
//           placeholder="Option 2"
//           onChange={(e) => {
//             settestData({ ...testData, option2: e.target.value });
//           }}
//         />

//         {/* <input type="text" id="formans" placeholder="Option 3" /> */}
//         <input
//           type="text"
//           id="formans"
//           value={testData.option3}
//           placeholder="Option 3"
//           onChange={(e) => {
//             settestData({ ...testData, option3: e.target.value });
//           }}
//         />

//         {/* <input type="text" id="formans" placeholder="Option 4" /> */}
//         <input
//           type="text"
//           id="formans"
//           value={testData.option4}
//           placeholder="Option 4"
//           onChange={(e) => {
//             settestData({ ...testData, option4: e.target.value });
//           }}
//         />

//         {/* <input type="text" id="formans" placeholder="Correct Answer" /> */}
//         <input
//           type="text"
//           id="formans"
//           value={testData.correctans}
//           placeholder="Correct Answer"
//           onChange={(e) => {
//             settestData({ ...testData, correctans: e.target.value });
//           }}
//         />
//       </div>

//       {/* <button className="previous">Previous</button>
//       <Link to={"/Questions"}>
//         <button className="next">Next</button>
//       </Link> */}
//       <button className="submit" onClick={questions}>
//         Submit{" "}
//       </button>
//       {/* <button className="submit">Submit</button> */}
//     </div>
//   );
// }

// BELOW CODE IS AFTER ADDING NEXT BUTTON FUNCTIONALITY

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question form.css";

export default function Question() {
  const [testData, settestData] = useState({
    ques: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctans: "",
  });

  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState("");
  const navigate = useNavigate();

  const handleNextClick = () => {
    saveResponse();
    // Clear the form for the next question
    settestData({
      ques: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctans: "",
    });
  };

  const saveResponse = async () => {
    if (
      testData.ques !== "" &&
      testData.option1 !== "" &&
      testData.option2 !== "" &&
      testData.option3 !== "" &&
      testData.option4 !== "" &&
      testData.correctans !== ""
    ) {
      console.table(testData);

      // Save the response to the server or state as needed
      const res = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        body: JSON.stringify(testData),
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
      setErrorName("Please fill all the fields");
      setError(true);
    }
  };

  return (
    <div className="forms">
      <h1>CREATE YOUR QUIZ</h1>

      <div className="inputSignUp">
        <input
          type="text"
          id="formques"
          value={testData.ques}
          placeholder="Enter Your Question"
          onChange={(e) => settestData({ ...testData, ques: e.target.value })}
        />
      </div>
      <div className="inputSignUp">
        <input
          type="text"
          id="formans"
          value={testData.option1}
          placeholder="Option 1"
          onChange={(e) =>
            settestData({ ...testData, option1: e.target.value })
          }
        />
        <input
          type="text"
          id="formans"
          value={testData.option2}
          placeholder="Option 2"
          onChange={(e) =>
            settestData({ ...testData, option2: e.target.value })
          }
        />
        <input
          type="text"
          id="formans"
          value={testData.option3}
          placeholder="Option 3"
          onChange={(e) =>
            settestData({ ...testData, option3: e.target.value })
          }
        />
        <input
          type="text"
          id="formans"
          value={testData.option4}
          placeholder="Option 4"
          onChange={(e) =>
            settestData({ ...testData, option4: e.target.value })
          }
        />
        <input
          type="text"
          id="formans"
          value={testData.correctans}
          placeholder="Correct Answer"
          onChange={(e) =>
            settestData({ ...testData, correctans: e.target.value })
          }
        />
      </div>

      <div className="button-container">
        {/* <button className="previous">Previous</button> */}
        <button className="next" onClick={handleNextClick}>
          Next
        </button>
        {/* You can add a link to navigate to the next question page */}
        {/* <Link to={"/Questions"}>
          <button className="next">Next</button>
        </Link> */}
        <button className="submit" onClick={saveResponse}>
          Submit
        </button>
      </div>
    </div>
  );
}
