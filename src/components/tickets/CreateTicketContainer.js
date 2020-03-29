import React, { Component } from "react";
import CreateTicket from "./CreateTicket";
import { connect } from "react-redux";
import { createTicket } from '../../actions/tickets'

class CreateTicketContainer extends Component {
  state = { description: "", price: "" };


  onChange = event => {
      console.log("onchange newticket")
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log(this.props.match.params.eventId, "CREATTICKETOCNTAINER")
    console.log("onSubmit CREATETICKET")
    console.log(this.state, "STATE CREATECOINTAER")
    event.preventDefault();
    this.props.createTicket(
      this.state,
      this.props.match.params.eventId
     
    );
    this.setState({
      description: "",
      price: ""
    })
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
const mapStateToProps = state => ({
  ticket: state.tickets,
});



export default connect(mapStateToProps, { createTicket })(CreateTicketContainer);