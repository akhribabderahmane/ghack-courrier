import React from 'react'
import { IoCalendarNumber } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";

const RightBar = () => {
  return (
    <div className='rightbar w-60 h-screen bg-slate-400'> 
     {items.map((item)=>{
            return(
                <button className=''>
                    <item.icon className={`${item.color}`} />
                </button>
            )
        })}
    </div>
  )
}

export default RightBar


const items=[
    {
      title:"calender",
      icon:IoCalendarNumber,
      color:"bg-orange-600"
    },
    {
        title:"calender",
        icon:BsPersonSquare,
        color:"bg-teal-700"
      },
]