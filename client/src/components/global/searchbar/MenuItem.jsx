import React from "react";
import { Link } from "react-router-dom";
const MenuItem = ({ link, Icon }) => {
  console.log(Icon, link);
  return (
    <div className="">
      <Link to={link}>
        <button className=" bg-transparent hover:bg-[#b4b0b036] p-3 rounded-lg">
          <Icon className="scale-[1.5] text-slate-100 opacity-75 hover:opacity-95" />
        </button>
      </Link>
    </div>
  );
};

export default MenuItem;
