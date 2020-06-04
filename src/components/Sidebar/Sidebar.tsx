import React from 'react'
import PropTypes from 'prop-types'
// Models
import Contact from '../../redux/store/models/contact'
// Components
import User from '../User/User'
// Styles
import './Sidebar.scss'

const Sidebar = ({ contacts }: { contacts: Contact[] }): JSX.Element => {
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
