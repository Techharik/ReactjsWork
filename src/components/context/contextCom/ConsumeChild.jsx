import React from 'react';
import Context from '../Context.js'

function ConsumeChild() {
  return (
    <div>
       <Context.Consumer>
             {
                (context)=>{
                    return (
                    <div>{context.data.age}</div>
                    )
                }
             }
       </Context.Consumer>
    </div>
  )
}

export default ConsumeChild