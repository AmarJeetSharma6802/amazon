import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import Product from "../model/product.model.js";
import DBconnect from "../lib/DBconnect.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET() {
  try {
    const items = await Product.find();

    if (!items || items.length === 0) {
      return NextResponse.json({ message: "No products found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Products fetched successfully", data: items },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await DBconnect();

  try {
    const formData = await req.formData();

    const details = formData.get("Details");
    const price = formData.get("price");
    const rating = formData.get("rating");
    const totalReviews = formData.get("totalReviews");
    const offer = formData.get("offer");
    const imageFile = formData.get("image");

    if (!imageFile) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const tempFilePath = path.join("/tmp", imageFile.name);
    await writeFile(tempFilePath, buffer);

    const uploadedImage = await uploadOnCloudinary(tempFilePath);

    if (!uploadedImage?.secure_url) {
      return NextResponse.json({ error: "Failed to upload image to Cloudinary" }, { status: 500 });
    }

    const newProduct = await Product.create({
      details,
      price,
      rating,
      totalReviews,
      offer,
      image: uploadedImage.secure_url,
    });

    return NextResponse.json(
      { message: "Product created successfully", data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Failed to create product", details: error.message },
      { status: 500 }
    );
  }
}
