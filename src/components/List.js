import React from 'react';
import SignUpFormContainer from './SignUpFormContainer';
import LoginFormContainer from './LoginFormContainer';
import CreateFormContainer from './CreateFormContainer';
import { Link } from "react-router-dom";


export default function List(props) {
    return (
            <div>
              <div>
        <LoginFormContainer />
        <SignUpFormContainer />
        {props.user && <CreateFormContainer /> }
        </div>
            {props.events.map(event => (
                <div key={event.id}>
                    <Link to={`/event/${event.id}`}>{event.name}</Link>
                    <img alt={event.name} src={event.picture} />
                    <h4>{event.description}; {event.date} </h4>
                </div>
            ))}
        </div>
    );
}