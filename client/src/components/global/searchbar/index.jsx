import React from 'react'
import Menu from './Menu'
import SearchField from './SearchField'
import MenuItem from './MenuItem'
import { CiMenuKebab } from "react-icons/ci";
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
const Searchbar = () => {
  return (
    <div className=' px-8 py-2 bg-darker-blue flex  items-center justify-between gap-x-3'>
      <div className=' flex flex-row gap-32'>
      <div className=' flex flex-row'>
       <Menu />
      </div>
       <div>
        <SearchField />
      </div>
       </div>
      <div className="flex flex-row items-center gap-2">
      <div className=' flex flex-row gap-1'>
      <button className='bg-transparent hover:bg-[#b4b0b036] p-3 rounded-lg'>
        <IoMdHelpCircle className='scale-[1.5] text-slate-100 opacity-75 hover:opacity-95' />
      </button>
      <div>
        <MenuItem Icon={IoSettingsSharp} link="/settings" />
      </div>
      </div>
      <button>
      <Avatar
        sx={{ bgcolor:deepOrange[500],width:"35px",height:"35px" }}
        alt="Remy Sharp"
      >
        B
      </Avatar>
      </button>
      </div>
    </div>
  )
}

export default Searchbar


