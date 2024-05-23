import React from 'react'
import { Avatar, Flex } from 'antd';

const User = () => {

  return (
    <Flex vertical>
      <Flex gap={40}>
        <Avatar shape="circle" size={128}>U</Avatar>
        <Flex vertical>
            <h1>User@univalle.com</h1>
            <h2>Juan</h2>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default User
