// index.js

const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const index = express();

index.use(express.json());
index.use(cors());

// MongoDB ulanish
const ConnecttionToDB = async () => {
  try {
    await connect(process.env.MONGO_URL || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

ConnecttionToDB();

const { userRoute } = require("./routes/user.route");
index.use("/users", userRoute);

const { carRoute } = require("./routes/car.router");
index.use("/cars", carRoute);

const { eduRoute } = require("./routes/edu.router");
index.use("/edu", eduRoute);
// Port
const PORT = process.env.PORT || 3000;
index.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
