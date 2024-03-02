import React from 'react'
import { FaInbox } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import MenuItem from './MenuItem';

const items=[
  {
    link:"/inbox",
    icon:FaInbox
  },
  {
    link:"/calender",
    icon:IoCalendarNumber
  },
  {
    link:"/contact",
    icon:BsPersonSquare
  },
  {
    link:"/stats",
    icon:IoStatsChart
  },
  // {
  //   link:"/knowledg",
  //   icon:FaBookOpen
  // },
]
const Menu = () => {
  return (
    <div className=' flex flex-row space-x-2'>
        { items.map((item)=> <MenuItem Icon={item.icon} link={item.link} key={item.link} /> )}
    </div>
  )
}

export default Menu

  