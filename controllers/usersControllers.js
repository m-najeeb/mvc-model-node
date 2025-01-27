const User = require("../models/user");

async function postAllUser(req, res) {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({
      username,
      password,
    });
    return res.status(201).json({
      status: "success",
      msg: "User created successfully",
      id: newUser._id,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = {
  postAllUser,
};
