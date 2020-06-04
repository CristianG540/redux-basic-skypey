import React from 'react'
import { render } from 'react-dom'
// Redux
import store from './redux/store/mainStore'
// Components
import App from './components/App/App'
// Styles
import './styles/main.scss'

function fancyLog () {
  console.log('%c Rendered with 🚩', 'background: purple; color: #FFF', store.getState())
}

const reduxRender = () => {
  fancyLog()
  render(<App />, document.getElementById('root'))
}

reduxRender()
store.subscribe(reduxRender)
