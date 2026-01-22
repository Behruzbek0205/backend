  const { model, Schema } = require("mongoose");

  const { Product } = require("./productSheme");
  const userScheme = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    addres: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      alias: "jinsi",
    },
    prodcut_id: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  });
  const User = model("User", userScheme);
  module.exports = { User };
