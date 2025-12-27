const express = require("express");
const eduRoute = express.Router();
const { eduCreate } = require("../controller/eduController");
eduRoute.post("/eduCreate", eduCreate);

module.exports = { eduRoute };
