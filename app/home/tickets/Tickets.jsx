import React from 'react'
import { Flex } from 'antd'
import { IoTicket } from 'react-icons/io5'
import { FaDollarSign } from 'react-icons/fa'

import PropTypes from 'prop-types'

const Tickets = ({ numTickets }) => {
  return (
    <Flex vertical gap={20}>
      <Flex gap={20}>
        <IoTicket size={100} color="#db463c" />
        <Flex vertical className="tickets-info">
          <h1 className="font-medium">Tickets Acumulados:</h1>
          <h2>{numTickets}</h2>
          <h1 className="font-medium">Tickets Maximos</h1>
          <h2>30</h2>
        </Flex>
      </Flex>
      <Flex gap={20}>
        <FaDollarSign size={100} color="#db463c" />
        <Flex vertical className="tarifa-info">
          <h1 className="font-medium">Tarifa:</h1>
          <h2>2500 COP</h2>
        </Flex>
      </Flex>
    </Flex>
  )
}

Tickets.propTypes = {
  numTickets: PropTypes.number,
}

export default Tickets
