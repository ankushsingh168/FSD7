import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/dashboard/UserDashboard";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Dashboard */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default App;