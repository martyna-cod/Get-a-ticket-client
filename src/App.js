import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ListContainer from './components/events/ListContainer';
import { Route } from 'react-router-dom';
import TicketsListContainer from './components/tickets/TicketsListContainer';
import CreateTicketContainer from './components/tickets/CreateTicketContainer';
import CreateCommentContainer from './components/comments/CreateCommentContainer';
import Home from './components/layout/Home';
import CommentsContainer from './components/comments/CommentsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFormContainer from './components/user/LoginFormContainer';
import SignUpFormContainer from './components/user/SignUpFormContainer';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Route exact path="/" component={Home} />
				<Route exact path="/events-list" component={ListContainer} />
				<Route path="/event/:eventId/ticket" component={TicketsListContainer} />
				<Route path="/event/:eventId/createticket" component={CreateTicketContainer} />>
				<Route path="/ticket/:ticketId/createcomment" component={CreateCommentContainer} />
				<Route path="/ticket/:ticketId/comment" component={CommentsContainer} />
				<Route path="/login" component={LoginFormContainer} />
				<Route path="/sign-up" component={SignUpFormContainer} />
			</Provider>
		);
	}
}

export default App;
