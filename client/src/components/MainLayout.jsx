import React from "react";
import LeftSidebar from "./LeftSidebar.jsx";

import RightSideBar from "./RightSideBar.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex justify-center min-h-screen px-4">
    
      <LeftSidebar />


      <div className="flex w-full max-w-6xl gap-6">
      
        <div className="flex-grow max-w-full">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
