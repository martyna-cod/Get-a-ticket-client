import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export default function TicketsList(props) {
  
  return (
    <div>
      
         <Link to="/"> GO BACK TO EVENTS </Link>

     


          <h1>Tickets</h1>
       <div>
     {props.tickets.length === 0 && 
    <h2>
      There are no tickets for that event.
    </h2>}
    </div>   
     {props.tickets.map(ticket => (
       <div className="event"> 
          <div key={ticket.id}>
           <h2> {ticket.price}</h2> 
           <p> {ticket.description} </p>
           <Link to={`/ticket/${ticket.id}`}> See detailes </Link> <br></br>
           <Link to={`/ticket/${ticket.id}/createcomment`}> Add a comment </Link>  
         
           </div>
    </div>
      ))}
    </div>
   
  );
}