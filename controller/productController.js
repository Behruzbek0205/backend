const { Product } = require("../models/productSheme");
//  createProduct
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

// getProduct
const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json({
      success: true,
      message: "Xamma productlar",
      data: product,
    });
  } catch (error) {
    res.status(500)({
      success: false,
      message: "Productlarni olishda hatolik bor",
    });
  }
};

module.exports = {
  createProduct,
  getProduct
};
