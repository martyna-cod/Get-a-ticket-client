import React from "react";

export default function TicketsList(props) {
    console.log(props.tickets, "props")
  return (
    <div>
      {props.tickets.map(ticket => (
        <div>
          <h2>{ticket.price} </h2>
         <h4>{ticket.description} </h4>
        </div>
      ))}
    </div>
  );
}
