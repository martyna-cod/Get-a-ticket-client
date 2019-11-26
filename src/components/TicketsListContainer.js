import React from 'react'
import { connect } from 'react-redux'
import TicketsList from './TicketsList'
import { getTickets } from '../actions'

 class TicketsListContainer extends React.Component {
    componentDidMount() {
        this.props.getTickets();
    }
    
    rrender() {
        return <TicketsList tickets={this.props.tickets} 
        user={this.props.user} />;
    }
}
function mapStateToProps(state) {
    return { tickets: state.tickets, user: state.user };
}

const mapDispatchToProps = { getTickets };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsListContainer);