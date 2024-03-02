import React from 'react'
import ComposeBtn from './ComposeBtn'
import Menu from './Menu'
import DepartementMenu from './DepartementMenu'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className=' flex flex-col gap-2  items-center min-h-screen'>
        <div>
          <Link to="chat">
            <ComposeBtn />
            </Link>
        </div>
        <div>
            <Menu />
        </div>
        <div>
          <DepartementMenu />
        </div>
    </div>
  )
}

export default SideBar