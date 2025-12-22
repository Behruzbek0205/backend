const { Car } = require("../models/carSheme");

const CreateCar = async (req, res) => {
  try {
    const {
      title,
      model,
      discription,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Model va yearMachine majburiy",
      });
    }

    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: "Car allaqachon mavjud",
      });
    }
    const newUser = new Car({
      title,
      model,
      discription,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Car muvaffaqiyatli qoshildi",
      user: newUser,
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
  CreateCar,
};
