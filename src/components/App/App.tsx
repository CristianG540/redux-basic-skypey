import React, { Component } from 'react'
import { values } from 'ramda'
// Components
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
// Redux
import store from '../../redux/store/mainStore'

class App extends Component {
  render (): JSX.Element {
    const { contacts } = store.getState()
    return (
      <div className='App'>
        <Sidebar contacts={values(contacts)} />
        <Main />
      </div>
    )
  }
}

export default App
