import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.get("/", getCategories);
router.get("/:id", getCategoryById);

// Protected Routes
router.post("/", protect, createCategory);
router.put("/:id", protect, updateCategory);
router.delete("/:id", protect, deleteCategory);

export default router;