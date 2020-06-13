/* eslint-disable no-undef */
import { Contacts, User } from './index'

// Visual representation of the state: https://cdn-media-1.freecodecamp.org/images/1*M-l-Wn_CJzQCgB7KND-1aw.png
interface MainState {
  contacts: Contacts
  user: User
}

export default MainState
