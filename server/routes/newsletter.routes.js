import express from "express";

import {
  subscribeNewsletter,
  getSubscribers,
  getSubscriber,
  deleteSubscriber,
} from "../controllers/newsletter.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/*
PUBLIC
*/

router.post("/", subscribeNewsletter);

/*
ADMIN
*/

router.get("/", protect, getSubscribers);

router.get("/:id", protect, getSubscriber);

router.delete("/:id", protect, deleteSubscriber);

export default router;