import React from 'react'
import HomeRoute from './compon/HomeRoute'


import {BrowserRouter as Router,Routes,Route,Navigate,Outlet}from 'react-router-dom'
import Learn from './compon/Learn'
import Courses from './compon/Courses'
import Param from './compon/Param'

function RouterMain() {
  return (
    <div>
        <Router>
           <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='myapp' element={<Navigate replace to='/contact' />} />
            <Route path='/contact' element={<h1>Want to contact?</h1>} />
            <Route path='/learn' element={<Learn />} >
                <Route path='course' element={<Courses />} >
                    <Route path=':cousesid' element={<Param />}/>
                </Route>
            </Route>
           </Routes>
        </Router>
    </div>
  )
}

export default RouterMain