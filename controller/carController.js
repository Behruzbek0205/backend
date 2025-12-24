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

    if (!title || !model) {
      return res.status(400).json({
        success: false,
        message: "Model va yearMachine majburiy",
      });
    }

    const OldCard = await Car.findOne({ title });
    if (OldCard) {
      return res.status(400).json({
        success: false,
        message: "Car allaqachon mavjud",
      });
    }
    const newCar = new Car({
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

    await newCar.save();

    res.status(201).json({
      success: true,
      message: "Car muvaffaqiyatli qoshildi",
      user: newCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GetCar
const GetCar = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      success: true,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// getCarByID
const GetCarByID = async (req, res) => { 
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Car muvaffaqiyatli topildi",
      innerData: car,
    });
  } catch (error) {
    console.log("error user by id", error);
    res.status(500).json({
      success: false,
      message: "Car olishda xato yuz berdi",
    });
  }
}


module.exports = {
  CreateCar,
  GetCar,   
  GetCarByID
};
