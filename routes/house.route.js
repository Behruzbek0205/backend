const express = require("express");
const houseRoute = express.Router();
const { createHouse, houseGet, houseGetByID ,updateHouse, deleteHouse, houseSearch} = require("../controller/houseController");

houseRoute.post("/houseCreate", createHouse);
houseRoute.get("/houseGet", houseGet);
houseRoute.get("/getHouseById/:id" , houseGetByID)
houseRoute.put("/updateHouse/:id" , updateHouse)
houseRoute.delete("/deleteHouse/:id" , deleteHouse)
houseRoute.get("/houseSearch" , houseSearch)

module.exports = { houseRoute };
