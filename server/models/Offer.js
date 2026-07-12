import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    discount: {
      type: Number,
      default: 0,
    },

    couponCode: {
      type: String,
      default: "",
    },

    image: {
      url: String,
      public_id: String,
    },

    redirectLink: {
      type: String,
      default: "/products",
    },

    startDate: Date,

    endDate: Date,

    displayOrder: {
      type: Number,
      default: 1,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Offer", offerSchema);