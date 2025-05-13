import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import productItems from "../model/product.model.js"
import DBconnect from "../lib/DBconnect.js"

export const config = {
  api: {
    bodyParser: false, // Needed for handling file uploads
  },
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
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}

// ✅ ADD THIS
export async function POST(req) {
  try {
    const formData = await req.formData();

    const imageFile = formData.get("image");
    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const tempFilePath = path.join(process.cwd(), "temp", imageFile.name);
    await writeFile(tempFilePath, buffer);

    const uploadResponse = await uploadOnCloudinary(tempFilePath);

    const newItem = await productItems.create({
      image: uploadResponse.url,
      offer: formData.get("offer"),
      rating: formData.get("rating"),
      totalReviews: formData.get("totalReviews"),
      price: formData.get("price"),
      details: formData.get("details"),
    });

    return NextResponse.json({ message: "Item uploaded", data: newItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Upload error", error: error.message }, { status: 500 });
  }
}
