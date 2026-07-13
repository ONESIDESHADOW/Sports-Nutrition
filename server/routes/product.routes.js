import express from "express";
import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getBestSellerProducts,
  getNewArrivals,
  getProductsByCategory,
  searchProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

/*
==============================
PUBLIC ROUTES
==============================
*/

router.get("/", getProducts);

router.get("/featured", getFeaturedProducts);

router.get("/best-sellers", getBestSellerProducts);

router.get("/new-arrivals", getNewArrivals);

router.get("/search", searchProducts);

router.get("/category/:categoryId", getProductsByCategory);

router.get("/:id", getProductById);

/*
==============================
ADMIN ROUTES
==============================
*/

router.post(
  "/",
  protect,
  upload.array("images", 5),
  createProduct
);

router.put(
  "/:id",
  protect,
  upload.array("images", 5),
  updateProduct
);

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deleteProduct
);

export default router;