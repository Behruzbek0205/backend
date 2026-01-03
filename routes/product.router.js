const express = require("express");
const productRoute = express.Router();

const {
  createProduct,
  getProduct,
  productByID,
  updateProduct,
  productDelete,
  productSearch,
} = require("../controller/productController");

productRoute.post("/productCreate", createProduct);
productRoute.get("/getProduct", getProduct);
productRoute.get("/getProductById/:id", productByID);
productRoute.put("/updateProduct/:id", updateProduct);
productRoute.delete("/deleteProduct/:id", productDelete);
productRoute.get("/productSearch", productSearch)
module.exports = { productRoute };
