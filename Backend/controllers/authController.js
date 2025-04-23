import User from "../models/userScema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }

  try {
    //check email if exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    //create user
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
    });
    if (newUser) {
      return res.status(201).json({
        success: true,
        message: "User created successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const login = (req, res) => {};
