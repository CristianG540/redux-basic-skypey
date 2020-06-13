import { combineReducers } from 'redux'
// Reducers
import user from './user.reducer'
import contacts from './contacts.reducer'

const reducers = {
  user,
  contacts
}

export default combineReducers(reducers)
