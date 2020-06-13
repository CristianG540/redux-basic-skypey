import { clone } from 'ramda'
// Models
import { Contacts } from '../store/models'
// Utils
import { contacts } from '../../utils/staticData'

// type Action =
//   | { type: "SET_ONE"; payload: string }
//   | { type: "SET_TWO"; payload: number };

const contactsReducer = (prevState: Contacts = contacts): Contacts => {
  const nextState = clone(prevState)

  return nextState
}

export default contactsReducer
