import Newsletter from "../models/Newsletter.js";

/*
=====================================
SUBSCRIBE
=====================================
*/

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Newsletter.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed",
      });
    }

    const subscriber = await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: subscriber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=====================================
GET ALL
=====================================
*/

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=====================================
GET SINGLE
=====================================
*/

export const getSubscriber = async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      data: subscriber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=====================================
DELETE
=====================================
*/

export const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    await subscriber.deleteOne();

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};