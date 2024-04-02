import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_NAME,
    api_key: process.env.CLOUDNIARY_API_KEY,
    api_secret: process.env.CLOUDNIARY_API_SECRET
});

const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null
        const response = await cloudinary.uploader.upload(localfilePath, {
            resource_type: "auto"
        })
        console.log("File uploaded on cloudinary....", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localfilePath); //remove the local saved temp file
        return null
    }
}

export {uploadOnCloudinary};