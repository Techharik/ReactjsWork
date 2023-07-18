import React, { useContext, useState } from 'react'
import redContext from '../redcontext';
import {TODO_ADD,REMOVE_TODO} from '../action.types';



function AddTodo() {
  const {todos, dispatch,theme} = useContext(redContext);
  const [inputVal, setInputVal]=useState('')
  const [themes,setTheme]=theme

  const handleSubmit = e =>{
     e.preventDefault()
    
    if(inputVal === ''){
        return alert('Please enter the values');
    }

    const todoString ={
        id: inputVal+123,
        todo: inputVal
    }

    dispatch({
        type: TODO_ADD,
        payload:todoString
    })

    setInputVal('')

  }


  return (
<>
<div>
    {
        todos.map((todo)=>{
         
            return(
                <div key={todo.id}>
                <h1 >{todo.todo}</h1>
                <button onClick={()=>dispatch({
                    type: REMOVE_TODO,
                    payload:todo.id
                })}>x</button>
                </div>
            )
        })
    }

</div>



<form onSubmit={handleSubmit}  className={themes === 'light'? 'dark' : 'light'}>
      <input type='text' placeholder='Enter your value' 
      onChange={ (e)=>setInputVal(e.target.value)} 
      value={inputVal}/>
      <button>Click</button>
    </form>

    <button onClick={()=>setTheme(themes ==='light'?'dark':'light')}>{ themes === 'light'? 'dark':'light'}</button>
</>

    
  )
}

export default AddTodo