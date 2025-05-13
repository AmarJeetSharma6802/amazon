import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    details: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      min: 0,
    },
    offer: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
