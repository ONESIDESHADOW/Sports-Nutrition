import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      enum: [
        "hero",
        "offer",
        "advertisement",
        "mobile",
      ],
      default: "hero",
    },

    image: {
      url: String,
      public_id: String,
    },

    redirectLink: {
      type: String,
      default: "/",
    },

    displayOrder: {
      type: Number,
      default: 1,
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

export default mongoose.model("Banner", bannerSchema);