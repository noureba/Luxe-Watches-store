import User from "../models/userScema.js";

export const getData = async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  try {
    //fin user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
