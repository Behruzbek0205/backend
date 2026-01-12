const express = require("express");
const eduRoute = express.Router();
const {
  eduCreate,
  EduGet,
  eduGetId,
  updateEdu,
  deleteEdu,
  eduSearch,
} = require("../controller/eduController");

/**
 * @swagger
 * tags:
 *   name: Edu
 *   description: Edu center olish
 */

eduRoute.post("/eduCreate", eduCreate);
eduRoute.get("/eduGet", EduGet);
eduRoute.get("/eduGetById/:id", eduGetId);
eduRoute.put("/updateEdu/:id", updateEdu);
eduRoute.delete("/deleteEdu/:id", deleteEdu);
eduRoute.get("/eduSearch", eduSearch);
module.exports = { eduRoute };
