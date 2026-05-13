


import React from "react";

const LightIns = ({ value = 60 }) => {
  return (
    <div className="w-full rounded-[30px] bg-[#f5f5f5] p-4 shadow-sm">
      
      <h2 className="mb-8 text-2xl font-bold text-black">
        Light Intensity
      </h2>

      <div className="flex flex-col items-center justify-center">
        
        {/* Circle */}
        <div className="relative flex items-center justify-center">
          
          <svg width="260" height="260" className="-rotate-90">
            
            {/* Background Circle */}
            <circle
              cx="130"
              cy="130"
              r="95"
              stroke="#ececec"
              strokeWidth="22"
              fill="none"
            />

            {/* Progress Circle */}
            <circle
              cx="130"
              cy="130"
              r="95"
              stroke="#8b5cf6"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={597}
              strokeDashoffset={597 - (597 * value) / 100}
            />
          </svg>
        </div>

        {/* Percentage */}
        <p className="mt-4 text-3xl font-bold text-violet-500">
          {value}%
        </p>
      </div>
    </div>
  );
};

export default LightIns;