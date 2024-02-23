import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row justify-between py-4 px-10'>
        <div>
            Logo
        </div>
        <div>
            <ol className=' flex flex-row gap-6 items-center'>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=""> More</a></li>
            </ol>
        </div>
        <div>
            <button className='px-3 py-2 border-2 border-gray-950 bg-gray-950 text-slate-200'>
                Sign up
            </button>
        </div>
    </div>
  )
}

export default Navbar