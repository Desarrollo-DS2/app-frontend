import React from 'react'

import { Flex } from 'antd'

import ResetHeader from './ResetHeader'
import LoginSide from '../LoginSide'
import ResetForm from './ResetForm'

export default function LoginPage() {
  return (
    <Flex className="shadow-md m-5">
      <LoginSide />
      <Flex
        gap={10}
        className="bg-slate-100 p-5 pt-7 rounded-tr-md rounded-bt-md"
        vertical
      >
        <ResetHeader />
        <ResetForm />
      </Flex>
    </Flex>
  )
}
