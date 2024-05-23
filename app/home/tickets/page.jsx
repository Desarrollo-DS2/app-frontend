import React from 'react'
import User from './User'
import Tickets from './Tickets'
import { Flex } from 'antd'

const TicketsPage = () => {

  return (
    <Flex gap={40} vertical>
      <User />
      <Tickets />
    </Flex>
  )
}

export default TicketsPage
