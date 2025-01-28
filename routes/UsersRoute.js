const express = require("express");
const router = express.Router();
const {
  postAllUser,
  postUserProfile,
} = require("../controllers/usersControllers");
const { validateUser } = require("../middlewares/validateUser");
const { validateToken } = require("../middlewares/validateToken");

router.route("/").post(validateUser, postAllUser);
router.route("/profile").post(validateToken, postUserProfile);

module.exports = router;
