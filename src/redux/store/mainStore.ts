import { createStore } from 'redux'
// Reducer
import rootReducer from '../reducer'

const store = createStore(rootReducer)

export default store
