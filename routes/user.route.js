const express = require("express");
const userRoute = express.Router();
const {
  CreateUser,
  GetUser,
  GetUserById,
  updateUser,
  deleteUser,
  postLogin,
} = require("../controller/userController");

userRoute.post("/CreateUser", CreateUser);
userRoute.get("/GetUser", GetUser);
userRoute.get("/GetUserById/:id", GetUserById);
userRoute.put("/updateUser/:id", updateUser);
userRoute.delete("/deleteUser/:id", deleteUser)
userRoute.post("/login", postLogin);
module.exports = { userRoute };
