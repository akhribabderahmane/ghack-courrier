import React from 'react'
import Searchbar from '../../components/global/searchbar'
import { Routes, Route } from "react-router-dom";
import Inbox from '../inbox';
import Calender from '../calender';
import Contact from '../contacts';
import Analytics from '../analytics';
import Knowledg from '../knowledg';
const Workspace = () => {
  return (
    <div>
        <Searchbar/>  
         <div>
          <Routes>
            <Route path='inbox' element={<Inbox />}/>
            <Route path='calender' element={<Calender />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='stats' element={<Analytics />}/>
            <Route path='knowledg' element={<Knowledg />}/>
          </Routes>
         </div>
    </div>
  )
}

export default Workspace