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
 *     tags: [Product]
 *     description: Yangi product yaratadi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - count
 *             properties:
 *               name:
 *                 type: string
 *                 example: Iphone 15
 *               price:
 *                 type: number
 *                 example: 1200
 *               description:
 *                 type: string
 *                 example: Apple smartfoni
 *               image:
 *                 type: string
 *                 example: iphone.jpg
 *               count:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Product muvaffaqiyatli yaratildi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
productRoute.get("/getProduct", getProduct);

/**
 * @swagger
 * /product/getProduct:
 *   get:
 *     summary: Barcha productlarni olish
 *     tags: [Product]
 *     description: Porductlarni olish
 *     responses:
 *       200:
 *         description: Productlar ro‘yxati
 *       500:
 *         description: Server xatosi
 */

productRoute.get("/getProductById/:id", productByID);

/**
 * @swagger
 * /product/getProductById/{id}:
 *   get:
 *     summary: Productni ID orqali olish
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan product
 *       404:
 *         description: Product topilmadi
 */

productRoute.put(
  "/updateProduct/:id",
  validationScheme(productupdateValidationshceme),
  updateProduct
);

/**
 * @swagger
 * /product/updateProduct/{id}:
 *   put:
 *     summary: Productni yangilash
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               count:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

productRoute.delete("/deleteProduct/:id", productDelete);

/**
 * @swagger
 * /product/deleteProduct/{id}:
 *   delete:
 *     summary: Productni o‘chirish
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product o‘chirildi
 *       404:
 *         description: Product topilmadi
 */

productRoute.get("/productSearch", productSearch);
module.exports = { productRoute };
