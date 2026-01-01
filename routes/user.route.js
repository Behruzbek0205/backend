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
  const {error} = sheme.validate(req.body)
  if(error) {
    return res.status(400).send(error.details[0].message)
  }
  next()
}



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
