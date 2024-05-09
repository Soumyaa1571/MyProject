const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// we are hashing the password

userSchema.pre("save", async function (next) {
  // console.log("hi from inside");

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    // this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});



const User = mongoose.model("User", userSchema);

module.exports = User;
