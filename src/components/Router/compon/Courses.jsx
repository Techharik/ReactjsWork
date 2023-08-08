import React from 'react'

import { Outlet } from 'react-router-dom'
function Courses() {
  return (
    <>
     <div>Mern Courses</div>
    <Outlet />
    </>
   
  )
}

export default Courses

