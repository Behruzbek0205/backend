const express = require("express");
const eduRoute = express.Router();
const { eduCreate, EduGet, eduGetId, updateEdu } = require("../controller/eduController");
eduRoute.post("/eduCreate", eduCreate);
eduRoute.get("/eduGet", EduGet);
eduRoute.get("/eduGetById/:id", eduGetId);
eduRoute.put("/updateEdu/:id", updateEdu)
module.exports = { eduRoute };
