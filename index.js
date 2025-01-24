require("dotenv").config();
const express = require("express");
const { connectMongoDB } = require("./connection");
const productsRoute = require("./routes/ProductsRoute");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectMongoDB(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

// Routes
app.use("/products", productsRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
