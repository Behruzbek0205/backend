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
/**
 * @swagger
 * /edu/:eduCreate
 *   post:
 *     summary: Yangi edu center yaratish
 *     tags: [Edu]
 *     description: Yangi edu center yaratadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 example: namangan
 *               street:
 *                 type: string
 *                 example: chorsu
 *               center_name:
 *                 type: string
 *                 example: lsl
 *               branch:
 *                 type: string
 *                 example: string
 *               rating:
 *                 type: number
 *                 example: 4.5
 *     responses:
 *       201:
 *         description: Edu center muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

eduRoute.get("/eduGet", EduGet);
eduRoute.get("/eduGetById/:id", eduGetId);
eduRoute.put("/updateEdu/:id", updateEdu);
eduRoute.delete("/deleteEdu/:id", deleteEdu);
eduRoute.get("/eduSearch", eduSearch);
module.exports = { eduRoute };
