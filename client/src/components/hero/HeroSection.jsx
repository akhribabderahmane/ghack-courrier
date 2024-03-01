import React from "react";
import illustration from "../../assets/Rectangle 9.png";
const HeroSection = () => {
  return (
    <div className="px-12 bg-darkBlue text-white flex flex-row items-center h-screen">
      <div className="w-1/2 flex flex-col gap-4 justify-center pl-20">
        <h1 className=" font-bold text-2xl">
          Streamline Your Communication,<br></br> Supercharge Your Efficiency.
        </h1>
        <div>
          <button className=" px-8 py-1 rounded-full bg-blue-500 font-bold hover:bg-blue-700 text-lg">
            try for free
          </button>
        </div>
      </div>
      <div className=" w-1/2">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default HeroSection;

const styleItems = () => {
  return (
    <div>
      <div class="triangle-right"></div>
      <div class="left-right"></div>
    </div>
  );
};
