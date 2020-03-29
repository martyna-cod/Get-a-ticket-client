import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
import { getComments } from '../../actions/comments'

 class CommentsContainer extends React.Component { 
    componentDidMount() {
        console.log(this.props.ticketId, "GET COOMENTS")
        this.props.getComments(this.props.ticketId)
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