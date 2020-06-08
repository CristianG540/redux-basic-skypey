import React from 'react'
import { render } from 'react-dom'
// Redux
import store from './redux/store/mainStore'
// Components
import App from './containers/App/App'
// Styles
import './styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  console.log(
    'Looks like we are in development mode! 🐝🐝🐝:',
    process.env.NODE_ENV
  )
}

function fancyLog () {
  console.log('%c Rendered with 🚩', 'background: purple; color: #FFF', store.getState())
}

const reduxRender = () => {
  fancyLog()
  render(<App />, document.getElementById('root'))
}

reduxRender()
store.subscribe(reduxRender)
