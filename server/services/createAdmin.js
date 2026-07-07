import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const exists = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    await Admin.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      password: "admin123",
    });

    console.log("Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

createAdmin();