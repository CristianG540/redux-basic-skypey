import React from 'react'
import PropTypes from 'prop-types'
// Models
import UserModel from '../../redux/store/models/user'
// Components
import User from '../../containers/User/User'
// Styles
import './Sidebar.scss'

const Sidebar = ({ contacts }: { contacts: UserModel[] }): JSX.Element => {
  return (
    <aside className='Sidebar'>
      {contacts.map(contact => (
        <User user={contact} key={contact.userId} />
      ))}
    </aside>
  )
}

const propTypes = {
  contacts: PropTypes.array.isRequired
}
Sidebar.propTypes = propTypes

export default Sidebar
