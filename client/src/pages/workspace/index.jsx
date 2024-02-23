import React from 'react'
import Searchbar from '../../components/global/searchbar'
import Sidebar from '../../components/global/sidebar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Workspace = () => {
  return (
    <main>
        <Searchbar/>
        <div>
            <Sidebar />
             <Router>
                <Router>
                    
                </Router>
             </Router>
        </div>
    </main>
  )
}

export default Workspace