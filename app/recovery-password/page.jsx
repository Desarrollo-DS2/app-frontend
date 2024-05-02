import React from 'react'

import { Flex } from 'antd'

import RecoveryHeader from './RecoveryHeader'
import LoginSide from '../login/LoginSide'
import RecoveryForm from './RecoveryForm'

export default function RecoveryPage() {
  return (
    <Flex className="shadow-md m-5">
      <LoginSide />
      <Flex
        gap={10}
        className="bg-slate-100 p-5 pt-7 rounded-tr-md rounded-bt-md"
        vertical
      >
        <RecoveryHeader />
        <RecoveryForm />
      </Flex>
    </Flex>
  )
}
