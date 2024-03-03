import React from "react";

const ShapeBody = () => {
  return (
    <>
      <div className="h-[34vmax] w-[34vmax] absolute bottom-0 left-[50%] translate-x-[-70%] translate-y-[30%]">
        <div className="h-full w-full rounded-full bg-[#FF7E28] blur-[35px] absolute animate-shape3Anime"></div>
        <div className="h-[97%] w-[97%] rounded-full bg-[#FE340A] blur-[35px] absolute animate-shape4Anime"></div>
      </div>
    </>
  );
};

export default ShapeBody;
