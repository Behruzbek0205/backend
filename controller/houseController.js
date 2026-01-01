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
    try{
        const house = await House.find()
        res.json({
      success: true,
      message: "Barcha edu royxati",
      data: house,
        })
    }catch (error) {
        res.status(500)({
            success: false,
            message: "Houselarni olishda hatolik bor"
        })
    }
} 

module.exports = {
  createHouse,
  houseGet
};
