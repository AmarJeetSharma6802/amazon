import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
Details :String,
 price:Number,
 rating:String,
 totalReviews:String,
 offer:String,
 image :String
},{
    timestamps:true
}
)

const productItems = mongoose.model.productItems || mongoose.model("productItems",ProductSchema)

export default productItems