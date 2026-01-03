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
//  user index

const { userRoute } = require("./routes/user.route");
index.use("/users", userRoute);
//  car index

const { carRoute } = require("./routes/car.router");
index.use("/cars", carRoute);
//  education  index

const { eduRoute } = require("./routes/edu.router");
index.use("/edu", eduRoute);

//  house index
const { houseRoute } = require("./routes/house.route");
index.use("/house", houseRoute);
//  product index

const {productRoute} = require('./routes/product.router')
index.use('/porduct', productRoute)
// Port
const PORT = process.env.PORT || 3000;
index.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
