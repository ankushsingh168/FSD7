import React from "react";
import deliveryboy from "../assets/deliveryboy.png";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="h-[100vh] bg-linear-to-r from-(--secondary) to-(--primary)  flex items-center justify-center">
        <div>
          <img src={deliveryboy} alt="Delivery Boy" />
        </div>
        <div className=""></div>

        <form>
          <div className="flex flex-col gap-2 mt-4  bg-amber-50 p-3.5 rounded-2xl p-3.5 w-75">
            <h1 className="opacity-50 text-center">Login to your account:</h1>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <label htmlFor="email">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />
            <div className="flex justify-between">
              <div>
                <input type="checkbox" />
                <span>Remeber me</span>
              </div>
              <div>
                <span className="text-amber-800">Forget password</span>
              </div>
            </div>

            <button className="bg-blue-700 px-0.5">Login</button>

            <p className="text-center">Don't have an account?</p>
            <Link to="/register" className="text-center text-amber-800">
              Create an account
            </Link>
            <a href="#" className="text-center text-amber-800">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
