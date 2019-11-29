import React , { Component } from 'react';
import store from "./store"
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer'
import { Route } from "react-router-dom";
import TicketsListContainer from './components/TicketsListContainer';
import CreateTicketContainer from './components/CreateTicketContainer';
import TicketDetailsContainer from './components/TicketDetailsContainer'
import CreateCommentContainer from './components/CreateCommentContainer';
import CommentsContainer from './components/CommentsContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
       < Route exact path="/" component={ListContainer}/>

     <Route path="/event/:eventId/ticket" component={TicketsListContainer} />  
     {/*find all tickets for exact event*/}

      <Route path="/event/:eventId/createticket" component={CreateTicketContainer} />  
     {/* create ticket for specified event  */}
    

      <Route path="/ticket/:ticketId" component={TicketDetailsContainer}  /> 

     <Route path="/ticket/:ticketId/createcomment" component={CreateCommentContainer} /> 
     <Route path="/ticket/:ticketId/comment" component={CommentsContainer} />
  
    
    
      </Provider>
    );
  }
}


export default App;
