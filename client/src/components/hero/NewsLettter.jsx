import React from 'react'
import illustration from "../../assets/images/undraw_newsletter_vovu.png"
const NewsLettter = () => {
  return (
    <div className=' px-20 flex flex-row justify-around items-center text-darker-blue'>
       <div>
        <img src={illustration} alt="illustration" className=' scale-75' />
       </div>
       <div className=' space-y-4'>
        <div className=' space-y-1'>
          <h3 className=' text-2xl font-bold '>Respondr Newsletter</h3>
          <p className='font-medium text-sm'>Subscribe to our Newsletter to know about our latest products <br />Available exclusivery on Respondr</p>
        </div>
        <div className=' flex flex-row items-center gap-3'>
          <div>
            <input type="text" name="email" id="email" className=' bg-slate-200 outline-none py-3 px-4 rounded-full placeholder-slate-500 w-[300px]' placeholder='example@gmail.com' />
          </div>
          <button className=" px-4 py-3  text-white rounded-full bg-blue-500 font-bold hover:bg-blue-700 text-lg">
           Subscribe
          </button>
        </div>
       </div>
    </div>
  )
}

export default NewsLettter