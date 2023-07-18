import React, { useReducer, useState } from 'react'
import Reduser from './reducer'
import redContext from './redcontext';
import AddTodo from './redComp/AddTodo';



function Mainred() {
  const [todos, dispatch]= useReducer(Reduser,[]);
  const [theme,setTheme]=useState('light')

  return (
    <redContext.Provider value={{todos,dispatch,theme:[theme,setTheme]}}>
    <div>Mainred</div>
    <AddTodo />
    </redContext.Provider>
  )
}

export default Mainred