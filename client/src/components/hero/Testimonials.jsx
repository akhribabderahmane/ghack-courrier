import React from "react";
import ibm from "../../assets/images/ibm_logo.svg";
import ceo from "../../assets/images/ceo.svg";

const Testimonials = () => {
  return (
    <div className="flex flex-col  justify-around items-center align-middle w-full mt-12 sm:mt-24   ">
      <h1 className="align-middle text-5xl font-extrabold text-dark-grey">
        Testimonials
      </h1>

      <img
        src={ibm}
        alt="Description of your image"
        className="h-full w-full h-40px w-2/4 sm:h[40px] sm:w-[190px] mt-12 sm:mt-24"
        height="180"
        width="40"
      />

      <div className="flex flex-col items-center font-extrabold mt-2 sm:mt-8">
        <div className="text-[10px] sm:text-2xl text-grey ">
          Drowning in emails and social media messages?{" "}
        </div>

        <div className="text-[10px]  sm:text-2xl text-grey">
          Respondr helps you stay afloat.
        </div>
      </div>
      <div className="flex flex-row  justify-around items-center  w-2/3 lg:w-1/3 text-xl font-extrabold text-dark-grey mt-12 sm:mt-24  rounded-lg p-4 shadow-[0px_0px_10px_0px_#252B42]">
        <img
          src={ceo}
          alt="Description of your image"
          className=" h-80px w-80px sm:h[40px] sm:w-[190px] "
          height="180"
          width="40"
        />
        <div className="flex flex-col   text-[8px] lg:text-lg ">
          <div>Organize across</div>
          <div>CEO</div>
        </div>
      </div>
      <div className="bg-primary rounded-3xl mt-4 sm:mt-8 ">
        <button className=" text-white font-extrabold sm:text-lg p-2 pl-12 pr-12">More Testimonials</button>
      </div>
    </div>
  );
};

export default Testimonials;
