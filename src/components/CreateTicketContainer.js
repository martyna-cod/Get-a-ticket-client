import React, { Component } from "react";
import CreateTicket from "./CreateTicket";
import { connect } from "react-redux";
import { newTicket } from '../ticketActions'

class CreateTicketContainer extends Component {
  state = { description: "", price: "" };

  onChange = event => {
      console.log("onchange netticket")
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log("onSubmit newticket")
    event.preventDefault();
    this.props.newTicket({
      description: this.state.description,
      price: this.state.price
    });
  };

  render() {
    return (
      <div>
        <CreateTicket
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { newTicket })(CreateTicketContainer);