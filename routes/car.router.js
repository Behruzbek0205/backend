const express = require("express");
const carRoute = express.Router();
const {
  CreateCar,
  GetCar,
  GetCarByID,
  updateCar,
  deleteCar,
  Carlogin,
  carSearch,
} = require("../controller/carController");


/**
 * @swagger
 * tags:
 *   - name: Car
 *     description: Carlarni boshqaruvi
*/

carRoute.post("/CreateCar", CreateCar);

/**
 * @swagger
 * /car/CreateCar:
 *   post:
 *     summary: Yangi car yaratish
 *     tags: [Car]
 *     description: Yangi car yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - model
 *               - price
 *             properties:
 *               title:
 *                 type: string
 *                 example: Malibu 2
 *               model:
 *                 type: string
 *                 example: Malibu Premier
 *               description:
 *                 type: string
 *                 example: Xolati zo‘r
 *               color:
 *                 type: string
 *                 example: qora
 *               horsePower:
 *                 type: number
 *                 example: 253
 *               carType:
 *                 type: string
 *                 example: sedan
 *               fuelType:
 *                 type: string
 *                 example: benzin
 *               weight:
 *                 type: number
 *                 example: 1670
 *               yearMachine:
 *                 type: number
 *                 example: 2024
 *               price:
 *                 type: number
 *                 example: 27000
 *               seria:
 *                 type: string
 *                 example: abd2332cm
 *     responses:
 *       201:
 *         description: Car muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

carRoute.get("/GetCar", GetCar);
carRoute.get("/GetCarById/:id", GetCarByID);
carRoute.put("/updateCar/:id", updateCar);
carRoute.delete("/deleteCar/:id", deleteCar);
carRoute.post("/CarLogin", Carlogin);
carRoute.get("/CarSearch", carSearch);
module.exports = { carRoute };
