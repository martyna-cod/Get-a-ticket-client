import { combineReducers } from 'redux'
import user from './user'
import events from '../reducers/events'
import tickets from '../reducers/Ticket'
import comments from '../reducers/comment'

export default combineReducers({
  user,
  events,
  tickets,
  comments
})