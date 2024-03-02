import React from 'react'
import { IoSend } from "react-icons/io5";
const ComposeBtn = () => {
  return (
    <button className=' bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-2 rounded-full flex flex-row items-center gap-2'>
         <div>
            <IoSend className=' text-white'/>
        </div>
        <p>Compose</p>
    </button>
  )
}

export default ComposeBtn