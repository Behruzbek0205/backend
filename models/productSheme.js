const { required } = require("joi");
const  mongoose  = require("mongoose");
const { Schema } = mongoose;

const productScheme = new Schema({
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

  user: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }]
});
const Product = mongoose.model("Product", productScheme);
module.exports = { Product };
