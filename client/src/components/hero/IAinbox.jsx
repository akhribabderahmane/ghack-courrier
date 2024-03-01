import React from "react";
import Illustration from "../../assets/screen.png";
const IAinbox = () => {
  return (
    <div className="flex flex-row px-20 items-center h-[80vh]">
      <div className=' space-y-4 w-1/2'>
        <div className="space-y-2">
        <h3 className=" text-2xl font-bold text-darker-blue">AI-Powered Inbox Triage</h3>
        <p className="  text-darker-blue text-lg font-medium ">
          Utilize machine learning algorithms to automatically categorize and
          prioritize incoming messages, reducing manual sorting efforts.{" "}
        </p>
        </div>
        <div>
        <button className=" px-8 py-1 text-white rounded-full bg-blue-500 font-bold hover:bg-blue-700 text-lg">
            try for free
          </button>
        </div>
      </div>
      <div className="w-1/2">
          <img src={Illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default IAinbox;
