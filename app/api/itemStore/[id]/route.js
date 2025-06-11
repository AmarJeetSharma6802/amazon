import { NextResponse } from "next/server";
import DBconnect from "../../lib/DBconnect";
import itemApi from "../../model/restApi.model";
import { uploadOnCloudinary } from "../../utils/cloudinary";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";

export async function GET(req,{params}){
    await DBconnect()

    const id = params.id;
    const findItem = await itemApi.findById(id)

    if(!findItem){
        return NextResponse.json({message:"findItem not found"}, {status:404})
    }
    return NextResponse.json(
        {message:"find succefully ", "findItem":findItem}
    ,{status:200}
    )
}


export async function PUT(req,{ params}){
  await  DBconnect()

  try {
    const id = params.id;

    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const title = formData.get("title")
    const file = formData.get("image");
  
    let updateData = {name , price,title}

    if(file && file.name){
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
      updateData.image = uploaded.secure_url

      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
    }

    const updateItem  = await itemApi.findByIdAndUpdate(id,
        updateData,{
            new:true
        }
    )
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

export async function DELETE(req, context) {
  try {
    await  DBconnect()
    const { id } = context.params;

    const findItem = await itemApi.findByIdAndDelete(id);

    if (!findItem) {
      return NextResponse.json({ message: "Item nahi mila" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Delete successfully", findItem },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

