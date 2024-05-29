import React from 'react'
import { Button } from 'antd'
import { FaShoppingCart } from 'react-icons/fa'

const BuyTicketsButton = () => {
  return (
    <Button
      icon={<FaShoppingCart style={{ marginRight: 8 }} />}
      size="large"
      style={{
        fontSize: '18px',
        padding: '10px 20px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Comprar Tickets
    </Button>
  )
}

export default BuyTicketsButton
