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

const validationScheme = (sheme = (req, res, next) => {
  const { error } = sheme.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
});

houseRoute.post(
  "/houseCreate",
  validationScheme(houseValidationshceme),
  createHouse
);
houseRoute.get("/houseGet", houseGet);
houseRoute.get("/getHouseById/:id", houseGetByID);
houseRoute.put(
  "/updateHouse/:id",
  validationScheme(houseupdateValidationshceme),
  updateHouse
);
houseRoute.delete("/deleteHouse/:id", deleteHouse);
houseRoute.get("/houseSearch", houseSearch);

module.exports = { houseRoute };
