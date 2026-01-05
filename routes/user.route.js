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
 * name: Users
 * description:
 */

/**
 * @swagger
 * /users/CreateUser:
 * post:
 * summary: Yangi foydalanuvchini yaratish
 * tags: [Users]
 * description: Yangi faydalanuvchini yaratish
 * requestBody:
 * reqiured: true
 * content:
 * application/json"
 * shema:
 * type:object
 * properties: 
 * username:
 * type:string
 * description: Foydalanuvchining yagona username
 * password: 
 * type: string
 * description: Foydalanuvchining akkounti uchun parol
 * firstname:
 * type:string
 * description: Foydalanuvchining ismi
 * lastname:
 * type:string
 * description: Foydalanuvchini familiyasi
 * birthday: 
 * type: String
 * description: Foydalanuvchining yili
 * phone: 
 * type:string
 * description: Foydalanuvchining telefon nomerin
 * addres: 
 * type:string
 * description: Foydalanuvchining addressi
 * gender: 
 * type:string 
 * responses:
 * '201':
 * description: Foydalanuvchini muvaffaqiyatli royxatdan otdi
 * '400':
 * description: Yomon sorov, validatsiya xatosi
 * '500':
 * description:Server xatosi
 */

userRoute.post(
  "/CreateUser",
  validationScheme(registerValidationScheme),
  CreateUser
);
userRoute.get("/GetUser", GetUser);
userRoute.get("/GetUserById/:id", GetUserById);
userRoute.put(
  "/updateUser/:id",
  validationScheme(updateUserValidationScheme),
  updateUser
);
userRoute.delete("/deleteUser/:id", deleteUser);
userRoute.post("/postLcarogin", postLogin);
userRoute.get("/userSearch", userSearch);
module.exports = { userRoute };
