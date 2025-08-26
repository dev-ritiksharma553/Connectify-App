import React, { use } from "react";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import { useSelector } from "react-redux";
import useGetAllPost from "@/hooks/UseGetAllPost";
import useGetAllSuggestedUser from "@/hooks/UseGetAllSuggestedUser";


const Home = () => {

  useGetAllPost();
  useGetAllSuggestedUser();

  return (
    <div className="flex min-h-screen gap-4 px-2 sm:px-4">
     

  
      <div className="flex-1 flex justify-center py-14">
        <Feed />
      </div>

      <div className="hidden lg:block w-72 px-4 py-14 ml-20">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
