import mongoose from "mongoose";

const itemSchema= new mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    image :String
},{
    timestamps:true
}
)

const itemApi = mongoose.models.itemApi || mongoose.model("itemApi", itemSchema);


export default itemApi