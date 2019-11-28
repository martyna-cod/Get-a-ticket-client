import React from 'react'
import { connect } from 'react-redux'
import TicketsList from './TicketsList'
import { getTickets } from '../ticketActions'

 class TicketsListContainer extends React.Component { 
    componentDidMount() {
        const id = this.props.match.params.eventId
        console.log(id, "id")
        console.log(this.props.match.params.eventId, "ticketlistcontainer")
        this.props.getTickets(this.props.match.params.eventId)
      }

    
    render() {
        return <TicketsList tickets={this.props.tickets} 
        />;
    }
}
function mapStateToProps(state) {
    console.log(state, "state")
    return { tickets: state.tickets, events: state.events};
}

const mapDispatchToProps = { getTickets };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsListContainer);