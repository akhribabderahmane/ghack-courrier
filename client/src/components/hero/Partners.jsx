import React from "react";
import google from "../../assets/images/google_logo.svg";
import uber from "../../assets/images/uber_logo.svg";
import amazon from "../../assets/images/amazon logo.svg";
import dropbox from "../../assets/images/dropbox_logo.svg";
import ClientCard from "../partners/ClienfCard";

const Partners = () => {
  return (
    <div className="flex flex-col  justify-around items-center align-middle w-full    ">
      <h1 className="align-middle text-5xl font-extrabold text-dark-grey">Partners</h1>

      <div className="flex flex-col items-center font-extrabold mt-2 sm:mt-8">
        <div className="text-[10px] sm:text-2xl text-grey ">
          Drowning in emails and social media messages?{" "}
        </div>

        <div className="text-[10px]  sm:text-2xl text-grey">
          Respondr helps you stay afloat.
        </div>
      </div>

      <div className="flex flex-row justify-around w-full mt-12 sm:mt-24  ">
        <ClientCard  imageSrc={google} clientName="Client name" />

        <ClientCard  imageSrc={uber} clientName="Client name" />

        <ClientCard  imageSrc={dropbox} clientName="Client name" />

        <ClientCard  imageSrc={amazon} clientName="Client name" />

      </div>

      <div className="flex flex-row justify-around  w-full mt-4 sm:mt-8   ">
      <ClientCard  imageSrc={dropbox} clientName="Client name" />

      <ClientCard  imageSrc={amazon} clientName="Client name" />

      <ClientCard  imageSrc={uber} clientName="Client name" />

      <ClientCard  imageSrc={google} clientName="Client name" />

      </div>
      <div className="bg-primary rounded-3xl mt-4 sm:mt-8 ">
        <button className=" text-white font-extrabold sm:text-lg p-2 pl-12 pr-12">Try For Free</button>
      </div>
    </div>
  );
};

export default Partners;
