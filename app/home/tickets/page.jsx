'use client'

import React from 'react'
import User from './User'
import Tickets from './Tickets'
import { Flex } from 'antd'
import { useAuthUser } from '@/app/_providers/authUser/AuthUserProvider'

const TicketsPage = () => {
  const { state } = useAuthUser()

  const user = {
    ...state.credentials,
    nit: '1110363276',
    code: '2182551',
    role: 'Estudiante Pregrado',
    num_tickets: 5,
  }

  return (
    <Flex gap={40} vertical>
      <h1 className="tickets-title">Consultar Tickets</h1>
      <Flex gap={40}>
        <Flex gap={40} vertical className=" border-black">
          <User user={user} />
          <Tickets user={user} />
        </Flex>
        <Flex gap={40} vertical className=" border-black"></Flex>
      </Flex>
    </Flex>
  )
}

export default TicketsPage
