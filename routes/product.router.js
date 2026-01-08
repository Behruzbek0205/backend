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
  productupdateValidationshceme,
} = require("../validation/productValidation");

const validationScheme = (scheme) => (req, res, next) => {
  const { error } = scheme.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Productni boshqaruvi
 */

productRoute.post(
  "/productCreate",
  validationScheme(productValidationshceme),
  createProduct
);

/**
 * @swagger
 * /product/productCreate:
 *   post:
 *     summary: Yangi product yaratish
 *     tags: [Prodcut]
 *     description: Yangi product yaratadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - count
 *              properties:
 *                name:
 *                  type: string
 *                  description: Porduct yagona name
 *                price:
 *                  type: string
 *                  description: Porductning narxi
 *                description:
 *                  type: string
 *                  description: Porductning tarifi
 *                image:
 *                  type: string
 *                  description: Porductning rasmi
 *                 count:
 *                  type: string
 *                  description: Porductning nechtaligi
 *     responses:
 *       201:
 *         description: Product muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */

productRoute.get("/getProduct", getProduct);
productRoute.get("/getProductById/:id", productByID);
productRoute.put(
  "/updateProduct/:id",
  validationScheme(productupdateValidationshceme),
  updateProduct
);
productRoute.delete("/deleteProduct/:id", productDelete);
productRoute.get("/productSearch", productSearch);
module.exports = { productRoute };
