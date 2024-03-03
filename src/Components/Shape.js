import React from "react";

const Shape = () => {
  return (
    <>
      <div className="h-[40vmax] w-[55vmax] absolute right-0 top-[80vh]">
        <div className="h-full w-full bg-[#fe330a] rounded-l-[50%] absolute blur-[20px]"></div>
        <div className="h-[80%] w-[80%] bg-[#fe330a] rounded-full absolute blur-[20px] left-0 animate-shape2Anime"></div>
        <div className="h-[85%] w-[85%] bg-[#fe330a] rounded-full absolute blur-[20px] animate-shape1Anime"></div>
      </div>
    </>
  );
};

export default Shape;
