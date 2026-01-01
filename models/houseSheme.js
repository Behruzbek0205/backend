const { required } = require("joi");
const { Scheme } = require("mongoose");

const houseScheme = new Scheme({
  region: { type: String, required: true },
  city: { type: String, required: true },
  house_number: { type: Number, required: true },
  street: { type: String, required: true },
  family_members: { type: String, required: true },
  location: { type: String, required: true },
});

const House = model("house", houseScheme);
module.exports = { House };
