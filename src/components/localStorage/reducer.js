import { Add_TODO,READ_TODO } from "./action.types";


const Reducer = (state,action)=>{
    switch(action.type){
        case READ_TODO:
        const item =localStorage.getItem('todos')
        
        return item
    }
}

export default Reducer;