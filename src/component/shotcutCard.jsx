


import React from "react";
import {
  Sun,
  Thermometer,
  Wifi,
  Plus,
} from "lucide-react";

const shortcuts = [
  {
    title: "Lights",
    icon: Sun,
  },
  {
    title: "Temp",
    icon: Thermometer,
  },
  {
    title: "Wi-Fi",
    icon: Wifi,
  },
  {
    title: "Add",
    icon: Plus,
  },
];

const ShotcutCard = () => {
  return (
    <div className="w-[300px] min-h-[300px] rounded-[30px] bg-[#f5f5f5] p-5 shadow-md">
      
      <h2 className="mb-7 text-1xl font-bold text-black">
        Shortcuts
      </h2>

      <div className="flex flex-wrap gap-3">
        {shortcuts.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex h-[110px] w-[90px] cursor-pointer flex-col items-center justify-center rounded-[24px] bg-white shadow-sm transition hover:scale-105"
            >
              <Icon
                size={34}
                className="mb-3 text-violet-500"
              />

              <p className="text-[22px] text-gray-500">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShotcutCard;