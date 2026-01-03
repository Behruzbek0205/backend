const { Scheme, model } = require("mongoose");
const productScheme = new Scheme({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});
const Product = model("Product", productScheme);
module.exports = { Product };
