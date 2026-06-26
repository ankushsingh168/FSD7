import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    if (password !== existingUser.password) {
      const error = new Error("Incorrect password");
      error.statusCode = 401;
      return next(error);
    }

    return res.status(200).json({
      message: "Welcome Back",
      data: existingUser,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const LogoutUser = (req, res) => {
  return res.status(200).json({
    message: "Logout successful",
  });
};
