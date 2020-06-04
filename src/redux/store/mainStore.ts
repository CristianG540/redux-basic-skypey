import { createStore } from 'redux'
import rootReducer from '../reducer/rootReducer'
// Models
import MainState from './models/mainState'
// Utils
import { contacts } from '../../utils/staticData'

const initialState: MainState = { contacts }

const store = createStore(rootReducer, initialState)

export default store
