import React from "react";
//import { Link } from 'react'

export default function CreateForm(props) {
  return (
        <form onSubmit={props.onSubmit}>
              <input
                type="text"
                name="text"
                placeholder="text"
                value={props.values.text}
                onChange={props.onChange}
            ></input>
            <input
                type="string"
                name="author"
                placeholder="author"
                value={props.values.author}
                onChange={props.onChange}
            ></input>
         <button type="submit">Add Comment</button>
        
        </form>
    );
}