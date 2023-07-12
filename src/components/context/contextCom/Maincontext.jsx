import React from "react";
import FirstChild from './FirstChild'
import Provider from '../Provider'
import Context from '../Context.js'


const Main =()=>{
    return(
        <>
<Provider>
<h1>Hello</h1>
        <FirstChild />
</Provider>
        
        </>
    )
}

export default Main