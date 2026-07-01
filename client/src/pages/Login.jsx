import React, { useState } from "react";
import deliveryboy from "../assets/deliveryboy.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);

      // Test Toast

      // Response Check
      console.log(res.data);
      console.log(res.data.data);
      console.log(res.data.data.photo);

      // Save User Data
      sessionStorage.setItem("UserData", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      navigate("/user/dashboard");

      // Success Toast
      toast.success(res.data.message || "Login Successful");

      // Redirect
      // navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    }
  };

  return (
    <div className="h-screen bg-linear-to-r from-(--secondary) to-(--primary) flex items-center justify-center gap-10">
      <div>
        <img src={deliveryboy} alt="Delivery Boy" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 bg-amber-50 p-4 rounded-2xl w-80">
          <h1 className="opacity-50 text-center text-xl font-semibold">
            Login to your account
          </h1>

          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />

          <div className="flex justify-between text-sm">
            <div>
              <input type="checkbox" />
              <span className="ml-1">Remember me</span>
            </div>

            <span className="text-amber-800 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
          >
            Login
          </button>

          <p className="text-center">Don't have an account?</p>

          <Link
            to="/register"
            className="text-center text-amber-800 font-medium"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
