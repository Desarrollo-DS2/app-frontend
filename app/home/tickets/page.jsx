'use client'

import React, { useState } from 'react'
import User from './User'
import Tickets from './Tickets'
import { Flex } from 'antd'
import { useAuthUser } from '@/app/_providers/authUser/AuthUserProvider'
import Menu from './Menu'
import BuyTicketsButton from './BuyTicketsButton'

const TicketsPage = () => {
  const { state } = useAuthUser()

  const user = {
    ...state.credentials,
    nit: '1110363276',
    code: '2182551',
    role: 'Administrador',
  }

  return (
    <Flex gap={40} vertical>
      <h1 className="tickets-title">Consultar Tickets</h1>
      <Flex gap={40} style={{ maxHeight: '100%' }}>
        <Flex gap={40} vertical>
          <User user={user} />
          <Tickets numTickets={0} />
        </Flex>
        <Flex gap={40} vertical>
          <BuyTicketsButton />
          <Menu />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TicketsPage
