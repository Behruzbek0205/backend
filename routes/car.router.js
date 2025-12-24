const express = require("express");
const carRoute = express.Router();
const { CreateCar,   GetCar , GetCarByID} = require("../controller/carController");
carRoute.post("/CreateCar", CreateCar);
carRoute.get("/GetCar", GetCar  );
carRoute.get("/GetCarById/:id", GetCarByID );
module.exports = { carRoute };
