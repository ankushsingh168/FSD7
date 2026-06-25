import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// default API
app.get("/", (req, res) => {
  console.log("Server Started ");
  res.json({ message: "welcome to my first backend project" });
});

// Default Error Handler
app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal server Error";
  const ErrorStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json ({message: ErrMessage});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port:", port);
  connectDB();
});
