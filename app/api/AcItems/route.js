import DBconnect from "../lib/DBconnect.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import productItems from "../model/product.model.js"

export const config = {
    api: {
      bodyParser: false
    }
  };

export async function GET(req, { params }) {
  try {
    const finditems = await productItems.find();

    if (!finditems || finditems.length === 0) {
      return NextResponse.json({ message: "Items not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Items found successfully", data: finditems },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
   await DBconnect()
    try {
    const formData = await req.formData();
    const Details = formData.get("Details");
    const price = formData.get("price");
    const rating = formData.get("rating");
    const totalReviews = formData.get("totalReviews");
    const offer = formData.get("offer");
    const file = formData.get("image");

    if (!file) {
          return NextResponse.json({ error: "Image is required" }, { status: 400 });
        }
    const buffer = Buffer.from(await file.arrayBuffer());
    const tempFilePath = path.join("/tmp", file.name)
    await writeFile(tempFilePath, buffer);
    const uploaded = await uploadOnCloudinary(tempFilePath);
if (!uploaded) {
      return NextResponse.json({ error: "Cloudinary upload failed" }, { status: 500 });
    }
        
    const product = await productItems.create({
        Details,
        price,
        rating,
        totalReviews,
        offer,
        image: uploaded.secure_url
    })
    return NextResponse.json({ message: "Product Created", product }, { status: 201 });
    } catch (error) {
          console.error("POST error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
