import React from "react";
import { Link } from "react-dom";
//import CreateTicketContainer from "./CreateTicketContainer";

export default function TicketsList(props) {
  return (
    <div>
    
      {props.tickets.map(ticket => (
        <div key={ticket.id}>
           <h2> {ticket.price}</h2> 
           <p> {ticket.description} </p>
           <h4>see detailes</h4>
     {/*  <Link to={`ticket/${ticket.id}`}> See detailes</Link>   */}
     
       
        </div>
      ))}
    </div>
   
  );
}