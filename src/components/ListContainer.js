import React from 'react';
import { getEvents } from '../actions';
import { connect } from 'react-redux';
import List from './List';

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.getEvents();
        
    }
    
    render() {
        return <List events={this.props.events} 
        user={this.props.user} />;
    }
}

function mapStateToProps(state) {
    return { events: state.events, user: state.user };
}

const mapDispatchToProps = { getEvents };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);