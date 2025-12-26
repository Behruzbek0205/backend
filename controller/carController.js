const { Car } = require("../models/carSheme");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
};
//  Update car
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
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

    const updateCar = await Car.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );
    if (!updateCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.json({
      success: true,
      message: "Car update seccesfully",
      car: updateCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// delete car

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCar = await Car.findByIdAndDelete(id);
    if (!deleteCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.json({
      success: true,
      message: "Car deleted seccesfully",
      car: deleteCar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//  Carlogin

const Carlogin = async (req, res) => {
  try {
    const { title, model } = req.body;
    const car = await Car.findOne({ title });
    console.log(car);
    if (!car) {
      return res.status(401).json({
        success: false,
        message: "Title is invalid",
      });
    }
    const modelMatch = await bcrypt.compare(model, car.model);
    if (!modelMatch) {
      return res.status(401).json({
        success: false,
        message: "Title or model is invalid",
      });
    }
    const token = jwt.sign({ title: car.title }, "sir");
    return res.json({ message: "Token", token: token });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
};

module.exports = {
  CreateCar,
  GetCar,
  GetCarByID,
  updateCar,
  deleteCar,
  Carlogin
};
