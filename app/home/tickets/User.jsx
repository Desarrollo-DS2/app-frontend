'use client'
import React from 'react'
import { Avatar, Flex } from 'antd'
import PropTypes from 'prop-types'

const getFullName = (user) => {
  return `${user?.first_name} ${user?.last_name}`
}

const getFirstLetter = (user) => {
  return user?.first_name?.charAt(0).toUpperCase()
}

const User = ({ user }) => {
  return (
    <Flex vertical className="user-card">
      <Flex gap={40} className="user-info">
        <Avatar
          shape="circle"
          size={128}
          style={{ fontSize: '5.25rem' }}
          data-testid="avatar"
        >
          {getFirstLetter(user)}
        </Avatar>
        <Flex vertical gap={5}>
          <Flex vertical style={{ fontWeight: 500 }}>
            <h1>{user?.email}</h1>
            <h2>{getFullName(user)}</h2>
          </Flex>
          <Flex vertical>
            <h2>{user?.nit}</h2>
            <h2>{user?.code}</h2>
            <h2>{user?.role}</h2>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    nit: PropTypes.string,
    code: PropTypes.string,
    role: PropTypes.string,
  }),
}

export default User
