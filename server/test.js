import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary Config:");
console.log({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing",
});

try {
  console.log("Testing Cloudinary Connection...");
  const ping = await cloudinary.api.ping();
  console.log("Ping Result:", ping);

  console.log("Uploading test.png...");

  const result = await cloudinary.uploader.upload("./test.png", {
    folder: "premium-sports-nutrition",
    resource_type: "image",
  });

  console.log("✅ Upload Successful");
  console.log(result);

} catch (error) {
  console.log("❌ Upload Failed");
  console.dir(error, { depth: null });
}