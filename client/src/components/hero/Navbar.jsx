import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" px-12 flex flex-row justify-between items-center bg-darkBlue py-6">
      <div className="logo-navLinks flex flex-row items-center gap-16">
      <div className=" text-[40px] font-bold text-white flex items-center">Respondr</div>
      <nav>
        <ul className=" flex flex-row justify-center gap-4 text-lg font-medium text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      </div>
     
      <div className="flex flex-row gap-6 text-white">
        <FaTwitter className=" scale-[1.7] " />
        <FaFacebookSquare className=" scale-[1.7]"  />
        <FaLinkedin  className=" scale-[1.7]" />
      </div>
    </div>
  );
};

export default Navbar;
