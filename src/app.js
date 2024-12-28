import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.PORT,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(express.json({ limit: "50mb" }));

import userRoute from "./routes/user.routes.js";

app.use("/api/v1/users", userRoute);

export { app };
