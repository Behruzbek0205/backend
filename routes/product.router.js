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

const {
  productValidationshceme,
  productupdateValidationshceme
} = require("../validation/productValidation");


const validationScheme = (scheme) => (req, res, next) => {
  const { error } = scheme.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};


productRoute.post("/productCreate", validationScheme(productValidationshceme), createProduct);
productRoute.get("/getProduct", getProduct);
productRoute.get("/getProductById/:id", productByID);
productRoute.put("/updateProduct/:id",validationScheme(productupdateValidationshceme),  updateProduct);
productRoute.delete("/deleteProduct/:id", productDelete);
productRoute.get("/productSearch", productSearch)
module.exports = { productRoute };
