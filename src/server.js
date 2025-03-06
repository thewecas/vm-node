const express = require("express");
const { appConfig } = require("./config/env");
const app = express();
const userRoutes = require("./routes/user.routes");
const { upload } = require("./utility/upload");

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/files", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("Somethign is wrong");
    }
    res.status(200).json({
      success: true,
      data: { fileUrl: req.file.path, public_id: req.file.filename },
      message: `file saved`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Mount user routes under /users path
app.use("/users", userRoutes);

//Start the Express server on configured port
app.listen(appConfig.port, (error) => {
  if (error) console.log("Error starting the server");
  else console.log(`Server started on port ${appConfig.port}`);
});
