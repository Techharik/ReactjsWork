import React, { useEffect, useReducer } from 'react'

import Reducer from './reducer'

import { Add_TODO,READ_TODO } from './action.types'
function Todomain() {
   const [todos,dispatch]=useReducer(Reducer,[])

   useEffect(()=>{
   
  dispatch({
    type:READ_TODO,
   
  })
   },[])
   
  return (
    <div>
        TodoMain
        {
         todos
        }
    </div>
  )
}

export default Todomain