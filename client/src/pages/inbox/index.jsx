import React from 'react'
import SideBar from '../../components/inbox/SideBar'
import Inboxes from '../../components/inbox/scenes/Inboxes'
import { Outlet } from 'react-router-dom'
import clandar from"../../assets/images/calendar.svg"
import contact from"../../assets/images/contact.svg"
import manage from"../../assets/images/manage.svg"


const Inbox = () => {
  return (
    <div className=' text-slate-800 flex flex-row min-h-screen'>
      <div className='w-[260px] bg-white  flex flex-col py-2 items-center shadow-2xl shadow-slate-400'>
        <SideBar />
      </div>
      <div className=' flex-1 min-h-screen  flex flex-row'>
        <div className=' flex flex-col flex-1'>
          <Outlet />
        </div>
        <div className=' h-screen w-[40px] flex flex-col '>
           <button><img src={clandar} alt="" className="w-[100%] h-full mt-2  " /></button>
           <button><img src={contact} alt="" className="w-[100%] h-full mt-2"  /></button>
           <button className='rounded-md'><img src={manage} alt="" className="w-[100%] h-full mt-2 rounded-md" /></button>


        </div>
      </div>
    </div>
  )
}

export default Inbox




const MainContent = () => {
  return (
    <div>MainContent</div>
  )
}
