const { User } = require("../models/userSheme");
const bcrypt = require("bcrypt");
// CREATE USER
const CreateUser = async (req, res) => {
  try {
    const {
      username,
      password,
      firstname,
      lastname,
      gender,
      address,
      phone,
      birthday,
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username va password majburiy",
      });
    }

    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: "User allaqachon mavjud",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      firstname,
      lastname,
      gender,
      address,
      phone,
      birthday,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User muvaffaqiyatli yaratildi",
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

// Get All Users
const GetUser = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "Barcha foydalanuvchilar royxati",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Userlarni olishda xatolik",
    });
  }
};

// get user by id
const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Foydalanuvchi topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Foydalanuvchi muvaffaqiyatli topildi",
      innerData: user,
    });
  } catch (error) {
    console.log("error user by id", error);
    res.status(500).json({
      success: false,
      message: "foydalanuvchini olishda xato yuz berdi",
    });
  }
};

//  Update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, lastname, phone, address } = req.body;

    const updateUser = await User.findByIdAndUpdate(
      id,
      { username, lastname, phone, address },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User update seccesfully",
      user: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// delete user

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted seccesfully",
      user: deleteUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  CreateUser,
  GetUser,
  GetUserById,
  updateUser,
  deleteUser,
};



// homework car qoshiladon create yani post qilib kelish 