import React from "react";
//import { Link } from "react-dom";

export default function TicketsList(props) {
  console.log(props.tickets, "TICKETLISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSssstprops");
  return (
    
    <div>
      {props.tickets.map(ticket => (
        <div key={ticket.id}>
           <h2> {ticket.price} </h2> 
           <p> {ticket.description} </p>
           <h2>see detailes</h2>
        {/*  <Link to={`/event/ticket/${ticket.id}`}> See datiles</Link>  */}
       
        </div>
      ))}
    </div>
  );
}
