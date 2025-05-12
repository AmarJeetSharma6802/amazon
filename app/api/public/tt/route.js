import { NextResponse } from "next/server";
import DBconnect from "../../lib/DBconnect.js";
import { uploadOnCloudinary } from "../../utils/cloudinary";
import path from "path";
import { writeFile } from "fs/promises";
import items from "../../model/item.model.js";

export async function GET() {
  await DBconnect();

  const findItems = await items.find();
  if (!findItems) {
    return NextResponse.json({ message: "Items not found" }, { status: 404 });
  }
  return NextResponse.json(
    { message: "items found succefully", findItems },
    { status: 404 }
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
    const tempFilePath = path.join("/tmp", file.Details);

    await writeFile(tempFilePath, buffer);
    const uploaded = await uploadOnCloudinary(tempFilePath);
    if (!uploaded) {
      return NextResponse.json(
        { error: "Cloudinary upload failed" },
        { status: 500 }
      );
    }

    const items = await items.create({
        Details,
        offer,
        rating,
        totalReviews,
        price,
        image: uploaded.secure_url
    })

     return NextResponse.json({ message: "Product Created", items }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
