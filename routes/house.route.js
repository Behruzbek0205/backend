const express = require("express");
const houseRoute = express.Router();
const { createHouse, houseGet, houseGetByID } = require("../controller/houseController");

houseRoute.post("/houseCreate", createHouse);
houseRoute.get("/houseGet", houseGet);
houseRoute.get("/getHouseById/:id" , houseGetByID)
module.exports = { houseRoute };
