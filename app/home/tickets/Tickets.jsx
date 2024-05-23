import React from 'react'
import { Flex } from 'antd';
import { IoTicket } from 'react-icons/io5'
import { FaDollarSign } from "react-icons/fa";

const Tickets = () => {

  return (
    <Flex vertical>
      <Flex gap={20}>
        <IoTicket size={128}/>
        <Flex vertical>
            <h1>Tickets Actuales</h1>
            <h2>5</h2>
        </Flex>
      </Flex>
      <Flex gap={20}>
        <FaDollarSign size={128}/>
        <Flex vertical>
            <h1>Tickets Precio</h1>
            <h2>2000</h2>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Tickets
