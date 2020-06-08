import shortid from 'shortid' // shortid.generate() returns a unique "short" id
import * as txtgen from 'txtgen' // txtgen.sentence() returns random "readable" sentences
import faker from 'faker' // faker is used for generating random fake data.
import { mapKeys, forEach } from 'lodash'
// Interfaces
import Contact from '../redux/store/models/contact'

const users = generateUsers(10)
export const contacts = mapKeys(users, 'userId')

export const getMessages = (messagesPerUser:number) => {
  const messages: { [key: string]: unknown } = {}
  forEach(users, user => {
    messages[user.userId] = {
      ...mapKeys(generateMsgs(messagesPerUser), 'number')
    }
  })
  return messages
}

/**
 * @returns {Object} - a new user object
 */
export function generateUser (): Contact {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profilePic: faker.internet.avatar(),
    status: txtgen.sentence(),
    userId: shortid.generate()
  }
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg (number: number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean()
  }
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers (numberOfUsers: number) {
  return Array.from({ length: numberOfUsers }, () => generateUser())
}

function generateMsgs (numberOfMsgs: number) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i))
}
