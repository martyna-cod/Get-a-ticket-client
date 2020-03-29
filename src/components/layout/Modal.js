import React from 'react';
import { Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default function addedToCartModal(props) {
	return (
		<Modal {...props} size="lg">
			<Modal.Body>
				<LinkContainer className="modal-btn-a" to="/events-list">
					<Button className="modal-btn" onClick={props.onHide}>
						Go back to events
					</Button>
				</LinkContainer>
			</Modal.Body>
			<Modal.Footer />
		</Modal>
	);
}
