import { NEW_COMMENT } from '../commentAction';

export default function(state = [], action = {}) {
    switch (action.type) {
        case NEW_COMMENT:
            console.log(action.payload, "payload")
            return [action.payload, ...state];
             default:
            return state;
    }
}