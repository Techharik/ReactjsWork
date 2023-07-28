import React from 'react'
import { useParams } from 'react-router-dom'

function Param() {
    const{cousesid}=useParams()
  return (
    <div>My parameter is : {cousesid} </div>
  )
}

export default Param