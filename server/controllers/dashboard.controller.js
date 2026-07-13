import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Banner from "../models/Banner.js";
import Offer from "../models/Offer.js";
import Testimonial from "../models/Testimonial.js";
import Inquiry from "../models/Inquiry.js";
import Newsletter from "../models/Newsletter.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalProducts,
      totalCategories,
      totalBanners,
      totalOffers,
      totalTestimonials,
      totalInquiries,
      totalSubscribers,

      featuredProducts,
      bestSellerProducts,
      newArrivalProducts,

      latestProducts,
      latestInquiries,
      latestSubscribers,
    ] = await Promise.all([
      Product.countDocuments(),
      Category.countDocuments(),
      Banner.countDocuments(),
      Offer.countDocuments(),
      Testimonial.countDocuments(),
      Inquiry.countDocuments(),
      Newsletter.countDocuments(),

      Product.countDocuments({ featured: true }),
      Product.countDocuments({ bestSeller: true }),
      Product.countDocuments({ newArrival: true }),

      Product.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("category", "name"),

      Inquiry.find()
        .sort({ createdAt: -1 })
        .limit(5),

      Newsletter.find()
        .sort({ createdAt: -1 })
        .limit(5),
    ]);

    res.status(200).json({
      success: true,

      overview: {
        totalProducts,
        totalCategories,
        totalBanners,
        totalOffers,
        totalTestimonials,
        totalInquiries,
        totalSubscribers,
      },

      products: {
        featuredProducts,
        bestSellerProducts,
        newArrivalProducts,
      },

      latestProducts,

      latestInquiries,

      latestSubscribers,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};