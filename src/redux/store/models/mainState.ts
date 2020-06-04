/* eslint-disable no-undef */
import Contact from './contact'

interface MainState {
  contacts: {
    [key: string]: Contact
  }
}

export default MainState
