import { NextResponse } from "next/server";
import DBconnect from '../lib/DBconnect.js'
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { writeFile } from "fs/promises";
import path from "path";
import itemApi from "../model/restApi.model.js"


export const config = {
    api: {
      bodyParser: false
    }
  };
export async function GET() {
  await DBconnect()
   try {
    const item = await itemApi.find();
    return NextResponse.json(item);
    
   } catch (error) {
    console.log("get item error" , error)
   }
  }

  
export async function POST(req) {
    await DBconnect();
  
    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const title = formData.get("title")
    const file = formData.get("image");
  
    if (!file) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }
  
    // Save temp file
    const buffer = Buffer.from(await file.arrayBuffer());
    const tempFilePath = path.join("public", "temp", file.name);
    // const tempFilePath = path.join("/tmp", file.name); // ✅ Use /tmp instead of public/temp

    await writeFile(tempFilePath, buffer);
  
    // Upload to Cloudinary
    const uploaded = await uploadOnCloudinary(tempFilePath);
    if (!uploaded) {
      return NextResponse.json({ error: "Cloudinary upload failed" }, { status: 500 });
    }
  
    // Save in DB
    const product = await itemApi.create({
      name,
      price,
      title,
      image: uploaded.secure_url,
    });
  
    return NextResponse.json({ message: "Product Created", product }, { status: 201 });
  }

