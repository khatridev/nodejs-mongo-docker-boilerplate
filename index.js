const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user-routes.js");
require("dotenv").config();
const config = require("./config/db");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});

app.use(userRouter);

mongoose
  .connect(config.db.test)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
