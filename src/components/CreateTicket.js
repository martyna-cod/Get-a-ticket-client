import React from "react";

export default function CreateForm(props) {
  return (
        <form onSubmit={props.onSubmit}>
            <label>Description:</label>
              <input
                type="text"
                name="description"
                placeholder="description"
                value={props.values.description}
                onChange={props.onChange}
            ></input>
            <label>Price:</label>
            <input
                type="string"
                name="price"
                placeholder="price"
                value={props.values.price}
                onChange={props.onChange}
            ></input>
              <button type="Submit">Add ticket</button>
            </form>
         
          
          
  )}