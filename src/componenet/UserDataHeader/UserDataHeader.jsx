import React from 'react';
import "../UserDataHeader/UserDataHeader.css"

const UserDataHeader = () => {
  return (
    <div className='UserDataHeader'>
          <p className='name'>Name</p>
          <p className='status'>Status</p>
          <p className='access'>Access</p>
    </div>
  )
}

export default UserDataHeader