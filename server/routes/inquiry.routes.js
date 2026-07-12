import express from "express";

import {
  createInquiry,
  getInquiries,
  getInquiryById,
  markAsRead,
  deleteInquiry,
} from "../controllers/inquiry.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
PUBLIC
*/

router.post("/", createInquiry);

/*
ADMIN
*/

router.get("/", protect, getInquiries);

router.get("/:id", protect, getInquiryById);

router.put("/:id/read", protect, markAsRead);

router.delete("/:id", protect, deleteInquiry);

export default router;