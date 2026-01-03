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

// get product by id
const productByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product topilmadi",
      });
    }

    res.json({
      success: true,
      message: "product  muvaffaqiyatli topildi",
      innerData: product,
    });
  } catch (error) {
    console.log("error product by id", error);
    res.status(500).json({
      success: false,
      message: "Product  olishda hatolik yuz berdi",
    });
  }
};

//  update House
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, image, count } = req.body;

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image, count },
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product update seccesfully",
      product: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// porduct delete
const productDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const productDelete = await Product.findByIdAndDelete(id);
    if (!productDelete) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted seccesfully",
      product: productDelete,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// Search product
const productSearch = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid search query",
      });
    }
    const result = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Product found matching the query",
      });
    }
    res.json(result);
  } catch (error) {
    console.log("Error fetching product", error);
    res.status(500).json({
      message: "Server error: Failed to fetch product",
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  productByID,
  updateProduct,
  productDelete,
  productSearch,
};
