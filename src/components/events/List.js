import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'react-bootstrap';

export default function List(props) {
	return (
		<div className="list-container">
			<div className="sign-in-icon">
				<Button className="btn btn--white">
					<Link to="/login">Sign in</Link>
				</Button>
			</div>
			{props.events.map((event) => (
				<div className="event-jumbotron">
					<Jumbotron>
						<div key={event.id}>
							<div className="header-jumbotron">
								<Link to={`/event/${event.id}/ticket`}>{event.name}</Link>
							</div>
							<img className="img-jumbotron" alt="" src={event.picture} />
							<p className="jumbotron-description">
								{event.description} <br /> <br />
							</p>{' '}
							<p className="jumbotron-dates">
								Start date: {event.startDate} <br />
								End date: {event.endDate} {' '}
							</p>
							<Link to={`/event/${event.id}/ticket`}>See tickets</Link>
						
					
						</div>
					</Jumbotron>
				</div>
			))}
		</div>
	);
}
