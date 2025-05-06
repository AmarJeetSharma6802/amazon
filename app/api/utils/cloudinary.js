import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDE_NAME , 
    api_key: process.env.API_KEY , 
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
  
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
  
      fs.unlinkSync(localFilePath); // remove local file after upload
      return response;
    } catch (error) {
      console.error("Cloudinary upload error:", error); 
      fs.unlinkSync(localFilePath);
      return null;
    }
  };
  
  export { uploadOnCloudinary };