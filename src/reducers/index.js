import { combineReducers } from 'redux'
import user from './user'
import events from '../reducers/events'
import tickets from '../reducers/Ticket'

export default combineReducers({
  user,
  events,
  tickets
})