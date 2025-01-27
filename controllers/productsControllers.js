const Product = require("../models/Product");

async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find({
      $and: [{ price: { $ne: 70000 } }, { price: { $gte: 36000 } }], //Logical Query
    });

    return res.status(200).json({
      status: "success",
      data: allProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      error: error.message,
    });
  }
}

async function postAllProducts(req, res) {
  try {
    const { name, maker, model, price } = req.body;
    const newProduct = await Product.create({ name, maker, model, price });
    return res.status(201).json({
      status: "success",
      msg: "Product created successfully",
      id: newProduct._id,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      error: error.message,
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    return res.status(200).json({
      status: "success",
      msg: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      error: error.message,
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    return res.status(200).json({
      status: "success",
      msg: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({
      status: "error",
      msg: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = {
  getAllProducts,
  postAllProducts,
  updateProduct,
  deleteProduct,
};
