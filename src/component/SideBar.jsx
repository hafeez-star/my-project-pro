import React from "react";
import {
  RiHome8Line,
  RiMessage2Line,
  RiBarChartLine,
  RiShieldLine,
  RiDeviceLine,
  RiUser3Line,
  RiLoginBoxLine,
  RiUserAddLine,
} from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-purple-600 to-violet-500 text-white p-4 flex flex-col justify-between">

      
      <div>
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 font-bold">
              SH
            </div>
            <h1 className="text-lg font-semibold">Smart Home</h1>
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20">
            K
          </div>
        </div>

  
        <ul className="space-y-6 ps-4">

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiHome8Line size={20} />
            <span>Home</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiMessage2Line size={20} />
            <span>Messages</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiBarChartLine size={20} />
            <span>Statistics</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiShieldLine size={20} />
            <span>Security</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiDeviceLine size={20} />
            <span>Devices</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiUser3Line size={20} />
            <span>Profile</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiLoginBoxLine size={20} />
            <span>Signin</span>
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
            <RiUserAddLine size={20} />
            <span>Signup</span>
          </li>

        </ul>
      </div>

      {/* Bottom Card */}
      <div className="bg-white/20 p-4 rounded-2xl text-sm">
        Control your home with Hafeez Devolper
      </div>

    </div>
  );
};

export default SideBar;