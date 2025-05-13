import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    details: { type: String },
    price: { type: Number },
    rating: { type: String },
    totalReviews: { type: String },
    offer: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

const productItems =
  mongoose.models.productItems || mongoose.model("productItems", ProductSchema);

export default productItems;
