import React, { useState, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function FetchData ()  {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/gettest');
          setQuestions(response.data.questions);
          setLoading(false);
  
        }
        catch (error) {
          console.error("Error fetching data:",error);
          setError(true);
          setLoading(false);
        }

      };
      fetchData();
    }, []);
  

  return (
    // <div>FetchData</div>
    <div className="Form">
      <div className="row justify-content-center mt-5">
        

      </div>
    </div>
  )
}

export default FetchData




// const [questions,setQuestions] =useState([])
// useEffect(()=> {
// axios.get('')
// .then(response => {setQuestions(response.data)})
// .catch(error => console.lo)
// }, [])
