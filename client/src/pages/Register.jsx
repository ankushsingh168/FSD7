import React from "react";

const Register = () => {
  return (
    <>
      <div className=" h-[100vh] bg-linear-to-r from-(--primary) to-(--danger)  flex items-center justify-center">
        <div>
          <img src="{deliveryboy}" alt="" className="rotate" />
        </div>
        <div className=""></div>

        <form>
          <div className="flex flex-col gap-2 mt-4  bg-amber-50 p-8 rounded-2xl w-100 ">
            <h1 className="opacity-50">Login to your Register:</h1>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />

            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <input
              type="text"
              id="number"
              placeholder="Enter your number"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm your password"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <input
              type="password"
              id="password"
              placeholder="enter your password"
              className="w-[100%] rounded-md border border-gray-300 px-3 py-2"
            />

            <div className="flex  gap-2">
              <input type="checkbox" />
              <span>I agree to the term and condition:</span>
            </div>

            <button className="bg-amber-700">Register</button>

            <p>
              Dont't have an account?{" "}
              <a href="#" className="text-blue-600">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
