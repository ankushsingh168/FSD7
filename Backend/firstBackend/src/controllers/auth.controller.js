import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {
  try {
    
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const  error = new Error ("All feild Required");
      error.statusCode = 400;
      
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email already registered" });
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created successsfully" });
  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({ message: "Internal server Error" });
  }
};
export const LoginUser = (req, res) => {
  res.json({ message: "Login successfull from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successfull from controller" });
};
export default User;