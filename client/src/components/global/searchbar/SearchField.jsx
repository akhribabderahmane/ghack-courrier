import React from "react";
import { IoFilter } from "react-icons/io5";
import Menu from "./Menu";
import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
    <div className=" flex flex-row items-center border-2 rounded-md px-2 w-[400px] bg-slate-700 bg-opacity-50">
      <CiSearch className=" text-gray-300 scale-150" />
      <input
        type="text"
        className=" px-2 py-1 flex-1 outline-none bg-transparent  text-white"
        placeholder="Search"
      />
      <button>
      <IoFilter className=" text-slate-50"/>
      </button>
      
    </div>
  );
};

export default SearchField;
