const express = require("express");
const carRoute = express.Router();
const {
  CreateCar,
  GetCar,
  GetCarByID,
  updateCar,
  deleteCar,
  Carlogin,
} = require("../controller/carController");
carRoute.post("/CreateCar", CreateCar);
carRoute.get("/GetCar", GetCar);
carRoute.get("/GetCarById/:id", GetCarByID);
carRoute.put("/updateCar/:id", updateCar);
carRoute.delete("/deleteCar/:id", deleteCar);
carRoute.post("/CarLogin", Carlogin);
module.exports = { carRoute };
