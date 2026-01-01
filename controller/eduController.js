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
    console.log("error edu by id", error);
    res.status(500).json({
      success: false,
      message: "Edu centerlar olishda hatolik yuz berdi",
    });
  }
};

//  Update Edu

const updateEdu = async (req, res) => {
  try {
    const { id } = req.params;
    const { city, center_name, street, rating, branch } = req.body;

    const updateEdu = await Edu.findByIdAndUpdate(
      id,
      { city, center_name, street, branch, rating },
      { new: true }
    );
    if (!updateEdu) {
      return res.status(404).json({
        success: false,
        message: "Edu center not found",
      });
    }
    res.json({
      success: true,
      message: "Edu update seccesfully",
      user: updateEdu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//  deleteEdu

const deleteEdu = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteEdu = await Edu.findByIdAndDelete(id);
    if (!deleteEdu) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.json({
      success: true,
      message: "Car deleted seccesfully",
      edu: deleteEdu,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// eduSearch

const eduSearch = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid search query",
      });
    }
    const result = await Edu.find({
      $or: [
        { city: { $regex: query, $options: "i" } },
        { center_name: { $regex: query, $options: "i" } },
        { street: { $regex: query, $options: "i" } },
      ],
    });
    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No edu center found matching the query",
      });
    }
    res.json(result);
  } catch (error) {
    console.log("Error fetching user", error);
    res.status(500).json({
      message: "Server error: Failed to fetch edu",
    });
  }
};

module.exports = {
  eduCreate,
  EduGet,
  eduGetId,
  updateEdu,
  deleteEdu,
  eduSearch,
};
