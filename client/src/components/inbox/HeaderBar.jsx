import React from "react";
import { Link } from "react-router-dom";
const items = [
  {
    link: "",
    title: "open",
  },
  {
    link: "archived",
    title: "archived",
  },
  {
    link: "snoozed",
    title: "snoozed",
  },
  {
    link: "trash",
    title: "trash",
  },
  {
    link: "spam",
    title: "spam",
  },
];
const HeaderBar = () => {
  return (
    <div className=" shadow-xl">
      <div className="links">
        {items.map((item) => {
          return (
            <Link to={item.link} key={item.link}>
              <button className="px-2 py-2 text-darker-blue">
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderBar;
