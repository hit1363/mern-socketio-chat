import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error(
        "❌ MONGODB_URI is not defined in .env file. Please set it before starting the server."
      );
    }

    mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};
