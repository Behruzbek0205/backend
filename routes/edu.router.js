const express = require("express");
const eduRoute = express.Router();
const { eduCreate, EduGet, eduGetId } = require("../controller/eduController");
eduRoute.post("/eduCreate", eduCreate);
eduRoute.get("/eduGet", EduGet);
eduRoute.get("/eduGetById/:id", eduGetId);
module.exports = { eduRoute };
