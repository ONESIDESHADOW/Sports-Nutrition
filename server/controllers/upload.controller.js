import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = async (req, res) => {
  try {

     console.log("req.file:", req.file); 
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

const result = await new Promise((resolve, reject) => {
  const uploadStream = cloudinary.uploader.upload_stream(
    {
      folder: "premium-sports-nutrition",
    },
    (error, result) => {
      if (error) return reject(error);
      resolve(result);
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
});

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      image: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error(error);
    console.error("Full error:", error);
  console.error("Message:", error.message);
  console.error("HTTP Code:", error.http_code);
  console.error("Response:", error.response);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};