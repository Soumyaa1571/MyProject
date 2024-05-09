const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
});
const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
