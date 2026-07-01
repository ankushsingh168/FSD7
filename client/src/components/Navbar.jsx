import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, islogin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setIsLogin(false);
    SpeechSynthesisUtterance(false);
    navigate("/");
  };
  return (
    <>
      <div className="bg-(--primary) text-(--primary-text) p-3 flex justify-between h-full ">
        <div>Cravings</div>
        <div className="flex gap-4 items-center">
          <Link to={"/"} className="hover.underline">
            Home
          </Link>
          <Link to={"/contact-us"} className="hover.underline">
            ContactUs
          </Link>

          <Link to={"/login"} className="hover.underline">
            Login
          </Link>
          <Link to={"/register"} className="hover.underline">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
