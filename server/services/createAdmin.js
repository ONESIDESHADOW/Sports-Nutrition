import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

const createAdmin = async () => {
  try {
    await connectDB();

    const exists = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (exists) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    await Admin.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });

    console.log("✅ Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit();
  }
};

createAdmin();