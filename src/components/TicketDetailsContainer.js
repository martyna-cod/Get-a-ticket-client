import React from 'react'
import TicketDetails from "./TicketDetails"
import { getTicket } from '../ticketActions'
import { connect } from 'react-redux'


class TicketDetailsContainer extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params.ticketId, "TicketDetailsContainer")
        this.props.getTicket(this.props.match.params.ticketId)
    }
        render() {
            return <TicketDetails ticket={this.props.ticket} 
            />;
        }
    }
    function mapStateToProps(state) {
        console.log(state, "state TICKETDETAILESCONTAINER")
        return { ticket: state.tickets,
        event: state.events};
    }
    
    const mapDispatchToProps = { getTicket };
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(TicketDetailsContainer);