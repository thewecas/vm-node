const express = require("express");
const appConfig = require("./config/app.config");
const app = express();
const userRoutes = require("./routes/user.routes");

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world')
})

// Mount user routes under /users path
app.use("/users", userRoutes);

//Start the Express server on configured port
app.listen(appConfig.port, (error) => {
  if (error) console.log("Error starting the server");
  else console.log(`Server started on port ${appConfig.port}`);
});
