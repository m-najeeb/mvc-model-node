const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function postAllUser(req, res) {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({
      username,
      password,
    });
    const token = jwt.sign({ newUser }, process.env.SECRET_KEY, {
      expiresIn: "300s",
    });
    return res.status(201).json({
      status: "success",
      msg: "User created successfully",
      id: newUser._id,
      token,
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

async function postUserProfile(req, res) {
  jwt.verify(req.token, process.env.SECRET_KEY, (error, authData) => {
    if (error) {
      res.send({ result: "Invalid token" });
    }
    res.json({
      msg: "Profile accessed",
      authData,
    });
  });
}

module.exports = {
  postAllUser,
  postUserProfile,
};
