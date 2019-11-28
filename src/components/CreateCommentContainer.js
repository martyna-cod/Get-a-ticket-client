import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from '../commentAction'
import CreateComment  from '../components/CreateComment'

class CreateCommentContainer extends Component {
  state = { text: "", author: "" };


  onChange = event => {
      console.log("onchange netticket")
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(
      this.state,
      this.props.match.params.ticketId
     
    );
    this.setState({
      text: "",
      author: ""
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

export default connect(null, { createComment })(CreateCommentContainer);