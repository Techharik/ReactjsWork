import React,{useState} from "react";
import PackagaeContext from './Context.js'



const Provider =(props)=>{
    const [message ,setMessage] = useState({
        name:'Hari Prasath',
        age:'22',
        Provession:'SDE'
    })


    return(
        <PackagaeContext.Provider 
        value={ {data:message , Hida:()=>console.log('Hi')}}>
            {props.children}
        </PackagaeContext.Provider>
    )
}

export default Provider;
