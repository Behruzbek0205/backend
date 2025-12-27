const { Edu } = require("../models/eduSheme");
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

//  EduGet

const EduGet = async (req, res) => {
  try {
    const edu = await Edu.find();

    res.json({
      success: true,
      message: "Barcha edu royxati",
      data: edu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Edularni olishda xatolik",
    });
  }
};

// Get Edu By Id
const eduGetId = async (req, res) => {
  try {
    const { id } = req.params;
    const edu = await Edu.findById(id);

    if (!edu) {
      return res.status(400).json({
        success: false,
        message: "Edu center topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Edu centerlar muvaffaqiyatli topildi",
      innerData: edu,
    });
  } catch (error) {
    console.log("error edu by id" , error);
    res.status(500).json({
        success: false,
        message: "Edu centerlar olishda hatolik yuz berdi"
    })
  }
};
module.exports = {
  eduCreate,
  EduGet,
  eduGetId
};
