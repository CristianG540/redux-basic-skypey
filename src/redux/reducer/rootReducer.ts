import { clone } from 'ramda'
// Models
import MainState from '../store/models/mainState'

// type Action =
//   | { type: "SET_ONE"; payload: string }
//   | { type: "SET_TWO"; payload: number };

const rootReducer = (prevState: MainState): MainState => {
  const nextState = clone(prevState)

  return nextState
}

export default rootReducer
