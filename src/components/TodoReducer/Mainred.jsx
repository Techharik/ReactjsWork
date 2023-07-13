import React, { useReducer } from 'react'
import Reduser from './reducer'
import redContext from './redcontext';
import AddTodo from './redComp/AddTodo';



function Mainred() {
  const [todos, dispatch]= useReducer(Reduser,[]);


  return (
    <redContext.Provider value={{todos,dispatch}}>
    <div>Mainred</div>
    <AddTodo />
    </redContext.Provider>
  )
}

export default Mainred