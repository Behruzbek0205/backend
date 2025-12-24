const express = require("express");
const carRoute = express.Router();
const { CreateCar,   GetCar } = require("../controller/carController");
carRoute.post("/CreateCar", CreateCar);
carRoute.get("/GetCar", GetCar  );
module.exports = { carRoute };
