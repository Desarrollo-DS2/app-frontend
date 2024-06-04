'use client'

import React, { useState } from 'react'
import User from './User'
import Tickets from './Tickets'
import { Flex } from 'antd'
import { useAuthUser } from '@/app/_providers/authUser/AuthUserProvider'
import Menu from './Menu'
import BuyTicketsButton from './BuyTicketsButton'
import FormTickets from './FormTickets'
import AlertSuccess from './AlertSuccess'

const TicketsPage = () => {
  const { state } = useAuthUser()

  const user = {
    ...state.credentials,
    nit: '1110363276',
    code: '2182551',
    role: 'Administrador',
  }

  const [numTickets, setNumTickets] = useState(0)
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const onFinish = ({ tickets }) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setNumTickets((prev) => prev + tickets)
      setOpen(false)
      setOpenAlert(true)
    }, 2000)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  return (
    <Flex gap={40} vertical>
      <h1 className="tickets-title">Consultar Tickets</h1>
      <Flex gap={40} style={{ maxHeight: '100%' }}>
        <Flex gap={40} vertical>
          <User user={user} />
          <Tickets numTickets={numTickets} />
        </Flex>
        <Flex gap={40} vertical>
          <BuyTicketsButton onOpen={onOpen} />
          <Menu />
        </Flex>
      </Flex>
      <FormTickets
        open={open}
        numTickets={numTickets}
        onClose={onClose}
        onFinish={onFinish}
        isLoading={isLoading}
      />
      <AlertSuccess
        message="Tickets comprados exitosamente"
        subtitle="Numero de orden: 1234567890"
        open={openAlert}
        setOpen={setOpenAlert}
      />
    </Flex>
  )
}

export default TicketsPage
