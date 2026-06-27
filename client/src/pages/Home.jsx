import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-red-300 h-14 p-2 ">
        <div className="flex justify-between h-full items-center ">
          <div>
            <h4>Cravins</h4>
          </div>
          <div className="flex gap-3  ">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
