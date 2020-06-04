import shortid from 'shortid' // shortid.generate() returns a unique "short" id
import { sentence } from 'txtgen' // txtgen.sentence() returns random "readable" sentences
import faker from 'faker' // faker is used for generating random fake data.
import { mapKeys, forEach } from 'lodash'

const users = generateUsers(10)
export const contacts = mapKeys(users, 'userId')

export const getMessages = messagesPerUser => {
  const messages = {}
  forEach(users, user => {
    messages[user.userId] = {
      ...mapKeys(generateMsgs(messagesPerUser), 'number')
    }
  })
  return messages
}

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: '',
  contacts,
  activeUserId: null
}

/**
 * @returns {Object} - a new user object
 */
export function generateUser () {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profilePic: faker.internet.avatar(),
    status: sentence(),
    userId: shortid.generate()
  }
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg (number) {
  return {
    number,
    text: sentence(),
    is_user_msg: faker.random.boolean()
  }
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers (numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser())
}

function generateMsgs (numberOfMsgs: number) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i))
}
