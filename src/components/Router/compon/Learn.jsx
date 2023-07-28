import React from 'react'

import { Link, Outlet } from 'react-router-dom'
function Learn() {
  return (
    <div>
        <h1>My Courses</h1>
        <h2>List my courses</h2>
        <button>
            <Link to='/learn/course'>Courses</Link>
            

        </button>
        <button>
        <Link to='/learn/buddle' >buddle</Link>
        </button>
        <Outlet />
        
    </div>
  )
}

export default Learn