import React, { Component } from 'react'
import { createStore } from 'redux'
// Redux
import rootReducer from '../../redux/reducers/rootReducer'
// Components
import HelloWorld from '../HelloWorld/HelloWorld'

const initialState = { tech: 'Reacto+' }
const store = createStore(rootReducer, initialState)

class App extends Component {
  render (): JSX.Element {
    return <HelloWorld tech={store.getState().tech} />
  }
}

export default App
