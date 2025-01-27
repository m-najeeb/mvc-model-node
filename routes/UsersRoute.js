const express = require("express");
const router = express.Router();
const { postAllUser } = require("../controllers/usersControllers");
const { validateUser } = require("../middlewares/validateUser");

router.route("/").post(validateUser, postAllUser);

module.exports = router;
