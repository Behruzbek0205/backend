const express = require("express");
const productRoute = express.Router();

const {
  createProduct,
  getProduct,
  productByID,
} = require("../controller/productController");

productRoute.post("/productCreate", createProduct);
productRoute.get("/getProduct", getProduct);
productRoute.get("/getProductById/:id", productByID);
module.exports = { productRoute };
