const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  ques: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },

  option3: {
    type: String,
    required: true,
  },

  option4: {
    type: String,
    required: true,
  },
  correctans: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
