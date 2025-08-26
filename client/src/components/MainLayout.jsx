import React from "react";
import LeftSideBar from "./LeftSideBar";

import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex justify-center min-h-screen px-4">
    
      <LeftSideBar />


      <div className="flex w-full max-w-6xl gap-6">
      
        <div className="flex-grow max-w-full">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
