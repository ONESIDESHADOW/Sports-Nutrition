import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      shortDescription,
      description,
      price,
      mrp,
      category,
      flavour,
      weight,
      stock,
      featured,
      bestSeller,
      newArrival,
      tags,
    } = req.body;

    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const slug = name.toLowerCase().replace(/\s+/g, "-");

    const productExists = await Product.findOne({ slug });

    if (productExists) {
      return res.status(400).json({
        success: false,
        message: "Product already exists",
      });
    }

    const images =
      req.files?.map((file) => ({
        url: file.path,
        public_id: file.filename,
      })) || [];

    const product = await Product.create({
      name,
      slug,
      shortDescription,
      description,
      price,
      mrp,
      discount: mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0,
      category,
      flavour,
      weight,
      stock,
      featured,
      bestSeller,
      newArrival,
      tags,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name"
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = { ...req.body };

    if (data.name) {
      data.slug = data.name.toLowerCase().replace(/\s+/g, "-");
    }

    if (req.files?.length) {
      data.images = req.files.map((file) => ({
        url: file.path,
        public_id: file.filename,
      }));
    }

    if (data.price && data.mrp) {
      data.discount =
        data.mrp > data.price
          ? Math.round(((data.mrp - data.price) / data.mrp) * 100)
          : 0;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({
      featured: true,
      status: true,
    }).populate("category", "name");

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBestSellerProducts = async (req, res) => {
  try {
    const products = await Product.find({
      bestSeller: true,
      status: true,
    }).populate("category", "name");

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getNewArrivals = async (req, res) => {
  try {
    const products = await Product.find({
      newArrival: true,
      status: true,
    })
      .populate("category", "name")
      .limit(8);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.categoryId,
      status: true,
    }).populate("category", "name");

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const products = await Product.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
      status: true,
    });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};