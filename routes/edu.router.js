const express = require("express");
const eduRoute = express.Router();
const { eduCreate, EduGet } = require("../controller/eduController");
eduRoute.post("/eduCreate", eduCreate);
eduRoute.get("/eduGet", EduGet);

module.exports = { eduRoute };
