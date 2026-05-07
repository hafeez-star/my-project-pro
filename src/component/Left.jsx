



import React from "react";
import {
  RiHome4Line,
  RiRestaurantLine,
  RiHotelBedLine,
  RiSparklingLine,
  RiMore2Fill,
} from "react-icons/ri";

const roomData = [
  {
    id: 1,
    title: "Living Room",
    icon: RiHome4Line,
  },
  {
    id: 2,
    title: "Kitchen",
    icon: RiRestaurantLine,
  },
  {
    id: 3,
    title: "Bed Room",
    icon: RiHotelBedLine,
  },
  {
    id: 4,
    title: "Bathroom",
    icon: RiSparklingLine,
  },
  {
    id: 5,
    title: "Bed Room",
    icon: RiHotelBedLine,
  },
  {
    id: 6,
    title: "Bathroom",
    icon: RiSparklingLine,
  },
];

const Left = () => {
  return (
    <div className="p-2">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className=" font-bold">Rooms</h1>

        <select className="outline-none">
          <option>Master bed room</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-3">

        {roomData.map((room) => {
          const Icon = room.icon;

          return (
            <div
              key={room.id}
              className="border rounded-2xl p-5 shadow-sm"
            >

              {/* Top */}
              <div className="flex justify-between items-start mb-6">

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div className="w-10 h-10 bg-violet-500 rounded-full flex justify-center items-center text-white text-2xl">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h2 className=" font-bold">
                    {room.title}
                  </h2>

                </div>

                <RiMore2Fill className="text-1xl text-gray-500" />
              </div>

              {/* Light */}
              <p className="text-gray-500 text-xl mb-4">
                Light
              </p>

              {/* Toggle */}
              <div className="w-15 h-10 bg-violet-500 rounded-full p-1 flex items-center mb-6">
                <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
              </div>

              {/* Devices */}
              <button className="text-violet-500 text-lg">
                Devices ▾
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Left;