import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
import { getComments } from '../commentAction'

 class CommentsContainer extends React.Component { 
    componentDidMount() {
        const id = this.props.match.params.ticketId
        console.log(id, "id")
        console.log(this.props.match.params.ticketId, "ticketlistcontainer")
        this.props.getComments(this.props.match.params.ticketId)
      }

    
    render() {
        return <Comments tickets={this.props.comments} 
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