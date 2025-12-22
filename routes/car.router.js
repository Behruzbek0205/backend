const express = require("express");
const carRoute = express.Router();
const { CreateCar } = require("../controller/carController");
carRoute.post("/CreateCar", CreateCar);
module.exports = { carRoute };
