import Banner from "../models/Banner.js";

/*
=========================================
CREATE BANNER
=========================================
*/
export const createBanner = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      type,
      redirectLink,
      displayOrder,
      isActive,
    } = req.body;

    const banner = await Banner.create({
      title,
      subtitle,
      type,
      redirectLink,
      displayOrder,
      isActive,
      image: req.file
        ? {
            url: req.file.path,
            public_id: req.file.filename,
          }
        : {},
    });

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=========================================
GET ALL BANNERS
=========================================
*/
export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({
      displayOrder: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: banners.length,
      data: banners,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=========================================
GET SINGLE BANNER
=========================================
*/
export const getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=========================================
UPDATE BANNER
=========================================
*/
export const updateBanner = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      type,
      redirectLink,
      displayOrder,
      isActive,
    } = req.body;

    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    banner.title = title ?? banner.title;
    banner.subtitle = subtitle ?? banner.subtitle;
    banner.type = type ?? banner.type;
    banner.redirectLink = redirectLink ?? banner.redirectLink;
    banner.displayOrder = displayOrder ?? banner.displayOrder;
    banner.isActive =
      isActive !== undefined ? isActive : banner.isActive;

    if (req.file) {
      banner.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await banner.save();

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
=========================================
DELETE BANNER
=========================================
*/
export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    // Optional:
    // Delete image from Cloudinary using banner.image.public_id

    await banner.deleteOne();

    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};