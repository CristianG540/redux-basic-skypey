import { clone } from 'ramda'

interface AppState {
  tech: string
}
// type Action =
//   | { type: "SET_ONE"; payload: string }
//   | { type: "SET_TWO"; payload: number };

const rootReducer = (prevState: AppState): AppState => {
  const nextState = clone(prevState)

  return nextState
}

export default rootReducer
