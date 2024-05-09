import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./Bform.css";

function Bform({ tokenState }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [totalMarks, setTotalMarks] = useState(0);
  const [isAttempted, setIsAttempted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [quizFinished, setQuizFinished] = useState(false); // New state to track if quiz is finished

  const handleOptionClick = (questionId, selectedOption) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: selectedOption });
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const getAttempt = async () => {
    if (!tokenState) return false;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/isAttempted",
        {
          email: tokenState.email,
        }
      );
      return response.data.isAttempted;
    } catch (error) {
      console.error("Error checking attempt:", error);
      return false;
    }
  };

  const handleFinishClick = async () => {
    // Calculate the result based on user responses
    const userResult = calculateResult();
    setResult(userResult);
    if (tokenState) {
      const response = await axios.post("http://localhost:5000/api/result", {
        email: tokenState.email,
        marks: userResult,
      });
    }
    setQuizFinished(true); // Set quizFinished to true
  };

  const calculateResult = () => {
    const correctAnswers = questions.map((question) => question.correctans);
    let score = 0;

    for (const [questionId, selectedOption] of Object.entries(
      selectedOptions
    )) {
      const question = questions.find((q) => q._id === questionId);
      if (question && selectedOption === question.correctans) {
        score++;
      }
    }

    return score;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gettest");
        console.log("Response:", response.data);
        setQuestions(response.data.test);
        setTotalMarks(response.data.test.length);
        setLoading(false);

        const attempted = await getAttempt();
        setIsAttempted(attempted);

        if (!attempted) {
          startTimer();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !quizFinished) {
      handleFinishClick(); // Automatically finish the quiz when time is over
    }
  }, [timeLeft, quizFinished]);

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  };

  return (
    <Fragment>
      {isAttempted ? (
        <div className="attempted">The test has been already attempted</div>
      ) : (
        <div className="questions">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h3>Error</h3>
          ) : questions.length > 0 ? (
            <>
              <h3>
                {questions[currentQuestionIndex].Ques ||
                  questions[currentQuestionIndex].ques}
              </h3>
              <div className="options-container">
                <p
                  className={`option ${
                    selectedOptions[questions[currentQuestionIndex]._id] ===
                    questions[currentQuestionIndex].option1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestionIndex]._id,
                      questions[currentQuestionIndex].option1
                    )
                  }
                >
                  {questions[currentQuestionIndex].option1}
                </p>
                <p
                  className={`option ${
                    selectedOptions[questions[currentQuestionIndex]._id] ===
                    questions[currentQuestionIndex].option2
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestionIndex]._id,
                      questions[currentQuestionIndex].option2
                    )
                  }
                >
                  {questions[currentQuestionIndex].option2}
                </p>
                <p
                  className={`option ${
                    selectedOptions[questions[currentQuestionIndex]._id] ===
                    questions[currentQuestionIndex].option3
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestionIndex]._id,
                      questions[currentQuestionIndex].option3
                    )
                  }
                >
                  {questions[currentQuestionIndex].option3}
                </p>
                <p
                  className={`option ${
                    selectedOptions[questions[currentQuestionIndex]._id] ===
                    questions[currentQuestionIndex].option4
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestionIndex]._id,
                      questions[currentQuestionIndex].option4
                    )
                  }
                >
                  {questions[currentQuestionIndex].option4}
                </p>
              </div>
              <div className="button-container">
                {currentQuestionIndex > 0 && (
                  <button
                    className="button-container"
                    onClick={handlePreviousClick}
                  >
                    Previous
                  </button>
                )}
                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    className="button-container"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="button-container"
                    onClick={handleFinishClick}
                  >
                    Finish
                  </button>
                )}
              </div>
              {result !== null && (
                <div className="result">
                  Your Result: {result}
                  <br />
                  Total Marks: {totalMarks}
                </div>
              )}
            </>
          ) : (
            <h1>No questions available</h1>
          )}
        </div>
      )}
      <div className="timer">Time Left: {timeLeft} seconds</div>
    </Fragment>
  );
}

export default Bform;

// import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
// import "./Bform.css";

// function Bform() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [result, setResult] = useState(null);
//   const [totalMarks, setTotalMarks] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60); // Initial time set to 60 seconds

//   const handleOptionClick = (questionId, selectedOption) => {
//     setSelectedOptions({ ...selectedOptions, [questionId]: selectedOption });
//   };

//   const handleNextClick = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePreviousClick = () => {
//     setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const handleFinishClick = () => {
//     // Calculate the result based on user responses
//     const userResult = calculateResult();
//     setResult(userResult);
//   };

//   const calculateResult = () => {
//     const correctAnswers = questions.map((question) => question.correctans);
//     let score = 0;

//     for (const [questionId, selectedOption] of Object.entries(
//       selectedOptions
//     )) {
//       const question = questions.find((q) => q._id === questionId);
//       if (question && selectedOption === question.correctans) {
//         score++;
//       }
//     }

//     return score;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/gettest");
//         console.log("Response:", response.data);
//         setQuestions(response.data.test);
//         setTotalMarks(response.data.test.length); // Set total marks
//         setLoading(false);
//         startTimer(); // Start the timer after questions are fetched and displayed
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const startTimer = () => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTimeLeft) => {
//         if (prevTimeLeft === 0) {
//           clearInterval(timer);
//           handleFinishClick(); // Finish the quiz when time is over
//           return 0;
//         }
//         return prevTimeLeft - 1;
//       });
//     }, 1000);

//     // Clear the timer when the component unmounts or when quiz is finished
//     return () => clearInterval(timer);
//   };

//   return (
//     <Fragment>
//       <div className="questions">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : error ? (
//           <h3>Error</h3>
//         ) : questions.length > 0 ? (
//           <>
//             <h3>
//               {questions[currentQuestionIndex].Ques ||
//                 questions[currentQuestionIndex].ques}
//             </h3>
//             <div className="options-container">
//               <p
//                 className={`option ${
//                   selectedOptions[questions[currentQuestionIndex]._id] ===
//                   questions[currentQuestionIndex].option1
//                     ? "selected"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionClick(
//                     questions[currentQuestionIndex]._id,
//                     questions[currentQuestionIndex].option1
//                   )
//                 }
//               >
//                 {questions[currentQuestionIndex].option1}
//               </p>
//               <p
//                 className={`option ${
//                   selectedOptions[questions[currentQuestionIndex]._id] ===
//                   questions[currentQuestionIndex].option2
//                     ? "selected"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionClick(
//                     questions[currentQuestionIndex]._id,
//                     questions[currentQuestionIndex].option2
//                   )
//                 }
//               >
//                 {questions[currentQuestionIndex].option2}
//               </p>
//               <p
//                 className={`option ${
//                   selectedOptions[questions[currentQuestionIndex]._id] ===
//                   questions[currentQuestionIndex].option3
//                     ? "selected"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionClick(
//                     questions[currentQuestionIndex]._id,
//                     questions[currentQuestionIndex].option3
//                   )
//                 }
//               >
//                 {questions[currentQuestionIndex].option3}
//               </p>
//               <p
//                 className={`option ${
//                   selectedOptions[questions[currentQuestionIndex]._id] ===
//                   questions[currentQuestionIndex].option4
//                     ? "selected"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionClick(
//                     questions[currentQuestionIndex]._id,
//                     questions[currentQuestionIndex].option4
//                   )
//                 }
//               >
//                 {questions[currentQuestionIndex].option4}
//               </p>
//             </div>
//             <div className="button-container">
//               {currentQuestionIndex > 0 && (
//                 <button
//                   className="button-container"
//                   onClick={handlePreviousClick}
//                 >
//                   Previous
//                 </button>
//               )}
//               {currentQuestionIndex < questions.length - 1 ? (
//                 <button className="button-container" onClick={handleNextClick}>
//                   Next
//                 </button>
//               ) : (
//                 <button
//                   className="button-container"
//                   onClick={handleFinishClick}
//                 >
//                   Finish
//                 </button>
//               )}
//             </div>
//             {result !== null && (
//               <div className="result">
//                 Your Result: {result}
//                 <br />
//                 Total Marks: {totalMarks}
//               </div>
//             )}
//           </>
//         ) : (
//           <h1>No questions available</h1>
//         )}
//       </div>
//       <div className="timer">Time Left: {timeLeft} seconds</div>
//     </Fragment>
//   );
// }

// export default Bform;
