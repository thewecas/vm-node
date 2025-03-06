const cloudinary = require("../config/cloudStorage.config");
const fs = require("node:fs");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("node:path");
const multer = require("multer");
const { cloudinaryConfig } = require("../config/env");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads2",
    allowed_formats: ["pdf"],
    format: async (_req, file) => path.extname(file.originalname).substring(1),
    public_id: (_req, file) =>
      `${path.parse(file.originalname).name}-${Date.now()}`,
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: cloudinaryConfig.maxFileSize,
  },
});

module.exports = { upload };
