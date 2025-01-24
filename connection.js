const mongoose = require("mongoose");

async function connectMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

module.exports = {
  connectMongoDB,
};
