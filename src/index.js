// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    console.log(`Server is Running at port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
