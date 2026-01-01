const express = require("express");
const houseRoute = express.Router();
const { createHouse, houseGet } = require("../controller/houseController");

houseRoute.post("/houseCreate", createHouse);
houseRoute.get("/houseGet", houseGet);
module.exports = { houseRoute };
