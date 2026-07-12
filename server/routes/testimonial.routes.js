import express from "express";

import {
  createTestimonial,
  getTestimonials,
  getActiveTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonial.controller.js";

import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
PUBLIC
*/

router.get("/", getTestimonials);

router.get("/active", getActiveTestimonials);

router.get("/:id", getTestimonialById);

/*
ADMIN
*/

router.post(
  "/",
  protect,
  upload.single("image"),
  createTestimonial
);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateTestimonial
);

router.delete(
  "/:id",
  protect,
  deleteTestimonial
);

export default router;