import React from 'react'

import { Flex } from 'antd'

import LoginForm from './LoginForm'
import LoginSide from './LoginSide'
import LoginHeader from './LoginHeader'

export default function LoginPage() {
  return (
    <Flex className="shadow-md m-5">
      <LoginSide />
      <Flex
        gap={10}
        className="bg-slate-100 p-5 pt-7 rounded-tr-md rounded-bt-md"
        vertical
      >
        <LoginHeader />
        <LoginForm />
      </Flex>
    </Flex>
  )
}
