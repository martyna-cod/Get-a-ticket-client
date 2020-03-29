import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

export default function CreateForm(props) {
  return (
<Form className="create-ticket-form" onSubmit={props.onSubmit}>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" name="description" placeholder="Description" value={props.values.description} 	onChange={props.onChange}/>
    <div class="clearfix"></div>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="string" name="price" placeholder="Price"  value={props.values.price}  	onChange={props.onChange}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Add a ticket
  </Button>
</Form>
  )}



   /*  <div>
      <div>
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
            </div>
            <br/>
          <Link to="/"> GO BACK TO EVENTS </Link> <br/>


          </div>
          
          
  )} */