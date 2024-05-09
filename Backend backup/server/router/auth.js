const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Test = require("../model/test");
const Announcement = require("../model/announcement");
const Feedback = require("../model/feedback");
const Result = require("../model/result");

// Require User model and connect to database
require("../db/conn");
const User = require("../model/userSchema");

// Function to create JWT token
const createToken = async (_id) => {
  return await jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

// Signin route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the details" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = await createToken(user._id);
    res.status(200).json({ email, token, role: user.role });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, dob, role, domain } = req.body;

  // console.log(`register request ${email}`);
  if (!name || !email || !password || !phone || !dob || !domain || !role) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const user = new User({
        name,
        email,
        phone,

        password,
        dob,
        role,
        domain,
      });

      await user.save();
      //  create a token
      const token = await createToken(user._id);

      // res.status(201).json({ message: "user registered successfuly "  });
      res.status(200).json({ email, token, role });

      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});

// test questions

router.post("/questions", async (req, res) => {
  const { ques, option1, option2, option3, option4, correctans } = req.body;

  if (!ques || !option1 || !option2 || !option3 || !option4 || !correctans) {
    return res.status(422).json({ error: "Please fill the field properlyy" });
  }

  try {
    const testExist = await Test.findOne({ ques: ques });
    if (testExist) {
      return res.status(422).json({ error: "Question already present " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const test = new Test({
        ques,
        option1,
        option2,
        option3,
        option4,
        correctans,
      });
      await test.save();

      res.status(201).json({ message: "question added successfuly " });
      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});
router.get("/gettest", async (req, res) => {
  try {
    const test = await Test.find({});
    console.log("Fetched test data:", test);
    res.json({ test });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Announcement Section

router.post("/Sheet", async (req, res) => {
  const { heading } = req.body;
  if (!heading) {
    return res.status(422).json({ error: "Please fill it" });
  }

  try {
    const announcementExist = await Announcement.findOne({ heading: heading });
    if (announcementExist) {
      return res.status(422).json({ error: "Announcement already made " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const announcement = new Announcement({
        heading,
      });
      await announcement.save();

      res.status(201).json({ message: "Announcement made successfuly " });
      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/getSheet", async (req, res) => {
  try {
    const announcement = await Announcement.find({});
    console.log("Fetched announcement data:", announcement);
    res.json({ announcement });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/addRole", async (req, res) => {
//   const role = req.body.role;
//   const permissions = req.body.permissions;

//   // Creating a new role model instance
//   const newRole = await new Role({ role, permissions });

//   try {
//     // Saving the new role
//     const isSaved = await newRole.save();

//     if (isSaved) {
//       // If role is successfully saved, send success response
//       return res.status(200).send({ code: 200, message: "Role added" });
//     } else {
//       // If role saving failed, send error response
//       return res
//         .status(500)
//         .send({ code: 500, message: "Internal server error" });
//     }
//   } catch (error) {
//     // If an error occurred during saving, send error response
//     return res
//       .status(500)
//       .send({ code: 500, message: "Internal server error" });
//   }
// });
router.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(422).json({ error: "Please fill the field properlyy" });
  }

  try {
    const feedbackExist = await Feedback.findOne({ message: message });
    if (feedbackExist) {
      return res.status(422).json({ error: "Feedback already present " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const feedback = new Feedback({
        name,
        email,
        message,
      });
      await feedback.save();

      res.status(201).json({ message: "feedback submitted successfuly " });
      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/getfeedback", async (req, res) => {
  try {
    const feedback = await Feedback.find({});
    console.log("Fetched  feedback:", feedback);
    res.json({ feedback });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Result section

router.post("/isAttempted", async (req, res) => {
  const { email } = req.body;
  try {
    const resultExist = await Result.findOne({ email: email });
    res.json({ isAttempted: !!resultExist });
  } catch (err) {
    console.log(err);
  }
});

router.post("/result", async (req, res) => {
  const { email, marks } = req.body;
  try {
    const resultExist = await Result.findOne({ email: email });
    if (resultExist) {
      return res.status(422).json({ error: "Test already attempted" });
    } else {
      const result = new Result({
        email,
        marks,
      });
      await result.save();
      res.status(201).json({ message: " result stored successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error occured" });
  }
});

router.get("/getresult", async (req, res) => {
  try {
    const result = await Result.find({});
    console.log("Fetched result data:", result);
    res.json({ result });
  } catch (error) {
    console.log("error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
