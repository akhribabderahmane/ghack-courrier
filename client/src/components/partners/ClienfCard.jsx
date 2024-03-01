import React from "react";

const ClientCard = ({ imageSrc, clientName }) => {
  return (
    <div className="flex flex-row justify-around  sm:w-[240px] w-full">
      <div className="flex flex-col justify-around border-2 border-gray-300 items-center rounded-lg p-4 shadow-md">
        <div className="hidden sm:text-xl sm:block font-medium">{clientName}</div>
        <img src={imageSrc} alt="Description of your image" className="h-full w-full sm:h[40px] sm:w-[190px]" height="180" width="40" />
      </div>
    </div>
  );
};

export default ClientCard;
