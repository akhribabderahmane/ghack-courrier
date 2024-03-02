import React from "react";
import HeaderBar from '../HeaderBar'
import { Outlet } from "react-router-dom";

const Inboxes = () => {
  return (
    <>
      <div className="">
        <HeaderBar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </>
  );
};

export default Inboxes;
