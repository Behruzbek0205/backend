const express = require("express");
const userRoute = express.Router();
const {
  CreateUser,
  GetUser,
  GetUserById,
  updateUser,
  deleteUser,
  postLogin,
  userSearch,
} = require("../controller/userController");

const {
  registerValidationScheme,
  updateUserValidationScheme,
} = require("../validation/userValidation");

const validationScheme = (sheme) => (req, res, next) => {
  const { error } = sheme.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Foydalanuvchilar boshqaruvi
 */

userRoute.post(
  "/CreateUser",
  validationScheme(registerValidationScheme),
  CreateUser
);
/**
 * @swagger
 * /users/CreateUser:
 *   post:
 *     summary: Yangi foydalanuvchini yaratish
 *     tags: [Users]
 *     description: Yangi foydalanuvchini yaratadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Foydalanuvchining yagona username
 *               password:
 *                 type: string
 *                 description: Foydalanuvchining akkaunti uchun parol
 *               firstname:
 *                 type: string
 *                 description: Foydalanuvchining ismi
 *               lastname:
 *                 type: string
 *                 description: Foydalanuvchining familiyasi
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: Foydalanuvchining tug‘ilgan sanasi
 *               phone:
 *                 type: string
 *                 description: Foydalanuvchining telefon raqami
 *               address:
 *                 type: string
 *                 description: Foydalanuvchining manzili
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Foydalanuvchi muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

userRoute.get("/GetUser", GetUser);

// get user
/** 
 * @swagger
 * /users/GetUser:
 *   get:
 *    summary: Hamma foydalanuvchilarni olish
 *    tags: [Users]
 *    description: Foydalanuvchilarni olish
 *    responses:
 *      "200":
 *         description:   Hamma foydalanuvchilarni royxati
 *      "500":
 *         description:  ichki server xatosi


*/

userRoute.get("/GetUserById/:id", GetUserById);

/**
 * @swagger
 * /users/GetUserById/{id}:
 *  get:
 *    summary: foydalanuvchi alohida olish
 *    tags: [Users]
 *    description: foydalanuvchi alohida olish
 *     parametrs:
 *        - in: path
 *           name: id
 *           description: user id
 *           schema:
 *              type: string
 *           reqiured: true
 *     responses:
 *        "200":
 *          description: foydalanuvhci topildi
 *        "404"
 *          description: foydalanuvhci topilmadi
 *        "500"
 *          description: server xatosi 
*/

userRoute.put(
  "/updateUser/:id",
  validationScheme(updateUserValidationScheme),
  updateUser
);
userRoute.delete("/deleteUser/:id", deleteUser);
userRoute.post("/postLcarogin", postLogin);
userRoute.get("/userSearch", userSearch);
module.exports = { userRoute };
