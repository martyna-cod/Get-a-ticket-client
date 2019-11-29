import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
import { getComments } from '../commentAction'

 class CommentsContainer extends React.Component { 
    componentDidMount() {
        const id = this.props.match.params.ticketId
        console.log(id, "ticketId, comments")
        console.log(this.props.match.params.ticketId, "commentscontainer")
        this.props.getComments(this.props.match.params.ticketId)
      }

    
    render() {
        return <Comments comments={this.props.comments} 
        />;
    }
}
function mapStateToProps(state) {
    console.log(state, "state")
    return { tickets: state.tickets, events: state.events, comments: state.comments};
}

const mapDispatchToProps = { getComments };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsContainer);