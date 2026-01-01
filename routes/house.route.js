const express = require("express");
const houseRoute = express.Router();

const { houseCreate } = require("../controller/houseController");
const { eduCreate } = require("../controller/eduController");

eduCreate.post("/houseCreate", houseCreate);
module.exports = {houseRoute}