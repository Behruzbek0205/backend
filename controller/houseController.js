//  house index
const { House } = require("../models/houseSheme");

const createHouse = async (req, res) => {
  try {
    const { region, city, house_member, street, family_members, location } =
      req.body;
    if (!city || !region) {
      return res.status(400).json({
        success: false,
        message: "City va region majburiy",
      });
    }
    const newHouse = new House({
      city,
      house_member,
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

module.exports = {
    createHouse
}