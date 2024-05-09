// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <h3>Contact Us</h3>
//     </div>
//   );
// };

// export default Contact;
// import React, { useState } from "react";
// import "./ContactUs.css";

// export default function ContactUs() {
//   const [contactData, setcontactData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [error, setError] = useState(false);
//   const [errorName, setErrorName] = useState("");

//   const handleNextClick = () => {
//     saveResponse();
//     setcontactData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };
//   const saveResponse = async () => {
//     if (
//       contactData.name !== "" &&
//       contactData.email !== "" &&
//       contactData.message !== ""
//     ) {
//       console.table(contactData);
//       // Save the response to the server or state as needed
//       const res = await fetch("http://localhost:5000/api/feedback", {
//         method: "POST",
//         body: JSON.stringify(contactData),
//         headers: {
//           "content-type": "application/json",
//         },
//       });

//       if (res.ok) {
//         console.log("Response saved successfully!");
//       } else {
//         setErrorName("Failed to save the response. Please try again.");
//         setError(true);
//       }
//     } else {
//       setErrorName("Please fill all the fields");
//       setError(true);
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       <h1>Contact Us</h1>
//       <p>Have any query or feedback? We'd love to hear from you!</p>
//       <form className="contact-form">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={contactData.name}
//           onChange={(e) =>
//             setcontactData({ ...contactData, name: e.target.value })
//           }
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={contactData.email}
//           onChange={(e) =>
//             setcontactData({ ...contactData, email: e.target.value })
//           }
//         />

//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={contactData.message}
//           onChange={(e) =>
//             setcontactData({ ...contactData, message: e.target.value })
//           }
//         ></textarea>

//         <button type="submit" onClick={handleNextClick}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const saveResponse = async () => {
    if (
      contactData.name.trim() !== "" &&
      contactData.email.trim() !== "" &&
      contactData.message.trim() !== ""
    ) {
      console.table(contactData);
      // Save the response to the server or state as needed
      try {
        const res = await fetch("http://localhost:5000/api/feedback", {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "content-type": "application/json",
          },
        });

        if (res.ok) {
          console.log("Response saved successfully!");
          setSuccessMessage("Feedback submitted successfully!");
          setError(false);
        } else {
          throw new Error("Failed to save the response. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error.message);
        setErrorName(error.message);
        setError(true);
      }
    } else {
      setErrorName("Please fill all the fields");
      setError(true);
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Have any query or feedback? We'd love to hear from you!</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactData.name}
          onChange={(e) =>
            setContactData({ ...contactData, name: e.target.value })
          }
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={contactData.message}
          onChange={(e) =>
            setContactData({ ...contactData, message: e.target.value })
          }
        ></textarea>

        <button type="button" onClick={saveResponse}>
          Submit
        </button>
      </form>
      {error && <div className="error-message">{errorName}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
}
