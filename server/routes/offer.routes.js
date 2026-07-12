import express from "express";

import upload from "../middleware/upload.middleware.js";

import { protect } from "../middleware/auth.middleware.js";

import {
createOffer,
getOffers,
getOffer,
updateOffer,
deleteOffer,
getActiveOffers,
} from "../controllers/offer.controller.js";

const router = express.Router();

/*
PUBLIC
*/

router.get("/", getOffers);

router.get("/active", getActiveOffers);

router.get("/:id", getOffer);

/*
ADMIN
*/

router.post(
"/",
protect,
upload.single("image"),
createOffer
);

router.put(
"/:id",
protect,
upload.single("image"),
updateOffer
);

router.delete(
"/:id",
protect,
deleteOffer
);

export default router;