import React from 'react'

import Learn from './Learn'
import { Link } from 'react-router-dom'

function HomeRoute() {
  return (
    <>
    <h1>Hello I am Home</h1>

    <button>
        <Link to='/learn'>Learn new Courses</Link>
    </button>
    <Learn />
    </>
    
  )
}

export default HomeRoute