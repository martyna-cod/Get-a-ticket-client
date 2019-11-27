import { ALL_TICKETS, NEW_TICKET } from '../ticketActions';

export default function(state = [], action = {}) {
    switch (action.type) {
        case ALL_TICKETS:
            console.log(action.payload, "payload")
            return action.payload;
        case NEW_TICKET:
            return [action.payload, ...state];
        default:
            return state;
    }
}