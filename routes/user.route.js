const express = require("express");
const userRoute = express.Router();
const {
  CreateUser,
  GetUser,
  GetUserById,
  updateUser,
  deleteUser,
} = require("../controller/userController");

userRoute.post("/CreateUser", CreateUser);
userRoute.get("/GetUser", GetUser);
userRoute.get("/GetUserById/:id", GetUserById);
userRoute.put("/updateUser/:id", updateUser);
userRoute.delete("/deleteUser/:id", deleteUser)

module.exports = { userRoute };
