import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex">
        <div className="w-1/6 border border-red-500 h-full">Sidebar</div>
        <div className="w-5/6 border border-green-500 h-full">Content</div>
      </div>
    </>
  );
};

export default UserDashboard;
