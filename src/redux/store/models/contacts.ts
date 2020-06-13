/* eslint-disable no-undef */
import { DeepReadonly } from 'utility-types'

import User from './user'

// more info about DeepReadonly: https://github.com/piotrwitek/utility-types#deepreadonlyt
type Contacts = DeepReadonly<{
  [key: string]: User
}>
// Visual representation of the state: https://cdn-media-1.freecodecamp.org/images/1*M-l-Wn_CJzQCgB7KND-1aw.png
export default Contacts
