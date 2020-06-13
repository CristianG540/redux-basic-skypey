import { clone } from 'ramda'
// Models
import { User } from '../store/models'
// Utils
import { generateUser } from '../../utils/staticData'

const userReducer = (prevState: User = generateUser()): User => {
  const nextState = clone(prevState)

  return nextState
}

export default userReducer
