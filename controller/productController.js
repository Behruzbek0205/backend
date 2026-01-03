const { Product } = require("../models/productSheme");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, count } = req.body;

    if (!name || !count) {
      return res.status(400).json({
        success: false,
        message: "Name va count majburiy",
      });
    }
    const newProduct = new Product({
      name,
      price,
      description,
      image,
      count,
    });
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product muvaffaqiyatli yaratildi",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
module.exports = {
    createProduct
}