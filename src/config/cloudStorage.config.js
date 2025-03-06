const cloudinary = require("cloudinary").v2;
const { cloudinaryConfig } = require("../config/env");

cloudinary.config({
  secure: true,
  api_key: cloudinaryConfig.apiKey,
  api_secret: cloudinaryConfig.apiSecret,
  cloud_name: cloudinaryConfig.cloudName,
});

module.exports = cloudinary;
