const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const uploadOnCloudinary =async(localFilePath)=>{
    try{
        if(!localFilePath){
            console.error("file path doesn't exist");
            return null;
        }
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath);
        return response;
    }catch(error){
        console.error("error in uploading file on cloudinary:",error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

module.exports = { uploadOnCloudinary };
