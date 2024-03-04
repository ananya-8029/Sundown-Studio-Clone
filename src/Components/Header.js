import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-[2.2vmax]">
        <img
          src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
          alt="Not Available"
        />

        <div className="flex items-center gap-[0.8vw] font-normal text-slate-800 text-[1.1vmax]">
          <h1 className="relative border-2 border-[#c1bcb6e8] rounded-3xl px-[1.5vmax] py-[0.5vmax] cursor-pointer after:content-[''] after:absolute after:h-full after:w-full after:bg-black after:left-0 after:bottom-[-100%] after:hover:bottom-0 after:hover:rounded-none after:rounded-full after:ease-in-out after:transition-all after:duration-300 hover:text-[#EFEAE3] overflow-hidden">
            <span className="relative z-10">Work</span>
          </h1>
          <div className="relative border-2 border-[#c1bcb6e8] rounded-3xl px-[1.5vmax] py-[0.5vmax] cursor-pointer after:content-[''] after:absolute after:h-full after:w-full after:bg-black after:left-0 after:bottom-[-100%] after:hover:bottom-0 after:rounded-full after:hover:rounded-none  after:transition-all after:hover:ease-in-out after:duration-300 hover:text-[#EFEAE3] overflow-hidden">
            <span className="relative z-10">Studio</span>
          </div>
          <h1 className="relative border-2 border-[#c1bcb6e8] rounded-3xl px-[1.5vmax] py-[0.5vmax] cursor-pointer after:content-[''] after:absolute after:h-full after:w-full after:bg-black after:left-0 after:bottom-[-100%] hover:after:bottom-0 after:hover:rounded-none after:rounded-full after:ease-in-out after:transition-all after:duration-300 hover:text-[#EFEAE3] overflow-hidden">
            <span className="relative z-10">Contact</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
