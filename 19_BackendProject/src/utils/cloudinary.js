// Importing the 'v2' module from the 'cloudinary' library, which provides an interface for interacting with Cloudinary's API.
import { v2 as cloudinary } from "cloudinary";
// Importing the 'fs' module from Node.js, used for file system operations.
import fs from "fs";

// Configuring Cloudinary using the provided environment variables.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Defining an asynchronous function 'uploadCloudinary' for uploading files to Cloudinary.
const uploadCloudinary = async (localFilePath) => {
  try {
    // Checking if 'localFilePath' is provided, if not, return null.
    if (!localFilePath) return null;
    // Uploading the file to Cloudinary using the 'cloudinary.uploader.upload' method.
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically detect the type of resource being uploaded.
    });
    // Logging a success message and the URL of the uploaded file.
    console.log("File is uploaded on cloudinary", response.url);
    // Returning the response from Cloudinary.
    return response;
  } catch (error) {
    // If an error occurs during upload, delete the locally saved temporary file.
    fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the upload fails.
    // Returning null since upload failed.
    return null;
  }
};

// Exporting the 'uploadCloudinary' function to make it accessible from other modules.
export { uploadCloudinary };
