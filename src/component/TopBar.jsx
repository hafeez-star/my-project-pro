

import React from "react";
import { RiSearchLine, RiNotification3Line, RiSettings3Line } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-sm">
      
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[500px]">
        <RiSearchLine className="text-gray-500 text-xl mr-2" />
        <input
          type="text"
          placeholder="Search rooms, devices, or users..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-5">
        
        
        <div className="relative cursor-pointer">
          <RiNotification3Line className="text-2xl text-gray-700" />
          
       
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
            100
          </span>
        </div>

       
        <RiSettings3Line className="text-2xl text-gray-700 cursor-pointer" />

       
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-semibold">
          JR
        </div>

      </div>
    </div>
  );
};

export default TopBar;