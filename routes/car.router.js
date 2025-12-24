const express = require("express");
const carRoute = express.Router();
const {
  CreateCar,
  GetCar,
  GetCarByID,
  updateCar,
} = require("../controller/carController");
carRoute.post("/CreateCar", CreateCar);
carRoute.get("/GetCar", GetCar);
carRoute.get("/GetCarById/:id", GetCarByID);
carRoute.put("/updateCar/:id", updateCar);
module.exports = { carRoute };
