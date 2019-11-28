import { ALL_TICKETS, NEW_TICKET, TICKET } from '../ticketActions';

export default function(state = [], action = {}) {
    switch (action.type) {
        case ALL_TICKETS:
            console.log(action.payload, "payload")
            return action.payload;
        case NEW_TICKET:
            console.log(action.payload, "NEW TICKET ACTION PAYLOAD")
            return [action.payload, ...state]
            case TICKET:
                return action.payload
        default:
            return state;
    }
}