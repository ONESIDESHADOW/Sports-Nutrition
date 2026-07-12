import express from "express";

import upload from "../middleware/upload.middleware.js";

import { protect } from "../middleware/auth.middleware.js";

import {
createBanner,
getBanners,
getBannerById,
updateBanner,
deleteBanner,
} from "../controllers/banner.controller.js";

const router = express.Router();

router.get("/", getBanners);

router.get("/:id", getBannerById);

router.post(
"/",
protect,
upload.single("image"),
createBanner
);

router.put(
"/:id",
protect,
upload.single("image"),
updateBanner
);

router.delete(
"/:id",
protect,
deleteBanner
);

export default router;