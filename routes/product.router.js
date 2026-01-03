const express = require("express")
const productRoute = express.Router()

const { createProduct } = require("../controller/productController")

productRoute.post("/productCreate" , createProduct)
module.exports = {productRoute}