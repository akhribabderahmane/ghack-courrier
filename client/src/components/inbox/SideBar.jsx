import React from 'react'
import ComposeBtn from './ComposeBtn'
import Menu from './Menu'
import DepartementMenu from './DepartementMenu'

const SideBar = () => {
  return (
    <div className=' flex flex-col gap-2  items-center min-h-screen'>
        <div>
            <ComposeBtn />
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