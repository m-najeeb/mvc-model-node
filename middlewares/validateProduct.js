const validateProduct = (req, res, next) => {
  const { name, maker, model, price } = req.body;

  if (!name || !maker || !model || price == null) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({ msg: "Price must be a positive number" });
  }

  next();
};

module.exports = { validateProduct };
