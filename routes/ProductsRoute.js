const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  postAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");
const { validateProduct } = require("../middlewares/validateProduct"); //importing Middleware for validation

router.route("/").get(getAllProducts).post(validateProduct, postAllProducts);

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
