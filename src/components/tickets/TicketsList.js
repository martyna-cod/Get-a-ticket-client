import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button  } from "react-bootstrap"

export default function TicketsList(props) {
  return (
    <div>
      <Link to="/"> GO BACK TO EVENTS </Link>

      <h1 className="add-event">Tickets for event: </h1>
      
        {!props.tickets && <h2>There are no tickets for that event.</h2>}
        {props.tickets.length > 0 &&
          props.tickets.map(ticket => {
            let riskClass = "";

            if (ticket.risk <= 30) {
              riskClass = "risk-green";
            }
            if (ticket.risk > 30 && ticket.risk <= 60) {
              riskClass = "risk-yellow";
            }
            if (ticket.risk > 60) {
              riskClass = "risk-red";
            }
          
          
            return (
              <div>
          
    
         {props.tickets.map(ticket => (

<div className="event"> 

<Card  className="text-center" bg="light" width="50%!important">
<div key={ticket.id}>
  <Card.Header>Price: {ticket.price}€</Card.Header>
  <Card.Body>
    <Card.Text>
    {ticket.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </div>
</Card>
  </div>  ))} </div>  )}) } </div> )}
          
         
        