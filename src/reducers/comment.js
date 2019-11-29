import { NEW_COMMENT, ALL_COMMENTS } from '../commentAction';

export default function(state = [], action = {}) {
    switch (action.type) {
        case NEW_COMMENT:
            console.log(action.payload, "payload")
            return [action.payload, ...state];
            case ALL_COMMENTS:
                return [action.payload]
             default:
            return state;
    }
}