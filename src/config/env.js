module.exports = {
  appConfig: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || "development",
  },
  cloudinaryConfig: {
    apiKey: process.env.CLOUDINARY_API_KEY || "277395731222932",
    apiSecret:
      process.env.CLOUDINARY_API_SECRET || "O4MQzn6-phztVQbjtd0a3oa3c2I",
    cloudName: "dajbev3p5",
    maxFileSize: 5 * 1024 * 1024,
  },
};
