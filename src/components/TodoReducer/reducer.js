import {TODO_ADD,REMOVE_TODO} from './action.types'


const Reduser = (state , action)=>{
   switch(action.type){
    case TODO_ADD:
        const todos = state;
        console.log(state)
        todos.push(action.payload);
        return todos;
    
    case REMOVE_TODO:
       return state = state.filter((todo)=>todo.id !== action.payload)
   }
  
    
}


export default Reduser;