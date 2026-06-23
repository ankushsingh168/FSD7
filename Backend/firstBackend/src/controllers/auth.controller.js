import User from "../models/user.model";
import { response } from "express";

export const RegisterUser = (req, res) => {
  try 
  {
    const {fullName,email,password,phone, gender, dob} = req.body;

    if(!fullName || !email || !password || !phone || !gender || !dob){

      res.status(400).json({ message: "All Feilds Required"});
      return;
    
    }
    const existingUser = await User.findOne({ email }); 
    if(existingUser){
      res.status(409).json({message: "Email already registered"});
      return;
    }


    // create New User and Complete registration will do this 

  }catch (error) {}
};
export const LoginUser = (req, res) => {
  res.json({ message: "Login successfull from controller" });
};


export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successfull from controller" });
};

