import mongoose from "mongoose";

const DBconnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default DBconnect;
