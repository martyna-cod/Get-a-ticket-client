import React from 'react'

export default function Comments(props) {
    console.log(props,"Are there any props here")
    return (
        <div>
      {props.comments && props.comments.length < 1 && 
    <h3>
      There is no comments for that ticket.
    </h3>}

        {props.comments && props.comments.map(comment => (
        <div key={comment.id}>
           <p> {comment.text} </p>
        </div>
      ))} 
    </div>
   
  );
}