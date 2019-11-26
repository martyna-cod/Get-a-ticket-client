import React , { Component } from 'react';
import store from "./store"
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer'
import { Route } from "react-router-dom";
import TicketsListContainer from './components/TicketsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       < Route exact path="/" component={ListContainer}/>
        <Route path="/event/:eventId/ticket" exact component={TicketsListContainer} />
      </Provider>
    );
  }
}


export default App;
