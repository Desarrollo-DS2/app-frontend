import React from 'react'

import { Flex } from 'antd'
import Image from 'next/image'

function ForgotHeader() {
  return (
    <Flex className="items-start justify-between" data-testid="header">
      <h1 className="text-2xl font-bold text-black">Recupera tu cuenta</h1>
      <Image src="/logoUnivalle.png" alt="logo" width={50} height={50} />
    </Flex>
  )
}

export default ForgotHeader
