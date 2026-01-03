const express = require("express")
const productRoute = express.Router()

const { createProduct, getProduct  } = require("../controller/productController")

productRoute.post("/productCreate" , createProduct)
productRoute.get("/getProduct" , getProduct)
module.exports = {productRoute}