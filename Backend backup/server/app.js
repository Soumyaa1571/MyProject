const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
const PORT = process.env.PORT || 5173; // Assign a default port if not specified

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Import routes
const authRoutes = require("./router/auth");

// Route Middleware
app.use("/api", authRoutes); // All routes in authRoutes will be prefixed with /api

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


