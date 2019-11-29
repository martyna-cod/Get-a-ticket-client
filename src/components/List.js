import React from 'react';
import SignUpFormContainer from './SignUpFormContainer';
import LoginFormContainer from './LoginFormContainer';
import CreateFormContainer from './CreateFormContainer';
import { Link } from "react-router-dom";


export default function List(props) {
    return (
            <div>
              <div>
                  
                  <h1>Find your ticket!</h1>  <br/>
                   Please, sign up, if you want to add an event <br/><br/>
        <LoginFormContainer /> <br/>
        <SignUpFormContainer /> <br/>
        {props.user && <CreateFormContainer /> } 
            <h2>EVENTS</h2>
        </div>
            {props.events.map(event => (
                <div className="event">
                     <div key={event.id}>
                    <Link to={`/event/${event.id}/ticket`}>{event.name}</Link> <br/> <br/>
                    <img alt={event.name} src={event.picture} /> <br/> <br/>
                    <h5>{event.description} <br/> <br/>
                    Start date: {event.startDate} <br/> 
                    End date: {event.endDate} </h5> <br/>
                    <Link to={`/event/${event.id}/createticket`}>Create a ticket</Link> 
                   </div>
                </div>
            ))} 
        </div>
        
    );
}