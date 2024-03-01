import React from "react";

import localisation from "../../assets/images/localisation.svg";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/mail.svg";
import map from "../../assets/images/map.svg";
import map1 from "../../assets/images/map.png";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactUs = () => {
  return (
    <div className="flex flex-col  justify-around items-center align-middle w-full mt-12 sm:mt-24   ">
      <h1 className="align-middle text-5xl font-extrabold text-dark-grey">
        ContactUs
      </h1>

      <div className="flex flex-col items-center font-extrabold mt-2 sm:mt-8">
        <div className="text-[10px] sm:text-2xl text-grey ">
          Drowning in emails and social media messages?{" "}
        </div>

        <div className="text-[10px]  sm:text-2xl text-grey">
          Respondr helps you stay afloat.
        </div>
      </div>

      <div className="mt-2 sm:mt-16 w-full flex sm:flex-row  justify-around items-center flex-col ">
        <form className="flex flex-col justify-between h-[50vh] lg:h-[60vh] sm:w-1/4  w-3/4  px-6 py-0 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transform transition-transform duration-300 hover:scale-110 hover:shadow-[0px_0px_10px_0px_#013A66]">
          <input
            type="text"
            placeholder="Enter your name"
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none mt-4 sm:mt-0 focus:border-darkBlue"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-darkBlue"
          />
          <textarea
            placeholder="Enter your message"
            rows="4"
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-darkBlue resize-none "
          ></textarea>
          <button
            type="submit"
            className="bg-darkBlue text-white font-bold mb-4 sm:mb-0 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col  justify-around items-center ">
          <div className="sm:flex flex-row justify-around w-[40vw] mb-6 hidden ">
            <div className="flex flex-col items-center justify-evenly">
              <img
                src={localisation}
                alt="Description of your image"
                height={25}
                width={25}
              />
              <div className="font-bold flex">
                <p >ESI ex INI, Oued Semar, Algiers</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <img
                src={phone}
                alt="Description of your image"
                height={20}
                width={20}
              />
              <div className="font-bold">(213) 0770707077</div>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <img
                src={mail}
                alt="Description of your image"
                height={30}
                width={30}
              />
              <div className="font-bold">respondr@ghack.com</div>
            </div>
          </div>

          {/** map */}
          <img
            src={map1}
            alt="Description of your image"
            className="h-1/2 w-fullmt-12 w-3/4 mt-7 sm:mt-0 sm:w-auto rounded-2xl border-2 shadow-[0px_0px_10px_0px_#013A66]"
            height="300"
            width="500"
          />
          {/**Rs */}
          <div className="flex flex-row justify-around mt-6  w-[100%] px-[30%]">
            <a href=""><img
            src={twitter}
            alt="Description of your image"
            height="40"
            width="40"
          /></a>
          <a href="#"><img
            src={linkedin}
            alt="Description of your image"
            height="40"
            width="40"
          /></a>
          <a href="#"> 
          <img
            src={facebook}
            alt="Description of your image"
            height="40"
            width="40"
          />
          </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
