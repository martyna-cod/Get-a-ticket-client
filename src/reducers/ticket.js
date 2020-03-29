import { ALL_TICKETS, NEW_TICKET, TICKET, EDITED_TICKET } from '../actions/tickets';

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
            case EDITED_TICKET:
                    return action.payload
        default:
            return state;
    }
}