const mongoose = require("mongoose");

async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri || mongoUri === "your_mongodb_connection_string") {
    throw new Error("MONGO_URI is not set. Add your Atlas URI in backend/.env");
  }

  await mongoose.connect(mongoUri, {
    dbName: "MedCarePlus",
  });

  console.log("MongoDB connected successfully to database: MedCarePlus");
}

module.exports = connectDB;
