import React from "react";

export default function CreateForm(props) {
  return (
        <form onSubmit={props.onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={props.values.name}
                onChange={props.onChange}
            ></input>
            <input
                type="text"
                name="picture"
                placeholder="picture"
                value={props.values.picture}
                onChange={props.onChange}
            ></input>
              <input
                type="text"
                name="description"
                placeholder="description"
                value={props.values.description}
                onChange={props.onChange}
            ></input>
              <input
                type="text"
                name="date"
                placeholder="date"
                value={props.values.date}
                onChange={props.onChange}
            ></input>
            <button type="submit">Add Event</button>
        </form>
    );
}