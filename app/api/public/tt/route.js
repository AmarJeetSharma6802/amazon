import { NextResponse } from "next/server";
import DBconnect from "../../lib/DBconnect.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import path from "path";
import { writeFile } from "fs/promises";
import os from "os";
import items from "@/app/api/model/item.model.js";

// GET: Fetch all items
export async function GET() {
  await DBconnect();

  const findItems = await items.find();
  if (!findItems || findItems.length === 0) {
    return NextResponse.json({ message: "Items not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Items found successfully", findItems },
    { status: 201 }
  );
}

export async function POST(req) {
  await DBconnect();

  try {
    const formData = await req.formData();
    const Details = formData.get("Details");
    const rating = formData.get("rating");
    const totalReviews = formData.get("totalReviews");
    const price = formData.get("price");
    const offer = formData.get("offer");
    const file = formData.get("image");

   if (!file) {
        return NextResponse.json({ error: "Image is required" }, { status: 400 });
      }

     const buffer = Buffer.from(await file.arrayBuffer());
    
    const tempFilePath = path.join("public", "temp", file.name);
         await writeFile(tempFilePath, buffer);

          const uploaded = await uploadOnCloudinary(tempFilePath);
    if (!uploaded) {
      return NextResponse.json({ error: "Cloudinary upload failed" }, { status: 500 });
    }

    const product = await items.create({
      Details,
      rating,
      totalReviews,
      price,
      offer,
      image: uploaded.secure_url,
    });

    return NextResponse.json({ message: "Product Created", product }, { status: 201 });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
