import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export default function Home() {
	return (
		<div className="header">
			<div className="text-box">
			<div className="heading-primary-main">Find your obstacle race!
			<Button className="btn btn--white">
            <Link to="/events-list">See all obstacle races</Link>
			</Button>
            </div>
		</div></div>
	);
}
