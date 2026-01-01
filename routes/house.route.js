const express = require("express");
const houseRoute = express.Router();
const { createHouse } = require("../controller/houseController");

houseRoute.post("/houseCreate" , createHouse)

module.exports = { houseRoute };
