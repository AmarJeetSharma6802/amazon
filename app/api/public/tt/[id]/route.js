import { NextResponse } from "next/server";
import DBconnect from "../../../lib/DBconnect";
import items from "@/app/api/model/item.model";
import { uploadOnCloudinary } from "@/app/api/utils/cloudinary";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";

export async function GET(req, { params }) {
  await DBconnect();

  const { id } = params;
  const findItem = await items.findById(id);

  if (!findItem) {
    return NextResponse.json(
      { message: "Item not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "Item found successfully", item: findItem },
    { status: 200 }
  );
}

export async function PUT(req, { params }) {
  const id = params.id;

  try {
    await DBconnect();

    const formData = await req.formData();
    const Details = formData.get("Details");
    const rating = formData.get("rating");
    const totalReviews = formData.get("totalReviews");
    const price = formData.get("price");
    const offer = formData.get("offer");
    const file = formData.get("image");

    let updateItems = { Details, rating, totalReviews, price, offer };

    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const tempDir = "/tmp";
      await mkdir(tempDir, { recursive: true });

      const tempFilePath = `${tempDir}/${file.name}`;
      await writeFile(tempFilePath, buffer);

      const uploaded = await uploadOnCloudinary(tempFilePath);

      if (!uploaded) {
        return NextResponse.json(
          { error: "Cloudinary upload failed" },
          { status: 500 }
        );
      }

      updateItems.image = uploaded.secure_url;

      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
    }

    const updateItem = await items.findByIdAndUpdate(id, updateItems, {
      new: true,
    });

    if (!updateItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Item updated successfully", item: updateItem },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Update failed", details: error.message },
      { status: 500 }
    );
  }
}
