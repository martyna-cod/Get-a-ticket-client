import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from '../../actions/comments'
import CreateComment  from './CreateComment'

class CreateCommentContainer extends Component {

  state = { text: "" };


  onChange = event => {
      console.log("onchange new comment")

    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const ticketId = this.props.ticket.id; //ticket is an object inside an array
    console.log(ticketId)
    this.props.createComment(
      this.state,
      ticketId);
    this.setState({
      text: "",
    })
  };

  render() {
    return (
      <div>
        <CreateComment
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { tickets: state.tickets, comments: state.comments};
}

export default connect(mapStateToProps, { createComment })(CreateCommentContainer);