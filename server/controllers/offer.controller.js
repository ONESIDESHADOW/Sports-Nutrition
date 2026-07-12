import Offer from "../models/Offer.js";

/*
CREATE OFFER
*/

export const createOffer = async (req, res) => {
  try {
    const offer = await Offer.create({
      ...req.body,
      image: req.file
        ? {
            url: req.file.path,
            public_id: req.file.filename,
          }
        : {},
    });

    res.status(201).json({
      success: true,
      message: "Offer created successfully",
      data: offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
GET ALL
*/

export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().sort({
      displayOrder: 1,
      createdAt: -1,
    });

    res.json({
      success: true,
      count: offers.length,
      data: offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
GET ONE
*/

export const getOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer)
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });

    res.json({
      success: true,
      data: offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
UPDATE
*/

export const updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer)
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });

    Object.assign(offer, req.body);

    if (req.file) {
      offer.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await offer.save();

    res.json({
      success: true,
      message: "Offer updated successfully",
      data: offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
DELETE
*/

export const deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer)
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });

    await offer.deleteOne();

    res.json({
      success: true,
      message: "Offer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
ACTIVE OFFERS
*/

export const getActiveOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      isActive: true,
    }).sort({
      displayOrder: 1,
    });

    res.json({
      success: true,
      data: offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};