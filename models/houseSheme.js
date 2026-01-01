const mongoose = require("mongoose");
const { Schema } = mongoose;

const houseScheme = new Schema({
  region: { type: String, required: true },
  city: { type: String, required: true },
  house_number: { type: Number, required: true },
  street: { type: String, required: true },
  family_members: { type: String, required: true },
  location: { type: String, required: true },
});

const House = mongoose.model("House", houseScheme);

module.exports = { House };
