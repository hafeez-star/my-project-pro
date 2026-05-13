

import React from "react";

const LightColor = () => {
  return (
    <div className="w-full rounded-[30px] bg-[#f5f5f5] p-8 h-full shadow-sm">
      
      <h2 className="mb-8 text-3xl font-bold text-black">
        Light Color
      </h2>

      <div className="flex items-center justify-center">
        
        {/* Color Wheel */}
        <div
          className="h-[220px] w-[220px] rounded-full border-[12px] border-white shadow-md"
          style={{
            background:
              "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
          }}
        />
      </div>
    </div>
  );
};

export default LightColor;