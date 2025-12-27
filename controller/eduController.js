const { Edu } = require("../models/eduScheme");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// eduCreate
const eduCreate = async (req, res) => {
  try {
    const { city, street, center_name, branch, rating } = req.body;
    if (!city || !center_name) {
      return res.status(400).json({
        success: false,
        message: "Edu va center name majburiy",
      });
    }

    const oldEdu = await Edu.findOne({ city });
    if (oldEdu) {
      return res.status(400).json({
        success: false,
        message: "Center allaqachon mavjud",
      });
    }
    const newEdu = new Edu({
      city,
      street,
      center_name,
      branch,
      rating,
    });
    await newEdu.save();

    res.status(201).json({
      success: true,
      message: "EduCenter muvaffaqiyatli yaratildi",
      user: newEdu,
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
    eduCreate
}