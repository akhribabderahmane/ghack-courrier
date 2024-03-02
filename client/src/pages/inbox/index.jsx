import React from 'react'
import SideBar from '../../components/inbox/SideBar'
import Inboxes from '../../components/inbox/scenes/Inboxes'
import { Outlet } from 'react-router-dom'

const Inbox = () => {
  return (
    <div className=' text-slate-800 flex flex-row min-h-screen'>
      <div className='w-[260px] bg-gradient-to-r from-red-100 to-cyan-200  flex flex-col py-2 items-center shadow-2xl shadow-slate-400'>
        <SideBar />
      </div>
      <div className=' flex-1 min-h-screen  flex flex-row'>
        <div className=' flex flex-col flex-1'>
          <Outlet />
        </div>
        <div className=' h-screen w-[50px] '>
           left
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
