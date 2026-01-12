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
 * /edu/eduCreate:
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

/**
 * @swagger
 * /edu/eduGet:
 *   get:
 *     summary: Barcha edu centerlarni olish
 *     tags: [Edu]
 *     description: Edu centerlar olish
 *     responses:
 *       200:
 *         description: Edu centerlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */

eduRoute.get("/eduGetById/:id", eduGetId);

/**
 * @swagger
 * /edu/eduGetById/{id}:
 *   get:
 *     summary: Edu center ID orqali olish
 *     tags: [Edu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan product
 *       404:
 *         description: Product topilmadi
 */

eduRoute.put("/updateEdu/:id", updateEdu);
eduRoute.delete("/deleteEdu/:id", deleteEdu);
eduRoute.get("/eduSearch", eduSearch);
module.exports = { eduRoute };
