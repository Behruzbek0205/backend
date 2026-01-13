const express = require("express");
const houseRoute = express.Router();

const {
  createHouse,
  houseGet,
  houseGetByID,
  updateHouse,
  deleteHouse,
  houseSearch,
} = require("../controller/houseController");

const {
  houseValidationshceme,
  houseupdateValidationshceme,
} = require("../validation/houseValidation");

const validationScheme = (scheme) => (req, res, next) => {
  const { error } = scheme.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

/**
 * @swagger
 * tags:
 *   name: House
 *   description: House boshqaruvi
 */

houseRoute.post(
  "/houseCreate",
  validationScheme(houseValidationshceme),
  createHouse
);

/**
 * @swagger
 * /house/houseCreate:
 *   post:
 *     summary: Yangi house yaratish
 *     tags: [House]
 *     description: Yangi house yaratadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - region
 *               - city
 *               - street
 *             properties:
 *               region:
 *                 type: string
 *                 example: nevada
 *               city:
 *                 type: string
 *                 example: new york
 *               house_number:
 *                 type: string
 *                 example: 10
 *               street:
 *                 type: string
 *                 example: nadaniyat
 *               family_members:
 *                 type: string
 *                 example: 4
 *               location:
 *                 type: string
 *                 example: 12.431.431
 *     responses:
 *       201:
 *         description: House muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

houseRoute.get("/houseGet", houseGet);

/**
 * @swagger
 * /house/houseGet:
 *   get:
 *     summary: Barcha houselarni olish
 *     tags: [House]
 *     description: House olish
 *     responses:
 *       200:
 *         description: House ro‘yxati
 *       500:
 *         description: Server xatosi
 */

houseRoute.get("/getHouseById/:id", houseGetByID);

/**
 * @swagger
 * /house/gethouseById/{id}:
 *   get:
 *     summary: Houseni ID orqali olish
 *     tags: [House]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan house
 *       404:
 *         description: House topilmadi
 */

houseRoute.put(
  "/updateHouse/:id",
  validationScheme(houseupdateValidationshceme),
  updateHouse
);

/**
 * @swagger
 * /house/updateHouse/{id}:
 *   put:
 *     summary: House yangilash
 *     tags: [House]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - region
 *               - city
 *               - street
 *             properties:
 *               region:
 *                 type: string
 *                 example: nevada
 *               city:
 *                 type: string
 *                 example: new york
 *               house_number:
 *                 type: string
 *                 example: 10
 *               street:
 *                 type: string
 *                 example: nadaniyat
 *               family_members:
 *                 type: string
 *                 example: 4
 *               location:
 *                 type: string
 *                 example: 12.431.431
 *     responses:
 *       200:
 *         description: House yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

houseRoute.delete("/deleteHouse/:id", deleteHouse);

/**
 * @swagger
 * /house/deleteHouse/{id}:
 *   delete:
 *     summary: House o‘chirish
 *     tags: [House]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: House o‘chirildi
 *       404:
 *         description: House topilmadi
 */


houseRoute.get("/houseSearch", houseSearch);

module.exports = { houseRoute };
