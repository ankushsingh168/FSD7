import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Server Started");
  res.json({ message: "welcome to my first backend project" });
});

app.post("/login",(req,res)=>{
  res.json({message : "Login succesfully"})
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port:", port);
});
