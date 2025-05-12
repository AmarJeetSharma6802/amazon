import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  Details: String,
  rating: String,
  totalReviews: Number,
  price: Number,
  offer: Number,
  image: String,
},
{
    timestamps:true
});

const items =  mongoose.model.items || mongoose.model("items",itemSchema)

export default items