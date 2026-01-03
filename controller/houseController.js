//  house index
const { House } = require("../models/houseSheme");

const createHouse = async (req, res) => {
  try {
    const { region, city, house_number, street, family_members, location } =
      req.body;

    if (!city || !region || !house_number) {
      return res.status(400).json({
        success: false,
        message: "City, region va house_number majburiy",
      });
    }

    const newHouse = new House({
      region,
      city,
      house_number,
      street,
      family_members,
      location,
    });

    await newHouse.save();

    res.status(201).json({
      success: true,
      message: "House muvaffaqiyatli yaratildi",
      house: newHouse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//houseGet
const houseGet = async (req, res) => {
  try {
    const house = await House.find();
    res.json({
      success: true,
      message: "Barcha edu royxati",
      data: house,
    });
  } catch (error) {
    res.status(500)({
      success: false,
      message: "Houselarni olishda hatolik bor",
    });
  }
};

// get house by id
const houseGetByID = async (req, res) => {
  try {
    const { id } = req.params;
    const house = await House.findById(id);

    if (!house) {
      return res.status(400).json({
        success: false,
        message: "house center topilmadi",
      });
    }

    res.json({
      success: true,
      message: "house  muvaffaqiyatli topildi",
      innerData: house,
    });
  } catch (error) {
    console.log("error edu by id", error);
    res.status(500).json({
      success: false,
      message: "house  olishda hatolik yuz berdi",
    });
  }
};

//  update House
const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { region, city, house_number, street, family_members, location } =
      req.body;

    const updateHouse = await House.findByIdAndUpdate(
      id,
      { region, city, house_number, street, family_members, location },
      { new: true }
    );
    if (!updateHouse) {
      return res.status(404).json({
        success: false,
        message: "House center not found",
      });
    }
    res.json({
      success: true,
      message: "house update seccesfully",
      user: updateHouse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// house delete
const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteHouse = await House.findByIdAndDelete(id);
    if (!deleteHouse) {
      return res.status(404).json({
        success: false,
        message: "House not found",
      });
    }

    res.json({
      success: true,
      message: "house deleted seccesfully",
      house: deleteHouse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// HouseSearch

const houseSearch = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid search query",
      });
    }
    const result = await House.find({
      $or: [
        { city: { $regex: query, $options: "i" } },
        { region: { $regex: query, $options: "i" } },
        { street: { $regex: query, $options: "i" } },
      ],
    });
    if (result.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No House found matching the query",
      });
    }
    res.json(result);
  } catch (error) {
    console.log("Error fetching user", error);
    res.status(500).json({
      message: "Server error: Failed to fetch house",
    });
  }
};

module.exports = {
  createHouse,
  houseGet,
  houseGetByID,
  updateHouse,
  deleteHouse,
  houseSearch,
};
