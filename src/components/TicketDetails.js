import React from 'react'
import CreateCommentContainer from './CreateCommentContainer'


export default function (props) {
  console.log(props, "propsticketdetailes")
    return (
        <div>  
          <div>
            <CreateCommentContainer />
          </div>
            <div><h1>deetails</h1>
              <h2>{props.ticket.price} </h2>
               <p>{props.ticket.description}</p>
             
            </div>
          
        </div>
      );
    }
    
    