





import React from "react";

const AnalyticsCard = () => {
  const days = [
    { day: 18, height: "h-24", active: true },
    { day: 19, height: "h-20" },
    { day: 20, height: "h-32" },
    { day: 21, height: "h-16" },
    { day: 22, height: "h-44", active: true },
    { day: 23, height: "h-24" },
    { day: 24, height: "h-36" },
    { day: 25, height: "h-24" },
  ];

  return (
    <div className="bg-white rounded-[30px] p-4 shadow-sm">

      <div className="grid grid-cols-2 ">

        {/* Left Side */}
        <div>

          {/* Time */}
          <div className="flex items-center gap-5 mb-10">

            <div className="bg-gray-100 px-5 py-3 rounded-2xl ">
              09:30 PM
            </div>

            <span className="text-3xl text-gray-500">to</span>

            <div className="bg-gray-100 px-5 py-3 rounded-2xl ">
              01:30 AM
            </div>

          </div>

          {/* Circle */}
          <div className="flex justify-center mb-10">

            <div className="relative w-30 h-30 rounded-full border-[16px] border-gray-100">

              {/* Purple Border */}
              <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-violet-500 border-r-violet-500 border-b-violet-500 rotate-[45deg]"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                65%
              </div>

            </div>

          </div>

          {/* Slider */}
          <div>

            <div className="flex justify-around  text-gray-500 mb-4">
              <span>Off</span>
              <span>100%</span>
            </div>

            <input
              type="range"
              value="50"
              className="w-50 accent-violet-500"
            />

            <p className="text-center text-2xl text-gray-500 mt-3">
              65%
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <h2 className="text-1xl ms-4 font-bold text-gray-600 mb-10">
            Last days
          </h2>

          {/* Graph */}
          <div className="flex items-end gap-5 h-56 mb-16">

            {days.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center "
              >

                <div
                  className={`w-2 rounded-full ${
                    item.active ? "bg-violet-500" : "bg-gray-500"
                  } ${item.height}`}
                ></div>

                <p className="text-1xl text-gray-500">
                  {item.day}
                </p>

              </div>
            ))}

          </div>

          {/* Buttons */}
          <div className="flex gap-2">

            <button className="px-5 py-2 bg-gray-100 rounded-3xl ">
              Devices
            </button>

            <button className="px-5 py-2 bg-gray-100 rounded-3xl ">
              Schedule
            </button>

            <button className="px-5 py-2 bg-violet-500 text-white rounded-3xl ">
              Boost
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AnalyticsCard;