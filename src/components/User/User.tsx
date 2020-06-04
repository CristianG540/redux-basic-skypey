import React from 'react'
import PropTypes from 'prop-types'
// Models
import Contact from '../../redux/store/models/contact'
// Styles
import './User.scss'

const User = ({ user }: { user: Contact }): JSX.Element => {
  const { name, profilePic, status } = user

  return (
    <div className='User'>
      <img src={profilePic} alt={name} className='User__pic' />
      <div className='User__details'>
        <p className='User__details-name'>{name}</p>
        <p className='User__details-status'>{status}</p>
      </div>
    </div>
  )
}

const propTypes = {
  user: PropTypes.object.isRequired
}
User.propTypes = propTypes

export default User
